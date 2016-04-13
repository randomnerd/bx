import React from 'react';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import { BitIndexIndicator_BTPR, TradePairs, Currencies } from '../../../both/collections';
// import BuySell from '../trade/buysell';
// import Trades from '../trade/lastTrades';
import Charts from '../bitindex';
// import Orders from '../trade/orderbook';
// import OpenOrders from '../trade/open_orders';
// import Balance from '../trade/balance';

const ChartsShow = Component({
}, {
  mixins: [ReactMeteorData],
  getInitialState: function() {
    return {
      chartType: 'candle',
      cartH:300
    };
  },


  getMeteorData() {
    let handle_BTPR = Meteor.subscribe('BitIndexIndicator_BTPR');
    let pair = TradePairs.findOne({permalink: this.props.active});

    return {
      pair: pair,
      BTPR_Loading: !handle_BTPR.ready(),
      BTPR: BitIndexIndicator_BTPR.find().fetch(),
      pairId: pair && pair._id,
      user: Meteor.user(),
      currency1: Currencies.findOne({_id: this.props.pair.currId}),
      currency2: Currencies.findOne({_id: this.props.pair.marketCurrId}),
    };
  },
  showCandle(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'candle'});
  },
  showLine() {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'line'});
  },
  showMACD(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'macd'});
  },
  showRSI(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'rsi'});
  },
  showSTO(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'sto'});
  },
  showBollinger(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'bollinger'});
  },
  showKagi(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'kagi'});
  },
  showPointandFigure(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'pointandfigure'});
  },
  showHaikinAshi(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'haikinashi'});
  },
  showRenko(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'renko'});
  },
  renderBlockChainIndicator() {
    switch (this.state.chartType) {


    case 'candle':
      return (
          <div><Charts.CandleStickStockScaleChartWithVolumeHistogramV3
          data = {this.data.BTPR.slice(200)} type = 'hybrid' height={this.state.chartH} /></div>
        );
      break;

    case 'line':
      return (
          <div><Charts.linechart data = {this.data.BTPR.slice(200)} type = 'hybrid' height={this.state.chartH} /></div>
        );
      break;


    case 'macd':
      return (
          <div><Charts.CandleStickChartWithMACDIndicator
          data = {this.data.BTPR.slice(200)} type = 'svg' height={this.state.chartH} /></div>
        );
      break;
    case 'rsi':
      return (
          <div><Charts.CandleStickChartWithRSIIndicator
          data = {this.data.BTPR.slice(200)} type = 'svg' height={this.state.chartH} /></div>
        );
      break;

    case 'sto':
      return (
          <div><Charts.CandleStickChartWithFullStochasticsIndicator
          data = {this.data.BTPR} type = 'svg' height={this.state.chartH} /></div>
        );
      break;

    case 'bollinger':
      return (
          <div>
            <Charts.CandleStickChartWithBollingerBandOverlay
            data = {this.data.BTPR} type = 'svg' height={this.state.chartH} />
          </div>
        );
      break;

    case 'kagi':
      return (
            <div><Charts.Kagi data = {this.data.BTPR}
             type = 'svg' height={this.state.chartH}/></div>
        );
      break;

    case 'pointandfigure':
      return (
            <div><Charts.PointAndFigureWithUpdatingData
            data = {this.data.BTPR} type = 'svg' height={this.state.chartH}/></div>
      );
      break;

    case 'haikinashi':
      return (
        <div><Charts.HaikinAshi
        data = {this.data.BTPR} type = 'svg' height={this.state.chartH}/></div>
      );
      break;

    case 'renko':

      return (
        <div><Charts.RenkoWithUpdatingData
        data = {this.data.BTPR} type = 'svg' height={this.state.chartH}/></div>
      );
      break;

    default:
      break;
    }
  },

  componentDidMount() {
    $(this.refs.drop).dropdown();
    this.setState({chartH:($(this.refs.chart).height()-70)});
    //console.log(this.state.chartH);
  },

  render() {

    return (
      <div className='ui basic segment h100' ref="chart">
        <h3 className='ui header'>PRICE CHART</h3>
          <div className='ui basic teal segment nopadding'>
            <div className='ui top attached tabular basic menu'>


              <div className="ui right dropdown item" ref="drop">
                <span className="text">Type</span>
                <i className="dropdown icon"></i>
                <div className='scrolling menu' ref='chartType'>
                  <a className='item active' onClick={this.showCandle}>
                    CandleStick
                  </a>
                  <a className='item' onClick={this.showLine}>
                    Line
                  </a>
                  <a className='item' onClick={this.showMACD}>
                    MACD
                  </a>
                  <a className='item' onClick={this.showRSI}>
                    RSI
                  </a>
                  <a className='item' onClick={this.showSTO}>
                    STO
                  </a>
                  <a className='item' onClick={this.showBollinger}>
                    Bollinger
                  </a>
                  <a className='item' onClick={this.showKagi}>
                    Kagi
                  </a>
                  <a className='item' onClick={this.showPointandFigure}>
                    P & F
                  </a>
                  <a className='item' onClick={this.showHaikinAshi}>
                    HaikinAshi
                  </a>
                  <a className='item' onClick={this.showRenko}>
                    Renko
                  </a>
                </div>
              </div>
            </div>
            <div className='ui basic segment nopadding'>
              {
                this.data.BTPR_Loading ? <div className='cube'></div> :
                this.renderBlockChainIndicator()
              }
            </div>
        </div>
      </div>
    );
  }
});
export default ChartsShow;
