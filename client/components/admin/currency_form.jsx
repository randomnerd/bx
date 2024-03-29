import React from 'react';
import {Currencies, CurrTypes} from '../../../both/collections';
import {connect} from 'cerebral-view-react';
import { createContainer } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';

const AdminCurrency = connect({
}, class AdminCurrency extends React.Component {
  state = {
    errorMessage: null,
    allowSubmit: false,
    published: false
  }
  
  newCurr(event) {
    let {name, shortName, published, currType, confReq, withdrawalFee} = this.refs.curr.getCurrentValues();

    Meteor.call('currrency_add', {
      name,
      shortName,
      published: !!published,
      type: currType,
      confReq: parseFloat(confReq),
      fee: withdrawalFee
    },
    (error, result) => {
      if (result) {
      this.setState({errorMessage: error.message});
      } else {
        this.props.signals.admin.adminCurrs();
      }
    });
  }
  saveCurr(event) {
    let {name, shortName, published, currType, confReq, withdrawalFee} = this.refs.curr.getCurrentValues();
    published = !!published;
    Meteor.call('currrency_update', this.props.currency._id, {
      name,
      shortName,
      published,
      type: currType,
      confReq: parseFloat(confReq),
      withdrawalFee
    },
    (error, result) => {
      if (error) {
        this.setState({errorMessage: error.message});
      } else {
        this.props.signals.admin.adminCurrs();
      }
    });
  }
  checkboxToggle() {
    this.setState({published: (this.state.published ? false : true)});
  }
  typesForSearch() {
    return this.props.currtypes.map((curr) => {
      return {_id: curr._id, title: curr.shortName, description: curr.name};
    });
  }
  componentDidMount() {
    let {currency} = this.props;
    this.setState({published: (this.props.currency && this.props.currency.published ? true : false)});
  }
  currentVal(what) {
    return this.props.currency ? this.props.currency[what] : '';
  }
  allowSubmit() { this.setState({allowSubmit: true}); }
  disallowSubmit() { this.setState({allowSubmit: false}); }
  render() {
    //let {currency} = this.props;
    //this.setState({published: (currency && currency.published ? true : false)});
    return (
      <div>

        <Formsy.Form key={this.props.k} className='ui form'
        onValidSubmit={this.newCurr.bind(this)} onValid={this.allowSubmit.bind(this)} onInvalid={this.disallowSubmit.bind(this)}
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
          required defaultValue={this.currentVal('type')} content={this.typesForSearch()} />

          <Semantic.Input name='confReq'
          label='Deposit confirmations' validations='isNumeric' placeholder='3'
          value={this.currentVal('confReq')||3} />

          <div className='two fields'>
            <Semantic.Checkbox name='published' label='Published' ref='published' onClick={this.checkboxToggle.bind(this)} isChecked={this.props.currency && this.props.currency.published ? true : false} />
            <div className='field'>
              <a className='ui positive labeled right aligned icon button'
                onClick={this.props.curr ? this.saveCurr.bind(this) : this.newCurr.bind(this)}>
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
export default AdminCurrencyContainer = createContainer((props) => {
  return {
    currency: Currencies.findOne({_id: props.curr}),
    currtypes: CurrTypes.find().fetch()
  };
}, AdminCurrency);
