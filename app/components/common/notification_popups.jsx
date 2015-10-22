import React from 'react';
import {Notifications} from 'collections';
import NotificationMessage from 'components/common/notification_message';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      haveMessages: false,
      messages: [],
      countFromDB: 0,
      nowDate: new Date().valueOf()
    };
  },
  getMeteorData() {
    return {
      notifications_now: Notifications.find({
        ack: false, createdAt: {$gt: new Date(this.state.nowDate)}
      }).fetch(),
    };
  },
  componentDidMount() {
    let $this = this;
    Dispatcher.register((payload) => {
      if (payload.actionType === 'CHANGE_NOTIFICATION_TIME') {
        $this.setState({ nowDate: new Date().valueOf() });
      }
      if (payload.actionType === 'NEW_NOTIFICATION') {
        let mess = _.clone($this.state.messages);
        payload.payload.message.needShow = true;
        mess.push(payload.payload.message);
        $this.setState({messages: mess});
      }
      if (payload.actionType === 'DEL_NOTIFICATION') {
        $this.setState({ messages: _.reject( $this.state.messages, (x)=> {
          if (x._id === payload.payload.message) {
            if ( x.createdAt ) { $this.setState({ nowDate: new Date(x.createdAt).valueOf() }); }
            return true;
          } else {
            return false;
          }
        }
        )});
      }
      if (payload.actionType === 'CHANGE_NOTIFICATION') {
        //???
      }
    });
  },

  renderMessages() {
    let mess = _.clone(this.state.messages);
    if (this.data.notifications_now) {
      this.data.notifications_now.map((item) => {
        mess.push(item);
      });
    }

    return mess.map((item) => {
      item.timeout = item.timeout || 3000;
      return (
        <NotificationMessage key={item._id} item={item} needShow={true} />
      );
    });
  },

  render() {
    return (

        <div className="notification container" ref="container">
          {this.renderMessages()}
        </div>

    );
  }
});
