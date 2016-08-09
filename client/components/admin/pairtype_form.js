import React from 'react';
import {PairTypes} from '../../../both/collections';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';
import { createContainer } from 'meteor/react-meteor-data';

const AdminCurrency = connect({
  layout: ['layout'],
  curr: ['pairtype']
}, class AdminCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      allowSubmit: false,
      published: ''
    };
  }

  newCurr(event) {
    let {name, shortName, published, permalink} = this.refs.curr.getCurrentValues();

    Meteor.call('pairtype_add',
    {name: name, shortName: shortName, published: published ? true : false, permalink: permalink},
    (error, result) => {
      if (error) {
        this.setState({errorMessage: error.message});
      } else {
        this.props.signals.admin.adminPairTypes();
      }
    });
  }
  saveCurr(event) {
    let currVals = this.refs.curr.getCurrentValues();
    currVals.published = currVals.published ? true : false;
    Meteor.call('pairtype_update', this.props.currency._id, currVals,
    (error, result) => {
      if (error) {
        this.setState({errorMessage: error.message});
      } else {
        this.props.signals.admin.adminPairTypes();
      }
    });
  }
  currentVal(what) {
    return this.props.currency ? this.props.currency[what] : '';
  }
  checkboxToggle() {
    this.setState({published: (this.state.published ? false : true)});
  }
  allowSubmit() { this.setState({allowSubmit: true}); }
  disallowSubmit() { this.setState({allowSubmit: false}); }
  render() {
    this.published = this.currentVal('published') ? 'checked' : false;
    return (
      <div>

        <Formsy.Form key={this.props.k} className='ui form'
        onValidSubmit={this.newCurr} onValid={this.allowSubmit.bind(this)} onInvalid={this.disallowSubmit.bind(this)}
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

          <Semantic.Checkbox name='published' label='Published' onClick={this.checkboxToggle.bind(this)} isChecked={this.props.currency && this.props.currency.published ? true : false} />

            <div className='field'>

              <a className='ui positive labeled right aligned icon button'
                onClick={this.props.curr ? this.saveCurr : this.newCurr.bind(this)}>
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
export default AdminCurrencyContainer = createContainer((props) => {
  return {
    currency: PairTypes.findOne({_id: this.props.curr})
  };
}, AdminCurrency);
