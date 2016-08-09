import React from 'react';
import ReactDOM from 'react-dom';
import {Notifications} from '../../../both/collections';
import DropMessage from '../common/drop_message';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

const NotificationShow = connect({
  layout: ['layout'],
  notif: ['notif']
}, class NotificationShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haveMessages: false,
      messages: [],
      countFromDB: 0,
      nowDate: new Date().valueOf()
    };
  }
  newnew(){
    Meteor.call('notifications/add', function(error, result) {
      if (error) {
        this.setState({errorMessage: error.message});
      }else {
        return false;
      }
    });

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

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).dropdown({on: 'hover', action: 'nothing'});

    //this.setState({messages: mess});
  }
  delAllMessages() {
    this.props.signals.notif.delAll();
  }
  renderDropMessages() {
    if (this.props.notifications_new.length) {
      return this.props.notifications_new.map((item) => {
        return (
          <DropMessage key={item._id} item={item} closable={true} newitem={true} />
        );
      });
    }else {
      return this.props.notifications.map((item) => {
        return (
          <DropMessage key={item._id} item={item} closable={false} newitem={false} />
        );
      });
    }
  }

  render() {
    return (
      <div className='ui dropdown right item notifications'>
        <i className='alarm icon' />
        <i className='dropdown icon' />
          {this.props.notifications_new.length ?
            <div className='down floating ui red circular mini label'>
            {this.props.notifications_new.length}
            </div>
            : ''
          }
        <div className='menu'>
          <div className='scrolling menu'>
            {this.renderDropMessages()}
          </div>
            {this.props.notifications_new.length ?
              <a className='item' onClick={this.delAllMessages.bind(this)}>
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
export default NotificationShowContainer = createContainer((props) => {
  return {
    notifications_new: Notifications.find({ack: false}, {sort: {createdAt: -1}}).fetch(),
    notifications_now: Notifications.find({
      ack: false, createdAt: {$gt: new Date().valueOf()
      }}, {sort: {createdAt: -1}}).fetch(),
    notifications: Notifications.find({}, {limit: 10}, {sort: {createdAt: -1}}).fetch()
  };
}, NotificationShow);
