TradePage = React.createClass({

  render() {
    return (
      <div>
        <div className="ui segments">
          <div className="ui secondary segment">
            <p>Graph</p>
          </div>
          <div className="ui red segment nopaddingtop">

          </div>
        </div>
        <div className="ui grid">
          <div className="eight wide column">
            <div className="ui segments">
              <div className="ui secondary segment">
                <p>Sell orders</p>
              </div>
              <div className="ui red segment nopaddingtop">
                <Orders valute1={this.props.active.toUpperCase()} valute2='BTC' />
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui segments">
              <div className="ui secondary segment">
                <p>Buy orders</p>
              </div>
              <div className="ui red segment nopaddingtop">
                <Orders valute1={this.props.active.toUpperCase()} valute2='BTC' />
              </div>
            </div>
          </div>
        </div>
        <div className="ui segments">
          <div className="ui secondary segment nopaddingtop">
            <p>Last market trades</p>
          </div>
          <div className="ui red segment">
            <Trades valute1={this.props.active.toUpperCase()} valute2='BTC' />
          </div>
        </div>
      </div>
    );
  }
});
