import React from 'react';
import {PairGroups, TradePairs, PairTypes} from '../../../both/collections';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';

const AdminPairGroup = Component({
  layout: ['layout'],
  curr: ['pairgroup']
}, {
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      published: '',
      pairs: []
    };
  },

  newCurr(event) {
    let {name, market, tradesCount, ordersCount, published} = this.refs.curr.getCurrentValues();
    console.log({name: name, market: market, tradesCount: tradesCount, ordersCount: ordersCount, pairs: _.keys(this.state.pairs), published: !!published});
    Meteor.call('pairgroup_add',
    {name: name, tradesCount: tradesCount, ordersCount: ordersCount, pairs: _.keys(this.state.pairs)},
    function(error, result) {
      if (result) {
        console.log('res: '+result);
        //this.setState({errorMessage: err.message});
      } else {
        console.log('err:' + error);
        //FlowRouter.go('/admin/currencies');
      }
    });
  },
  saveCurr(event) {
    let {name, market, tradesCount, ordersCount, published} = this.refs.curr.getCurrentValues();
    Meteor.call('pairgroup_update', this.data.pairgrup._id,
    {name: name, market: market, tradesCount: tradesCount, ordersCount: ordersCount, pairs: _.keys(this.state.pairs), published: !!published},
    function(error, result) {
      if (result) {
        console.log('res: '+result);
        //this.setState({errorMessage: err.message});
      } else {
        console.log('err:' + error);
        //FlowRouter.go('/admin/currencies');
      }
    });
  },
  getMeteorData() {
    return {
      pairgrup: PairGroups.findOne({_id: this.props.curr}),
      pairs: TradePairs.find({}, { sort: { name: 1 } }).fetch(),
      markets: PairTypes.find({}, { sort: { name: 1 } }).fetch(),
    };
  },
  currentVal(what) {
    return this.data.pairgrup ? this.data.pairgrup[what] : '';
  },

  renderPairs(){
    //console.log(this.data.pairs);
    let pairs = this.state.pairs;
    return this.data.pairs.map((pair) => {
      return (
        <a key={pair._id} className={"ui label " + (pairs[pair._id]?"blue":"")} onClick={this.addPair.bind(this, pair)}>
          {pair.permalink}
        </a>
        );
    });
  },

  addPair(pair) {
    let pairs = this.state.pairs;
    pairs[pair._id] = !pairs[pair._id]||false;

    this.setState({pairs:pairs})
  },

  marketsForSearch() {
    return this.data.markets.map((m) => {
      return {_id: m._id, title: m.shortName, description: m.name};
    });
  },

  componentDidMount(){
    let pairs = this.state.pairs;
    if(pairs.length == 0 && this.props.curr){
      let pairgroup = this.data.pairgrup;
      for(pair of pairgroup.pairs){
        let curr = _.findWhere(this.data.pairs, {
          _id: pair
        });
        pairs[curr._id]=true;
      }
      this.setState({pairs:pairs});
    }
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
            <a className='ui blue labeled icon button' href='/admin/pairgroups'>
              <i className='arrow left icon' />
              Back
            </a>
          </div>
          <Semantic.Input name='name'
          label='Full name' validations='minLength:3' placeholder='Enter name of currency type'
          required value={this.currentVal('name')} />
          <div className='field'>

          <Semantic.Select name='market' label='Market'
          validations='minLength:3' placeholder='Select market'
          required value={this.currentVal('market')} content={this.marketsForSearch()} />

          <label>Chose trade pairs for group</label>
            <div className="ui labels">
              {this.renderPairs()}
            </div>
          </div>
          <div className='two fields'>
            <Semantic.Input name='tradesCount'
            label='Number of trades' validations='minLength:1' placeholder='Enter the umber of trades you want to show'
            required value={this.currentVal('tradesCount')} />
            <Semantic.Input name='ordersCount'
            label='Number of orders' validations='minLength:1' placeholder='Enter the umber of orders you want to show'
            required value={this.currentVal('tradesCount')} />
          </div>

          <div className='two fields'>

            <Semantic.Checkbox name='published' label='Published' isChecked={this.published} />

            <div className='field'>

              <a className='ui positive labeled right aligned icon button'
                onClick={this.props.curr ? this.saveCurr : this.newCurr}>
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
export default AdminPairGroup;
