import React from 'react';
import {PairGroups, TradePairs, PairTypes} from '../../../both/collections';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';
import { createContainer } from 'meteor/react-meteor-data';

const AdminPairGroup = connect({
}, class AdminPairGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      allowSubmit: false,
      published: '',
      pairs: []
    };
  }

  newCurr(event) {
    let {name, market, tradesCount, ordersCount, published} = this.refs.curr.getCurrentValues();
    console.log({name: name, market: market, tradesCount: tradesCount, ordersCount: ordersCount, pairs: _.keys(this.state.pairs), published: !!published});
    Meteor.call('pairgroup_add',
    {name: name, tradesCount: tradesCount, ordersCount: ordersCount, pairs: _.keys(this.state.pairs)},
    (error, result) => {
      if (error) {
        this.setState({errorMessage: error.message});
      } else {
        this.props.signals.admin.adminPairGroups();
      }
    });
  }
  saveCurr(event) {
    let {name, market, tradesCount, ordersCount, published} = this.refs.curr.getCurrentValues();
    Meteor.call('pairgroup_update', this.props.pairgrup._id,
    {name: name, market: market, tradesCount: tradesCount, ordersCount: ordersCount, pairs: _.keys(this.state.pairs), published: !!published},
    (error, result) => {
      if (error) {
        this.setState({errorMessage: error.message});
      } else {
        this.props.signals.admin.adminPairGroups();
      }
    });
  }

  currentVal(what) {
    return this.props.pairgrup ? this.props.pairgrup[what] : '';
  }

  renderPairs(){
    //console.log(this.props.pairs);
    let pairs = this.state.pairs;
    return this.props.pairs.map((pair) => {
      return (
        <a key={pair._id} className={"ui label " + (pairs[pair._id]?"blue":"")} onClick={this.addPair.bind(this, pair)}>
          {pair.permalink}
        </a>
        );
    });
  }

  addPair(pair) {
    let pairs = this.state.pairs;
    pairs[pair._id] = !pairs[pair._id]||false;

    this.setState({pairs:pairs})
  }

  marketsForSearch() {
    return this.props.markets.map((m) => {
      return {_id: m._id, title: m.shortName, description: m.name};
    });
  }

  componentDidMount(){
    let pairs = this.state.pairs;
    if(pairs.length == 0 && this.props.curr){
      let pairgroup = this.props.pairgrup;
      for(pair of pairgroup.pairs){
        let curr = _.findWhere(this.props.pairs, {
          _id: pair
        });
        pairs[curr._id]=true;
      }
      this.setState({pairs:pairs});
    }
  }
  checkboxToggle() {
    this.setState({published: (this.state.published ? false : true)});
  }
  allowSubmit() { this.setState({allowSubmit: true}); }
  disallowSubmit() { this.setState({allowSubmit: false}); }
  render() {
    return (
      <div>

        <Formsy.Form key={this.props.k} className='ui form'
        onValidSubmit={this.newCurr.bind(this)} onValid={this.allowSubmit.bind(this)} onInvalid={this.disallowSubmit.bind(this)}
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

          <Semantic.Checkbox name='published' label='Published' onClick={this.checkboxToggle.bind(this)} isChecked={this.props.pairgrup && this.props.pairgrup.published ? true : false} />

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
export default AdminPairGroupContainer = createContainer((props) => {
  return {
    pairgrup: PairGroups.findOne({_id: props.pairgroup}),
    pairs: TradePairs.find({}, { sort: { name: 1 } }).fetch(),
    markets: PairTypes.find({}, { sort: { name: 1 } }).fetch(),
  };
}, AdminPairGroup);
