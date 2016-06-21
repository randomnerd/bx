import React from 'react';
import {PairGroups, TradePairs, PairTypes} from '../../../both/collections';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';

const AdminPairGroups = Component({
  layout: ['layout']
}, {
  mixins: [ReactMeteorData],
  delCurr(event) {
    if (confirm('Remove currency?')) {
      Meteor
        .call('pairgroup_remove', $(event.currentTarget).attr('data-del'), function(error, result) {
          if (result) {
            this.setState({
              errorMessage: err.message
            });
          } else {
            //FlowRouter.go('/admin/currencies');
          }
        });
    }
  },
  getMeteorData() {
    return {
      pairgroups: PairGroups.find({}, { sort: { name: 1 } }).fetch(),
      pairs: TradePairs.find().fetch(),
      markets: PairTypes.find().fetch()
    };
  },
  currName(id) {
    let curr = _.findWhere(this.data.pairs, {
      _id: id
    });
    return curr
      ? curr.permalink
      : '';
  },
  marketName(id) {
    let curr = _.findWhere(this.data.markets, {
      _id: id
    });
    return curr
      ? curr.shortName
      : '';
  },
  renderPairs(pairs){

    return pairs.map((pair) => {
      return (
        <span className={"ui label blue"}>
          {this.currName(pair)}
        </span>
        );
    });
  },
  renderCurrenciesList() {
    //console.log(this.data.pairgroups);
    return this.data.pairgroups.map((curr) => {
      return (
          <tr key={curr._id}>
            <td>{curr.name}</td>
            <td>{this.marketName(curr.market)}</td>
            <td>{this.renderPairs(curr.pairs)}</td>
            <td>Trades: {curr.tradesCount}, Orders: {curr.ordersCount}</td>
            <td className='right aligned collapsing'>
              <div className='ui tiny icon buttons'>
                <a className='ui positive button' href={'/admin/pairgroups/edit/' + curr._id}>
                  <i className='write icon'></i>
                </a>
                <div className='ui negative button' onClick={this.delCurr} data-del={curr._id}>
                  <i className='remove icon'></i>
                </div>
              </div>
            </td>
          </tr>
        );
    });
  },
  render() {
    return (
      <div>
        <a className='ui blue labeled icon button' href='/admin/pairgroups/new'>
          <i className='plus icon'/>
          New pairgroup
        </a>
        <table className='ui compact unstackable table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Market</th>
              <th>Pairs</th>
              <th>show</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderCurrenciesList()}
          </tbody>
        </table>
      </div>
    );
  }
});
export default AdminPairGroups;