import React from 'react';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Trades} from '../../../both/collections';
import moment from 'moment';

const LandingTrades = Component({
  layout: ['layout'],
  pair: ['pair','pair']
}, {
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      trades: Trades.find(
        { pairId: this.props.pair._id },
        {sort: {createdAt: -1},
        limit: this.props.limit||40}
      ).fetch(),
      tradesMax: Trades.findOne({ pairId: this.props.pair._id }, {sort: {amount: -1}}),
      tradesLast: Trades.find({ pairId: this.props.pair._id }, {sort: {createdAt: -1}}, {limit:2}).fetch(),
    };
  },


  renderTradesItems() {
    let nulls = '00000000';
    let data =this.data.trades;
    data.reverse();
    let prev = 1;
    data.map((item) => {
      item.direction = !!(prev < parseFloat(item.displayPrice()) );
      prev = item.displayPrice();
    });
    data.reverse();

    let max = this.data.tradesMax ? parseFloat(this.data.tradesMax.displayAmount()) : 1;
    return data.map((item) => {
      let weight = parseFloat(70 * (item.displayAmount() / max).toFixed(8));

      let amount = parseFloat(item.displayAmount()).toString().split('.');
      let price = item.displayPrice().toString().split('.');
      //console.log(item.displayPrice().toString().split('.'));
      if (!amount[1]) {
        amount[1] = '';
      }
      if (!price[1] && price[1] != "0") {
        price[1] = "0";
      }
      return (
          <tr key={item._id} className='animate'>
            <td className='six wide'>
              <div className='bignum left'>{ amount[0] }</div>
              <div className='bignum dot'>.</div>
              <div className='bignum right'><span>{ amount[1]} </span> { nulls.substr(0,7 - amount[1].length) }</div>
              <span className={'leveler ' + (item.direction ? 'positive' : 'negative')} style={{width: weight + '%'}}></span>
            </td>
            <td className={'seven wide arr ' + (item.direction ? 'positive' : 'negative') }>
              <div className='bignum left'>{price[0]}</div>
              <div className='bignum dot'>.</div>
              <div className='bignum right'><span>{price[1]}</span>{nulls.substr(0,8-price[1].length)}</div>
            </td>
            <td className='three wide right aligned'>{moment(item.createdAt).format("hh:mm:ss")}</td>
          </tr>
        );
    });
  },
  render() {
    return (
      <div className='ui basic segment h100 tabheader ldtrades'>
        <table className = 'ui selectable very compact very basic striped table nopadding nomargin unstackable heading'>
          <thead>
          <tr className='lesspadding'>
            <th className='six wide center aligned'>{this.props.valute1}</th>
            <th className='six wide center aligned'>Market currency</th>
            <th className='six wide center aligned'>Price</th>
            <th className='four wide right aligned'>Time</th>
          </tr>
          </thead>
        </table>
        <div className='ux forscroll'>
          <div className='scrollable100'>
            <table className='ui selectable very compact very basic unstackable table'>
              <tbody>
              { this.renderTradesItems() }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});
export default LandingTrades;