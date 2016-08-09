import React from 'react';
import {connect} from 'cerebral-view-react';
import NotificationOne from './notification_one';
import {Notifications} from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';

const NotificationsPage = connect({
  user: ['user'],
  //pair: ['pair.pair']
}, class NotificationsPage extends React.Component {
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
  }

  renderNotificationsList() {
    return this.props
      .notifications
      .map((item) => {
        return (
          <NotificationOne key={item._id} item={item}/>
        );
      });
  }

  render() {
    return (
      <div className="ui main container">
        <a className='ui blue labeled icon button' onClick={this.clearAll.bind(this)}>
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

export default NotificationsPageContainer = createContainer((props) => {
  return {
    notifications: Notifications.find({}, {limit: 50}, { sort: {createdAt: -1}}).fetch()
  };
}, NotificationsPage);
