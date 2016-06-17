import React from 'react';
import {Currencies, Trades, OrderBookItems, TradePairs} from '../../../both/collections';

import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';

const TopInfo = Component({
  layout: ['layout'],
  pair: ['pair','pair']
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user(),
      pair: TradePairs.findOne({_id : this.props.pair._id}),
      currencies: Currencies.find({ published: true }, { sort: { name: 1 } }).fetch(),
      tradesLast: Trades.findOne({ pairId: this.props.pair._id }, {sort: {createdAt: -1}}),
      tradesHi: Trades.findOne({ pairId: this.props.pair._id }, {sort: {price: -1}}),
      tradesLo: Trades.findOne({ pairId: this.props.pair._id }, {sort: {price: 1}}),
      tradesBid: OrderBookItems.findOne( { pairId: this.props.pair._id , buy: false}, { sort: { price: 1 } } ),
      tradesAsk: OrderBookItems.findOne( { pairId: this.props.pair._id , buy: true}, { sort: { price: -1 } } ),
    };
  },
  getInitialState() {
    return {

    };
  },

  displayCurrent() {
    return this.props.active ? this.props.active.toUpperCase() : 'Choose a pair';
  },
  renderInfo(clss){
    console.log(this.data.pair);
    console.log(this.props.pair);
    return(
      <div className={clss}>
        <div className='item double'>
          <h4 className="ui header">Last price</h4>
          <p>{this.data.pair.lastPrice? (parseFloat(this.data.pair.lastPrice)/100000000).toFixed(4) : 0.0000}</p>
        </div>
        <div className='item double'>
          <h4 className="ui header">Bid/Ask</h4>
          <p>
            <span className="red text">{this.data.tradesBid? parseFloat(this.data.tradesBid.displayPrice()).toFixed(4) : 0.0000} </span>/
            <span className="green text"> {this.data.tradesAsk? parseFloat(this.data.tradesAsk.displayPrice()).toFixed(4) : 0.0000}</span>
          </p>
        </div>
        <div className='item double'>
          <h4 className="ui header">Range</h4>
          <p>
            <span className="text">{this.data.tradesLo? parseFloat(this.data.tradesLo.displayPrice()).toFixed(4) : 0.0000} </span>-
            <span className="text"> {this.data.tradesHi? parseFloat(this.data.tradesHi.displayPrice()).toFixed(4) : 0.0000}</span>
          </p>
        </div>
        <div className='item double'>
          <h4 className="ui header">Volume</h4>
          <p>{this.props.pair.dayVolume? (parseFloat(this.props.pair.dayVolume)/100000000).toFixed(4) : 0.0000}</p>
        </div>
      </div>
    )
  },
  componentDidMount() {
    let width=1;
    $(this.refs.runrow).find(".runrow_inner > .item").each(function(i){
      width += jQuery(this, i).outerWidth(true);
    });
    console.log(width, $(this.refs.runrow).width());
    if(width > $(this.refs.runrow).width()){
      $(this.refs.runrow).liScroll();
    }
  },

  render() {
    return (
      <div className="runrow">
        <div className="runrow_outer" ref="runrow">

            {this.renderInfo("runrow_inner")}

            {this.renderInfo("runrow_lcloner")}

            {this.renderInfo("runrow_rcloner")}

        </div>
      </div>
    );
  }
});
export default TopInfo;
