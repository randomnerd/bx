import React from 'react';
import Formsy from 'formsy-react';
import Semantic from 'components/semantic';
import {TradePairs, Currencies} from 'collections';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      published: ''
    };
  },

  newPair(event) {
    let {currId, marketCurrId, buyFee, sellFee, published} = this.refs.curr.getCurrentValues();
    //console.log({currId: currId, marketCurrId: marketCurrId, buyFee:buyFee,
    //sellFee:sellFee, published:published?true:false})

    Meteor.call('tradepair_add', {currId: currId, marketCurrId: marketCurrId, buyFee: buyFee,
      sellFee: sellFee, published: published ? true : false }, function(error, result) {
        if (result || error) {
          this.setState({errorMessage: error.message});
        }else {
          FlowRouter.go('/admin/tradepairs');
        }
      });
  },
  savePair(event) {
    //console.log(this.refs.curr.getCurrentValues())
    let {currId, marketCurrId, buyFee, sellFee, published} = this.refs.curr.getCurrentValues();
    Meteor.call('tradepair_update', this.data.tradePairs._id,
    {currId: currId, marketCurrId: marketCurrId, buyFee: buyFee,
      sellFee: sellFee, published: published ? true : false },
    function(error, result) {
      if (result) {
        this.setState({errorMessage: err.message});
      }else {
        FlowRouter.go('/admin/tradepairs');
      }
    });
  },
  getMeteorData() {
    return {
      tradePairs: TradePairs.findOne(this.props.current),
      currencies: Currencies.find({}, {sort: {name: 1}}).fetch()
    };
  },
  currentVal(what) {
    return this.data.tradePairs ? this.data.tradePairs[what] : '';
  },
  allowSubmit() { this.setState({allowSubmit: true}); },
  disallowSubmit() { this.setState({allowSubmit: false}); },

  currsForSearch() {
    return this.data.currencies.map((curr) => {
      return {_id: curr._id, title: curr.shortName, description: curr.name};
    });
  },

  render() {
    let published = this.currentVal('published') ? 'checked' : false;

    //currId: currencyId
    //marketCurrId: currencyId
    //published: boolean
    //buyFee: float
    //sellFee: float
    return (
      <div>
        <Formsy.Form key={this.props.k} className='ui form' onValidSubmit={this.newCurr} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='curr'>
          <div className='field'>
            <a className='ui blue labeled icon button' href='/admin/tradepairs'>
              <i className='arrow left icon' />
              Back
            </a>
          </div>
          <Semantic.Select name='currId' label='Currency' validations='minLength:3' placeholder='Select currency' required value={this.currentVal('currId')} content={this.currsForSearch()} />
          <Semantic.Select name='marketCurrId' label='Market currency' validations='minLength:3' placeholder='Select currency' required value={this.currentVal('marketCurrId')} content={this.currsForSearch()} />
          <Semantic.Input name='buyFee' label='Buy fee' validations='isNumeric' placeholder='Enter name of currency' required value={this.currentVal('buyFee')} />
          <Semantic.Input name='sellFee' label='Sell fee' validations='isNumeric' placeholder='Enter name of currency' required value={this.currentVal('sellFee')} />
          <div className='two fields'>
            <Semantic.Checkbox name='published' label='Published' isChecked={published} />
            <div className='field'>
              <a className='ui positive labeled right aligned icon button' onClick={this.props.current ? this.savePair : this.newPair}>
                <i className='checkmark icon' />
                Save pair
              </a>
            </div>
          </div>
        </Formsy.Form>
      </div>
    );
  }
});
