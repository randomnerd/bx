import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Trades, TradePairs, Currencies} from '../../../both/collections';
import moment from 'moment';
import { createContainer } from 'meteor/react-meteor-data';

const LandingTrades = connect({
  layout: ['layout'],
}, class LandingTrades extends React.Component {
  curr(id) {
    let curr = _.findWhere(this.props.currencies, {_id: id});
    return curr;
  }

  pair(id) {
    let pair = _.findWhere(this.props.pairs, {_id: id});
    return pair
  }
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
      let pair = this.pair(item.pairId);

      let weight = parseFloat(70 * (item.displayAmount() / max).toFixed(8));

      //console.log(pair);

      let curr = this.curr(pair.currId);
      let mcurr = this.curr(pair.marketCurrId);

      let amount = item.displayAmount().split('.');
      let price = item.displayPrice().split('.');
      //console.log(item.displayPrice().toString().split('.'));

      amount[1] = this.cutZeroes(amount[1]);
      price[1] = this.cutZeroes(price[1]);
      if (!amount[1]) {
        amount[1] = '';
      }
      if (!price[1] && price[1] != "0") {
        price[1] = "0";
      }
      return (
        <tr key={item._id} className='animate'>
          <td className='three wide '>
            {curr.shortName}
          </td>
          <td className='two wide'>
            {mcurr.shortName}
          </td>
          <td className='four wide'>
            <div className='bignum left'>{ amount[0] }</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{ amount[1]} </span> { nulls.substr(0,7 - amount[1].length) }</div>
            <span className={'leveler ' + (item.direction ? 'positive' : 'negative')} style={{width: weight + '%'}}></span>
          </td>
          <td className={'five wide arr ' + (item.direction ? 'positive' : 'negative') }>
            <div className='bignum left'>{price[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{price[1]}</span>{nulls.substr(0,8-price[1].length)}</div>
          </td>
          <td className='two wide right aligned'>{moment(item.createdAt).format("hh:mm:ss")}</td>
        </tr>
      );
    });
  }

  render() {
    //console.log(this.props.pair_ids);
    return (
      <div className='ui ldtrades'>
        Last trades
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

export default LandingTradesContainer = createContainer((props) => {
  return {
    trades: Trades.find(
      { pairId: props.pair_ids },
      {sort: {createdAt: -1},
      limit: props.limit||40}
    ).fetch(),
    pairs: TradePairs.find({ published: true }).fetch(),
    currencies: Currencies.find({ published: true }).fetch(),
    tradesMax: Trades.findOne({ pairId: props.pair_ids }, {sort: {amount: -1}}),
    tradesLast: Trades.find({ pairId: props.pair_ids }, {sort: {createdAt: -1}}, {limit:2}).fetch(),
  };
}, LandingTrades);
