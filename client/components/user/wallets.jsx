import React from 'react';
import {Balances, Currencies, Wallets} from '../../../both/collections';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import UserOnly from '../user/user_only';

const WalletsPage = Component({
  layout: ['layout']
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      balances: Balances.find({}).fetch(),
      currencies: Currencies.find({}, {sort: {name: 1}}).fetch(),
      wallets: Wallets.find({}, {sort: {createdAt: -1}}).fetch()
    };
  },

  newWallet(item, event) {
    if (!Meteor.user()) { return; }
    let el = $(event.currentTarget);
    el.addClass('loading');
    el.attr('disabled', true);
    Meteor.call('jobs/wallet/newWallet', item._id, () => {
      el.removeClass('loading');
      el.attr('disabled', false);
    });
  },

  getAddress(currId) {
    if (!this.data.wallets) return;
    let wallet = _.findWhere(this.data.wallets, {currId: currId});
    return wallet && wallet.address;
  },

  getBalance(currId) {
    if (!this.data.balances) return;
    let balance = _.findWhere(this.data.balances, {currId: currId});
    return balance ? balance.displayAmount() : (0).toFixed(8);
  },

  showWithdraw(item, event) {
    this.props.signals.tools.withdraw({action: 'open'});
    // Dispatcher.dispatch({actionType: 'SET_WITHDRAWAL_CURRENCY', payload: item._id});
    // Dispatcher.dispatch({actionType: 'SHOW_WITHDRAW_MODAL'});
  },

  renderWalletItems() {
    return this.data.currencies.map((item) => {
      let address = this.getAddress(item._id);
      let balance = this.getBalance(item._id);
      let allowWithdraw = parseFloat(balance) > 0;
      let generateBtn = <button className='ui normal tiny button' onClick={this.newWallet.bind(this, item)}>Generate</button>;

      return  (
        <tr key={item._id} className="ui white text opacity">
          <td className='two wide'>{balance}</td>
          <td className='two wide'>{item.shortName}</td>
          <td className='nine wide'>{address ? address : generateBtn}</td>
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
    });
  },

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
export default WalletsPage;
