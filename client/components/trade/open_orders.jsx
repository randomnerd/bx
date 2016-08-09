import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Orders, Currencies} from '../../../both/collections';
import moment from 'moment';
import { createContainer } from 'meteor/react-meteor-data';

const OpenOrders = connect({
  layout: ['layout']
}, class OpenOrders extends React.Component {
  cancelOrder(order) {
    order.cancel();
  }

  cancelOrders() {
    if(confirm('Clear all?')){
      this.props.orders.map((item) => {
        item.cancel();
      });
    }
    //order.cancel();
  }

  renderOrderItems() {
    return this.props.orders.map((item) => {
      return  (
        <tr key={item._id} >
          <td className={'three wide ' + (item.buy? 'positive' : 'negative')} data-ord-price>{item.displayAmount()}</td>
          <td className='three wide' data-ord-amount>{item.displayRemain()}</td>
          <td className={'three wide ' + (item.buy? 'positive' : 'negative')} data-ord-amount>{item.displayPrice()}</td>
          <td className='two wide' data-ord-amount>{moment(item.createdAt).format("hh:mm:ss")}</td>
          <td data-ord-amount className='one wide'>
            <i className="ui remove red icon" onClick={this.cancelOrder.bind(this, item)}></i>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className='ui basic teal segment h100 noheader'>
        <div className='ui top attached tabular basic menu'>
          <div className='right menu'>
          { this.props.orders.length ?
            <a className='item active' onClick={this.cancelOrders}>
              Cancel all
            </a>
            : null }
          </div>
        </div>
        <div className='ui basic segment h100 tabheader'>
          <table className='ui selectable very compact very basic striped table unstackable nopadding nomargin heading'>
            <thead>
              <tr className='lesspadding'>
                <th className='three wide' >Size</th>
                <th className='three wide'>Remain ({this.props.currency1.shortName})</th>
                <th className='three wide'>Price ({this.props.currency2.shortName})</th>
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

export default OpenOrdersContainer = createContainer((props) => {
  let curr1 =Currencies.findOne({_id: this.props.valute1});
  //console.log(this.props.valute1);
  return {
    orders: Orders.find({pairId: (this.props.pairId)}, {sort: {createdAt: -1}}).fetch(),
    currency1: Currencies.findOne({_id: this.props.valute1}),
    currency2: Currencies.findOne({_id: this.props.valute2})
  }
}, OpenOrders);
