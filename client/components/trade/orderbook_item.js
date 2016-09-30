import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {OrderBookItems,Trades} from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';

const OrderbookItem = connect({
  layout: ['layout'],
}, class OrderbookItem extends React.Component {
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
    item.weight = parseFloat(70 * (item.displayAmount() / item.max).toFixed(8));
    let total = (item.displayPrice() * item.displayAmount()).toFixed(8).split('.');
    let amount = item.displayAmount().split('.');
    let price = item.displayPrice().split('.');
    amount[1] = this.cutZeroes(amount[1]);
    price[1] = this.cutZeroes(price[1]);
    total[1] = this.cutZeroes(total[1]);
    item.am_nulls = nulls.substr(0, 8 - amount[1].length);
    item.pr_nulls = nulls.substr(0, 8 - price[1].length);
    item.to_nulls = nulls.substr(0, 8 - total[1].length);
    return (
      <tr onClick = {this.goBuySell.bind(this, item)}
      className={!item.animate ? 'animate' : ''}>
        <td>
          <div className='bignum left'>{amount[0]}</div>
          <div className='bignum dot'>.</div>
          <div className='bignum right'>{amount[1]}
            <span>{ item.am_nulls }</span>
          </div>

          <span className={'leveler' + item.direction}
              style={{width: item.weight + '%'}}>
          </span>
        </td>
        <td className={'center aligned' + item.direction}>

          <div className='bignum left'>{price[0]}</div>
          <div className='bignum dot'>.</div>
          <div className='bignum right'>{price[1]}
            <span>{item.pr_nulls}</span>
          </div>
        </td>
        <td className='right aligned'>
          <div className='bignum left'>{total[0]}</div>
          <div className='bignum dot'>.</div>
          <div className='bignum right'>{total[1]}
            <span>{item.to_nulls}</span>
          </div>
        </td>
      </tr>
    );
  }
});
export default OrderbookItem;
