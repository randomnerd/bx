import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Balances, Currencies, Withdrawals, Transactions} from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';

const Balance = connect({
  layout: ['layout'],
  pair_link: ['pair_link'],
  pair: ['pair', 'pair']
}, class Balance extends React.Component {
  currName(id) {
    let curr = _.findWhere(this.props.currencies, {_id: id});
    return curr ? curr.shortName : '';
  }

  render() {
    let balance1 = this.props.balance1 ? this.props.balance1.displayAmount() : (0).toFixed(8);
    let balance2 = this.props.balance2 ? this.props.balance2.displayAmount() : (0).toFixed(8);
    let held1 = this.props.balance1 ? this.props.balance1.displayHeld() : (0).toFixed(8);
    let held2 = this.props.balance2 ? this.props.balance2.displayHeld() : (0).toFixed(8);
    return (
      <div className='ui small basic segment teal' >
        <h4 className='ui header'>AVAILABLE FOR TRADE</h4>
        <div className={"ui segments" + (this.props.wide ? " horizontal" : "") + " fee"}>
          <div className='ui small basic segment'>
            <strong className="name">{this.props.currency1 ? this.props.currency1.shortName : ""}: </strong>
            <span className="value">{balance1}</span>
          </div>
          <div className='ui small basic segment'>
            <strong className="name">{this.props.currency2 ? this.props.currency2.shortName : ""}: </strong>
            <span className="value">{balance2}</span>
          </div>
        </div>
        <h4 className='ui header'>IN TRADES</h4>
        <div className={"ui segments" + (this.props.wide ? " horizontal" : "") + " fee"}>
          <div className='ui small basic segment'>
            <strong className="name">{this.props.currency1 ? this.props.currency1.shortName : ""}: </strong>
            <span className="value">{held1}</span>
          </div>
          <div className='ui small basic segment'>
            <strong className="name">{this.props.currency2 ? this.props.currency2.shortName : ""}: </strong>
            <span className="value">{held2}</span>
          </div>
        </div>
      </div>
    );
  }
});

export default BalanceContainer = createContainer((props) => {
  return {
    balance1: Balances.findOne({currId: this.props.pair.currId}),
    balance2: Balances.findOne({currId: this.props.pair.marketCurrId}),
    currency1: Currencies.findOne({_id: this.props.pair.currId}),
    currency2: Currencies.findOne({_id: this.props.pair.marketCurrId}),
  };
}, Balance);
