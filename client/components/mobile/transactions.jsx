import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Balances, Currencies, Withdrawals, Transactions} from '../../../both/collections';
import moment from 'moment';
import { createContainer } from 'meteor/react-meteor-data';

const TransactionsView = connect({
  layout: ['layout'],
  wallet: ['wallet']
}, class TransactionsView extends React.Component {

  renderHistoryItems() {
    let unsortedItems = this.data.deposits.concat(this.data.withdrawals);
    let items = unsortedItems.sort((a, b) => {
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });
    return items.map((item) => {
      if(item){
        let cls = item.constructor.name === 'Transaction' ? 'positive' : 'negative';
        return  (
          <tr key={item._id} className={cls}>
            <td className="three wide">{moment(item.createdAt).fromNow()}</td>
            <td className="five wide">{item.address}</td>
            <td className="three wide">{item.displayAmount()}</td>
            <td className="two wide">{item.fee ? item.displayFee() : '-'}</td>
            <td className="three wide">{item.displayChanged()}</td>
          </tr>

        );
      }
    });
  }

  showWithdraw(){
    this.props.signals.tools.withdraw({action: 'open'});
    this.props.signals.u.walletSet({id: this.props.wallet});
  }

  render() {
    let avail = this.data.balance ? this.data.balance.displayAmount() : (0).toFixed(8);
    let held = this.data.balance ? this.data.balance.displayHeld() : (0).toFixed(8);
    let total = this.data.balance ? this.data.balance.displayTotal() : (0).toFixed(8);
    return (
      <div className="ui main container">
        <div className="ui segments">

          <div className="ui secondary segment">
            <a href="/u/wallets" className="ui top right attached large label">
              <i className="icon left arrow"></i>
              <span>back</span>
            </a>
            <h2 className="ui header">
              {this.data.currency.name} balance
            </h2>
          </div>
          <div className="ui secondary segment">
            <button className="ui fluid blue button" onClick={this.showWithdraw}>
              Withdraw {this.data.currency.shortName}
            </button>
          </div>

          <div className="ui secondary segment">


            <h4 className="ui header center aligned">Available</h4>


            <h2 className="ui header center aligned">
              {avail} {this.data.currency.shortName}
            </h2>

            <div className="ui clearing divider"></div>

            <h4 className="ui header center aligned">Held for orders</h4>

            <h2 className="ui header center aligned">
              {held} {this.data.currency.shortName}
            </h2>

            <div className="ui clearing divider"></div>
            <h4 className="ui header center aligned">Total</h4>

            <h2 className="ui header center aligned">
              {total} {this.data.currency.shortName}
            </h2>



          </div>
            <div className="ui secondary segment">
              <h2 className="white text">Transactions</h2>
            </div>
            <div className="ui small blue segment">
              <table className="ui selectable very compact very basic striped unstackable table nomargin">
                <thead>
                  <tr className="lesspadding">
                    <th className="four wide" >Time</th>
                    <th className="five wide" >Address</th>
                    <th className="three wide">Amount</th>
                    <th className="two wide">Fee</th>
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
export default TransactionsViewContainer = createContainer(({ params }) => {
  return {
    balance: Balances.findOne({currId: this.props.wallet}),
    currency: Currencies.findOne({_id:this.props.wallet}),
    withdrawals: Withdrawals.find({currId: this.props.wallet}, {limit: 30, sort: {createdAt: -1}}).fetch(),
    deposits: Transactions.find({currId: this.props.wallet}, {limit: 30, sort: {createdAt: -1}}).fetch()
  }
}, TransactionsView);
