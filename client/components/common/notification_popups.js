import React from 'react';
import {connect} from 'cerebral-view-react';
import {Notifications} from '../../../both/collections';
import NotificationMessage from './notification_message';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

const NotificationPopups = connect({
  notif: 'notif',
}, class NotificationPopups extends React.Component {
  state = {
    haveMessages: false,
    messages: [],
    countFromDB: 0,
    nowDate: new Date().valueOf()
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.notif.changeTime) {
      this.setState({ nowDate: new Date().valueOf() });
    }
    if (nextProps.notif.newOne) {
      let mess = _.clone(this.state.messages);
      //payload.payload.message.needShow = true;
      mess.push(nextProps.notif.newOne);
      this.setState({messages: mess});
    }
    if (nextProps.notif.delOne) {
      this.setState({ messages: _.reject( this.state.messages, (x)=> {
        if (x._id === nextProps.notif.delOne) {
          if ( x.createdAt ) { this.setState({ nowDate: new Date(x.createdAt).valueOf() }); }
          return true;
        } else {
          return false;
        }
      }
      )});
    }
  }

  renderMessages() {
    let mess = _.clone(this.state.messages);
    if (this.props.notifications_now) {
      this.props.notifications_now.map((item) => {
        mess.push(item);
      });
    }

    return mess.map((item) => {
      item.timeout = item.timeout || 3000;
      return (
        <NotificationMessage key={item._id} item={item} needShow={true} />
      );
    });
  }

  render() {
    return (

        <div className="notification container" ref="container">
          {this.renderMessages()}
        </div>

    );
  }
});
export default NotificationPopupsContainer = createContainer((props) => {
  return {
    notifications_now: Notifications.find({
      ack: false, createdAt: {$gt: new Date().valueOf()}
    }).fetch(),
  };
}, NotificationPopups);
