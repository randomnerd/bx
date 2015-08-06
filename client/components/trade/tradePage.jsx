TradePage = React.createClass({

  render() {
    return (
      <div>
        <div className="ui segments">
          <div className="ui secondary segment">
            <h4>Graph</h4>
          </div>
          <div className="ui blue segment nopaddingtop">

          </div>
        </div>
        <div className="ui grid">
          <div className="eight wide column">
            <BuySell currency={this.props.active.toUpperCase()} direction="buy"/>
          </div>
          <div className="eight wide column">
            <BuySell currency={this.props.active.toUpperCase()} direction="sell"/>
          </div>
        </div>
        <div className="ui grid">
          <div className="eight wide column">
            <div className="ui segments">
              <div className="ui secondary segment">
                <h4>Sell orders</h4>
              </div>
              <div className="ui small red segment">
                <Orders valute1={this.props.active.toUpperCase()} valute2='BTC' direction="sell" />
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui segments">
              <div className="ui secondary segment">
                <h4>Buy orders</h4>
              </div>
              <div className="ui small green segment">
                <Orders valute1={this.props.active.toUpperCase()} valute2='BTC' direction="buy" />
              </div>
            </div>
          </div>
        </div>
        <div className="ui segments">
          <div className="ui secondary segment">
            <h4>Last market trades</h4>
          </div>
          <div className="ui small blue segment">
            <Trades valute1={this.props.active.toUpperCase()} valute2='BTC' />
          </div>
        </div>
      </div>
    );
  }
});
