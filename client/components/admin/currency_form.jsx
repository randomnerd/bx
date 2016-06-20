import React from 'react';
import {Currencies, CurrTypes} from '../../../both/collections';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';

const AdminCurrency = Component({
  layout: ['layout'],
  curr: ['curr']
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
    let {name, shortName, published, currType, confReq} = this.refs.curr.getCurrentValues();

    Meteor.call('currrency_add', {
      name,
      shortName,
      published: !!published,
      type: currType,
      confReq: parseFloat(confReq)
    },
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
    let {name, shortName, published, currType, confReq} = this.refs.curr.getCurrentValues();
    published = !!published;
    Meteor.call('currrency_update', this.data.currency._id, {
      name,
      shortName,
      published,
      type: currType,
      confReq: parseFloat(confReq)
    },
    function(error, result) {
      if (result) {
        this.setState({errorMessage: err.message});
      } else {
        //FlowRouter.go('/admin/currencies');
      }
    });
  },

  typesForSearch() {
    return this.data.currtypes.map((curr) => {
      return {_id: curr._id, title: curr.shortName, description: curr.name};
    });
  },

  getMeteorData() {
    return {
      currency: Currencies.findOne({_id: this.props.curr}),
      currtypes: CurrTypes.find().fetch()
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
            <a className='ui blue labeled icon button' href='/admin/currencies'>
              <i className='arrow left icon' />
              Back
            </a>
          </div>
          <Semantic.Input name='name'
          label='Full name' validations='minLength:3' placeholder='Enter name of currency'
          required value={this.currentVal('name')} />
          <Semantic.Input name='shortName'
          label='Short name' validations='minLength:3' placeholder='Enter short name of currency'
          required value={this.currentVal('shortName')} />

          <Semantic.Input name='withdrawalFee'
          label='Withdrawal fee' validations='isNumeric' placeholder='0.0001'
          value={this.currentVal('withdrawalFee')} />

          <Semantic.Select name='currType' label='Currency type'
          validations='minLength:3' placeholder='Select currency type'
          required value={this.currentVal('type')} content={this.typesForSearch()} />

          <Semantic.Input name='confReq'
          label='Deposit confirmations' validations='isNumeric' placeholder='3'
          value={this.currentVal('confReq')} />


          <div className='two fields'>

            <Semantic.Checkbox name='published' label='Published' isChecked={this.published} />

            <div className='field'>

              <a className='ui positive labeled right aligned icon button'
                onClick={this.props.curr ? this.saveCurr : this.newCurr}>
                <i className='checkmark icon' />
                Save currency
              </a>

            </div>

          </div>
        </Formsy.Form>
      </div>
    );
  }
});
export default AdminCurrency;
