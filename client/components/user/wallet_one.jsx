import React from 'react';
import {Balances, Currencies, Wallets} from '../../../both/collections';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';
import { createContainer } from 'meteor/react-meteor-data';


const WalletPage = connect({
  layout: ['layout']
}, class WalletPage extends React.Component {
  newWallet(item, event) {
    if (!Meteor.user()) { return; }
    let el = $(event.currentTarget);
    el.addClass('loading');
    el.attr('disabled', true);
    Meteor.call('jobs/wallet/newWallet', item._id, () => {
      el.removeClass('loading');
      el.attr('disabled', false);
    });
  }

  getAddress() {
    return this.props.wallet && this.props.wallet.address;
  }

  getBalance() {
    let amount = this.props.balance ? this.props.balance.amount / Math.pow(10, 8) : 0;
    return amount.toFixed(8);
  }

  showWithdraw(item, event) {
    this.props.signals.tools.withdraw({action: 'open'});
    //Dispatcher.dispatch({actionType: 'SET_WITHDRAWAL_CURRENCY', payload: this.props.current});
    //Dispatcher.dispatch({actionType: 'SHOW_WITHDRAW_MODAL'});
  }

  renderWalletItems() {
    return this.props.currencies.map((item) => {
      let address = this.getAddress(item._id);
      let balance = this.getBalance(item._id);
      return  (

        <tr key={item._id}>
          <td className='two wide'>{balance}</td>
          <td className='two wide'>{item.shortName}</td>
          <td className='nine wide'>
            { address ?
              address :
              <button className='ui mini button' onClick={this.newWallet.bind(this, item)}>Generate</button> }
          </td>
          <td className='three wide right aligned'>
            <div className='ui mini buttons'>
              <a className={'ui blue button' + (balance>0?'':' disabled')} onClick={this.showWithdraw.bind(this, item)} >
                Withdraw
              </a>
              <a className='ui button' href={'/u/wallet/' + item._id}>
                Details
              </a>
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <tr key={this.props.item._id}>
        <td className='two wide'>{balance}</td>
        <td className='two wide'>{this.props.item.shortName}</td>
        <td className='nine wide'>
          { address ?
            <div>
              <span className="adress_container">{address}</span>
              <button className ='ui mini button' data-clipboard-target="adress_container">Copy</button>
            </div>
            :
            <button className='ui mini button' onClick={this.newWallet.bind(this, item)}>Generate</button> }
        </td>
        <td className='three wide right aligned'>
          <div className='ui mini buttons'>
            <a className={'ui blue button' + (balance>0?'':' disabled')} onClick={this.showWithdraw.bind(this)} >
              Withdraw
            </a>
            <a className='ui button' href={'/u/wallet/' + item._id}>
              Details
            </a>
          </div>
        </td>
      </tr>
    );
  }
});

export default WalletPageContainer = createContainer((props) => {
  return {
    balance: Balances.findOne({currId: this.props.current}),
    currency: Currencies.findOne({_id: this.props.current}),
    wallet: Wallets.findOne({_id: this.props.current})
  };
}, WalletPage);
