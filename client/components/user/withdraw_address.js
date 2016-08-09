import React from 'react';
import {connect} from 'cerebral-view-react';
import Semantic from '../semantic';
import {wAddressBook} from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';

const WithdrawAddress = connect({
  tools: ['tools']
}, class WithdrawAddress extends React.Component {
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      editable: false
    };
  }

  edit() {
    this.setState({editable: true});
  }

  save() {
    let addrVals = this.refs.form.getCurrentValues();
    Meteor.call('address/update', this.props.item._id, addrVals);
    this.setState({editable: false});
  }

  del() {
    if (!confirm('Delete?')) return;
    Meteor.call('address/remove', this.props.item._id);
  }

  pick() {
    this.props.signals.tools.setaddress({address: this.props.item.address});
    this.props.signals.tools.addressbook({action: 'close'});
    this.props.signals.tools.withdraw({action: 'open'});
  }

  render() {
    return (
      <tr>
        <Formsy.Form className='ui large form' onValidSubmit={this.saveAddress} onValid={this.allowSubmit.bind(this)} onInvalid={this.disallowSubmit.bind(this)} ref='form'>
          <td className='four wide'>
          {this.state.editable ?
            <Semantic.Input name='name' className="mini" placeholder='Type your contact name here' ref='name' value={this.props.item.name} required/> :
            this.props.item.name
          }
          </td>
          <td className='eight wide'>
          {this.state.editable ?
            <Semantic.Input name='address' className="mini" placeholder='Type address here' ref='address' value={this.props.item.address} required/> :
            this.props.item.address
          }
          </td>
          <td className='four wide right aligned'>
            <div className='ui mini buttons'>
              <a className='ui blue button' onClick={this.pick.bind(this)} >
                Pick
              </a>
              {this.state.editable ?
                <a className='ui button' onClick={this.save.bind(this)} >
                  Save
                </a> :
                <a className='ui button' onClick={this.edit.bind(this)} >
                  Edit
                </a>
              }
              <a className='ui negative button' onClick={this.del.bind(this)} >
                Delete
              </a>
            </div>
          </td>
        </Formsy.Form>
      </tr>
    );
  }
});
export default WithdrawAddressContainer = createContainer((props) => {
  return {
    address: wAddressBook.findOne({_id: this.props.item._id})
  };
}, WithdrawAddress);
