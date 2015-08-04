TradePage = React.createClass({

  render() {
    return (
      <div>
        <div className="ui segments">
          <div className="ui secondary segment">
            <h4>Graph</h4>
          </div>
          <div className="ui red segment nopaddingtop">

          </div>
        </div>
        <div className="ui grid">
          <div className="eight wide column">
            <div className="ui segments">
              <div className="ui secondary segment">
                <h4>Sell orders</h4>
              </div>
              <div className="ui small red segment">
                <Orders valute1={this.props.active.toUpperCase()} valute2='BTC' />
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui segments">
              <div className="ui secondary segment">
                <h4>Buy orders</h4>
              </div>
              <div className="ui small red segment">
                <Orders valute1={this.props.active.toUpperCase()} valute2='BTC' />
              </div>
            </div>
          </div>
        </div>
        <div className="ui segments">
          <div className="ui secondary segment">
            <h4>Last market trades</h4>
          </div>
          <div className="ui red segment nopaddingtop scrollable10rows">
            <Trades valute1={this.props.active.toUpperCase()} valute2='BTC' />
          </div>
        </div>
      </div>
    );
  }
});
