import React from 'react';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';

const BuySell = Component({
  layout: ['layout']
}, {
  getInitialState: function() {
    return {
      amount: 0,
      price: 0,
      ordType: 'market'
    };
  },
  createOrder(buy) {
    let params = {
      pairId: this.props.pairId,
      amount: parseFloat(this.state.amount),
      price:  parseFloat(this.state.price),
      buy:    buy
    };
    Meteor.call('createOrder', params);
  },

  componentDidMount() {
    Dispatcher.register((payload) => {
      switch (payload.actionType) {
      case 'BUY_SELL_AUTOCOMPLETE':
        if (payload.data.direction !== this.props.direction) {
          this.setState({amount: payload.data.amount});
          this.setState({price: payload.data.price});
        }
        break;
      default: break;
      }
    });
  },
  setMarket(event) {
    $(this.refs.ordType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({ordType: 'market'});
  },
  setLimit(event) {
    $(this.refs.ordType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({ordType: 'limit'});
  },
  setStop(event) {
    $(this.refs.ordType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({ordType: 'stop'});
  },
  showWithPrice() {
    return (
      <div className={this.props.wide ? "two fields" : ""}>
        <Semantic.Input className='nomargin' name='amount' label='Amount' icon='money'
        value={this.state.amount} onChg={this.changeAmount}
        placeholder='0.0000' ref='amount' validations='isNumeric'
        labeled labelName={this.props.currency}/>
        <Semantic.Input name='price' label='Price' icon='shop'
        value={this.state.price}
        placeholder='0.0000' ref='price' validations='isNumeric' labeled labelName='BTC'
        onChg={this.changePrice} />
      </div>
    );
  },
  showWithoutPrice() {
    return (
      <div>
        <Semantic.Input className='nomargin' name='amount' label='Amount' icon='money'
        value={this.state.amount} onChg={this.changeAmount}
        placeholder='0.0000' ref='amount' validations='isNumeric'
        labeled labelName={this.props.currency}/>

      </div>
    );
  },
  changeAmount(event) {
    this.setState({amount: event.currentTarget.value});
  },
  changePrice(event) {
    this.setState({price: event.currentTarget.value});
  },
  allowSubmit() {
    this.setState({allowSubmit: true});
  },
  disallowSubmit() {
    this.setState({allowSubmit: false});
  },
  render() {
    return (
      <div>
        <div className='ui small basic segment teal' >
            <div className='ui top attached tabular basic menu' ref='ordType'>
              <a className='item active' onClick={this.setMarket}>Market</a>
              <a className='item' onClick={this.setLimit}>Limit</a>
              <a className='item' onClick={this.setStop}>Stop</a>
            </div>

            <Formsy.Form className='ui form' onValid={this.allowSubmit}
            onInvalid={this.disallowSubmit} ref='form'>

                {this.state.ordType === 'limit' || this.state.ordType === 'stop' ? this.showWithPrice() : this.showWithoutPrice()}

            </Formsy.Form>
        </div>

        <div className={"ui segments" + (this.props.wide ? " horizontal" : "") + " fee"}>
          <div className='ui small basic segment'>
            <strong className="name">Total: </strong>
            <span className="value">{(parseFloat(this.state.amount * this.state.price)).toFixed(8)}</span>
          </div>
          <div className='ui small basic segment'>
            <strong className="name">Fee: </strong>
            <span className="value">{(parseFloat(this.state.amount * this.state.price * 0.002)).toFixed(8)}</span>
          </div>
        </div>
        <div className='ui small basic segment centered'>
          <div className='centered'>
            <button className='ui button green' onClick={this.createOrder.bind(this, true)}>Buy {this.props.currency}</button>
            <button className='ui button red' onClick={this.createOrder.bind(this, false)}>Sell {this.props.currency}</button>
          </div>
        </div>
      </div>
    );
  }
});
export default BuySell;