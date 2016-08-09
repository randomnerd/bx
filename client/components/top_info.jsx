import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Currencies, Trades, OrderBookItems, TradePairs} from '../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';

const TopInfo = connect({
  layout: ['layout'],
  pair: ['pair', 'pair']
}, class TopInfo extends React.Component {
  displayCurrent() {
    return this.props.active ? this.props.active.toUpperCase() : 'Choose a pair';
  }

  render() {
    return (
      <div>

        <div className='item double'>
          <h4 className="ui header">Last price</h4>
          <p>{this.data.pair.lastPrice? parseFloat(this.data.pair.lastPrice).toFixed(4) : 0.0000}</p>
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
          <p>{this.data.pair.dayVolume? parseFloat(this.data.pair.dayVolume).toFixed(4) : 0.0000}</p>
        </div>
      </div>
    );
  }
});

export default TopInfoContainer = createContainer(({ params }) => {
  return {
    pair: TradePairs.findOne({_id: this.props.pair._id}),
    user: Meteor.user(),
    currencies: Currencies.find({ published: true }, { sort: { name: 1 } }).fetch(),
    tradesLast: Trades.findOne({ pairId: this.props.pair._id }, {sort: {createdAt: -1}}),
    tradesHi: Trades.findOne({ pairId: this.props.pair._id }, {sort: {price: -1}}),
    tradesLo: Trades.findOne({ pairId: this.props.pair._id }, {sort: {price: 1}}),
    tradesBid: OrderBookItems.findOne( { pairId: this.props.pair._id , buy: false}, { sort: { price: 1 } } ),
    tradesAsk: OrderBookItems.findOne( { pairId: this.props.pair._id , buy: true}, { sort: { price: -1 } } ),
  };
}, TopInfo);
