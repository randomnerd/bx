import React from 'react';
import Formsy from 'formsy-react';
import {Component} from 'cerebral-view-react';
import {wAddressBook} from '../../../both/collections';
import Semantic from '../semantic';
import WithdrawAddress from './withdraw_address';
import UserOnly from './user_only';

const WithdrawAddressBook = Component({
  tools: ['tools']
}, {
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      amount: ''
    };
  },
  getMeteorData() {
    return {
      addresses: wAddressBook.find().fetch()
    };
  },

  componentDidMount() {

  },

  hide(e) {
    this.setState({errorMessage: null});
    this.props.signals.tools.addressbook({action: 'close'});
    this.props.signals.tools.withdraw({action: 'open'});
  },
  saveAddress() {
    let addrVals = this.refs.form.getCurrentValues();
    Meteor.call('address/add', addrVals);
  },
  allowSubmit() { this.setState({allowSubmit: true}); },
  disallowSubmit() { this.setState({allowSubmit: false}); },
  renderAddressItems() {
    return this.data.addresses.map((item) => {
      return  (
        <WithdrawAddress key={item._id} item={item} />
      );
    });
  },
  render() {
    return (
      <UserOnly redirect='/'>
        <Semantic.Modal size='small' positiveLabel='Save' header='Addressbook'
          onDeny={this.hide} onPositive={this.saveAddress} show={this.props.tools.addressbook}
          errorMsg={this.state.errorMessage} allowSubmit={this.state.allowSubmit} >
          <div className='ui small blue segment'>
            <table className='ui selectable very compact very basic striped table nomargin'>
              <thead>
                <tr className='lesspadding'>
                  <th className='four wide' >Name</th>
                  <th className='eight wide' >Address</th>
                  <th className='four wide'>Actions</th>
                </tr>
              </thead>
            </table>
            <div className='scrollable10rows'>
              <table className='ui selectable very compact very basic sortable table'>
                <tbody>
                  { this.renderAddressItems() }
                </tbody>
              </table>
            </div>
          </div>
          <h3 className='ui header'>New address</h3>
          <Formsy.Form className='ui large form' onValidSubmit={this.saveAddress} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='form'>
            <div className='two fields'>
              <Semantic.Input name='name' label='Name' placeholder='Type your contact name here' ref='name' required/>
              <Semantic.Input name='address' label='Address'  placeholder='Type address here' ref='address' required />
            </div>
            <input type='submit' className='hidden' />
          </Formsy.Form>

        </Semantic.Modal>
      </UserOnly>
    );
  }
});
export default WithdrawAddressBook;
