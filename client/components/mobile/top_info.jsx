import React from 'react';
import {Currencies, Trades, OrderBookItems, TradePairs} from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';

const TopInfo = connect({
}, class TopInfo extends React.Component {

  displayCurrent() {
    return this.props.active ? this.props.active.toUpperCase() : 'Choose a pair';
  }
  renderInfo(clss){
    //console.log(this.props.pair);
    //console.log(this.props.pair);
    return(
      <div className={clss}>
        <div className='item double'>
          <h4 className="ui header">Last price</h4>
          <p>{this.props.pair.lastPrice? (parseFloat(this.props.pair.lastPrice)/100000000).toFixed(4) : 0.0000}</p>
        </div>
        <div className='item double'>
          <h4 className="ui header">Bid/Ask</h4>
          <p>
            <span className="red text">{this.props.tradesBid? parseFloat(this.props.tradesBid.displayPrice()).toFixed(4) : 0.0000} </span>/
            <span className="green text"> {this.props.tradesAsk? parseFloat(this.props.tradesAsk.displayPrice()).toFixed(4) : 0.0000}</span>
          </p>
        </div>
        <div className='item double'>
          <h4 className="ui header">Range</h4>
          <p>
            <span className="text">{this.props.tradesLo? parseFloat(this.props.tradesLo.displayPrice()).toFixed(4) : 0.0000} </span>-
            <span className="text"> {this.props.tradesHi? parseFloat(this.props.tradesHi.displayPrice()).toFixed(4) : 0.0000}</span>
          </p>
        </div>
        <div className='item double'>
          <h4 className="ui header">Volume</h4>
          <p>{this.props.pair.dayVolume? (parseFloat(this.props.pair.dayVolume)/100000000).toFixed(4) : 0.0000}</p>
        </div>
      </div>
    )
  }
  componentDidMount() {
    let width=1;
    $(this.refs.runrow).find(".runrow_inner > .item").each(function(i){
      width += jQuery(this, i).outerWidth(true);
    });
    //console.log(width, $(this.refs.runrow).width());
    if(width > $(this.refs.runrow).width()){
      $(this.refs.runrow).liScroll();
    }
  }

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
export default TopInfoContainer = createContainer((props) => {
  let pair = TradePairs.findOne({permalink : props.pair_link});
  return {
    user: Meteor.user(),
    pair: pair,
    currencies: Currencies.find({ published: true }, { sort: { name: 1 } }).fetch(),
    tradesLast: Trades.findOne({ pairId: pair._id }, {sort: {createdAt: -1}}),
    tradesHi: Trades.findOne({ pairId: pair._id }, {sort: {price: -1}}),
    tradesLo: Trades.findOne({ pairId: pair._id }, {sort: {price: 1}}),
    tradesBid: OrderBookItems.findOne( { pairId: pair._id , buy: false}, { sort: { price: 1 } } ),
    tradesAsk: OrderBookItems.findOne( { pairId: pair._id , buy: true}, { sort: { price: -1 } } ),
  };
}, TopInfo);
