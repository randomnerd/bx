import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Balances, Currencies, Withdrawals, Transactions, TradePairs, Trades} from '../../../both/collections';
import moment from 'moment';
import { createContainer } from 'meteor/react-meteor-data';

const TransactionsView = connect({
  layout: ['layout'],
  wallet: ['wallet']
}, class TransactionsView extends React.Component {

  renderHistoryItems() {
    let unsortedItems = this.props.deposits.concat(this.props.withdrawals).concat(this.props.trades);
    let items = unsortedItems.sort((a, b) => {
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });
    let confReq = this.props.currency.confReq||5;

    return items.map((item) => {
      let cls = [];

      let mcurr, amount, mamount;
      switch(item.className) {
        case 'Transaction':
          cls = ['li_vallet', 'add green', 'Deposit'];
          amount = item.displayAmount();
          break;
        case 'Withdrawal':
          cls = ['li_vallet', 'minus red', 'Withdrawal'];
          amount = item.displayAmount();
          break;
        default:
          cls = item.buyerId == this.props.user._id ? ['exchange', 'add green', 'Buy'] : ['exchange', 'minus red', 'Sell'];
          let pair = _.find(this.props.pairs, (i) =>{
            return i._id == item.pairId;
          });
          if(pair.currId == this.props.wallet){
            amount = item.displayAmount();
          } else {
            amount = item.displayMarketAmount();
          }
      }

      let curr = parseInt(((item.confirmations? item.confirmations : confReq)/confReq)*100);
      curr = curr > 100 ? 100 : curr;
      return  (
        <tr key={item._id} className={cls}>
          <td className="one wide">
            <i className="big icons" title={cls[2]}>
              <i className={cls[0] + " icon"}></i>
              <i className={cls[1] + " corner icon"}></i>
            </i>
          </td>
          <td className="five wide">
            {moment(item.createdAt).fromNow()}<br />
            {item.address || '-'}
          </td>
          <td className="five wide">
            {amount}<br />
            {item.fee ? item.displayFee() : '-'}</td>
          <td className="three wide">
            <div className="ui indicating progress" data-percent={curr} >
              <div className="bar" style={ {width: curr + '%'} }><div className="progress">{curr + '%'}</div></div>

            </div>
          </td>
          <td className="two wide">{item.displayChanged && item.displayChanged()}</td>
        </tr>

      );
    });
  }

  showWithdraw(){
    this.props.signals.tools.withdraw({action: 'open'});
    this.props.signals.u.walletSet({id: this.props.wallet});
  }

  render() {
    let avail = this.props.balance ? this.props.balance.displayAmount() : (0).toFixed(8);
    let held = this.props.balance ? this.props.balance.displayHeld() : (0).toFixed(8);
    let total = this.props.balance ? this.props.balance.displayTotal() : (0).toFixed(8);
    return (
      <div className="ui main container">
        <div className="ui segments">

          <div className="ui secondary segment">
            <a href="/u/wallets" className="ui top right attached large label">
              <i className="icon left arrow"></i>
              <span>back</span>
            </a>
            <h2 className="ui header">
              {this.props.currency.name} balance
            </h2>
          </div>
          <div className="ui secondary segment">
            <button className="ui fluid blue button" onClick={this.showWithdraw.bind(this)}>
              Withdraw {this.props.currency.shortName}
            </button>
          </div>

          <div className="ui secondary segment">


            <h4 className="ui header center aligned">Available</h4>


            <h2 className="ui header center aligned">
              {avail} {this.props.currency.shortName}
            </h2>

            <div className="ui clearing divider"></div>

            <h4 className="ui header center aligned">Held for orders</h4>

            <h2 className="ui header center aligned">
              {held} {this.props.currency.shortName}
            </h2>

            <div className="ui clearing divider"></div>
            <h4 className="ui header center aligned">Total</h4>

            <h2 className="ui header center aligned">
              {total} {this.props.currency.shortName}
            </h2>



          </div>
            <div className="ui secondary segment">
              <h2 className="white text">Transactions</h2>
            </div>
            <div className="ui small blue segment">
              <table className="ui selectable very compact very basic striped unstackable table nomargin">
                <thead>
                  <tr className="lesspadding">
                    <th className="one wide" ></th>
                    <th className="five wide" >Time/Address</th>
                    <th className="five wide">Amount/Fee</th>
                    <th className="three wide">Progress</th>
                    <th className="two wide">Balance</th>
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
export default TransactionsViewContainer = createContainer((props) => {
  let pairs = TradePairs.find({$or:[{currId: props.wallet}, {marketCurrId: props.wallet}]}).fetch();
  let pair_ids = pairs.map(function(pair) {
    return pair._id;
  });
  let user = Meteor.user();
  return {
    balance: Balances.findOne({currId: props.wallet}),
    currency: Currencies.findOne({_id:props.wallet}),
    withdrawals: Withdrawals.find({currId: props.wallet}, {limit: 30, sort: {createdAt: -1}}).fetch(),
    deposits: Transactions.find({currId: props.wallet}, {limit: 30, sort: {createdAt: -1}}).fetch(),
    trades: Trades.find({pairId: {$in: pair_ids}, $or: [{buyerId: user._id}, {sellerId: user._id}]}).fetch(),
    user: Meteor.user(),
    pairs: pairs
  };
}, TransactionsView);
