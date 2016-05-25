import React from 'react';
import {PairTypes} from '../../../both/collections';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';

const AdminCurrency = Component({
  layout: ['layout'],
  curr: ['pairtype']
}, {
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      published: ''
    };
  },

  newCurr(event) {
    let {name, shortName, published, permalink} = this.refs.curr.getCurrentValues();

    Meteor.call('pairtype_add',
    {name: name, shortName: shortName, published: published ? true : false, permalink: permalink},
    function(error, result) {
      if (result) {
        console.log(result);
        //this.setState({errorMessage: err.message});
      } else {
        console.log(error);
        //FlowRouter.go('/admin/currencies');
      }
    });
  },
  saveCurr(event) {
    let currVals = this.refs.curr.getCurrentValues();
    currVals.published = currVals.published ? true : false;
    Meteor.call('pairtype_update', this.data.currency._id, currVals, function(error, result) {
      if (result) {
        this.setState({errorMessage: err.message});
      } else {
        //FlowRouter.go('/admin/currencies');
      }
    });
  },
  getMeteorData() {
    return {
      currency: PairTypes.findOne({_id: this.props.curr})
    };
  },
  currentVal(what) {
    return this.data.currency ? this.data.currency[what] : '';
  },
  allowSubmit() { this.setState({allowSubmit: true}); },
  disallowSubmit() { this.setState({allowSubmit: false}); },
  render() {
    this.published = this.currentVal('published') ? 'checked' : false;
    return (
      <div>

        <Formsy.Form key={this.props.k} className='ui form'
        onValidSubmit={this.newCurr} onValid={this.allowSubmit} onInvalid={this.disallowSubmit}
        ref='curr'>
          <div className='field'>
            <a className='ui blue labeled icon button' href='/admin/pairtypes'>
              <i className='arrow left icon' />
              Back
            </a>
          </div>
          <Semantic.Input name='name'
          label='Full name' validations='minLength:3' placeholder='Enter name of pair type'
          required value={this.currentVal('name')} />
          <Semantic.Input name='shortName'
          label='Short name' validations='minLength:3' placeholder='Enter short name of pair type'
          required value={this.currentVal('shortName')} />
          <Semantic.Input name='permalink'
          label='Permalink' validations='minLength:3' placeholder='Enter permalink pair type'
          required value={this.currentVal('permalink')} />


          <div className='two fields'>

            <Semantic.Checkbox name='published' label='Published' isChecked={this.published} />

            <div className='field'>

              <a className='ui positive labeled right aligned icon button'
                onClick={this.props.curr ? this.saveCurr : this.newCurr}>
                <i className='checkmark icon' />
                Save pair type
              </a>

            </div>

          </div>
        </Formsy.Form>
      </div>
    );
  }
});
export default AdminCurrency;
