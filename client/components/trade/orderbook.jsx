import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {OrderBookItems,Trades} from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';
import OrderItem from './orderbook_item'
import Spreadline from './orderbook_spreadline'

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
  cutZeroes(str) {
    if (!str) str = 0;
    //str = str.toFixed(8);
    while (str[str.length-1] == '0' || str[str.length-1] == '.') {
      str = str.slice(0,str.length-1)
    }
    return str;
  }
  renderSellItems() {

    let max = this.props.ordersMax ? this.props.ordersMax.displayAmount() : 1;
    return this.props.ordersSell.map((item) => {
      item.max = max;
      item.direction = ' negative';

      return  (
        <OrderItem key = {item._id} item={item} {...this.props} />
      );
    });
  }

  renderBuyItems() {
    let nulls = '00000000';

    let max = this.props.ordersMax ? this.props.ordersMax.displayAmount() : 1;
    return this.props.ordersBuy.map((item) => {
      item.max = max;
      item.direction = ' positive';

      return  (
        <OrderItem key = {item._id} item={item} {...this.props} />
      );
    });
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
                <Spreadline {...this.props} />
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
  };
}, Orderbook);
