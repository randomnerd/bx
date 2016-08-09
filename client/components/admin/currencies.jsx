import React from 'react';
import {Currencies, CurrTypes} from '../../../both/collections';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

const AdminCurrencies = connect({
  layout: ['layout']
}, class AdminCurrencies extends React.Component {
  delCurr(event) {
    if (confirm('Remove currency?')) {
      Meteor
        .call('currrency_remove', $(event.currentTarget).attr('data-del'), function(error, result) {
          if (result) {
            this.setState({
              errorMessage: err.message
            });
          } else {
            FlowRouter.go('/admin/currencies');
          }
        });
    }
  }

  typeName(id) {
    let curr = _.findWhere(this.props.currtypes, {
      _id: id
    });
    return curr
      ? curr.shortName
      : '';
  }
  renderCurrenciesList() {
    return this.props.currencies.map((curr) => {
      return (
          <tr key={curr._id}>
            <td>{curr.name}</td>
            <td>{curr.shortName}</td>
            <td>{curr.status}</td>
            <td>{this.typeName(curr.type)}</td>
            <td>{curr.published ? 'true' : 'false'}</td>
            <td className='right aligned collapsing'>
              <div className='ui tiny icon buttons'>
                <a className='ui positive button' href={'/admin/currencies/edit/' + curr._id}>
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
  }
  render() {
    return (
      <div>
        <a className='ui blue labeled icon button' href='/admin/currencies/new'>
          <i className='plus icon'/>
          New currency
        </a>
        <table className='ui compact unstackable table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Short name</th>
              <th>Status</th>
              <th>Type</th>
              <th>Public</th>
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
export default AdminCurrenciesContainer = createContainer((props) => {
  return {
    currencies: Currencies.find({}, { sort: { name: 1 } }).fetch(),
    currtypes: CurrTypes.find().fetch()
  };
}, AdminCurrencies);
