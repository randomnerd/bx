import React from 'react';
import {BitIndexIndicator_BTPR} from 'collections';

export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {

    var handle_BTPR = Meteor.subscribe("BitIndexIndicator_BTPR");

    return {

      BTPR_Loading: !handle_BTPR.ready(),

        BTPR: BitIndexIndicator_BTPR.find().fetch(),

    }
  },

  renderBlockChainIndicator() {
    return(
      <div><CandleStickChartWithBollingerBandOverlay data = {this.data.BTPR} type = "svg" /></div>
    )

  },

  render() {
    return (
      <div className="ui grid">
        <div className="three wide column">
          <div className="ui basic segment h100">
            <h3 className="ui header">AVAILABLE BALANCE</h3>
            <BuySell currency={this.props.active.toUpperCase()} direction="buy"/>
          </div>
        </div>
        <div className="three wide column">
          <div className="ui basic segment h100">

              <h3 className="ui header">ORDER BOOK</h3>

              <div className="ui basic small red segment h50">
                <Orders valute1={this.props.active.toUpperCase()} valute2='BTC' direction="sell" />
              </div>

              <div className="ui basic small green segment h50">
                <Orders valute1={this.props.active.toUpperCase()} valute2='BTC' direction="buy" />
              </div>
          </div>
        </div>
        <div className="seven wide column">
          <div className="ui basic segment h100">
            <h3 className="ui header">PRICE CHART</h3>
            <div className="ui basic teal segment h50">
              {this.data.BTPR_Loading?<div className="cube"></div>:
                this.renderBlockChainIndicator()
              }
            </div>
            <div className="ui basic segment h50">
              <OpenOrders valute1="ANC" valute2='BTC' />
            </div>
          </div>
        </div>



        <div className="three wide column">
          <div className="ui basic segment h100">
            <h3 className="ui header">TRADE HISTORY</h3>
            <div className="ui small teal segment">
              <Trades valute1={this.props.active.toUpperCase()} valute2='BTC' />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
