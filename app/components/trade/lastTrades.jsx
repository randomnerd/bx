import React from 'react';

export default React.createClass({
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
          <td className="four wide">{item.time}</td>
          <td className="four wide">{item.price}</td>
          <td className="four wide">{item.amount}</td>
          <td className="four wide">{(item.price*item.amount).toFixed(8)}</td>
        </tr>

      );

    });
  },
  render() {
    return (
      <div className="ux container h100">
        <table className="ui selectable very compact very basic striped table nopadding nomargin">
          <thead>
          <tr className="lesspadding">
            <th className="four wide">Time</th>
            <th className="four wide">Price</th>
            <th className="four wide">{this.props.valute1}</th>
            <th className="four wide">{this.props.valute2}</th>
          </tr>
          </thead>
        </table>
        <div className="scrollable100">
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
