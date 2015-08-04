Trades = React.createClass({
  getTradesItems(derection) {
    return [
      { time: 'an hour ago', direction:'buy', price: 0.0005, amount: 0.005467},
      { time: 'an hour ago', direction:'buy', price: 0.00001, amount: 0.006685},
      { time: 'an hour ago', direction:'buy', price: 0.004, amount: 0.00093737},
      { time: '5 hours ago', direction:'sell', price: 0.0003, amount: 0.09123},
      { time: '3 hours ago', direction:'buy', price: 0.0002, amount: 0.005467},
      { time: 'an hour ago', direction:'buy', price: 0.00002, amount: 0.006685},
      { time: '2 hours ago', direction:'sell', price: 0.001, amount: 0.00093737},
      { time: 'an hour ago', direction:'sell', price: 0.0004, amount: 0.09123},
      { time: 'an hour ago', direction:'buy', price: 0.0005, amount: 0.005467},
      { time: 'an hour ago', direction:'buy', price: 0.00001, amount: 0.006685},
      { time: 'an hour ago', direction:'buy', price: 0.004, amount: 0.00093737},
      { time: '5 hours ago', direction:'sell', price: 0.0003, amount: 0.09123},
      { time: '3 hours ago', direction:'buy', price: 0.0002, amount: 0.005467},
      { time: 'an hour ago', direction:'buy', price: 0.00002, amount: 0.006685},
      { time: '2 hours ago', direction:'sell', price: 0.001, amount: 0.00093737},
      { time: 'an hour ago', direction:'sell', price: 0.0004, amount: 0.09123},
      { time: 'an hour ago', direction:'buy', price: 0.0005, amount: 0.005467},
      { time: 'an hour ago', direction:'buy', price: 0.00001, amount: 0.006685},
      { time: 'an hour ago', direction:'buy', price: 0.004, amount: 0.00093737},
      { time: '5 hours ago', direction:'sell', price: 0.0003, amount: 0.09123},
      { time: '3 hours ago', direction:'buy', price: 0.0002, amount: 0.005467},
      { time: 'an hour ago', direction:'buy', price: 0.00002, amount: 0.006685},
      { time: '2 hours ago', direction:'sell', price: 0.001, amount: 0.00093737},
      { time: 'an hour ago', direction:'sell', price: 0.0004, amount: 0.09123},
    ];
  },
  renderTradesItems() {

    return this.getTradesItems(this.props.direction).map((item) => {
      return  (

        <tr key={Math.random()} className={item.direction=="buy"?"positive":"negative"}>
          <td>{item.time}</td>
          <td>{item.price}</td>
          <td>{item.amount}</td>
          <td>{(item.price*item.amount).toFixed(8)}</td>
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
            <th>Time</th>
            <th>Price</th>
            <th>{this.props.valute1}</th>
            <th>{this.props.valute2}</th>
          </tr>
          </thead>
        </table>
        <div className="scrollable10rows">
          <table className="ui selectable very compact very basic table">
            <tbody>
            { this.renderTradesItems() }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});
