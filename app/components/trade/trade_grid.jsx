import React from 'react';
import { BitIndexIndicator_BTPR, TradePairs } from 'collections';
import BuySell from 'components/trade/buysell';
import Trades from 'components/trade/lastTrades';
import Charts from 'components/bitindex';
import Orders from 'components/trade/orderbook';
import OpenOrders from 'components/trade/open_orders';
import Balance from 'components/trade/balance';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState: function() {
    return {
      chartType: 'candle'
    };
  },
  getMeteorData() {
    let handle_BTPR = Meteor.subscribe('BitIndexIndicator_BTPR');
    let pair = TradePairs.findOne({permalink: this.props.active});

    return {
      pair: pair,
      BTPR_Loading: !handle_BTPR.ready(),
      BTPR: BitIndexIndicator_BTPR.find().fetch(),
      pairId: pair && pair._id

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
          data = {this.data.BTPR.slice(200)} type = 'hybrid' height={350} /></div>
        );
      break;

    case 'line':
      return (
          <div><Charts.linechart data = {this.data.BTPR.slice(200)} type = 'hybrid' height={350} /></div>
        );
      break;


    case 'macd':
      return (
          <div><Charts.CandleStickChartWithMACDIndicator
          data = {this.data.BTPR.slice(200)} type = 'svg' height={350} /></div>
        );
      break;
    case 'rsi':
      return (
          <div><Charts.CandleStickChartWithRSIIndicator
          data = {this.data.BTPR.slice(200)} type = 'svg' height={350} /></div>
        );
      break;

    case 'sto':
      return (
          <div><Charts.CandleStickChartWithFullStochasticsIndicator
          data = {this.data.BTPR} type = 'svg' height={350} /></div>
        );
      break;

    case 'bollinger':
      return (
          <div>
            <Charts.CandleStickChartWithBollingerBandOverlay
            data = {this.data.BTPR} type = 'svg' height={350} />
          </div>
        );
      break;

    case 'kagi':
      return (
            <div><Charts.Kagi data = {this.data.BTPR}
             type = 'svg' height={350}/></div>
        );
      break;

    case 'pointandfigure':
      return (
            <div><Charts.PointAndFigureWithUpdatingData
            data = {this.data.BTPR} type = 'svg' height={350}/></div>
      );
      break;

    case 'haikinashi':
      return (
        <div><Charts.HaikinAshi
        data = {this.data.BTPR} type = 'svg' height={350}/></div>
      );
      break;

    case 'renko':

      return (
        <div><Charts.RenkoWithUpdatingData
        data = {this.data.BTPR} type = 'svg' height={350}/></div>
      );
      break;

    default:
      break;
    }
  },
  render() {
    return (
      <div className="ui main fluid container">
        <div className='ux grid fullheight'>
          <div className='ux column left fullheight'>
            <div className='ux column balance fullheight padding'>
              <div className='ui basic segment h100'>
                <h3 className='ui header'>BALANCE</h3>
                <Balance pairId={this.data.pairId} pair={this.data.pair} />
                <BuySell pairId={this.data.pairId} />
              </div>
            </div>
          </div>
          <div className='ux column center fullheight'>
            <div className='ux column chart padding'>
              <div className='ux container fix400'>
                <div className='ux fixchart container'>
                  <div className='ui basic segment h100'>
                    <h3 className='ui header'>PRICE CHART</h3>
                      <div className='ui basic teal segment nopadding'>
                        <div className='ui top attached tabular basic menu'>
                          <div className='right menu' ref='chartType'>
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
                        <div className='ui basic segment nopadding'>
                          {
                            this.data.BTPR_Loading ? <div className='cube'></div> :
                            this.renderBlockChainIndicator()
                          }
                        </div>
                    </div>
                  </div>
                </div>
                <div className='ux fixorders container'>
                  <div className='ui basic segment h100'>
                    <h3 className='ui header'>MY ORDERS</h3>
                    <OpenOrders
                      pairId={this.data.pairId}
                      valute1={this.props.active.toUpperCase().split("-")[0]}
                      valute2={this.props.active.toUpperCase().split("-")[1]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='ux column right double fullheight'>
            <div className='ux column orders fullheight padding'>
              <div className='ui basic segment h100'>
                  <h3 className='ui header'>ORDER BOOK</h3>
                  <Orders direction='sell'
                    pairId={this.data.pairId}
                    valute1={this.props.active.toUpperCase().split("-")[0]}
                    valute2={this.props.active.toUpperCase().split("-")[1]} />
              </div>
            </div>
            <div className='ux column history fullheight padding'>
              <div className='ui basic segment h100'>
                <h3 className='ui header'>TRADE HISTORY</h3>

                  <Trades
                    pairId={this.data.pairId}
                    valute1={this.props.active.toUpperCase().split("-")[0]}
                    valute2={this.props.active.toUpperCase().split("-")[1]} />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
