import React from 'react';
import {Balances, Currencies, Withdrawals, Transactions} from 'collections';


export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
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
    return (
      <div className='ui small basic segment teal' >
        <h4 className='ui header'>AVALABLE</h4>
        <div className={"ui segments" + (this.props.wide ? " horizontal" : "") + " fee"}>
          <div className='ui small basic segment'>
            <strong className="name">{this.data.currency1.shortName}: </strong>
            <span className="value">{balance1}</span>
          </div>
          <div className='ui small basic segment'>
            <strong className="name">{this.data.currency2.shortName}: </strong>
            <span className="value">{balance2}</span>
          </div>
        </div>
      </div>
    );
  }
});
