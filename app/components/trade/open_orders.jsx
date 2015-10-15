import React from 'react';

export default React.createClass({
  getOrdersItems() {
    return [
      { _id: 1, price: 0.001, amount: 0.005467, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 2, price: 0.00095, amount: 0.005467, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 3, price: 0.0009, amount: 0.005467, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 4, price: 0.00085, amount: 0.005467, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 5, price: 0.0008, amount: 0.005467, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 6, price: 0.00075, amount: 0.005467, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 7, price: 0.0007, amount: 0.006685, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 8, price: 0.00065, amount: 0.00093737, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 9, price: 0.0006, amount: 0.09123, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 10, price: 0.00055, amount: 0.005467, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 11, price: 0.0005, amount: 0.006685, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 12, price: 0.00045, amount: 0.00093737, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 13, price: 0.0004, amount: 0.09123, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 14, price: 0.00035, amount: 0.09123, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 15, price: 0.0003, amount: 0.09123, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 16, price: 0.00025, amount: 0.09123, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 17, price: 0.0002, amount: 0.09123, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 18, price: 0.00015, amount: 0.09123, filled: 0.095467, fee: 0.000067, time: moment(), status: 1},
      { _id: 19, price: 0.0001, amount: 0.09123, filled: 0.095467, fee: 0.000067, time: moment(), status: 1}
    ];
  },

  renderOrderItems() {
    return this.getOrdersItems(this.props.direction).map((item) => {
      return  (
        <tr key={item._id} >
          <td className='three wide' data-ord-price>{(item.price * item.amount).toFixed(8)}</td>
          <td className='three wide' data-ord-amount>{item.filled}</td>
          <td className='three wide' data-ord-amount>{item.price}</td>
          <td className='three wide' data-ord-amount>{item.fee}</td>
          <td className='two wide' data-ord-amount>{item.time.format("hh:mm:ss")}</td>
          <td className='two wide'>{item.status}</td>
        </tr>
      );
    });
  },
  render() {
    return (
      <div className='ui basic teal segment h100 noheader'>
        <div className='ui top attached tabular basic menu'>
          <div className='right menu'>
            <a className='item active'>
              Clear all
            </a>
          </div>
        </div>
        <div className='ui basic segment h100 tabheader'>
          <table className='ui selectable very compact very basic striped table nopadding nomargin heading'>
            <thead>
              <tr className='lesspadding'>
                <th className='three wide' >Size</th>
                <th className='three wide'>Filled ({this.props.valute1})</th>
                <th className='three wide'>Price ({this.props.valute2})</th>
                <th className='three wide'>Fee ({this.props.valute2})</th>
                <th className='two wide'>Time</th>
                <th className='two wide'>Status</th>
              </tr>
            </thead>
          </table>
          <div className='ux forscroll'>
            <div className='scrollable100'>
              <table className='ui selectable very compact very basic striped table'>
                <tbody>
                  { this.renderOrderItems() }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
