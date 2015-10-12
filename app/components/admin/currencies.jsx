import React from 'react';
import {Currencies} from 'collections';

export default React.createClass({
  mixins: [ReactMeteorData],
  delCurr(event) {
    if (confirm("Remove currency?")) {
      Meteor.call('currrency_remove',$(event.currentTarget).attr('data-del'),function(error, result){
				if(result){
					this.setState({errorMessage: err.message});
				}else{
					FlowRouter.go('/admin/currencies');
				}
			});
    }
  },
  getMeteorData() {
    return {
      currencies: Currencies.find({}, {sort: {name: 1}}).fetch()
    }
  },
  renderCurrenciesList() {
    return this.data.currencies.map((curr) => {
      return (
        <tr key={curr._id}>
          <td>{curr.name}</td>
          <td>{curr.shortName}</td>
          <td>{curr.status}</td>
          <td>{curr.published ? 'true' : 'false'}</td>
          <td className="right aligned collapsing">
            <div className="ui tiny icon buttons">
              <a className="ui positive button" href={"/admin/currencies/edit/" + curr.shortName}>
                <i className="write icon"></i>
              </a>
              <div className="ui negative button" onClick={this.delCurr} data-del={curr._id}>
                <i className="remove icon"></i>
              </div>
            </div>
          </td>
        </tr>
      );
    })
  },
  render() {
    return (
      <div>
        <a className="ui blue labeled icon button" href="/admin/currencies/new">
          <i className="plus icon" />
          New currency
        </a>
        <table className="ui compact table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Short name</th>
              <th>Status</th>
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
