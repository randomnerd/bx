import React from 'react';
import Formsy from 'formsy-react'
import {connect} from 'cerebral-view-react';
import {Wallets, Balances, Currencies} from '../../../both/collections';
import Semantic from '../semantic';
import UserOnly from './user_only';
import { createContainer } from 'meteor/react-meteor-data';

const WithdrawModal = connect({
  tools: ['tools'],
  wallet: ['wallet']
}, class WithdrawModal extends React.Component {
  state = {
    withdraw: false,
    currId: null,
    allowSubmit: false,
    errorMessage: null,
    totpEnabled: false
  }

  // componentWillReceiveProps(newProps){
  //   this.setState({withdraw: newProps.tools.withdraw});
  // },

  getQR(){
    Meteor.call('/totp/key', false, (err, data) => {
      if (err) {
        this.setState({totpEnabled: true});
      } else {
        this.setState({totpEnabled: false});
      }
    });
  }
  getAmount() {
    let curr    = this.props.currency;
    let balance = this.props.balance ? this.props.balance.displayAmount() : 0;
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
  }

  getAddressbook() {
    this.props.signals.tools.addressbook({action: 'open'});
    this.props.signals.tools.withdraw({action: 'close'});
  }

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
  }

  componentWillReceiveProps(newProps){
    //if (!this.isMounted() || !newProps.tools.address) return;
    if (!this.props.show) return;
      this.refs.address.setValue(newProps.tools.address);
  }

  componentDidMount() {
    this.getQR();
    this.setState({currId: this.props.tools.wallet});
  }

  hide(e) {
    this.setState({errorMessage: null});
    this.props.signals.tools.withdraw({action: 'close'});
    this.props.signals.tools.unsetaddress();
  }

  allowSubmit()    { this.setState({allowSubmit: true}); }
  disallowSubmit() { this.setState({allowSubmit: false}); }

  withdraw() {
    Meteor.call('withdraw', {
      currId: this.props.currency._id,
      amount: this.refs.amount.getValue(),
      address: this.refs.address.getValue(),
      totp: this.state.totpEnabled ? this.refs.totp.getValue() : null
    });

    this.props.signals.notif.newOne({_id: 'withdrawal_requested' + Math.random(), type: 'accept', icon: 'accept', title: 'Withdrawal request sent!',
    timeout: 3000, needShow: true });
    this.hide();
  }

  render() {
    let curr = this.props.currency;
    if (!curr) return null;
    let fee = curr.withdrawalFee;
    let balance = this.props.balance ? this.props.balance.displayAmount() : 0;
    return (
      <UserOnly redirect='/'>
        <Semantic.Modal size='small' positiveLabel='Request withdrawal' header={`Withdraw ${curr.name}`}
          onDeny={this.hide} onPositive={this.withdraw.bind(this)} show={this.props.tools.withdraw}
          errorMsg={this.state.errorMessage} allowSubmit={this.state.allowSubmit} >

          <Formsy.Form className='ui large form' onValidSubmit={this.withdraw.bind(this)} onValid={this.allowSubmit.bind(this)} onInvalid={this.disallowSubmit.bind(this)} ref='form'>

            <Semantic.Input name='amount' label='Amount'  placeholder='0.00000000' ref='amount' validations={{isNumeric: true, withdrawalFee: [fee, balance]}}
            adds={this.getAmount()} required />

            <Semantic.Input name='address' label='Address' placeholder='Type address here or select from address book' ref='address' adds={this.getAddress()} required />
            {this.state.totpEnabled ? <Semantic.Input name='totp' label='TFA code' placeholder='Type your TFA code here' ref='totp' /> : null}
            <input type='submit' className='hidden' />
          </Formsy.Form>
        </Semantic.Modal>
      </UserOnly>
    );
  }
});
export default WithdrawModalContainer = createContainer((props) => {
  return {
    wallet: Wallets.findOne({_id: props.wallet}),
    balance: Balances.findOne({currId: props.wallet}),
    currency: Currencies.findOne({_id: props.wallet})
  };
}, WithdrawModal);
