import React from 'react';
import Formsy from 'formsy-react'
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Balances, Currencies} from '../../../both/collections';
import Semantic from '../semantic';
import { createContainer } from 'meteor/react-meteor-data';

const BuySell = connect({
  layout: ['layout'],
  pair_link: ['pair_link'],
  buysell: ['pair', 'buysell'],
  pair: ['pair', 'pair']
}, class BuySell extends React.Component {
  state = {
    amount: 0,
    price: 0,
    ordType: 'limit'
  }


  createOrder(buy) {

    let params = {
      pairId: this.props.pair._id,
      amount: this.props.buysell.amount,
      price:  this.props.buysell.price,
      buy:    buy
    };
    Meteor.call('createOrder', params);
  }

  componentWillReceiveProps(newProps){
    // console.log(newProps.buysell);
    // if (!this.isMounted() || !newProps.buysell) return;
    //
    // this.refs.amount.setValue(newProps.buysell.amount);
    // if(this.refs.price){ this.refs.price.setValue(newProps.buysell.price); }
  }

  componentDidMount() {

  }

  setMarket(event) {
    // $(this.refs.ordType).find('.item').removeClass('active');
    // $(event.currentTarget).addClass('active');
    // this.setState({ordType: 'market'});
  }

  setLimit(event) {
    $(this.refs.ordType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({ordType: 'limit'});
  }
  setStop(event) {
    // $(this.refs.ordType).find('.item').removeClass('active');
    // $(event.currentTarget).addClass('active');
    // this.setState({ordType: 'stop'});
  }

  showWithPrice() {
    let {buysell} = this.props;//.buysell || {amount: '', price: ''};
    return (
      <div className={this.props.wide ? "two fields" : ""}>
        <Semantic.Input className='nomargin' name='amount' label='Amount' icon='money'
        value={buysell.amount} onChg={this.changeAmount}
        placeholder='0.0000' ref='amount'
        labeled labelName={this.props.currency}/>
        <Semantic.Input className='nomargin' name='price' label='Price' icon='shop'
        value={buysell.price}
        placeholder='0.0000' ref='price' labeled labelName='BTC'
        onChg={this.changePrice} />
      </div>
    );
  }

  showWithoutPrice() {
    let {buysell} = this.props;//.buysell || {amount: '', price: ''};
    return (
      <div>
        <Semantic.Input className='nomargin' name='amount' label='Amount' icon='money'
        value={buysell.amount} onChg={this.changeAmount}
        placeholder='0.0000' ref='amount'
        labeled labelName={this.props.currency}/>

      </div>
    );
  }

  changeAmount(event) {
    let val = event.currentTarget.value;
    let matcher = new RegExp("^\\d*\\.?\\d*$");
    let isOk = matcher.exec(val);
    //console.log(event.currentTarget);
    if(!isOk){
      $(event.currentTarget).val(this.props.buysell.amount)
      this.props.signals.pair.setBuysell({
        amount: this.props.buysell.amount,
        price: this.props.buysell.price,
        //direction: this.props.direction,
      });
    }else{
      this.props.signals.pair.setBuysell({
        amount: val,
        price: this.props.buysell.price,
      });
    }
  }

  changePrice(event) {
    let val = event.currentTarget.value;
    let matcher = new RegExp("^\\d*\\.?\\d*$");
    let isOk = matcher.exec(val);
    if(!isOk){
      $(event.currentTarget).val(this.props.buysell.price)
      this.props.signals.pair.setBuysell({
        amount: this.props.buysell.amount,
        price: this.props.buysell.price,
        //direction: this.props.direction,
      });
    }else{
      this.props.signals.pair.setBuysell({
        amount: this.props.buysell.amount,
        price: val,
      });
     }
  }

  allowSubmit() {
    this.setState({allowSubmit: true});
  }

  disallowSubmit() {
    this.setState({allowSubmit: false});
  }

  render() {
    let {buysell} = this.props;//.buysell || {amount: '', price: ''};
    return (
      <div>
        <div className='ui small basic segment teal' >
            <div className='ui top attached tabular basic menu' ref='ordType'>
              <a className='item disabled' onClick={this.setMarket.bind(this)}>Market</a>
              <a className='item active' onClick={this.setLimit.bind(this)}>Limit</a>
              <a className='item disabled' onClick={this.setStop.bind(this)}>Stop</a>
            </div>

            <Formsy.Form className='ui form' onValid={this.allowSubmit.bind(this)}
            onInvalid={this.disallowSubmit.bind(this)} ref='form'>

                {this.state.ordType === 'limit' || this.state.ordType === 'stop' ? this.showWithPrice() : this.showWithoutPrice()}

            </Formsy.Form>
        </div>

        <div className={"ui segments" + (this.props.wide ? " horizontal" : "") + " fee"}>
          <div className='ui small basic segment'>
            <strong className="name">Total: </strong>
            <span className="value">{(parseFloat(buysell.amount * buysell.price)).toFixed(8)}</span>
          </div>
          <div className='ui small basic segment'>
            <strong className="name">Fee: </strong>
            <span className="value">{(parseFloat(buysell.amount * buysell.price * this.props.pair.buyFee)).toFixed(8)}</span>
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

export default BuySellContainer = createContainer((props) => {
  return {
    balance1: Balances.findOne({currId: props.pair.currId}),
    balance2: Balances.findOne({currId: props.pair.marketCurrId}),
    currency1: Currencies.findOne({_id: props.pair.currId}),
    currency2: Currencies.findOne({_id: props.pair.marketCurrId}),
  }
}, BuySell);
