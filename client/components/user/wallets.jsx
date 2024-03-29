import React from 'react';
import {Balances, Currencies, Wallets} from '../../../both/collections';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import UserOnly from '../user/user_only';
import { createContainer } from 'meteor/react-meteor-data';
import Clipboard from 'clipboard';

const WalletsPage = connect({
  layout: ['layout']
}, class WalletsPage extends React.Component {
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
    //console.log('here');
    this.props.signals.tools.withdraw({action: 'open'});
    this.props.signals.u.walletSet({id: item._id});
  }
  componentDidMount(){
    var clipboard = new Clipboard('.copy_address');
    clipboard.on('success', function(e) {
      $(e.trigger).addClass('positive');
    });
  }
  renderWalletItems() {
    let i = 1;
    return this.props.currencies.map((item) => {
      let address = this.getAddress(item._id);
      let balance = this.getBalance(item._id);
      let allowWithdraw = parseFloat(balance) > 0;
      let generateBtn = <button className='ui normal tiny button' onClick={this.newWallet.bind(this, item)}>Generate</button>;

      return  (
        <tr key={item._id} className="ui white text opacity">
          <td className='two wide'>{balance}</td>
          <td className='two wide'>{item.shortName}</td>
          <td className='nine wide'>{
            address ?
            <div className="ui fluid inverted dark action input">
              <input type="text" className={"disabled adress_container_" + i} value={address} />
              <button className ='ui mini button copy_address' data-clipboard-target={".adress_container_" + i}>Copy</button>
            </div>

             :
             generateBtn}</td>
          <td className='three wide right aligned'>
            <div className='ui tiny buttons'>
              <a className={'ui blue normal button' + (allowWithdraw ? '' : ' disabled')} onClick={this.showWithdraw.bind(this, item)}>
                Withdraw
              </a>
              <a className='ui normal button' href={'/u/wallet/' + item._id}>
                Details
              </a>
            </div>
          </td>
        </tr>
      );
      i++;
    });
  }

  render() {
    return (
      <UserOnly redirect='/'>
        <div className="ui main container">
          <div className='ui segments'>
            <div className='ui secondary segment'>
              <h3 className='ui header'>Wallets</h3>
            </div>
            <div className='ui small blue segment'>
              <table className='ui selectable very basic striped large unstackable table nomargin'>
                <thead>
                  <tr className='lesspadding'>
                    <th className='two wide' >Amount</th>
                    <th className='two wide' >Coin</th>
                    <th className='nine wide'>Deposit address</th>
                    <th className='three wide center aligned'>Actions</th>
                  </tr>
                </thead>
              </table>
              <div className='scrollable10rows'>
                <table className='ui selectable very compact very basic unstackable sortable table'>
                  <tbody>
                    { this.renderWalletItems() }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </UserOnly>
    );
  }
});
export default WalletsPageContainer = createContainer((props) => {
  return {
    balances: Balances.find({}).fetch(),
    currencies: Currencies.find({}, {sort: {name: 1}}).fetch(),
    wallets: Wallets.find({}, {sort: {createdAt: -1}}).fetch()
  };
}, WalletsPage);
