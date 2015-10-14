import React from 'react';
import Formsy from 'formsy-react';
import {Currencies} from 'collections';
import Semantic from 'components/semantic';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      published: ''
    };
  },

  newCurr(event) {
    let {name, shortName, published} = this.refs.curr.getCurrentValues();

    Meteor.call('currrency_add',
    {name: name, shortName: shortName, published: published ? true : false},
    function(error, result) {
      if (result) {
        this.setState({errorMessage: err.message});
      } else {
        FlowRouter.go('/admin/currencies');
      }
    });
  },
  saveCurr(event) {
    //console.log(this.refs.curr.getCurrentValues())
    let currVals = this.refs.curr.getCurrentValues();
    Meteor.call('currrency_update', this.data.currency._id, currVals, function(error, result) {
      if (result) {
        this.setState({errorMessage: err.message});
      } else {
        FlowRouter.go('/admin/currencies');
      }
    });
  },
  getMeteorData() {
    return {
      currency: Currencies.findOne({shortName: this.props.current})
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
          <div className='two fields'>

            <Semantic.Checkbox name='published' label='Published' isChecked={this.published} />

            <div className='field'>

              <a className='ui positive labeled right aligned icon button'
                onClick={this.props.current ? this.saveCurr : this.newCurr}>
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
