Orders = React.createClass({
  getOrdersItems() {
    return [
      { _id:1, price: 0.001, amount: 0.005467},
      { _id:2, price: 0.00095, amount: 0.005467},
      { _id:3, price: 0.0009, amount: 0.005467},
      { _id:4, price: 0.00085, amount: 0.005467},
      { _id:5, price: 0.0008, amount: 0.005467},
      { _id:6, price: 0.00075, amount: 0.005467},
      { _id:7, price: 0.0007, amount: 0.006685},
      { _id:8, price: 0.00065, amount: 0.00093737},
      { _id:9, price: 0.0006, amount: 0.09123},
      { _id:10, price: 0.00055, amount: 0.005467},
      { _id:11, price: 0.0005, amount: 0.006685},
      { _id:12, price: 0.00045, amount: 0.00093737},
      { _id:13, price: 0.0004, amount: 0.09123},
      { _id:14, price: 0.00035, amount: 0.09123},
      { _id:15, price: 0.0003, amount: 0.09123},
      { _id:16, price: 0.00025, amount: 0.09123},
      { _id:17, price: 0.0002, amount: 0.09123},
      { _id:18, price: 0.00015, amount: 0.09123},
      { _id:19, price: 0.0001, amount: 0.09123}
    ];
  },
  goBuySell(e){
    Dispatcher.dispatch({actionType: 'BUY_SELL_AUTOCOMPLETE',data:{
      amount:$(e.currentTarget).find('[data-ord-amount]').html(),
      price:$(e.currentTarget).find('[data-ord-price]').html(),
      direction:this.props.direction,
    }});
    //console.log($(e.currentTarget).find('[data-ord-price]').html());
  },
  renderOrderItems() {

    return this.getOrdersItems(this.props.direction).map((item) => {
      return  (

        <tr key={item._id} onClick={this.goBuySell}>
          <td className="six wide" data-ord-price>{item.price}</td>
          <td className="five wide" data-ord-amount>{item.amount}</td>
          <td className="five wide">{(item.price * item.amount).toFixed(8)}</td>
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
              <th className="six wide" >Price</th>
              <th className="five wide">{this.props.valute1}</th>
              <th className="five wide">{this.props.valute2}</th>
            </tr>
          </thead>
        </table>
        <div className="scrollable10rows">
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
