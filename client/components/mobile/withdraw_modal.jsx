import React from 'react';
import Formsy from 'formsy-react'
import {connect} from 'cerebral-view-react';
import {Wallets, Balances, Currencies} from '../../../both/collections';
import Semantic from '../semantic';
import UserOnly from '../user/user_only';
import { createContainer } from 'meteor/react-meteor-data';

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

const WithdrawModal = connect({
  tools: ['tools'],
  wallet: ['wallet']
}, class WithdrawModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currId: null,
      allowSubmit: false,
      errorMessage: null
    };
  }
  getAmount() {
    let curr    = this.props.currency;
    let balance = this.props.balance ? this.props.balance.displayAmount() : 0;
    return {
      right: {
        labels: [{
          name: `Fee: ${curr.withdrawalFee} ${curr.shortName}`,
          icon: 'warning'
        }]
      },
      //pointed: 'Available to withdraw'
    };
  }

  setBalance(){
    //console.log(this.refs.amount);
    this.refs.amount.setValue(this.props.balance ? this.props.balance.displayAmount() : 0);
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
    if (!this.isMounted() || !newProps.tools.address) return;
      this.refs.address.setValue(newProps.tools.address);
  }
  componentDidMount() {
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
      address: this.refs.address.getValue()
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
          onDeny={this.hide} onPositive={this.withdraw} show={this.props.tools.withdraw}
          errorMsg={this.state.errorMessage} allowSubmit={this.state.allowSubmit} >

          <Formsy.Form className='ui large form' onValidSubmit={this.withdraw} onValid={this.allowSubmit.bind(this)} onInvalid={this.disallowSubmit.bind(this)} ref='form'>

            <Semantic.Input name='amount' label='Amount'  placeholder='0.00000000' ref='amount' validations={{isNumeric: true, withdrawalFee: [fee, balance]}}
            adds={this.getAmount()} required />
            <div className="ui labeled icon blue button" onClick={this.setBalance.bind(this)}>
              <i className="icon up arrow"></i>
              Available: {this.props.balance ? this.props.balance.displayAmount() : 0}
            </div>

            <Semantic.Input name='address' label='Address' placeholder='Type address here or select from address book' ref='address' adds={this.getAddress()} required />
            <Semantic.Input name='tfa' label='TFA code' placeholder='Type your TFA code here' ref='tfa' />
            <input type='submit' className='hidden' name="afsgseg1" />
          </Formsy.Form>
        </Semantic.Modal>
      </UserOnly>
    );
  }
});
export default WithdrawModalContainer = createContainer((props) => {
  return {
    wallet: Wallets.findOne({_id: this.props.wallet}),
    balance: Balances.findOne({currId: this.props.wallet}),
    currency: Currencies.findOne({_id: this.props.wallet})
  };
}, WithdrawModal);
