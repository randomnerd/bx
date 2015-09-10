WalletOne = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      balance: Balances.findOne({currId: this.props.current}),
      currency: Currencies.findOne({_id:this.props.current}),
      wallet: Wallets.findOne({_id:this.props.current})
    }
  },
  newWallet(item, event) {
    if (!Meteor.user()) { return }
    var el = $(event.currentTarget);
    el.addClass('loading');
    el.attr('disabled', true);
    Meteor.call('jobs/wallet/newWallet', item._id, () => {
        el.removeClass('loading');
        el.attr('disabled', false);
    })
  },
  getAddress() {
    return this.data.wallet && this.data.wallet.address;
  },
  getBalance() {
    let amount = this.data.balance ? this.data.balance.amount / Math.pow(10, 8) : 0;
    return amount.toFixed(8);
  },
  showWithdraw(id){
    Dispatcher.dispatch({actionType: 'SHOW_WITHDRAW_MODAL', payload: { currId: id } });
  },
  renderWalletItems() {
    return this.data.currencies.map((item) => {
      var address = this.getAddress(item._id);
      var balance = this.getBalance(item._id);
      return  (

        <tr key={item._id}>
          <td className="two wide">{balance}</td>
          <td className="two wide">{item.shortName}</td>
          <td className="nine wide">
            { address ?
              address :
              <button className="ui mini button" onClick={this.newWallet.bind(this, item)}>Generate</button> }
          </td>
          <td className="three wide right aligned">
            <div className="ui mini buttons">
              <a className={"ui blue button" + (balance>0?'':" disabled")} onClick={this.showWithdraw} >
                Withdraw
              </a>
              <a className="ui button" href={"/u/wallet/" + item._id}>
                Details
              </a>
            </div>
          </td>
        </tr>

      );

    });
  },
  render() {
    return (
      <tr key={this.props.item._id}>
        <td className="two wide">{balance}</td>
        <td className="two wide">{this.props.item.shortName}</td>
        <td className="nine wide">
          { address ?
            address :
            <button className="ui mini button" onClick={this.newWallet.bind(this, item)}>Generate</button> }
        </td>
        <td className="three wide right aligned">
          <div className="ui mini buttons">
            <a className={"ui blue button" + (balance>0?'':" disabled")} onClick={this.showWithdraw} >
              Withdraw
            </a>
            <a className="ui button" href={"/u/wallet/" + item._id}>
              Details
            </a>
          </div>
        </td>
      </tr>
    );
  }
});