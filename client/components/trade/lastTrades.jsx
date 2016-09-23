import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Trades} from '../../../both/collections';
import moment from 'moment';
import { createContainer } from 'meteor/react-meteor-data';

const LastTrades = connect({
  layout: ['layout'],
  pair: ['pair','pair']
}, class LastTrades extends React.Component {

  cutZeroes(str) {
    //str = str.toFixed(8);
    while (str[str.length-1] == '0' || str[str.length-1] == '.') {
      str = str.slice(0,str.length-1)
    }
    return str;
  }
  renderTradesItems() {
    let nulls = '00000000';
    let data =this.props.trades;
    //console.log(data);
    data.reverse();
    let prev = 1;
    data.map((item) => {
      item.direction = !!(prev < parseFloat(item.displayPrice()) );
      prev = item.displayPrice();
    });
    data.reverse();

    let max = this.props.tradesMax ? parseFloat(this.props.tradesMax.displayAmount()) : 1;
    return data.map((item) => {
      let weight = parseFloat(70 * (item.displayAmount() / max).toFixed(8));

      let amount = item.displayAmount().split('.');
      let price = item.displayPrice().split('.');
      amount[1] = this.cutZeroes(amount[1]);
      price[1] = this.cutZeroes(price[1]);
      return (
          <tr key={item._id} className='animate'>
            <td className='six wide'>
              <div className='bignum left'>{ amount[0] }</div>
              <div className='bignum dot'>.</div>
              <div className='bignum right'>{ amount[1]}<span>{ nulls.substr(0,7 - amount[1].length) }</span></div>
              <span className={'leveler ' + (item.direction ? 'positive' : 'negative')} style={{width: weight + '%'}}></span>
            </td>
            <td className={'seven wide arr ' + (item.direction ? 'positive' : 'negative') }>
              <div className='bignum left'>{price[0]}</div>
              <div className='bignum dot'>.</div>
              <div className='bignum right'>{price[1]}<span>{nulls.substr(0,8-price[1].length)}</span></div>
            </td>
            <td className='three wide right aligned'>{moment(item.createdAt).format("hh:mm:ss")}</td>
          </tr>
        );
    });
  }

  render() {
    return (
      <div className='ui basic teal segment h100 tabheader'>
        <table className = 'ui selectable very compact very basic striped table nopadding nomargin unstackable heading'>
          <thead>
          <tr className='lesspadding'>
            <th className='six wide center aligned'>{this.props.valute1}</th>
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

export default LastTradesContainer = createContainer((props) => {
  return {
    trades: Trades.find(
      { pairId: props.pair._id },
      {sort: {createdAt: -1},
      limit: props.limit||40}
    ).fetch(),
    tradesMax: Trades.findOne({ pairId: props.pair._id }, {sort: {amount: -1}}),
    tradesLast: Trades.find({ pairId: props.pair._id }, {sort: {createdAt: -1}}, {limit:2}).fetch(),
  };
}, LastTrades);
