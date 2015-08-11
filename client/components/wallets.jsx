WalletsPage = React.createClass({

  getMeteorData() {
    return {
      currencies: Currencies.find({}, {sort: {name: 1}}).fetch()
    }
  },
  renderWalletItems() {
    return this.data.currencies.map((item) => {
      return  (

        <tr key={item._id}>
          <td className="two wide">0</td>
          <td className="three wide">{item.currency}</td>
          <td className="eight wide"><div  className="ui button">Generete</div></td>
          <td className="three wide">
            <div className="ui icon buttons">
              <a className="ui blue button" onClick="">
                <i className="write icon"></i>
                Withdraw
              </a>
              <div className="ui button" href={"/wallets/view/" + item._id}>
                <i className="search icon"></i>
                Details
              </div>
            </div>
          </td>
        </tr>

      );

    });
  },
  render() {
    return (
      <div className="ui segments">
        <div className="ui secondary segment">
          <h4>Wallets</h4>
        </div>
        <div className="ui blue segment basic nopaddingtop">
          <table className="ui selectable very compact very basic striped table nopadding nomargin">
            <thead>
              <tr className="lesspadding">
                <th className="two wide" >Amount</th>
                <th className="three wide" >Coin</th>
                <th className="eight wide">Deposit address</th>
                <th className="three wide">Actions</th>
              </tr>
            </thead>
          </table>
          <div className="scrollable10rows">
            <table className="ui selectable very compact very basic striped table">
              <tbody>
                { this.renderWalletItems() }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});
