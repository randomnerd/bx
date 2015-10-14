import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      spread: 0.1,
      data: [
        { _id: 1, price: 0.001, amount: 0.005467},
        { _id: 2, price: 0.00095, amount: 0.005467},
        { _id: 3, price: 0.0009, amount: 0.005467},
        { _id: 4, price: 0.00085, amount: 0.005467},
        { _id: 5, price: 0.0008, amount: 0.005467},
        { _id: 6, price: 0.00075, amount: 0.005467},
        { _id: 7, price: 0.0007, amount: 0.006685},
        { _id: 8, price: 0.00065, amount: 0.0093737},
        { _id: 9, price: 0.0006, amount: 0.009123},
        { _id: 10, price: 0.00055, amount: 0.005467},
        { _id: 11, price: 0.0005, amount: 0.006685},
        { _id: 12, price: 0.00045, amount: 0.0093737},
        { _id: 13, price: 0.0004, amount: 0.009123},
        { _id: 14, price: 0.00035, amount: 0.009123},
        { _id: 15, price: 0.0003, amount: 0.005123},
        { _id: 16, price: 0.00025, amount: 0.004123},
        { _id: 17, price: 0.0002, amount: 0.006123},
        { _id: 18, price: 0.00015, amount: 0.009123},
        { _id: 19, price: 0.0001, amount: 0.003123}
      ]
    };
  },
  getOrdersItems(direction) {
    return this.state.data;
  },
  randNumber() {
    let leftLength  = Math.random().toFixed(1) * 10;
    let rightLength  = Math.random().toFixed(1) * 10;
    leftLength = leftLength > 4 ? 4 : leftLength;
    rightLength = rightLength > 8 ? 8 : rightLength;
    leftLength = leftLength < 1 ? 1 : leftLength;
    rightLength = rightLength < 1 ? 1 : rightLength;
    //console.log(leftLength, rightLength)
    //console.log(parseFloat((Math.random().toFixed(leftLength)*Math.pow(10,leftLength))+Math.random().toFixed(rightLength)))
    return ((Math.random().toFixed(leftLength) * Math.pow(10, leftLength - 1)).toFixed(0)
    + Math.random().toFixed(rightLength - 1));
  },
  componentDidMount() {
    let i = 20;
    if (this.tick) { Meteor.clearInterval(this.tick); }
    Meteor.setTimeout(()=>{
      this.tick = Meteor.setInterval(()=>{
        let arr = this.state.data;
        let sl = 0;
        arr.reverse();
        //arr[arr.length-3].animate=false
        for (let x = 0; x < (Math.random() * 5).toFixed(); x++) {
          arr[arr.length - 7].animate = false;
          arr.push( {_id: i, price: this.randNumber(), amount: this.randNumber(), animate: true} );
          i++;
          sl = x + 1;
        }
        arr.reverse();
        if (sl > 0) {
          arr = arr.slice(0, -sl );
        }
        this.setState({data: arr});
      }, (Math.random() * 10000).toFixed());
    }, 2000);
  },

  componentWillUnmount() {
    if (this.tick) Meteor.clearInterval(this.tick);
  },

  goBuySell(item, e) {
    Dispatcher.dispatch({actionType: 'BUY_SELL_AUTOCOMPLETE', data: {
      amount: parseFloat(item.amount),
      price: parseFloat(item.price),
      direction: this.props.direction,
    }});
    //console.log($(e.currentTarget).find('[data-ord-price]').html());
  },
  renderOrderItems(direction) {
    let max = 0.0001;
    let nulls = '00000000';
    this.getOrdersItems(direction).map((item) => {
      max = (parseFloat(item.amount) > max) ? parseFloat(item.amount).toFixed(8) : max;
    });
    let maper = this.getOrdersItems();
    maper.reverse();
    return this.getOrdersItems(direction).map((item) => {
      let weight = parseFloat(70 * (item.amount / max).toFixed(8));
      let amount = item.amount.toString().split('.');
      let price = item.price.toString().split('.');
      let total = (item.price * item.amount).toFixed(8).toString().split('.');
      if (!amount[1]) { amount[1] = ''; }
      if (!price[1]) { price[1] = ''; }
      if (amount[0] === '00') { amount[1] = '0'; }
      if (price[0] === '00') { price[1] = '0'; }
      return  (
        <tr key = {item._id} onClick = {this.goBuySell.bind(this, item)}
        className={item.animate ? 'animate' : ''}>
          <td className='five wide'>
            <div className='bignum left'>{amount[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{amount[1]}</span>
            { nulls.substr(0, 7 - amount[1].length) }
            </div>

            <span className={'leveler ' + (direction === 'buy' ? 'positive' : 'negative')}
                style={{width: weight + '%'}}>
            </span>
          </td>
          <td className={'six wide center aligned '
            + (direction === 'buy' ? 'positive' : 'negative')}>

            <div className='bignum left'>{price[0]}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{price[1]}</span>
              {nulls.substr(0, 8 - price[1].length)}
            </div>
          </td>
          <td className='five wide right aligned'>
            <div className='bignum left'>{total[0].substr(0, 5)}</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>{total[1]}</span>
              {nulls.substr(0, 8 - total[1].length)}
            </div>
          </td>
        </tr>
      );
    });
  },
  renderSpread() {
    let direction = 0;
    return (

        <tr className='ui white text opacity' >
          <td className='five wide red markered text'>
            <span className='direction'>Lowest <i className='long arrow down icon'></i></span>
            <div className='bignum left'>31</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>643</span>00000</div>
          </td>
          <td className='six wide center aligned white markered text'>
            <div className='bignum left'>32</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>467534</span>00</div>
            <span className={'direction ' +
              (direction === 1 ? 'green' : 'red') + ' text'}>-2.84848 (-0.05%)
            </span>
          </td>
          <td className='five wide right aligned green markered text'>
            <span className='direction'>Higest <i className='long arrow up icon'></i></span>
            <div className='bignum left'>36</div>
            <div className='bignum dot'>.</div>
            <div className='bignum right'><span>956734</span>00</div>
          </td>
        </tr>

      );
  },
  render() {
    return (
      <div className='ui basic teal segment h100 tabheader'>
        <table className='ui selectable very compact very basic striped table nopadding nomargin heading'>
          <thead>
            <tr className='lesspadding'>
              <th className='five wide center aligned'>{this.props.valute1}</th>
              <th className='six wide center aligned' >Price</th>
              <th className='five wide right aligned'>{this.props.valute2}</th>
            </tr>
          </thead>
        </table>
        <div className='ux forscroll'>
          <div className='scrollable100'>
            <table className='ui selectable very compact very basic striped table'>
              <tbody>
                { this.renderOrderItems('sell') }
                { this.renderSpread() }
                { this.renderOrderItems('buy') }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});
