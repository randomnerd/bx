import React from 'react';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      hidden: true,
      needShow: true,
      closed: false
    };
  },
  types: {
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
  getMeteorData() {
    return {};
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

  render() {
        //console.log(this.props.item._id)
    return (
          <div className={'ui' + (this.state.hidden
            ? ' hidden'
            : '') + ' small icon message' + (this.props.item.type
            ? this.types.messageAccent[this.props.item.type]
            : '')}>
            <i className='close icon' onClick={this.delMessage}></i>
            <i className={this.types.messagesIcon[(this.props.item.icon
                ? this.props.item.icon
                : this.props.item.type)] + ' icon'}></i>

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
