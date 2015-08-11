WalletPage = React.createClass({
  mixins: [ReactMeteorData],
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
          <td className="two wide">{item.shortName}</td>
          <td className="nine wide"><div  className="ui mini button">Generete</div></td>
          <td className="three wide right aligned">
            <div className="ui mini buttons">
              <a className="ui blue button">
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
      <div>
        <div className="ui grid">
          <div className="three column row">
            <div className="column">
              <div className="ui segments">
                <div className="ui secondary segment">
                  <h4>Available</h4>
                </div>
                <div className="ui small blue segment">
                  <h1 className="ui header center aligned">123 ANC</h1>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui segments">
                <div className="ui secondary segment">
                  <h4>Held for orders</h4>
                </div>
                <div className="ui small blue segment">
                  <h1 className="ui header center aligned">123 ANC</h1>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui segments">
                <div className="ui secondary segment">
                  <h4>Total</h4>
                </div>
                <div className="ui small blue segment">
                  <h1 className="ui header center aligned">123 ANC</h1>
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

          </div>
        </div>
      </div>
    );
  }
});
