import React from 'react';
import {Tracker} from 'meteor/tracker';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Trades} from '../../../both/collections';
import moment from 'moment';

const UserTradeHistory = Component({
  layout: ['layout'],
  pair: ['pair','pair']
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      tradesPair: Trades.find(
        { pairId: this.props.pair._id, userId: this.userId },
        {sort: {createdAt: -1},
        limit: this.props.limit||40}
      ).fetch(),
      trades: Trades.find(
        {userId: this.userId},
        {sort: {createdAt: -1},
        limit: this.props.limit||40}
      ).fetch(),
      tradesMax: Trades.findOne({ pairId: this.props.pair._id }, {sort: {amount: -1}}),
      tradesLast: Trades.find({ pairId: this.props.pair._id }, {sort: {createdAt: -1}}, {limit:2}).fetch(),
    };
  },
  getInitialState(){
    return{
      test: 1
    }
  },
  componentDidMount() {

  },
  renderHistoryItems() {
    let unsortedItems = this.data.deposits.concat(this.data.withdrawals);
    let items = unsortedItems.sort((a, b) => {
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });
    let confReq = this.data.currency.confReq||5;

    return items.map((item) => {
      let cls = item.constructor.name === 'Transaction' ? 'positive' : 'negative';
      let curr = parseInt(((item.confirmations? item.confirmations : confReq)/confReq)*100);
      curr = curr > 100 ? 100 : curr;
      return  (
        <tr key={item._id} className={cls}>
          <td className="two wide">{moment(item.createdAt).fromNow()}</td>
          <td className="five wide">{item.address}</td>
          <td className="two wide">{item.displayAmount()}</td>
          <td className="two wide">{item.fee ? item.displayFee() : '-'}</td>
          <td className="two wide">
            <div className="ui indicating progress" data-percent={curr} >
              <div className="bar" style={ {width: curr + '%'} }><div className="progress">{curr + '%'}</div></div>

            </div>
          </td>
          <td className="three wide">{item.displayChanged()}</td>
        </tr>

      );
    });
  },

  showWithdraw(){
    this.props.signals.tools.withdraw({action: 'open'});
    this.props.signals.u.walletSet({id: this.props.wallet});
  },

  render() {
    let avail = this.data.balance ? this.data.balance.displayAmount() : (0).toFixed(8);
    let held = this.data.balance ? this.data.balance.displayHeld() : (0).toFixed(8);
    let total = this.data.balance ? this.data.balance.displayTotal() : (0).toFixed(8);
    let allowWithdraw = parseFloat(avail) > 0;
    return (
      <div className="ui main container">
        <div className="ui segments">
          <div className="ui secondary segment">
            <div className="ui header clearfix">
              <button className={'ui right floated blue button' + (allowWithdraw ? '' : ' disabled')}  onClick={this.showWithdraw}>
                Withdraw {this.data.currency.shortName}
              </button>
              <a href="/u/wallets" className="ui right floated white button">
                <i className="icon left arrow"></i>
                <span>back</span>
              </a>
              <h1>{this.data.currency.name} balance</h1>
            </div>
          </div>
            <div className="ui secondary segment">
              <h2 className="white text">Transactions</h2>
            </div>
            <div className="ui small blue segment">
              <table className="ui selectable very compact very basic striped unstackable table nomargin">
                <thead>
                  <tr className="lesspadding">
                    <th className="two wide" >Time</th>
                    <th className="five wide" >Address</th>
                    <th className="two wide">Amount</th>
                    <th className="two wide">Fee</th>
                    <th className="two wide">Status</th>
                    <th className="three wide">Balance</th>
                  </tr>
                </thead>
              </table>
              <div className="scrollable10rows">
                <table className="ui selectable very compact very basic striped unstackable table">
                  <tbody>
                    { this.renderHistoryItems() }
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    );
  }
});

export default UserTradeHistory;
