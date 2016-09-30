import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {OrderBookItems,Trades} from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';

const OrderbookSpreadline = connect({
  layout: ['layout'],
}, class OrderbookSpreadline extends React.Component {
  state = {
      spread: 0.1,
  }

  goBuySell(item, e) {
    this.props.signals.pair.setBuysell({
      amount: item.displayAmount(),
      price: item.displayPrice(),
      //direction: this.props.direction,
    });
  }
  cutZeroes(str) {
    //str = str.toFixed(8);
    while (str[str.length-1] == '0' || str[str.length-1] == '.') {
      str = str.slice(0,str.length-1)
    }
    return str;
  }

  render() {
    //console.log(this.props.ordersSell);
    let item = this.props.item;
    let nulls = '00000000';
    let i=0;
    let lastOne=[];
    this.props.tradesLast.map((item) => {
      lastOne[i] = item.displayPrice();
      i++;
    });
    if (!lastOne[0]) return null;
    let direction = !!( lastOne[0] > lastOne[1] );
    let diff = ( lastOne[0] - lastOne[1] ).toFixed(4);
    let diffPerc = ( ( diff / lastOne[1] ) * 100 ).toFixed(2);
    let lastPrice = lastOne[0].toString().split('.');
    lastPrice[1] = lastPrice[1] ? lastPrice[1] : '';

    let hiPrice = this.props.tradesHi.displayPrice().split('.');
    let lowPrice = this.props.tradesLo.displayPrice().split('.');
    hiPrice[1] = hiPrice[1] ? hiPrice[1] : '';
    lowPrice[1] = lowPrice[1] ? lowPrice[1] : '';
    return (
      <tr className='ui white text opacity' >
        <td className='red markered text'>
          <span className='direction'>Lowest <i className='long arrow down icon'></i></span>
          <div className='bignum left'>{ lowPrice[0] }</div>
          <div className='bignum dot'>.</div>
          <div className='bignum right'><span>{ lowPrice[1] }</span>
            { nulls.substr(0, 8 - lowPrice[1].length) }
          </div>
        </td>
        <td className='center aligned white markered text'>
          <div className='bignum left'>{ lastPrice[0] }</div>
          <div className='bignum dot'>.</div>
          <div className='bignum right'><span>{ lastPrice[1] }</span>
            { nulls.substr(0, 8 - lastPrice[1].length) }
          </div>
          <span className={'direction ' + (direction ? 'green' : 'red') + ' text'}>
            {diff}
            ({diffPerc}%)
          </span>
        </td>
        <td className='right aligned green markered text'>
          <span className='direction'>Highest <i className='long arrow up icon'></i></span>
          <div className='bignum left'>{ hiPrice[0] }</div>
          <div className='bignum dot'>.</div>
          <div className='bignum right'><span>{ hiPrice[1] }</span>
            { nulls.substr(0, 8 - hiPrice[1].length) }
          </div>
        </td>
      </tr>
    );
  }
});
export default OrderbookSpreadlineContainer = createContainer((props) => {
  return {
    ordersMax: OrderBookItems.findOne( { pairId: props.pair._id }, { sort: { amount: -1 } } ),
    tradesLast: Trades.find({ pairId: props.pair._id }, {sort: {createdAt: -1}}, {limit:2}).fetch(),
    tradesHi: Trades.findOne({ pairId: props.pair._id }, {sort: {price: -1}}),
    tradesLo: Trades.findOne({ pairId: props.pair._id }, {sort: {price: 1}}),
  };
}, OrderbookSpreadline);
