import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      spread:0.1,
      data:[
        { _id:1, price: 0.001, amount: 0.005467},
        { _id:2, price: 0.00095, amount: 0.005467},
        { _id:3, price: 0.0009, amount: 0.005467},
        { _id:4, price: 0.00085, amount: 0.005467},
        { _id:5, price: 0.0008, amount: 0.005467},
        { _id:6, price: 0.00075, amount: 0.005467},
        { _id:7, price: 0.0007, amount: 0.006685},
        { _id:8, price: 0.00065, amount: 0.0093737},
        { _id:9, price: 0.0006, amount: 0.009123},
        { _id:10, price: 0.00055, amount: 0.005467},
        { _id:11, price: 0.0005, amount: 0.006685},
        { _id:12, price: 0.00045, amount: 0.0093737},
        { _id:13, price: 0.0004, amount: 0.009123},
        { _id:14, price: 0.00035, amount: 0.009123},
        { _id:15, price: 0.0003, amount: 0.005123},
        { _id:16, price: 0.00025, amount: 0.004123},
        { _id:17, price: 0.0002, amount: 0.006123},
        { _id:18, price: 0.00015, amount: 0.009123},
        { _id:19, price: 0.0001, amount: 0.003123}
      ]
    }
  },
  getOrdersItems(direction) {
    return this.state.data;
  },
  componentDidMount() {
    let i=20;
    if(this.tick){ Meteor.clearInterval(this.tick); }
    Meteor.setTimeout(()=>{
      this.tick = Meteor.setInterval(()=>{
        let arr = this.state.data;
        let sl = 0;
        arr.reverse();
        //arr[arr.length-3].animate=false
        for(var x=0;x<(Math.random()*5).toFixed();x++){
          arr[arr.length-7].animate=false
          arr.push( {_id:i, price: Math.random(), amount:Math.random(), animate:true} );
          i++;
          sl = x+1;
        }
        arr.reverse();
        if(sl>0){
          arr = arr.slice(0, -sl );
        }
        this.setState({data:arr});
      },(Math.random()*10000).toFixed());
    },2000);
  },

  goBuySell(item,e){
    Dispatcher.dispatch({actionType: 'BUY_SELL_AUTOCOMPLETE',data:{
      amount:item.amount,
      price:item.price,
      direction:this.props.direction,
    }});
    //console.log($(e.currentTarget).find('[data-ord-price]').html());
  },
  renderOrderItems(direction) {
    let max=0
    this.getOrdersItems(direction).map((item) => {
      max=(item.amount>max)? item.amount : max;
    })
    let maper=this.getOrdersItems();
    maper.reverse();
    return this.getOrdersItems(direction).map((item) => {
      let weight = 40 * (item.amount/max);
      return  (
        <tr key={item._id} onClick={this.goBuySell.bind(this,item)} className={item.animate?"animate":''}>
          <td className="five wide ">
            {item.amount.toFixed(8)}
            <span className={"leveler " + (direction=="buy"?"positive":"negative")} style={{width: weight + "%"}}></span>
          </td>
          <td className={"six wide center aligned " + (direction=="buy"?"positive":"negative")}>{item.price.toFixed(8)}</td>
          <td className="five wide right aligned">{(item.price * item.amount).toFixed(8)}</td>
        </tr>

      );

    });
  },
  renderSpread() {

      return  (

        <tr className="ui white text">
          <td className="five wide"></td>
          <td className="six wide right aligned">{this.state.spread}</td>
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
              <th className="five wide">{this.props.valute1}</th>
              <th className="six wide center aligned" >Price</th>
              <th className="five wide right aligned">{this.props.valute2}</th>
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
