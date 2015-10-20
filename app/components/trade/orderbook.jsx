import React from 'react';
import {OrderBookItems} from 'collections';

export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    if (!this.props.pair) return {};
    return {
      ordersSell : OrderBookItems.find({pairId: this.props.pair._id , buy:false}, {sort: {price: -1}},{limit:20}).fetch(),
      ordersBuy  : OrderBookItems.find({pairId: this.props.pair._id , buy:true}, {sort: {price: 1}},{limit:20}).fetch(),
      ordersSellMax  : OrderBookItems.findOne({pairId: this.props.pair._id , buy:false}, {sort: {price: -1}}),
      ordersBuyMax  : OrderBookItems.findOne({pairId: this.props.pair._id , buy:true}, {sort: {price: -1}}),
    };
  },
  getInitialState: function() {
    return {
      spread: 0.1,
    };
  },
  getOrdersItems(direction) {
    return this.state.data;
  },
  randNumber() {
    let leftLength  = Math.random().toFixed(1) * 10;
    let rightLength  = Math.random().toFixed(1) * 10;
    leftLength = leftLength > 4 ? 4 : leftLength;
    rightLength = rightLength > 8 ? 8 : rightLength;
    leftLength = leftLength < 1 ? 1 : leftLength;
    rightLength = rightLength < 1 ? 1 : rightLength;
    //console.log(leftLength, rightLength)
    //console.log(parseFloat((Math.random().toFixed(leftLength)*Math.pow(10,leftLength))+Math.random().toFixed(rightLength)))
    return ((Math.random().toFixed(leftLength) * Math.pow(10, leftLength - 1)).toFixed(0)
    + Math.random().toFixed(rightLength - 1));
  },
  componentDidMount() {

  },

  componentWillUnmount() {
    if (this.tick) Meteor.clearInterval(this.tick);
  },

  goBuySell(item, e) {
    Dispatcher.dispatch({actionType: 'BUY_SELL_AUTOCOMPLETE', data: {
      amount: parseFloat(item.amount),
      price: parseFloat(item.price),
      direction: this.props.direction,
    }});
    //console.log($(e.currentTarget).find('[data-ord-price]').html());
  },
  renderSellItems() {
    let nulls = '00000000';

    let max =this.data.ordersSellMax
    return this.data.ordersSell.map((item) => {
      item.displayAmount()
      //.displayRemain() и .displayPrice()
      let weight = parseFloat(70 * (item.displayAmount() / max).toFixed(8));
      let amount = item.displayAmount().toString().split('.');
      let price = item.displayPrice().toString().split('.');
      let total = (item.displayPrice() * item.displayAmount()).toFixed(8).toString().split('.');
      if (!amount[1]) { amount[1] = ''; }
      if (!price[1]) { price[1] = ''; }
      if (amount[0] === '00') { amount[1] = '0'; }
      if (price[0] === '00') { price[1] = '0'; }
      return  (
        <tr key = {item._id} onClick = {this.goBuySell.bind(this, item)}
        className={item.animate ? 'animate' : ''}>
          <td className='five wide'>
            <div className='bignum left'>{amount[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{amount[1]}</span>
            { nulls.substr(0, 7 - amount[1].length) }
            </div>

            <span className={'leveler ' + (direction === 'buy' ? 'positive' : 'negative')}
                style={{width: weight + '%'}}>
            </span>
          </td>
          <td className={'six wide center aligned '
            + (direction === 'buy' ? 'positive' : 'negative')}>

            <div className='bignum left'>{price[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{price[1]}</span>
              {nulls.substr(0, 8 - price[1].length)}
            </div>
          </td>
          <td className='five wide right aligned'>
            <div className='bignum left'>{total[0].substr(0, 5)}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{total[1]}</span>
              {nulls.substr(0, 8 - total[1].length)}
            </div>
          </td>
        </tr>
      );
    });
  },

  renderBuyItems() {
    let nulls = '00000000';

    let max =this.data.ordersBuyMax
    return this.data.ordersBuy.map((item) => {
      item.displayAmount()
      //.displayRemain() и .displayPrice()
      let weight = parseFloat(70 * (item.displayAmount() / max).toFixed(8));
      let amount = item.displayAmount().toString().split('.');
      let price = item.displayPrice().toString().split('.');
      let total = (item.displayPrice() * item.displayAmount()).toFixed(8).toString().split('.');
      if (!amount[1]) { amount[1] = ''; }
      if (!price[1]) { price[1] = ''; }
      if (amount[0] === '00') { amount[1] = '0'; }
      if (price[0] === '00') { price[1] = '0'; }
      return  (
        <tr key = {item._id} onClick = {this.goBuySell.bind(this, item)}
        className={item.animate ? 'animate' : ''}>
          <td className='five wide'>
            <div className='bignum left'>{amount[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{amount[1]}</span>
            { nulls.substr(0, 7 - amount[1].length) }
            </div>

            <span className={'leveler ' + (direction === 'buy' ? 'positive' : 'negative')}
                style={{width: weight + '%'}}>
            </span>
          </td>
          <td className={'six wide center aligned '
            + (direction === 'buy' ? 'positive' : 'negative')}>

            <div className='bignum left'>{price[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{price[1]}</span>
              {nulls.substr(0, 8 - price[1].length)}
            </div>
          </td>
          <td className='five wide right aligned'>
            <div className='bignum left'>{total[0].substr(0, 5)}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{total[1]}</span>
              {nulls.substr(0, 8 - total[1].length)}
            </div>
          </td>
        </tr>
      );
    });
  },

  renderSpread() {
    let direction = 0;
    return (

        <tr className='ui white text opacity' >
          <td className='five wide red markered text'>
            <span className='direction'>Lowest <i className='long arrow down icon'></i></span>
            <div className='bignum left'>31</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>643</span>00000</div>
          </td>
          <td className='six wide center aligned white markered text'>
            <div className='bignum left'>32</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>467534</span>00</div>
            <span className={'direction ' +
              (direction === 1 ? 'green' : 'red') + ' text'}>-2.84848 (-0.05%)
            </span>
          </td>
          <td className='five wide right aligned green markered text'>
            <span className='direction'>Higest <i className='long arrow up icon'></i></span>
            <div className='bignum left'>36</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>956734</span>00</div>
          </td>
        </tr>

      );
  },
  render() {
    if (!this.props.pair) return null;
    return (
      <div className='ui basic teal segment h100 tabheader'>
        <table className='ui selectable very compact very basic striped table nopadding nomargin heading'>
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
            <table className='ui selectable very compact very basic striped table'>
              <tbody>
                { this.renderSellItems('sell') }
                { this.renderSpread() }
                { this.renderBuyItems('buy') }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});
