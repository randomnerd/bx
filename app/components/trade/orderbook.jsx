import React from 'react';
import {OrderBookItems,Trades} from 'collections';

export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      ordersSell: OrderBookItems.find( { pairId: this.props.pairId , buy: false}, { sort: { price: -1 } } ).fetch(),
      ordersBuy: OrderBookItems.find( { pairId: this.props.pairId , buy: true}, { sort: { price: -1 } } ).fetch(),
      ordersMax: OrderBookItems.findOne( { pairId: this.props.pairId }, { sort: { amount: -1 } } ),
      tradesLast: Trades.find({ pairId: this.props.pairId }, {sort: {createdAt: -1}}, {limit:2}).fetch(),
      tradesHi: Trades.findOne({ pairId: this.props.pairId }, {sort: {price: -1}}),
      tradesLo: Trades.findOne({ pairId: this.props.pairId }, {sort: {price: 1}}),
    };
  },
  getInitialState: function() {
    return {
      spread: 0.1,
    };
  },

  goBuySell(item, e) {
    Dispatcher.dispatch({actionType: 'BUY_SELL_AUTOCOMPLETE', data: {
      amount: parseFloat(item.amount),
      price: parseFloat(item.price),
      direction: this.props.direction,
    }});
  },
  renderSellItems() {
    let nulls = '00000000';

    let max = this.data.ordersMax ? this.data.ordersMax.displayAmount() : 1;
    return this.data.ordersSell.map((item) => {

      //.displayRemain() и .displayPrice()
      let weight = parseFloat(70 * (item.displayAmount() / max).toFixed(8));
      let amount = parseFloat(item.displayAmount()).toString().split('.');
      let price = parseFloat(item.displayPrice()).toString().split('.');
      let total = parseFloat(item.displayPrice() * item.displayAmount()).toFixed(8).toString().split('.');
      if (!amount[1]) { amount[1] = ''; }
      if (!price[1]) { price[1] = ''; }
      return  (
        <tr key = {item._id} onClick = {this.goBuySell.bind(this, item)}
        className={!item.animate ? 'animate' : ''}>
          <td className='five wide'>
            <div className='bignum left'>{amount[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{amount[1]}</span>
            { nulls.substr(0, 7 - amount[1].length) }
            </div>

            <span className='leveler negative'
                style={{width: weight + '%'}}>
            </span>
          </td>
          <td className='six wide center aligned negative'>

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

    let max = this.data.ordersMax ? this.data.ordersMax.displayAmount() : 1;
    return this.data.ordersBuy.map((item) => {
      //.displayRemain() и .displayPrice()

      let weight = parseFloat(70 * (parseFloat(item.displayAmount()) / max).toFixed(8));
      let amount = parseFloat(item.displayAmount()).toString().split('.');
      let price = parseFloat(item.displayPrice()).toString().split('.');
      let total = parseFloat(item.displayPrice() * item.displayAmount()).toFixed(8).toString().split('.');
      if (!amount[1]) { amount[1] = ''; }
      if (!price[1]) { price[1] = ''; }
      return  (
        <tr key = {item._id} onClick = {this.goBuySell.bind(this, item)}
        className={!item.animate ? 'animate' : ''}>
          <td className='five wide'>
            <div className='bignum left'>{amount[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{amount[1]}</span>
            { nulls.substr(0, 7 - amount[1].length) }
            </div>

            <span className='leveler positive'
                style={{width: weight + '%'}}>
            </span>
          </td>
          <td className='six wide center aligned positive'>

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
    let nulls = '00000000';
    let i=0;
    let lastOne=[];
    if (!this.props.pair) return null;
    this.data.tradesLast.map((item) => {
      lastOne[i] = parseFloat(item.displayPrice());
      i++;
    });
    if (!lastOne[0]) return null;
    let direction = !!( lastOne[0] > lastOne[1] );
    let diff = ( lastOne[0] - lastOne[1] ).toFixed(4);
    let diffPerc = ( ( diff / lastOne[1] ) * 100 ).toFixed(2);
    let lastPrice = lastOne[0].toString().split('.');
    lastPrice[1] = lastPrice[1] ? lastPrice[1] : '';

    let hiPrice = this.data.tradesHi.displayPrice().toString().split('.');
    let lowPrice = this.data.tradesLo.displayPrice().toString().split('.');
    hiPrice[1] = hiPrice[1] ? hiPrice[1] : '';
    lowPrice[1] = lowPrice[1] ? lowPrice[1] : '';


    return (

        <tr className='ui white text opacity' >
          <td className='five wide red markered text'>
            <span className='direction'>Lowest <i className='long arrow down icon'></i></span>
            <div className='bignum left'>{ lowPrice[0] }</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{ lowPrice[1] }</span>
              { nulls.substr(0, 8 - lowPrice[1].length) }
            </div>
          </td>
          <td className='six wide center aligned white markered text'>
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
          <td className='five wide right aligned green markered text'>
            <span className='direction'>Higest <i className='long arrow up icon'></i></span>
            <div className='bignum left'>{ hiPrice[0] }</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{ hiPrice[1] }</span>
              { nulls.substr(0, 8 - hiPrice[1].length) }
            </div>
          </td>
        </tr>

      );
  },
  render() {
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

                { this.props.pair ? this.renderSellItems() : null }
                { !!( this.data.ordersSell && this.data.ordersSell.length ) ||
                  !!( this.data.ordersBuy && this.data.ordersBuy.length )
                  ? this.renderSpread() : null }
                { this.props.pair ? this.renderBuyItems() : null }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});
