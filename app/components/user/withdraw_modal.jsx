import React from 'react';
import Formsy from 'formsy-react'
import {Wallets, Balances, Currencies} from 'collections';
import Semantic from 'components/semantic';

Formsy.addValidationRule('withdrawalFee', (values, value, params) => {
  let amount = parseFloat(values.amount);
  let fee = parseFloat(params[0]);
  let balance = parseFloat(params[1]);

  if (!amount) return false;
  if (!fee) return true;
  if (amount <= fee) return false;
  if (amount > balance) return false;

  return true;
});

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      currId: null,
      allowSubmit: false,
      errorMessage: null
    };
  },

  getMeteorData() {
    return {
      wallet: Wallets.findOne({_id: this.state.currId}),
      balance: Balances.findOne({currId: this.state.currId}),
      currency: Currencies.findOne({_id: this.state.currId})
    };
  },

  getAmount() {
    let curr    = this.data.currency;
    let balance = this.data.balance.displayAmount();
    return {
      left: {
        buttons: [{
          icon: 'right arrow',
          action: () => { this.refs.amount.setValue(balance); }
        }],
        labels: [{ name: balance }]
      },
      right: {
        labels: [{
          name: `Fee: ${curr.withdrawalFee} ${curr.shortName}`,
          icon: 'warning'
        }]
      },
      pointed: 'Available to withdraw'
    };
  },

  getAddressbook() {
    Dispatcher.dispatch({actionType: 'SHOW_ADDRESSBOOK_MODAL'});
  },

  getAddress() {
    return {
      left: {},
      right: {
        buttons: [{
          name: 'Addressbook',
          action: this.getAddressbook,
          icon: 'user'
        }]
      }
    };
  },

  componentDidMount() {
    Dispatcher.register((e) => {
      switch (e.actionType) {
      case 'SET_WITHDRAWAL_ADDRESS':
        this.refs.address.setValue(e.payload);
        break;
      case 'SET_WITHDRAWAL_CURRENCY':
        this.setState({currId: e.payload});
        break;
      }
    });
  },

  hide(e) {
    this.setState({errorMessage: null});
    Dispatcher.dispatch({actionType: 'HIDE_WITHDRAW_MODAL'});
  },

  allowSubmit()    { this.setState({allowSubmit: true}); },
  disallowSubmit() { this.setState({allowSubmit: false}); },

  withdraw() {
    Meteor.call('withdraw', {
      currId: this.data.currency._id,
      amount: this.refs.amount.getValue(),
      address: this.refs.address.getValue()
    });

    Dispatcher.dispatch({
      actionType: 'NEW_NOTIFICATION',
      payload: {
        message: {
          _id: 'withdrawal_requested',
          type: 'accept',
          icon: 'accept',
          title: 'Withdrawal request sent',
          timeout: 3000,
          needShow: true
        }
      }
    });
    this.hide();
  },

  render() {
    let curr = this.data.currency;
    if (!curr) return null;
    let fee = curr.withdrawalFee;
    let balance = this.data.balance.displayAmount();

    return (
      <Semantic.Modal size='small' positiveLabel='Request withdrawal' header={`Withdraw ${curr.name}`}
        onDeny={this.hide} onPositive={this.withdraw} show={this.props.show}
        errorMsg={this.state.errorMessage} allowSubmit={this.state.allowSubmit} >

        <Formsy.Form className='ui large form' onValidSubmit={this.withdraw} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='form'>

          <Semantic.Input name='amount' label='Amount'  placeholder='0.00000000' ref='amount' validations={{isNumeric: true, withdrawalFee: [fee, balance]}}
          adds={this.getAmount()} required />

          <Semantic.Input name='address' label='Address' placeholder='Type address here or select from address book' ref='address' adds={this.getAddress()} required />
          <Semantic.Input name='tfa' label='TFA code' placeholder='Type your TFA code here' ref='tfa' />
          <input type='submit' className='hidden' />
        </Formsy.Form>
      </Semantic.Modal>
    );
  }
});
