import React from 'react';
import {Component} from 'cerebral-view-react';
const NotificationMessage = Component({
},{
  getInitialState() {
    return {
      hidden: true,
      needShow: true,
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
      error: ' negative', //red
      accept: ' positive', //green
      warning: ' warning', //orange
      info: ' info', //blue
      chat: ' purple',
      default:
        false //gray
    },
    messagesIcon: {
      error: ' warning sign',
      accept: ' checkmark',
      warning: ' warning circle',
      info: ' info circle',
      chat: ' comment',
      default:
          false
    }
  },
  componentDidMount() {
    let $this = this;
        //Dispatcher.dispatch({ actionType: 'CHANGE_NOTIFICATION_TIME' })
    if (this.state.hidden && this.state.needShow) {
      $(ReactDOM.findDOMNode(this)).transition({
        animation: 'fade',
        onComplete: function() {
          $this.setState({
            hidden: false
          });
          $this.setState({
            needShow: false
          });
          if ($this.props.item.timeout) {
            Meteor.setTimeout(() => {
              $this.delMessage();
            }, $this.props.item.timeout);
          }
        }
      });
    }
  },
  delMessage() {
    let $this = this;
    if (!this.state.closed) {
          //$this.setState({hidden: true});
      $(ReactDOM.findDOMNode(this)).transition({
        animation: 'fade',
        onComplete: function() {
          Dispatcher.dispatch({
            actionType: 'DEL_NOTIFICATION',
            payload: {
              message: $this.props.item._id
            }
          });
          $this.setState({
            closed: true
          });
          $this.setState({
            hidden: true
          });
        }
      });
    }
  },
  addIcon(item){
    return(
      <i className={this.types.messagesIcon[(item.icon
          ? item.icon
          : this.types.vitalyTypes[ item.type ] )] + ' icon'}></i>
    )
  },
  render() {
    return (
          <div className={'ui' + (this.state.hidden ? ' hidden' : '') + ' small icon message' + (this.props.item.type
            ? this.types.messageAccent[ this.types.vitalyTypes [ this.props.item.type ] ]
            : '')}>
            <i className='close icon' onClick={this.delMessage}></i>
            {this.addIcon(this.props.item)}

            <div className='content'>
              {this.props.item.title
                ? <div className='header'>
                    {this.props.item.title}
                  </div>
                : ''
              }
              <p>{this.props.item.message}</p>
            </div>
          </div>
        );
  }
});
export default NotificationMessage;
