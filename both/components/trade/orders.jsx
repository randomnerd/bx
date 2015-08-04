Orders = React.createClass({
  getOrdersItems(derection) {
    return [
      { price: 0.0005, amount: 0.005467},
      { price: 0.00001, amount: 0.006685},
      { price: 0.004, amount: 0.00093737},
      { price: 0.0003, amount: 0.09123},
      { price: 0.0002, amount: 0.005467},
      { price: 0.00002, amount: 0.006685},
      { price: 0.001, amount: 0.00093737},
      { price: 0.0004, amount: 0.09123},
      { price: 0.0006, amount: 0.005467},
      { price: 0.00007, amount: 0.006685},
      { price: 0.007, amount: 0.00093737},
      { price: 0.0007, amount: 0.09123},
      { price: 0.00045, amount: 0.005467},
      { price: 0.00035, amount: 0.006685},
      { price: 0.0032, amount: 0.00093737},
      { price: 0.00071, amount: 0.09123},
    ];
  },
  renderOrderItems() {

    return this.getOrdersItems(this.props.direction).map((item) => {
      return  (

        <tr key={item.price}>
          <td>{item.price}</td>
          <td>{item.amount}</td>
          <td>{(item.price*item.amount).toFixed(8)}</td>
        </tr>

      );

    });
  },
  render() {
    return (
      <table className="ui selectable very compact very basic striped table">
        <thead>
          <tr>
            <th>Price</th>
            <th>{this.props.valute1}</th>
            <th>{this.props.valute2}</th>
          </tr>
        </thead>
        <tbody>
          { this.renderOrderItems() }
        </tbody>
      </table>
    );
  }
});
