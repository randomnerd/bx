import React from 'react';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Orders, Currencies} from '../../../both/collections';
import moment from 'moment';

const OpenOrders = Component({
  layout: ['layout']
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    let curr1 =Currencies.findOne({_id: this.props.valute1});
    //console.log(this.props.valute1);
    return {
      orders: Orders.find({pairId: (this.props.pairId)}, {sort: {createdAt: -1}}).fetch(),
      currency1: Currencies.findOne({_id: this.props.valute1}),
      currency2: Currencies.findOne({_id: this.props.valute2})
    }
  },

  cancelOrder(order) {
    order.cancel();
  },

  cancelOrders() {
    if(confirm('Clear all?')){
      this.data.orders.map((item) => {
        item.cancel();
      });
    }
    //order.cancel();
  },

  renderOrderItems() {
    return this.data.orders.map((item) => {
      return  (
        <tr key={item._id} >
          <td className='three wide' data-ord-price>{item.displayAmount()}</td>
          <td className='three wide' data-ord-amount>{item.displayRemain()}</td>
          <td className='three wide' data-ord-amount>{item.displayPrice()}</td>
          <td className='two wide' data-ord-amount>{moment(item.createdAt).format("hh:mm:ss")}</td>
          <td data-ord-amount className='one wide'>
            <a href='javascript:;' onClick={this.cancelOrder.bind(this, item)}>Cancel</a>
          </td>
        </tr>
      );
    });
  },
  render() {
    return (
      <div className='ui basic teal segment h100 noheader'>
        <div className='ui top attached tabular basic menu'>
          <div className='right menu'>
            <a className='item active' onClick={this.cancelOrders}>
              Clear all
            </a>
          </div>
        </div>
        <div className='ui basic segment h100 tabheader'>
          <table className='ui selectable very compact very basic striped table unstackable nopadding nomargin heading'>
            <thead>
              <tr className='lesspadding'>
                <th className='three wide' >Size</th>
                <th className='three wide'>Remain ({this.data.currency1.shortName})</th>
                <th className='three wide'>Price ({this.data.currency2.shortName})</th>
                <th className='two wide'>Time</th>
                <th className='one wide'></th>
              </tr>
            </thead>
          </table>
          <div className='ux forscroll'>
            <div className='scrollable100'>
              <table className='ui selectable very compact very basic striped unstackable table'>
                <tbody>
                  { this.renderOrderItems() }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
export default OpenOrders;
