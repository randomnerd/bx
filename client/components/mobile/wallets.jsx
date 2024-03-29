import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Balances, Currencies, Wallets} from '../../../both/collections';
import UserOnly from '../user/user_only';
import { createContainer } from 'meteor/react-meteor-data';

const WalletsView = connect({
  layout: ['layout']
}, class WalletsView extends React.Component {
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

  getAddress(currId) {
    if (!this.props.wallets) return;
    let wallet = _.findWhere(this.props.wallets, {currId: currId});
    return wallet && wallet.address;
  }

  getBalance(currId) {
    if (!this.props.balances) return;
    let balance = _.findWhere(this.props.balances, {currId: currId});
    return balance ? balance.displayAmount() : (0).toFixed(8);
  }

  showWithdraw(item, event) {
    this.props.signals.tools.withdraw({action: 'open'});
    this.props.signals.u.walletSet({id: item._id});
  }

  showAddr(item, addr, event){
    $(event.target).popup({
      variation: 'tiny',
      content  : addr,
      on: 'focus'
    }).popup('toggle');
  }


  renderWalletItems() {
    return this.props.currencies.map((item) => {
      let address = this.getAddress(item._id);
      let balance = this.getBalance(item._id);
      let allowWithdraw = parseFloat(balance) > 0;
      let generateBtn = <button className='ui normal tiny button' onClick={this.newWallet.bind(this, item)}>Generate</button>;
      let showBtn = <button className='ui normal tiny button' onClick={this.showAddr.bind(this, item, address)}>Show</button>;

      return  (
        <div key={item._id} className="ui container">
          <div className="ui padded grid">
            <div className="four wide column">
              <h2 className="ui header">{item.shortName}</h2>
            </div>
            <div className='twelve wide right aligned column'>
              <h3 className="ui header">{balance}</h3>
            </div>
          </div>
          <div className="ui hidden fitted divider"></div>
          <div className="ui padded grid">
            <div className="eight wide column">
              {address ? showBtn : generateBtn}
            </div>
            <div className='eight wide column'>
              <div className='ui fluid mini buttons'>
                <a className={'ui blue normal button' + (allowWithdraw ? '' : ' disabled')} onClick={this.showWithdraw.bind(this, item)}>
                  Withdraw
                </a>
                <a className='ui normal button' href={'/u/wallet/' + item._id}>
                  Details
                </a>
              </div>
            </div>
          </div>

          <div className="ui clearing divider"></div>
        </div>
      );
    });
  }

  render() {
    return (
      <UserOnly redirect='/'>
        <div className="ui main container">
          <div className='ui segments fullheight'>
            <div className='ui secondary segment'>
              <h3 className='ui header'>Wallets</h3>
            </div>
            <div className='ui small blue segment'>
              <div className='scrollable100 '>
                <br />
                    { this.renderWalletItems() }

              </div>
            </div>
          </div>
        </div>
      </UserOnly>
    );
  }
});
export default WalletsViewContainer = createContainer((props) => {
  return {
    balances: Balances.find({}).fetch(),
    currencies: Currencies.find({}, {sort: {name: 1}}).fetch(),
    wallets: Wallets.find({}, {sort: {createdAt: -1}}).fetch()
  };
}, WalletsView);
