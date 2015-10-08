import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      data:[
        {_id:1, time: '18:59:22', direction:'buy', price: 0.0005, amount: 0.005467, animate:false},
        {_id:2, time: '17:59:22', direction:'buy', price: 0.00001, amount: 0.006685, animate:false},
        {_id:3, time: '11:59:22', direction:'buy', price: 0.004, amount: 0.00093737, animate:false},
        {_id:4, time: '23:59:22', direction:'sell', price: 0.0003, amount: 0.09123, animate:false},
        {_id:5, time: '18:34:22', direction:'buy', price: 0.0002, amount: 0.065467, animate:false},
        {_id:6, time: '18:59:22', direction:'buy', price: 0.00002, amount: 0.006685, animate:false},
        {_id:7, time: '22:23:22', direction:'sell', price: 0.001, amount: 0.05093737, animate:false},
        {_id:8, time: '18:59:22', direction:'sell', price: 0.0004, amount: 0.09123, animate:false},
        {_id:9, time: '18:59:22', direction:'buy', price: 0.0005, amount: 0.025467, animate:false},
        {_id:10, time: '18:59:22', direction:'buy', price: 0.00001, amount: 10.006685, animate:false},
        {_id:11, time: '18:59:22', direction:'buy', price: 0.004, amount: 0.01093737, animate:false},
        {_id:12, time: '12:23:22', direction:'sell', price: 0.0003, amount: 0.09123, animate:false},
        {_id:13, time: '13:59:22', direction:'buy', price: 0.0002, amount: 0.005467, animate:false},
        {_id:14, time: '18:34:22', direction:'buy', price: 0.00002, amount: 0.006685, animate:false},
        {_id:15, time: '18:59:22', direction:'sell', price: 0.001, amount: 0.03093737, animate:false},
        {_id:16, time: '14:59:22', direction:'sell', price: 0.0004, amount: 0.09123, animate:false},
        {_id:17, time: '09:59:22', direction:'buy', price: 0.0005, amount: 0.005467, animate:false},
        {_id:18, time: '18:59:22', direction:'buy', price: 0.00001, amount: 0.046685, animate:false},
        {_id:19, time: '18:59:22', direction:'buy', price: 0.004, amount: 0.00093737, animate:false},
        {_id:20, time: '05:59:22', direction:'sell', price: 0.0003, amount: 0.09123, animate:false},
        {_id:21, time: '07:59:22', direction:'buy', price: 0.0002, amount: 0.005467, animate:false},
        {_id:22, time: '18:59:22', direction:'buy', price: 0.00002, amount: 0.006685, animate:false},
        {_id:23, time: '18:59:22', direction:'sell', price: 0.001, amount: 0.00093737, animate:false},
        {_id:24, time: '18:59:22', direction:'sell', price: 0.0004, amount: 0.09123, animate:false},
      ]
    }
  },
  getTradesItems(derection) {
    return this.state.data;
  },

  componentDidMount() {
    let i=25;
    if(this.tick){ Meteor.clearInterval(this.tick); }
    Meteor.setTimeout(()=>{
      this.tick = Meteor.setInterval(()=>{
        let arr = this.state.data;
        let sl=0;
        arr.reverse();
        //arr[arr.length-3].animate=false
        for(var x=0;x<(Math.random()*10).toFixed();x++){
          arr[arr.length-7].animate=false
          arr.push({_id:i, time:'18:59:22', direction:(Math.random()>0.5?'sell':'buy'), price: Math.random(), amount:Math.random(),animate:true});
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


  renderTradesItems() {
    let max=0
    this.state.data.map((item) => {
      max=(item.amount>max)? item.amount : max;
    })



    return this.getTradesItems().map((item) => {

        let weight = 90 * (item.amount/max);
        return (
          <tr key={item._id} className={item.animate?"animate":''}>
            <td className="six wide">
              {item.amount.toFixed(8)}
              <span className={"leveler " + (item.direction=="buy"?"positive":"negative")} style={{width: weight + "%"}}></span>
            </td>
            <td className={"six wide arr " + (item.direction=="buy"?"positive":"negative")}>{item.price.toFixed(8)}</td>
            <td className="four wide right aligned">{item.time}</td>
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
            <th className="six wide">{this.props.valute1}</th>
            <th className="six wide">Price</th>
            <th className="four wide right aligned">Time</th>
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
