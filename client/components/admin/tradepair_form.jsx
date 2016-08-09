import React from 'react';
import {Currencies, TradePairs, PairTypes} from '../../../both/collections';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';
import { createContainer } from 'meteor/react-meteor-data';

const AdminTradePair = connect({
  layout: ['layout'],
  adm_pair: ['adm_pair']
}, class AdminTradePair extends React.Component {
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      published: ''
    };
  }

  newPair(event) {
    let {currId, marketCurrId, buyFee, sellFee, published, permalink, market} = this.refs.curr.getCurrentValues();

    Meteor.call('tradepair_add', {
      currId: currId,
      marketCurrId: marketCurrId,
      buyFee: buyFee,
      sellFee: sellFee,
      published: !!published,
      permalink: permalink,
      market: market
    }, (error, result) => {
      if (error) {
        this.setState({errorMessage: error.message});
      } else {
        this.props.signals.admin.adminPairs();
      }
    });
  }
  savePair(event) {
    let {currId, marketCurrId, buyFee, sellFee, published, permalink, market} = this.refs.curr.getCurrentValues();
    Meteor.call('tradepair_update', this.data.tradePairs._id, {
      currId: currId,
      marketCurrId: marketCurrId,
      buyFee: buyFee,
      sellFee: sellFee,
      published: !!published,
      permalink: permalink,
      market: market
    },
    (error, result) => {
      if (error) {
        this.setState({errorMessage: error.message});
      } else {
        this.props.signals.admin.adminPairs();
      }
    });
  }
  currentVal(what) {
    return this.data.tradePairs ? this.data.tradePairs[what] : '';
  }
  allowSubmit() { this.setState({allowSubmit: true}); }
  disallowSubmit() { this.setState({allowSubmit: false}); }

  currsForSearch() {
    return this.data.currencies.map((curr) => {
      return {_id: curr._id, title: curr.shortName, description: curr.name};
    });
  }
  marketsForSearch() {
    return this.data.markets.map((m) => {
      return {_id: m._id, title: m.shortName, description: m.name};
    });
  }

  checkboxToggle() {
    this.setState({published: (this.state.published ? false : true)});
  }
  render() {
    let published = this.currentVal('published') ? 'checked' : false;

    //currId: currencyId
    //marketCurrId: currencyId
    //published: boolean
    //buyFee: float
    //sellFee: float
    return (
      <div>
        <Formsy.Form key={this.props.k} className='ui form'
          onValidSubmit={this.newCurr} onValid={this.allowSubmit} onInvalid={this.disallowSubmit}
        ref='curr'>
          <div className='field'>
            <a className='ui blue labeled icon button' href='/admin/tradepairs'>
              <i className='arrow left icon' />
              Back
            </a>
          </div>

          <Semantic.Select name='currId' label='Currency'
          validations='minLength:3' placeholder='Select currency'
          required value={this.currentVal('currId')} content={this.currsForSearch()} />

          <Semantic.Select name='marketCurrId' label='Market currency'
          validations='minLength:3' placeholder='Select currency'
          required value={this.currentVal('marketCurrId')} content={this.currsForSearch()} />

          <Semantic.Input name='permalink' label='Permalink' placeholder='ltc-btc'
          required value={this.currentVal('permalink')} />

          <Semantic.Select name='market' label='Market'
          validations='minLength:3' placeholder='Select market'
          required value={this.currentVal('market')} content={this.marketsForSearch()} />

          <Semantic.Input name='buyFee' label='Buy fee'
          validations='isNumeric' placeholder='Enter name of currency'
          required value={this.currentVal('buyFee')} />

          <Semantic.Input name='sellFee' label='Sell fee'
          validations='isNumeric' placeholder='Enter name of currency'
          required value={this.currentVal('sellFee')} />

          <div className='two fields'>
          <Semantic.Checkbox name='published' label='Published' onClick={this.checkboxToggle} isChecked={this.data.tradePairs && this.data.tradePairs.published ? true : false} />
            <div className='field'>
              <a className='ui positive labeled right aligned icon button'
                onClick={this.props.adm_pair ? this.savePair : this.newPair}>
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
export default AdminTradePairContainer = createContainer(({ params }) => {
  return {
    tradePairs: TradePairs.findOne(this.props.adm_pair),
    currencies: Currencies.find({}, {sort: {name: 1}}).fetch(),
    markets: PairTypes.find().fetch()
  };
}, AdminTradePair);
