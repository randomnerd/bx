import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {OrderBookItems,Trades} from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';

const Orderbook = connect({
  layout: ['layout'],
}, class Orderbook extends React.Component {
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

  renderSellItems() {
    let nulls = '00000000';

    let max = this.props.ordersMax ? this.props.ordersMax.displayAmount() : 1;
    return this.props.ordersSell.map((item) => {

      //.displayRemain() и .displayPrice()
      let weight = parseFloat(70 * (item.displayAmount() / max).toFixed(8));
      let amount = item.displayAmount().split('.');
      let price = item.displayPrice().split('.');
      let total = (item.displayPrice() * item.displayAmount()).toFixed(8).toString().split('.');
      //console.log(item.displayPrice().toString().split('.'));
      if (!amount[1]) { amount[1] = ''; }
      if (!price[1]) { price[1] = ''; }
      return  (
        <tr key = {item._id} onClick = {this.goBuySell.bind(this, item)}
        className={!item.animate ? 'animate' : ''}>
          <td>
            <div className='bignum left'>{amount[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'>{amount[1]}
              <span>{ nulls.substr(0, 8 - amount[1].length) }</span>
            </div>

            <span className='leveler negative'
                style={{width: weight + '%'}}>
            </span>
          </td>
          <td className='center aligned negative'>

            <div className='bignum left'>{price[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'>{price[1]}
              <span>{nulls.substr(0, 8 - price[1].length)}</span>
            </div>
          </td>
          <td className='right aligned'>
            <div className='bignum left'>{total[0].substr(0, 5)}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'>{total[1]}
              <span>{nulls.substr(0, 8 - total[1].length)}</span>
            </div>
          </td>
        </tr>
      );
    });
  }

  renderBuyItems() {
    let nulls = '00000000';

    let max = this.props.ordersMax ? this.props.ordersMax.displayAmount() : 1;
    return this.props.ordersBuy.map((item) => {
      //.displayRemain() и .displayPrice()

      let weight = parseFloat(70 * (parseFloat(item.displayAmount()) / max).toFixed(8));
      let amount = item.displayAmount().split('.');
      let price = item.displayPrice().split('.');
      let total = (item.displayPrice() * item.displayAmount()).toFixed(8).toString().split('.');
      if (!amount[1]) { amount[1] = ''; }
      if (!price[1]) { price[1] = ''; }
      return  (
        <tr key = {item._id} onClick = {this.goBuySell.bind(this, item)}
        className={!item.animate ? 'animate' : ''}>
          <td>
            <div className='bignum left'>{amount[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'>{amount[1]}
              <span>{ nulls.substr(0, 8 - amount[1].length) }</span>
            </div>

            <span className='leveler positive'
                style={{width: weight + '%'}}>
            </span>
          </td>
          <td className='center aligned positive'>

            <div className='bignum left'>{price[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'>{price[1]}
              <span>{nulls.substr(0, 8 - price[1].length)}</span>
            </div>
          </td>
          <td className='right aligned'>
            <div className='bignum left'>{total[0].substr(0, 5)}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'>{total[1]}
              <span>{nulls.substr(0, 8 - total[1].length)}</span>
            </div>
          </td>
        </tr>
      );
    });
  }

  renderSpread() {
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

    let hiPrice = this.props.tradesHi.displayPrice().toString().split('.');
    let lowPrice = this.props.tradesLo.displayPrice().toString().split('.');
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

  render() {
    //console.log(this.props.ordersSell);
    return (
      <div className='ui basic teal segment h100 tabheader'>
        <table className='ui selectable very compact very basic striped table unstackable nopadding nomargin heading'>
          <thead>
            <tr className='lesspadding'>
              <th className='five wide center aligned'>{this.props.valute1}</th>
              <th className='six wide center aligned' >Price</th>
              <th className='five wide right aligned'>{this.props.valute2}</th>
            </tr>
          </thead>
        </table>
        <div className='ux forscroll'>
          <div className='scrollable100'>
            <table className='ui selectable very compact very basic striped unstackable fixed table'>
              <tbody>

                { this.renderSellItems() }
                { this.renderSpread() }
                { this.renderBuyItems() }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});

export default OrderbookContainer = createContainer((props) => {
  return {
    ordersSell: OrderBookItems.find( { pairId: props.pair._id , buy: false}, { sort: { price: -1 } } ).fetch(),
    ordersBuy: OrderBookItems.find( { pairId: props.pair._id , buy: true}, { sort: { price: -1 } } ).fetch(),
    ordersMax: OrderBookItems.findOne( { pairId: props.pair._id }, { sort: { amount: -1 } } ),
    tradesLast: Trades.find({ pairId: props.pair._id }, {sort: {createdAt: -1}}, {limit:2}).fetch(),
    tradesHi: Trades.findOne({ pairId: props.pair._id }, {sort: {price: -1}}),
    tradesLo: Trades.findOne({ pairId: props.pair._id }, {sort: {price: 1}}),
  };
}, Orderbook);
