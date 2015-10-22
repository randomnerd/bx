import React from 'react';
import {wAddressBook} from 'collections';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      editable: false
    };
  },
  getMeteorData() {
    return {
      address: wAddressBook.findOne({_id: this.props.item._id})
    };
  },
  edit() {
    this.setState({editable: true});
  },
  save() {
    let addrVals = this.refs.form.getCurrentValues();
    Meteor.call('address/update', this.props.item._id, addrVals);
    this.setState({editable: false});
  },
  del() {
    if (!confirm('Delete?')) return;
    Meteor.call('address/remove', this.props.item._id);
  },
  pick() {
    Dispatcher.dispatch({actionType: 'SET_WITHDRAWAL_ADDRESS', payload: this.props.item.address });
    Dispatcher.dispatch({actionType: 'HIDE_ADDRESSBOOK_MODAL'});
  },


  render() {
    return (
      <tr>
        <Formsy.Form className='ui large form' onValidSubmit={this.saveAddress} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='form'>
          <td className='four wide'>
          {this.state.editable ?
            <Semantic.Input name='name' placeholder='Type your contact name here' ref='name' value={this.props.item.name} required/> :
            this.props.item.name
          }
          </td>
          <td className='eight wide'>
          {this.state.editable ?
            <Semantic.Input name='address' placeholder='Type address here' ref='address' value={this.props.item.address} required/> :
            this.props.item.address
          }
          </td>
          <td className='four wide right aligned'>
            <div className='ui mini buttons'>
              <a className='ui blue button' onClick={this.pick} >
                Pick
              </a>
              {this.state.editable ?
                <a className='ui button' onClick={this.save} >
                  Save
                </a> :
                <a className='ui button' onClick={this.edit} >
                  Edit
                </a>
              }
              <a className='ui negative button' onClick={this.del} >
                Delete
              </a>
            </div>
          </td>
        </Formsy.Form>
      </tr>
    );
  }
});
