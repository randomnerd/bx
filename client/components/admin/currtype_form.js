import React from 'react';
import {CurrTypes} from '../../../both/collections';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';
import { createContainer } from 'meteor/react-meteor-data';

const AdminCurrType = connect({
}, class AdminCurrType extends React.Component {
  state = {
    errorMessage: null,
    allowSubmit: false,
    published: ''
  }

  newCurr(event) {
    let {name, shortName, published} = this.refs.curr.getCurrentValues();

    Meteor.call('currtype_add',
    {name: name, shortName: shortName, published: published ? true : false},
    (error, result) => {
      if (error) {
        this.setState({errorMessage: error.message});
      } else {
        this.props.signals.admin.adminCurrTypes();
      }
    });
  }
  saveCurr(event) {
    let currVals = this.refs.curr.getCurrentValues();
    currVals.published = currVals.published ? true : false;
    Meteor.call('currtype_update', this.props.currency._id, currVals,
    (error, result) => {
      if (error) {
        this.setState({errorMessage: error.message});
      } else {
        this.props.signals.admin.adminCurrTypes();
      }
    });
  }
  checkboxToggle() {
    this.setState({published: (this.state.published ? false : true)});
  }
  currentVal(what) {
    return this.props.currency ? this.props.currency[what] : '';
  }
  allowSubmit() { this.setState({allowSubmit: true}); }
  disallowSubmit() { this.setState({allowSubmit: false}); }
  render() {
    this.published = this.currentVal('published') ? 'checked' : false;
    return (
      <div>

        <Formsy.Form key={this.props.k} className='ui form'
        onValidSubmit={this.newCurr.bind(this)} onValid={this.allowSubmit.bind(this)} onInvalid={this.disallowSubmit.bind(this)}
        ref='curr'>
          <div className='field'>
            <a className='ui blue labeled icon button' href='/admin/currtypes'>
              <i className='arrow left icon' />
              Back
            </a>
          </div>
          <Semantic.Input name='name'
          label='Full name' validations='minLength:3' placeholder='Enter name of currency type'
          required value={this.currentVal('name')} />
          <Semantic.Input name='shortName'
          label='Short name' validations='minLength:3' placeholder='Enter short name of currency type'
          required value={this.currentVal('shortName')} />


          <div className='two fields'>

            <Semantic.Checkbox name='published' label='Published' onClick={this.checkboxToggle.bind(this)} isChecked={this.props.currency && this.props.currency.published ? true : false} />

            <div className='field'>

              <a className='ui positive labeled right aligned icon button'
                onClick={this.props.curr ? this.saveCurr.bind(this) : this.newCurr.bind(this)}>
                <i className='checkmark icon' />
                Save currency type
              </a>

            </div>

          </div>
        </Formsy.Form>
      </div>
    );
  }
});
export default AdminCurrTypeContainer = createContainer((props) => {
  return {
    currency: CurrTypes.findOne({_id: props.currtype})
  };
}, AdminCurrType);
