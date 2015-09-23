TransactionsPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      balance: Balances.findOne({currId: this.props.current}),
      currency: Currencies.findOne({_id:this.props.current}),
      history: Transactions.find({currId: this.props.current}, {limit: 30}, {sort: {createdAt: -1}}).fetch()
    }
  },
  getBalance() {
    let amount = this.data.balance ? this.data.balance.amount / Math.pow(10, 8) : 0;
    return amount.toFixed(8);
  },
  getHeld() {
    let held = this.data.balance ? this.data.balance.held / Math.pow(10, 8) : 0;
    return held.toFixed(8);
  },
  getAvalable() {
    let avalable = this.getBalance()-this.getHeld();
    return avalable.toFixed(8);
  },

  renderHistoryItems() {
    return this.data.history.map((item) => {
      return  (

        <tr key={item._id} className={item.direction?"positive":"negative"}>
          <td className="four wide">{moment(item.createdAt).fromNow()}</td>
          <td className="five wide">{item.address}</td>
          <td className="three wide">{item.amount}</td>
          <td className="four wide right aligned">

          </td>
        </tr>

      );

    });
  },

  render() {
    return (
      <div>
        <h1 className="ui header">AnonCoin balance</h1>
        <div className="ui grid">
          <div className="three column row">
            <div className="column">
              <div className="ui segments">
                <div className="ui secondary segment">
                  <h4>Available</h4>
                </div>
                <div className="ui small blue segment">
                  <h1 className="ui header center aligned">{this.getBalance()} {this.data.currency?this.data.currency.shortName:''}</h1>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui segments">
                <div className="ui secondary segment">
                  <h4>Held for orders</h4>
                </div>
                <div className="ui small blue segment">
                  <h1 className="ui header center aligned">{this.getHeld()} {this.data.currency?this.data.currency.shortName:''}</h1>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui segments">
                <div className="ui secondary segment">
                  <h4>Total</h4>
                </div>
                <div className="ui small blue segment">
                  <h1 className="ui header center aligned">{this.getAvalable()} {this.data.currency?this.data.currency.shortName:''}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui segments">
          <div className="ui secondary segment">
            <h4>ANC balance history</h4>
          </div>
          <div className="ui small blue segment">
            <table className="ui selectable very compact very basic striped table nomargin">
              <thead>
                <tr className="lesspadding">
                  <th className="four wide" >Created at</th>
                  <th className="five wide" >Address</th>
                  <th className="three wide">Amount</th>
                  <th className="four wide">Total balance</th>
                </tr>
              </thead>
            </table>
            <div className="scrollable10rows">
              <table className="ui selectable very compact very basic striped table">
                <tbody>
                  { this.renderHistoryItems() }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
