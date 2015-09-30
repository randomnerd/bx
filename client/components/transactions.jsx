TransactionsPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      balance: Balances.findOne({currId: this.props.current}),
      currency: Currencies.findOne({_id:this.props.current}),
      withdrawals: Withdrawals.find({currId: this.props.current}, {limit: 30, sort: {createdAt: -1}}).fetch(),
      deposits: Transactions.find({currId: this.props.current}, {limit: 30, sort: {createdAt: -1}}).fetch()
    }
  },

  renderHistoryItems() {
    let unsortedItems = this.data.deposits.concat(this.data.withdrawals);
    let items = unsortedItems.sort((a, b) => {
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });
    return items.map((item) => {
      let cls = item.constructor.name === 'Transaction' ? 'positive' : 'negative';
      return  (
        <tr key={item._id} className={cls}>
          <td className="three wide">{moment(item.createdAt).fromNow()}</td>
          <td className="five wide">{item.address}</td>
          <td className="three wide">{item.displayAmount()}</td>
          <td className="two wide">{item.fee ? item.displayFee() : '-'}</td>
          <td className="three wide">{item.displayChanged()}</td>
        </tr>

      );

    });
  },

  showWithdraw(){
    Dispatcher.dispatch({actionType: 'SET_WITHDRAWAL_CURRENCY', payload: this.props.current});
    Dispatcher.dispatch({actionType: 'SHOW_WITHDRAW_MODAL'});
  },

  render() {
    return (
      <div>
        <div className="ui header clearfix">
          <button className="ui right floated blue button" onClick={this.showWithdraw}>
            Withdraw {this.data.currency.shortName}
          </button>
          <h1>{this.data.currency.name} balance</h1>
        </div>
        <div className="ui grid">
          <div className="three column row">
            <div className="column">
              <div className="ui segments">
                <div className="ui secondary segment">
                  <h4>Available</h4>
                </div>
                <div className="ui small blue segment">
                  <h2 className="ui header center aligned">
                    {this.data.balance.displayAmount()} {this.data.currency.shortName}
                  </h2>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui segments">
                <div className="ui secondary segment">
                  <h4>Held for orders</h4>
                </div>
                <div className="ui small blue segment">
                  <h2 className="ui header center aligned">
                    {this.data.balance.displayHeld()} {this.data.currency.shortName}
                  </h2>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui segments">
                <div className="ui secondary segment">
                  <h4>Total</h4>
                </div>
                <div className="ui small blue segment">
                  <h2 className="ui header center aligned">
                    {this.data.balance.displayTotal()} {this.data.currency.shortName}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui segments">
          <div className="ui secondary segment">
            <h4>Transactions</h4>
          </div>
          <div className="ui small blue segment">
            <table className="ui selectable very compact very basic striped table nomargin">
              <thead>
                <tr className="lesspadding">
                  <th className="four wide" >Time</th>
                  <th className="five wide" >Address</th>
                  <th className="three wide">Amount</th>
                  <th className="two wide">Fee</th>
                  <th className="three wide">Balance</th>
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
