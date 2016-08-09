import React from 'react';
import {PairTypes} from '../../../both/collections';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

const AdminCurrencies = connect({
  layout: ['layout']
}, class AdminCurrencies extends React.Component {
  delCurr(event) {
    if (confirm('Remove currency?')) {
      Meteor
        .call('pairtype_remove', $(event.currentTarget).attr('data-del'), function(error, result) {
          if (result) {
            this.setState({
              errorMessage: err.message
            });
          } else {
            //FlowRouter.go('/admin/currencies');
          }
        });
    }
  }
  renderCurrenciesList() {
    return this.data.currencies.map((curr) => {
      return (
          <tr key={curr._id}>
            <td>{curr.name}</td>
            <td>{curr.shortName}</td>
            <td>{curr.published ? 'true' : 'false'}</td>
            <td>{curr.permalink}</td>
            <td className='right aligned collapsing'>
              <div className='ui tiny icon buttons'>
                <a className='ui positive button' href={'/admin/pairtypes/edit/' + curr._id}>
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
        <a className='ui blue labeled icon button' href='/admin/pairtypes/new'>
          <i className='plus icon'/>
          New pair type
        </a>
        <table className='ui compact unstackable table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Short name</th>
              <th>Public</th>
              <th>Permalink</th>
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
export default AdminCurrenciesContainer = createContainer(({ params }) => {
  return {
    currencies: PairTypes.find({}, { sort: { name: 1 } }).fetch()
  };
}, AdminCurrencies);
