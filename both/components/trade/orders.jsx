Orders = React.createClass({
  getOrdersItems() {
    return [
      { price: 0.001, amount: 0.005467},
      { price: 0.00095, amount: 0.005467},
      { price: 0.0009, amount: 0.005467},
      { price: 0.00085, amount: 0.005467},
      { price: 0.0008, amount: 0.005467},
      { price: 0.00075, amount: 0.005467},
      { price: 0.0007, amount: 0.006685},
      { price: 0.00065, amount: 0.00093737},
      { price: 0.0006, amount: 0.09123},
      { price: 0.00055, amount: 0.005467},
      { price: 0.0005, amount: 0.006685},
      { price: 0.00045, amount: 0.00093737},
      { price: 0.0004, amount: 0.09123},
      { price: 0.00035, amount: 0.09123},
      { price: 0.0003, amount: 0.09123},
      { price: 0.00025, amount: 0.09123},
      { price: 0.0002, amount: 0.09123},
      { price: 0.00015, amount: 0.09123},
      { price: 0.0001, amount: 0.09123}
    ];
  },
  renderOrderItems() {

    return this.getOrdersItems(this.props.direction).map((item) => {
      return  (

        <tr key={item.price}>
          <td>{item.price}</td>
          <td>{item.amount}</td>
          <td>{(item.price * item.amount).toFixed(8)}</td>
        </tr>

      );

    });
  },
  render() {
    return (
      <div>
        <table className="ui selectable very compact very basic striped table nopadding nomargin">
          <thead>
            <tr className="lesspadding">
              <th>Price</th>
              <th>{this.props.valute1}</th>
              <th>{this.props.valute2}</th>
            </tr>
          </thead>
        </table>
        <div className="orderbook">
        <table className="ui selectable very compact very basic striped table">
          <tbody>
            { this.renderOrderItems() }
          </tbody>
        </table>
        </div>
      </div>
    );
  }
});
