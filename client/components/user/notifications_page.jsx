import React from 'react';
import {Component} from 'cerebral-view-react';
import NotificationOne from './notification_one';
import {Notifications} from '../../../both/collections';

const NotificationsPage = Component({
  user: ['user'],
  //pair: ['pair.pair']
}, {
  mixins: [ReactMeteorData],
  clearAll(event) {
    if (confirm('Clear all notifications?')) {
      Meteor
        .call('notifications/clear_all', function(error, result) {
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
      notifications: Notifications.find({}, {
        limit: 50
      }, {
        sort: {
          createdAt: -1
        }
      }).fetch()
    };
  },
  renderNotificationsList() {
    return this.data
      .notifications
      .map((item) => {
        return (
          <NotificationOne key={item._id} item={item}/>
        );
      });
  },
  render() {
    return (
      <div className="ui main container">
        <a className='ui blue labeled icon button' onClick={this.clearAll}>
          <i className='trash icon'/>
          Clear all
        </a>
        <table className='ui compact basic table unstackable'>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Message</th>
              <th>New</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderNotificationsList()}
          </tbody>
        </table>
      </div>
    );
  }
});
export default NotificationsPage;
