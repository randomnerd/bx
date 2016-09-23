import React from 'react';
import {Currencies, TradePairs, PairTypes}  from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';
import moment from 'moment';

const AdminUsers = connect({
  adminUserPageNum: 'adminUserPageNum'
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

  showMore() {
    this.props.signals.admin.adminUsers({pageNum: this.props.adminUserPageNum + 1});
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
            <td><i className={"circle icon " + (user.profile && user.profile.online ? 'green' : 'thin')}></i></td>
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
    let showMoreButton = this.props.users.length == this.props.adminUserPageNum*20;
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderUserList()}
          </tbody>
        </table>
        {showMoreButton ? <a className="ui basic button" onClick={this.showMore.bind(this)}>Show more</a> : null}
      </div>
    );
  }
});
export default AdminUsersContainer = createContainer((props) => {
  return {
    users: Meteor.users.find().fetch(),
  };
}, AdminUsers);
