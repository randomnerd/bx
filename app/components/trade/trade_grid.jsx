import React from 'react';
import { BitIndexIndicator_BTPR } from 'collections';
import BuySell from 'components/trade/buysell';
import Trades from 'components/trade/lastTrades';
import Charts from 'components/bitindex';
import Orders from 'components/trade/orderbook';
import OpenOrders from 'components/trade/open_orders';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState: function() {
    return {
      chartType: 'candle'
    };
  },
  getMeteorData() {
    let handle_BTPR = Meteor.subscribe('BitIndexIndicator_BTPR');

    return {

      BTPR_Loading: !handle_BTPR.ready(),
      BTPR: BitIndexIndicator_BTPR.find().fetch(),

    };
  },

  showCandle(event) {
    //console.log(item)
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'candle'});
  },
  showMACD(event) {
    //console.log(item)
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'macd'});
  },
  showRSI(event) {
    //console.log(item)
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'rsi'});
  },
  showSTO(event) {
    //console.log(item)
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'sto'});
  },
  showBollinger(event) {
    //console.log(item)
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'bollinger'});
  },
  showKagi(event) {
    //console.log(item)
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'kagi'});
  },
  showPointandFigure(event) {
    //console.log(item)
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'pointandfigure'});
  },


  renderBlockChainIndicator() {
    switch (this.state.chartType) {
    case 'candle':
      return (
          <div><Charts.CandleStickStockScaleChartWithVolumeHistogramV3
          data = {this.data.BTPR.slice(200)} type = 'svg' height={350} /></div>
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
      default:

    }
  },
  render() {
    return (
      <div className='ux grid fullheight'>
        <div className='ux column left double fullheight'>
          <div className='ux column balance fullheight padding'>
            <div className='ui basic segment h100'>
              <h3 className='ui header'>BALANCE</h3>
              <BuySell currency={this.props.active.toUpperCase()} direction='buy'/>
            </div>
          </div>
          <div className='ux column orders fullheight padding'>
            <div className='ui basic segment h100'>

                <h3 className='ui header'>ORDER BOOK</h3>

                <Orders valute1={this.props.active.toUpperCase()} valute2='BTC' direction='sell' />

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
                  <h3 className='ui header'>OPEN ORDERS</h3>
                  <OpenOrders valute1='ANC' valute2='BTC' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ux column right fullheight'>
          <div className='ux column history fullheight padding'>
            <div className='ui basic segment h100'>
              <h3 className='ui header'>TRADE HISTORY</h3>

                <Trades valute1={this.props.active.toUpperCase()} valute2='BTC' />

            </div>
          </div>
        </div>
      </div>
    );
  }
});
