import React from 'react';
import {Currencies, TradePairs, PairTypes}  from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';
import moment from 'moment';

const AdminUsers = connect({
  layout: ['layout']
}, class AdminUsers extends React.Component {
  delUser(event) {
    if (confirm('Remove user completely?')) {
      Meteor
        .call('user_remove', $(event.currentTarget).attr('data-del'), function(error, result) {
          if (result) {
            this.setState({
              errorMessage: err.message
            });
          } else {

          }
        });
    }
  }

  impersonate(userId) {
    Meteor.call('/admin/impersonate', userId, (error, result) => {
      if (error) return console.error('Failed to impersonate', error);
      // console.log(this.props.signals);
      this.props.signals.page.home();
      Meteor.connection.setUserId(userId);
    });
  }

  renderUserList() {
    return this.props.users.map((user) => {
        return (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.username}</td>
            <td>{user.emails[0]['address']}</td>
            <td>{moment(user.createdAt).format("DD.MM.YYYY - hh:mm:ss")}</td>
            <td></td>
            <td></td>
            <td className='right aligned collapsing'>
              <div className='ui tiny icon buttons'>
                <a className='ui blue button' href={'/admin/user/' + user._id}>
                  <i className='list layout icon'></i>
                </a>
                <a className='ui button' onClick={this.impersonate.bind(this, user._id)}>
                  <i className='sign in icon'></i>
                </a>
              </div>
            </td>
          </tr>
        );
      });
  }
  render() {
    return (
      <div>

        <table className='ui compact unstackable table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Reg date</th>
              <th>Is online</th>
              <th>Non-zero balance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderUserList()}
          </tbody>
        </table>
      </div>
    );
  }
});
export default AdminUsersContainer = createContainer((props) => {
  return {
    users: Meteor.users.find({},{ skip: (props.pageNum - 1) * 20 }).fetch()
  };
}, AdminUsers);
