TradeGrid = React.createClass({
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
      <div><CandleStickChartWithBollingerBandOverlay data = {this.data.BTPR} type = "svg" height="400" /></div>
    )

  },

  render() {
    return (
      <div className="ux grid fullheight">
        <div className="ux column left double fullheight">
          <div className="ux column balance fullheight padding">
            <div className="ui basic segment h100">
              <h3 className="ui header">AVAILABLE BALANCE</h3>
              <BuySell currency={this.props.active.toUpperCase()} direction="buy"/>
            </div>
          </div>
          <div className="ux column orders fullheight padding">
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
        </div>
        <div className="ux column center fullheight">
          <div className="ux column chart padding">
            <div className="ui basic segment h100">
              <h3 className="ui header">PRICE CHART</h3>
                <div className="ui basic teal segment">
                {this.data.BTPR_Loading?<div className="cube"></div>:
                  this.renderBlockChainIndicator()
                }
              </div>
              <div className="ui basic segment">
                <OpenOrders valute1="ANC" valute2='BTC' />
              </div>
            </div>
          </div>
        </div>
        <div className="ux column right fullheight">
          <div className="ux column history fullheight padding">
            <div className="ui basic segment h100">
              <h3 className="ui header">TRADE HISTORY</h3>
              <div className="ui basic teal segment h100 noheader">
                <Trades valute1={this.props.active.toUpperCase()} valute2='BTC' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
