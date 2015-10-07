import React from 'react';

export default React.createClass({
  getTradesItems(derection) {
    return [
      { time: 'an hour ago', direction:'buy', price: 0.0005, amount: 0.005467},
      { time: 'an hour ago', direction:'buy', price: 0.00001, amount: 0.006685},
      { time: 'an hour ago', direction:'buy', price: 0.004, amount: 0.00093737},
      { time: '5 hours ago', direction:'sell', price: 0.0003, amount: 0.09123},
      { time: '3 hours ago', direction:'buy', price: 0.0002, amount: 0.065467},
      { time: 'an hour ago', direction:'buy', price: 0.00002, amount: 0.006685},
      { time: '2 hours ago', direction:'sell', price: 0.001, amount: 0.05093737},
      { time: 'an hour ago', direction:'sell', price: 0.0004, amount: 0.09123},
      { time: 'an hour ago', direction:'buy', price: 0.0005, amount: 0.025467},
      { time: 'an hour ago', direction:'buy', price: 0.00001, amount: 0.006685},
      { time: 'an hour ago', direction:'buy', price: 0.004, amount: 0.01093737},
      { time: '5 hours ago', direction:'sell', price: 0.0003, amount: 0.09123},
      { time: '3 hours ago', direction:'buy', price: 0.0002, amount: 0.005467},
      { time: 'an hour ago', direction:'buy', price: 0.00002, amount: 0.006685},
      { time: '2 hours ago', direction:'sell', price: 0.001, amount: 0.03093737},
      { time: 'an hour ago', direction:'sell', price: 0.0004, amount: 0.09123},
      { time: 'an hour ago', direction:'buy', price: 0.0005, amount: 0.005467},
      { time: 'an hour ago', direction:'buy', price: 0.00001, amount: 0.046685},
      { time: 'an hour ago', direction:'buy', price: 0.004, amount: 0.00093737},
      { time: '5 hours ago', direction:'sell', price: 0.0003, amount: 0.09123},
      { time: '3 hours ago', direction:'buy', price: 0.0002, amount: 0.005467},
      { time: 'an hour ago', direction:'buy', price: 0.00002, amount: 0.006685},
      { time: '2 hours ago', direction:'sell', price: 0.001, amount: 0.00093737},
      { time: 'an hour ago', direction:'sell', price: 0.0004, amount: 0.09123},
    ];
  },
  renderTradesItems() {
    let max=0
    this.getTradesItems(this.props.direction).map((item) => {
      max=(item.amount>max)? item.amount : max;
    })



    return this.getTradesItems(this.props.direction).map((item) => {

        let weight = 70 * (item.amount/max);
        return (
          <tr key={Math.random()}>
            <td className="four wide">
              {item.amount}
              <span className={"leveler " + (item.direction=="buy"?"positive":"negative")} style={{width: weight + "%"}}></span>
            </td>
            <td className={"four wide arr " + (item.direction=="buy"?"positive":"negative")}>{item.price}</td>
            <td className="four wide">{(item.price*item.amount).toFixed(8)}</td>
            <td className="four wide">{item.time}</td>
          </tr>
        )



    });
  },
  render() {
    return (
      <div className="ui basic teal segment h100 tabheader">
        <table className="ui selectable very compact very basic striped table nopadding nomargin heading">
          <thead>
          <tr className="lesspadding">
            <th className="four wide">{this.props.valute1}</th>
            <th className="four wide">Price</th>
            <th className="four wide">{this.props.valute2}</th>
            <th className="four wide">Time</th>
          </tr>
          </thead>
        </table>
        <div className="ux forscroll">
          <div className="scrollable100">
            <table className="ui selectable very compact very basic table">
              <tbody>
              { this.renderTradesItems() }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});
