import React from 'react';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Balances, Currencies, Withdrawals, Transactions} from '../../../both/collections';

const Balance = Component({
  layout: ['layout'],
  pair_link: ['pair_link'],
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    //console.log(this.props.pair);
    return {
      balance1: Balances.findOne({currId: this.props.pair.currId}),
      balance2: Balances.findOne({currId: this.props.pair.marketCurrId}),
      currency1: Currencies.findOne({_id: this.props.pair.currId}),
      currency2: Currencies.findOne({_id: this.props.pair.marketCurrId}),
    }
  },
  currName(id) {
    let curr = _.findWhere(this.data.currencies, {
      _id: id
    });
    return curr
      ? curr.shortName
      : '';
  },

  render() {
    let balance1 = this.data.balance1 ? this.data.balance1.displayAmount() : (0).toFixed(8);
    let balance2 = this.data.balance2 ? this.data.balance2.displayAmount() : (0).toFixed(8);
    let held1 = this.data.balance1 ? this.data.balance1.displayHeld() : (0).toFixed(8);
    let held2 = this.data.balance2 ? this.data.balance2.displayHeld() : (0).toFixed(8);
    return (
      <div className='ui small basic segment teal' >
        <h4 className='ui header'>AVAILABLE</h4>
        <div className={"ui segments" + (this.props.wide ? " horizontal" : "") + " fee"}>
          <div className='ui small basic segment'>
            <strong className="name">{this.data.currency1 ? this.data.currency1.shortName : ""}: </strong>
            <span className="value">{balance1}</span>
          </div>
          <div className='ui small basic segment'>
            <strong className="name">{this.data.currency2 ? this.data.currency2.shortName : ""}: </strong>
            <span className="value">{balance2}</span>
          </div>
        </div>
        <h4 className='ui header'>HELD FOR ORDERS</h4>
        <div className={"ui segments" + (this.props.wide ? " horizontal" : "") + " fee"}>
          <div className='ui small basic segment'>
            <strong className="name">{this.data.currency1 ? this.data.currency1.shortName : ""}: </strong>
            <span className="value">{held1}</span>
          </div>
          <div className='ui small basic segment'>
            <strong className="name">{this.data.currency2 ? this.data.currency2.shortName : ""}: </strong>
            <span className="value">{held2}</span>
          </div>
        </div>
      </div>
    );
  }
});
export default Balance;
