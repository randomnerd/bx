import React from 'react';
import {Currencies, TradePairs, PairTypes}  from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';

const AdminTradePairs = connect({
  layout: ['layout']
}, class AdminTradePairs extends React.Component {
  //currId: currencyId
  //marketCurrId: currencyId
  //published: boolean
  //buyFee: float
  //sellFee: float
  delPair(event) {
    if (confirm('Remove currency?')) {
      Meteor
        .call('tradepair_remove', $(event.currentTarget).attr('data-del'), function(error, result) {
          if (result) {
            this.setState({
              errorMessage: err.message
            });
          } else {

          }
        });
    }
  }
  currName(id) {
    let curr = _.findWhere(this.props.currencies, {
      _id: id
    });
    return curr
      ? curr.shortName
      : '';
  }
  marketName(id) {
    let curr = _.findWhere(this.props.markets, {
      _id: id
    });
    return curr
      ? curr.shortName
      : '';
  }

  renderPairsList() {
    return this.props.TradePairs.map((pair) => {
        return (
          <tr key={pair._id}>
            <td>{this.currName(pair.currId)}</td>
            <td>{this.currName(pair.marketCurrId)}</td>
            <td>{this.marketName(pair.market)}</td>
            <td>{pair.buyFee}</td>
            <td>{pair.sellFee}</td>
            <td>{pair.published
                ? 'true'
                : 'false'}</td>
            <td className='right aligned collapsing'>
              <div className='ui tiny icon buttons'>
                <a className='ui positive button' href={'/admin/tradepairs/edit/' + pair._id}>
                  <i className='write icon'></i>
                </a>
                <div className='ui negative button' onClick={this.delPair.bind(this)} data-del={pair._id}>
                  <i className='remove icon'></i>
                </div>
              </div>
            </td>
          </tr>
        );
      });
  }
  render() {
    return (
      <div>
        <a className='ui blue labeled icon button' href='/admin/tradepairs/new'>
          <i className='plus icon'/>
          New trade pair
        </a>
        <table className='ui compact unstackable table'>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Market currency</th>
              <th>Market</th>
              <th>Buy fee</th>
              <th>Sell fee</th>
              <th>Published</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPairsList()}
          </tbody>
        </table>
      </div>
    );
  }
});
export default AdminTradePairsContainer = createContainer((props) => {
  return {
    TradePairs: TradePairs.find({}, { sort: { name: 1 } }).fetch(),
    currencies: Currencies.find({}, { sort: { name: 1 } }).fetch(),
    markets: PairTypes.find().fetch()
  };
}, AdminTradePairs);
