WalletPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currency: Currencies.findOne({_id:this.props.current})
    }
  },
  getHistory(){
    return [
      {_id:1,operation_id:104535,direction:true,time:'24.06.1984',details:"Mining reward for block #139968 | 0.00760112 ANC",total:12},
      {_id:2,operation_id:345356,direction:true,time:'23.06.1984',details:'Mining reward for block #139968 | 0.00760112 ANC',total:126},
      {_id:3,operation_id:356345,direction:true,time:'22.06.1984',details:'Mining reward for block #139968 | 0.00760112 ANC',total:15},
      {_id:4,operation_id:356655,direction:false,time:'21.06.1984',details:'Mining reward for block #139968 | 0.00760112 ANC',total:10},
      {_id:5,operation_id:653465,direction:true,time:'20.06.1984',details:'Mining reward for block #139968 | 0.00760112 ANC',total:12},
      {_id:6,operation_id:345266,direction:true,time:'18.06.1984',details:'Mining reward for block #139968 | 0.00760112 ANC',total:7},
      {_id:7,operation_id:657432,direction:false,time:'13.06.1984',details:'Mining reward for block #139968 | 0.00760112 ANC',total:12},
      {_id:8,operation_id:165436,direction:true,time:'10.06.1984',details:'Mining reward for block #139968 | 0.00760112 ANC',total:32},
    ]
  },
  renderWalletItems() {
    return this.getHistory().map((item) => {
      return  (

        <tr key={item._id} className={item.direction?"positive":"negative"}>
          <td className="two wide">{item.operation_id}</td>
          <td className="two wide">{item.time}</td>
          <td className="nine wide">{item.details}</td>
          <td className="three wide right aligned">
            {item.total}
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
            <table className="ui selectable very compact very basic striped table nomargin">
              <thead>
                <tr className="lesspadding">
                  <th className="two wide" >ID</th>
                  <th className="two wide" >Time</th>
                  <th className="nine wide">Details</th>
                  <th className="three wide">Total balance</th>
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
      </div>
    );
  }
});
