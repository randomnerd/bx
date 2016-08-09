import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

const DropMessage = connect({
  layout: ['layout'],
  notif: ['notif']
}, class DropMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      closed: false
    };
  }
  types() {
    return {
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
    }
  }
  componentDidMount() {
    if (this.props.notif.delAll) {
      if (!this.state.closed) {
        this.delMessage();
      }
    }
  }
  readMessage() {
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
  }
  delMessage() {
    if(confirm("Delete completely?")){
      $(ReactDOM.findDOMNode(this)).transition({
        animation: 'fade',
        onComplete: () => {
          this.setState({closed: true});
          this.props.signals.notif.delOne({id: this.props.item._id});
          Meteor.call('notifications/del_realy', this.props.item._id, function(error, result) {
            if (error) {
              this.setState({errorMessage: error.message});
            }else {
              return false;
            }
          });
        }
      });
    }
  }
  addHeader(item){
    return(
      <h4 className='ui header'>
        <i className={this.types().messagesIcon[(
          item.icon ? item.icon : this.types().vitalyTypes[ item.type ]
        )]
          + ' icon ' +
          (item.type ? this.types().messageAccent[ this.types().vitalyTypes[ item.type ] ] : '')}></i>
        {item.title}
        {this.props.newitem ?
          <span className="ui horizontal blue label">
            new
          </span>
          : null
        }
      </h4>
    )
  }
  render() {
    return (
      <a className=
      {'item ' + (this.props.item.type ? this.types().messageAccent[ this.types().vitalyTypes[ this.props.item.type ] ] : '')}
      onClick={this.props.newitem ? this.readMessage : this.delMessage.bind(this)}>

          {this.props.item.title ?
            this.addHeader(this.props.item)
            : ''
          }
          <p>{this.props.item.message}</p>

      </a>
    );
  }
});
export default DropMessageContainer = createContainer((props) => {
  return {

  };
}, DropMessage);
