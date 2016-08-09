import React from 'react';
import {connect} from 'cerebral-view-react';
import ReactDOM from 'react-dom';
const NotificationMessage = connect({
  notif: ['notif']
}, class NotificationMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      needShow: true,
      closed: false
    };
  }
  types() {
    return {
      vitalyTypes:{
        newTransaction: 'info',
        addBalance: 'accept',
        error: 'error',
        accept: 'accept',
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
    }
  }
  componentDidMount() {
    //this.props.signals.notif.changeTime();
    if (this.state.hidden && this.state.needShow) {
      $(ReactDOM.findDOMNode(this)).transition({
        animation: 'fade',
        onComplete: () => {
          this.setState({
            hidden: false
          });
          this.setState({
            needShow: false
          });
          if (this.props.item.timeout) {
            Meteor.setTimeout(() => {
              this.delMessage();
            }, this.props.item.timeout);
          }
        }
      });
    }
  }
  delMessage() {
    if (!this.state.closed) {
          //$this.setState({hidden: true});
      $(ReactDOM.findDOMNode(this)).transition({
        animation: 'fade',
        onComplete: () => {
          this.props.signals.notif.clearNew();

          this.setState({
            closed: true
          });
          this.setState({
            hidden: true
          });
        }
      });
    }
  }
  addIcon(item){
    return(
      <i className={this.types().messagesIcon[(item.icon
          ? item.icon
          : this.types().vitalyTypes[ item.type ] )] + ' icon'}></i>
    );
  }
  render() {
    return (
      <div className={'ui' + (this.state.hidden ? ' hidden' : '') + ' small icon message' + (this.props.item.type
        ? this.types().messageAccent[ this.types().vitalyTypes [ this.props.item.type ] ]
        : '')}>
        <i className='close icon' onClick={this.delMessage.bind(this)}></i>
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
export default  NotificationMessage;
