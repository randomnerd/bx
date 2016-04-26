import React from 'react';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';

const DropMessage = Component({
  layout: ['layout'],
  notif: ['notif']
}, {
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      hidden: true,
      closed: false
    };
  },
  types: {
    vitalyTypes:{
      newTransaction: 'info',
      addBalance: 'accept',
      error: 'error', //red
      accept: 'accept', //green
      warning: 'warning', //orange
      info: 'info', //blue
      chat: 'chat',
    },
    messageAccent: {
      error: ' red', //red
      accept: ' green', //green
      warning: ' orange', //orange
      info: ' blue', //blue
      chat: ' purple',
      default: false //gray
    },
    messagesIcon: {
      error: ' warning sign',
      accept: ' checkmark',
      warning: ' warning circle',
      info: ' info circle',
      chat: ' comment',
      default: false
    }
  },
  getMeteorData() {
    return {

    };
  },
  componentDidMount() {
    if (this.props.notif.delAll) {
      if (!this.state.closed) {
        this.delMessage();
      }
    }
  },
  delMessage() {
    $(ReactDOM.findDOMNode(this)).transition({
      animation: 'fade',
      onComplete: () => {
        this.setState({closed: true});
        this.props.signals.notif.delOne({id: this.props.item._id});
        Meteor.call('notifications/del', this.props.item._id, function(error, result) {
          if (error) {
            this.setState({errorMessage: error.message});
          }else {
            return false;
          }
        });
      }
    });
  },
  addHeader(item){
    return(
      <h4 className='ui header'>
        <i className={this.types.messagesIcon[(
          item.icon ? item.icon : this.types.vitalyTypes[ item.type ]
        )]
          + ' icon ' +
          (item.type ? this.types.messageAccent[ this.types.vitalyTypes[ item.type ] ] : '')}></i>
        {item.title}
      </h4>
    )
  },
  render() {
    return (
      <a className=
      {'item ' + (this.props.item.type ? this.types.messageAccent[ this.types.vitalyTypes[ this.props.item.type ] ] : '')}
      onClick={this.props.closable ? this.delMessage : ''}>

          {this.props.item.title ?
            this.addHeader(this.props.item)
            : ''
          }
          <p>{this.props.item.message}</p>

      </a>
    );
  }
});
export default DropMessage;
