import React from 'react';
import {Notifications} from 'collections';
import DropMessage from 'components/common/drop_message';

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
  addNotif() {
    // console.log('ok');
    // Meteor.call('notifications/add',function(error, result){
    //   if(error||result){
    //     console.log(error.message);
    //     this.setState({errorMessage: error.message});
    //   }else{
    //       console.log('added');
    //   }
    // })
  },
  getMeteorData() {
    return {
      notifications_new: Notifications.find({ack: false}, {sort: {createdAt: -1}}).fetch(),
      notifications_now: Notifications.find({
        ack: false, createdAt: {$gt: new Date(this.state.nowDate)
        }}, {sort: {createdAt: -1}}).fetch(),
      notifications: Notifications.find({}, {limit: 10}, {sort: {createdAt: -1}}).fetch()
    };
  },
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).dropdown({on: 'hover', action: 'nothing'});
    //this.setState({messages:this.data.notifications_new});
    let $this = this;
    Dispatcher.register((payload) => {
      //console.log(this.state.messages);
      //console.log('new dispatcher event', payload);

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
            if (x.createdAt) {
              $this.setState({ nowDate: new Date(x.createdAt).valueOf() });
            }
            return true;
          }else {
            return false;
          }
        } ) });

        //console.log(this.state.messages);
      }
      if (payload.actionType === 'CHANGE_NOTIFICATION') {
        //???
      }
    });
    //this.setState({messages: mess});
  },
  delAllMessages() {
    Dispatcher.dispatch({ actionType: 'DEL_ALL_NOTIFICATION' });
  },
  renderDropMessages() {
    if (this.data.notifications_new.length) {
      return this.data.notifications_new.map((item) => {
        return (
          <DropMessage key={item._id} item={item} closable={true} />
        );
      });
    }else {
      return this.data.notifications.map((item) => {
        return (
          <DropMessage key={item._id} item={item} closable={false} />
        );
      });
    }
  },

  render() {
    return (
      <div className='ui dropdown right item' onClick={this.addNotif}>
        <i className='alarm icon' />
        <i className='dropdown icon' />
          {this.data.notifications_new.length ?
            <div className='down floating ui red circular mini label'>
            {this.data.notifications_new.length}
            </div>
            : ''
          }
        <div className='menu'>
          <div className='scrolling menu'>
            {this.renderDropMessages()}
          </div>
            {this.data.notifications_new.length ?
              <a className='item' onClick={this.delAllMessages}>
                Mark all as read
              </a>
              : ''
            }
          <a className='item' href='/u/notifications'>
            See all notifications
          </a>
        </div>

      </div>
    );
  }
});
