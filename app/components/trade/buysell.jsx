import React from 'react';
require('react/addons');
import Formsy from 'formsy-react';
import Semantic from 'app/components/semantic';

export default React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      amount: 0,
      price:0,
      ordType:"market"
    }
  },
  goDeal(){

  },

  componentDidMount() {
    Dispatcher.register((payload) => {
      //console.log('new dispatcher event', payload);

      switch (payload.actionType) {
        case 'BUY_SELL_AUTOCOMPLETE':
        if(payload.data.direction!=this.props.direction){
          this.setState({amount: payload.data.amount});
          this.setState({price: payload.data.price})
        }
          break;

      }
    })
  },
  setMarket(event){
    //console.log(item)
    $(this.refs.ordType.getDOMNode()).find('.item').removeClass('active')
    $(event.currentTarget).addClass('active')
    this.setState({ordType:"market"})
  },
  setLimit(event){
    //console.log(item)
    $(this.refs.ordType.getDOMNode()).find('.item').removeClass('active')
    $(event.currentTarget).addClass('active')
    this.setState({ordType:"limit"})
  },
  showPrice(){
    return(
      <div><Semantic.Input name="price" label="Price" icon="shop" value={this.state.price!=0?(parseFloat(this.state.price)).toFixed(8):"0"} placeholder="0.0000" ref="price" validations="isNumeric" labeled labelName="BTC" onChg={this.changePrice} /></div>
    )
  },
  changeAmount(event) {
    this.setState({amount: event.currentTarget.value});

  },
  changePrice(event) {
    this.setState({price: event.currentTarget.value})
  },
  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },
  render() {
    return (
      <div>
        <div className="ui small basic segment teal" >
          <div className="ui top attached tabular basic menu" ref="ordType">
            <a className="item active" onClick={this.setMarket}>Market</a>
            <a className="item" onClick={this.setLimit}>Limit</a>
          </div>

          <Formsy.Form className="ui form" onValidSubmit={this.goDeal} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref="form">

            <Semantic.Input className="nomargin" name="amount" label="Amount" icon="money" value={this.state.amount!=0?(parseFloat(this.state.amount)).toFixed(8):"0"} placeholder="0.0000" ref="amount" validations="isNumeric" labeled labelName={this.props.currency} onChg={this.changeAmount} />
            {this.state.ordType=="limit"?this.showPrice():null}

          </Formsy.Form>
        </div>

          <div className="ui horizontal segments">
            <div className="ui small basic segment teal">
              <strong>Total:</strong>
              {(parseFloat(this.state.amount*this.state.price)).toFixed(8)}
            </div>
            <div className="ui small basic segment teal">
              <strong>Fee:</strong>
              {(parseFloat(this.state.amount*this.state.price*0.002)).toFixed(8)}
            </div>
          </div>
        <div className="ui small basic segment centered">
          <div className="centered">
            <button className="ui button green">Buy {this.props.currency}</button>
            <button className="ui button red">Sell {this.props.currency}</button>
          </div>
        </div>
      </div>
    );
  }
});
