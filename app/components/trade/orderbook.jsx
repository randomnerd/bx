import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      spread:0.1
    }
  },
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
  renderOrderItems(direction) {

    return this.getOrdersItems(direction).map((item) => {
      return  (

        <tr key={item._id} onClick={this.goBuySell.bind(this,item)}>
          <td className={"six wide " + (direction=="buy"?"positive":"negative")}>{item.price}</td>
          <td className="five wide right aligned">{item.amount}</td>
          <td className="five wide">{(item.price * item.amount).toFixed(8)}</td>
        </tr>

      );

    });
  },
  renderSpread() {

      return  (

        <tr className="ui white text">
          <td className="six wide"></td>
          <td className="five wide right aligned">{this.state.spread}</td>
          <td className="five wide">{this.props.valute1} spread</td>
        </tr>

      );

  },
  render() {
    return (
      <div className="ui basic teal segment h100 tabheader">
        <table className="ui selectable very compact very basic striped table nopadding nomargin heading">
          <thead>
            <tr className="lesspadding">
              <th className="six wide" >Price</th>
              <th className="five wide right aligned">{this.props.valute1}</th>
              <th className="five wide">{this.props.valute2}</th>
            </tr>
          </thead>
        </table>
        <div className="ux forscroll">
          <div className="scrollable100">
            <table className="ui selectable very compact very basic striped table">
              <tbody>
                { this.renderOrderItems("sell") }
                { this.renderSpread() }
                { this.renderOrderItems("buy") }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});
