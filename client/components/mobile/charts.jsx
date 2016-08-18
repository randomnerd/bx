import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {BitIndexIndicator_BTPR, TradePairs, Currencies} from '../../../both/collections';
// import BuySell from '../trade/buysell';
// import Trades from '../trade/lastTrades';
import Charts from '../bitindex';
// import Orders from '../trade/orderbook';
// import OpenOrders from '../trade/open_orders';
// import Balance from '../trade/balance';
import { createContainer } from 'meteor/react-meteor-data';

const ChartsShow = connect({

}, class ChartsShow extends React.Component {
    state = {chartType: 'candle', cartH: 300};

    showCandle(event) {
        $(this.refs.chartType).find('.item').removeClass('active');
        $(event.currentTarget).addClass('active');
        this.setState({chartType: 'candle'});
    }
    showLine() {
        $(this.refs.chartType).find('.item').removeClass('active');
        $(event.currentTarget).addClass('active');
        this.setState({chartType: 'line'});
    }
    showMACD(event) {
        $(this.refs.chartType).find('.item').removeClass('active');
        $(event.currentTarget).addClass('active');
        this.setState({chartType: 'macd'});
    }
    showRSI(event) {
        $(this.refs.chartType).find('.item').removeClass('active');
        $(event.currentTarget).addClass('active');
        this.setState({chartType: 'rsi'});
    }
    showSTO(event) {
        $(this.refs.chartType).find('.item').removeClass('active');
        $(event.currentTarget).addClass('active');
        this.setState({chartType: 'sto'});
    }
    showBollinger(event) {
        $(this.refs.chartType).find('.item').removeClass('active');
        $(event.currentTarget).addClass('active');
        this.setState({chartType: 'bollinger'});
    }
    showKagi(event) {
        $(this.refs.chartType).find('.item').removeClass('active');
        $(event.currentTarget).addClass('active');
        this.setState({chartType: 'kagi'});
    }
    showPointandFigure(event) {
        $(this.refs.chartType).find('.item').removeClass('active');
        $(event.currentTarget).addClass('active');
        this.setState({chartType: 'pointandfigure'});
    }
    showHaikinAshi(event) {
        $(this.refs.chartType).find('.item').removeClass('active');
        $(event.currentTarget).addClass('active');
        this.setState({chartType: 'haikinashi'});
    }
    showRenko(event) {
        $(this.refs.chartType).find('.item').removeClass('active');
        $(event.currentTarget).addClass('active');
        this.setState({chartType: 'renko'});
    }
    renderBlockChainIndicator() {
        switch (this.state.chartType) {

            case 'candle':
                return (
                    <div><Charts.candelstick_mobile data={this.props.BTPR} type='hybrid' height={350} height_bar = {150}/></div>
                );
                break;å

            case 'line':
                return (
                    <div><Charts.candelstick_mobile data={this.props.BTPR.slice(200)} type='hybrid' height={350} height_bar = {150}/></div>
                );
                break;

            case 'macd':
                return (
                    <div><Charts.candelstick_default data={this.props.BTPR.slice(200)} type='svg' height={350}/></div>
                );
                break;
            case 'rsi':
                return (
                    <div><Charts.candelstick_default data={this.props.BTPR.slice(200)} type='svg' height={350}/></div>
                );
                break;

            case 'sto':
                return (
                    <div><Charts.candelstick_default data={this.props.BTPR} type='svg' height={350}/></div>
                );
                break;

            case 'bollinger':
                return (
                    <div>
                        <Charts.candelstick_default data={this.props.BTPR} type='svg' height={350}/>
                    </div>
                );
                break;

            case 'kagi':
                return (
                    <div><Charts.candelstick_default data={this.props.BTPR} type='svg' height={350}/></div>
                );
                break;

            case 'pointandfigure':
                return (
                    <div><Charts.candelstick_default data={this.props.BTPR} type='svg' height={350}/></div>
                );
                break;

            case 'haikinashi':
                return (
                    <div><Charts.candelstick_default data={this.props.BTPR} type='svg' height={350}/></div>
                );
                break;

            case 'renko':

                return (
                    <div><Charts.candelstick_default data={this.props.BTPR} type='svg' height={350}/></div>
                );
                break;

            default:
                break;
        }
    }

    componentDidMount() {
        $(this.refs.drop).dropdown();
        this.setState({
            chartH: ($(this.refs.chart).height() - 70)
        });
        //console.log(this.state.chartH);
    }

    render() {

        return (
            <div className='ui basic segment h100 charts' ref="chart">
                <h3 className='ui header'>PRICE CHART</h3>
                <div className='ui basic teal segment nopadding'>
                    <div className='ui top attached tabular basic menu'>

                        <div className="ui right dropdown item" ref="drop">
                            <span className="text">Type</span>
                            <i className="dropdown icon"></i>
                            <div className='scrolling menu' ref='chartType'>
                                <a className='item active' onClick={this.showCandle.bind(this)}>
                                    CandleStick
                                </a>
                                <a className='item' onClick={this.showLine.bind(this)}>
                                    Line
                                </a>
                                <a className='item' onClick={this.showMACD.bind(this)}>
                                    MACD
                                </a>
                                <a className='item' onClick={this.showRSI.bind(this)}>
                                    RSI
                                </a>
                                <a className='item' onClick={this.showSTO.bind(this)}>
                                    STO
                                </a>]
                                <a className='item' onClick={this.showBollinger.bind(this)}>
                                    Bollinger
                                </a>
                                <a className='item' onClick={this.showKagi.bind(this)}>
                                    Kagi
                                </a>
                                <a className='item' onClick={this.showPointandFigure.bind(this)}>
                                    P & F
                                </a>
                                <a className='item' onClick={this.showHaikinAshi.bind(this)}>
                                    HaikinAshi
                                </a>
                                <a className='item' onClick={this.showRenko.bind(this)}>
                                    Renko
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='ui basic segment nopadding'>
                        {this.props.BTPR_Loading
                            ? <div className='cube'></div>
                            : this.renderBlockChainIndicator()
                        }
                    </div>
                </div>
            </div>
        );
    }
});
export default ChartsShowContainer = createContainer((props) => {
  let handle_BTPR = Meteor.subscribe('BitIndexIndicator_BTPR');
  let pair = TradePairs.findOne({permalink: props.active});

  return {
      pair: pair,
      BTPR_Loading: !handle_BTPR.ready(),
      BTPR: BitIndexIndicator_BTPR.find().fetch(),
      pairId: pair && pair._id,
      user: Meteor.user(),
      currency1: Currencies.findOne({_id: props.pair.currId}),
      currency2: Currencies.findOne({_id: props.pair.marketCurrId})
  };
}, ChartsShow);
