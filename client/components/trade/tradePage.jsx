TradePage = React.createClass({
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
          <div className="ui basic segment">
            <BuySell currency={this.props.active.toUpperCase()} direction="buy"/>
          </div>
          <div className="ui basic segment">
            <BuySell currency={this.props.active.toUpperCase()} direction="sell"/>
          </div>
        </div>
        <div className="three wide column">
          <div className="ui basic segment">
              <div className="ui basic secondary segment">
                <h4>Order book</h4>
              </div>
              <div className="ui basic small red segment">
                <Orders valute1={this.props.active.toUpperCase()} valute2='BTC' direction="sell" />
              </div>

              <div className="ui basic small green segment">
                <Orders valute1={this.props.active.toUpperCase()} valute2='BTC' direction="buy" />
              </div>
          </div>
        </div>
        <div className="seven wide column">
          <div className="ui basic segment">
            {this.data.BTPR_Loading?<div className="cube"></div>:
              this.renderBlockChainIndicator()
            }
          </div>
        </div>



        <div className="three wide column">
          <div className="ui basic segment">
            <div className="ui segments">
              <div className="ui secondary segment">
                <h4>Trade history</h4>
              </div>
              <div className="ui small blue segment">
                <Trades valute1={this.props.active.toUpperCase()} valute2='BTC' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
