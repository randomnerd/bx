import React from 'react';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Balances, Currencies, Wallets} from '../../../both/collections';
import UserOnly from '../user/user_only';

const WalletsView = Component({
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
    Dispatcher.dispatch({actionType: 'SET_WITHDRAWAL_CURRENCY', payload: item._id});
    Dispatcher.dispatch({actionType: 'SHOW_WITHDRAW_MODAL'});
  },

  renderWalletItems() {
    return this.data.currencies.map((item) => {
      let address = this.getAddress(item._id);
      let balance = this.getBalance(item._id);
      let allowWithdraw = parseFloat(balance) > 0;
      let generateBtn = <button className='ui normal tiny button' onClick={this.newWallet.bind(this, item)}>Generate</button>;

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
            <div className="nine wide column">
              {address ? address : generateBtn}
            </div>
            <div className='seven wide column'>
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
  },

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
export default WalletsView;
