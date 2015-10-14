import React from 'react';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      hidden: true,
      closed: false
    };
  },
  types: {
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
    let $this = this;
    Dispatcher.register((payload) => {
      if (payload.actionType === 'DEL_ALL_NOTIFICATION') {
        if (!$this.state.closed) {
          $this.delMessage();
        }
      }
    });
  },
  delMessage() {
    let $this = this;
    $(ReactDOM.findDOMNode(this)).transition({
      animation: 'fade',
      onComplete: function() {
        $this.setState({closed: true});
        Dispatcher.dispatch({
          actionType: 'DEL_NOTIFICATION',
          payload: { message: $this.props.item._id }
        });
        Meteor.call('notifications/del', $this.props.item._id, function(error, result) {
          if (error || result) {
            console.log(error, result);
            $this.setState({errorMessage: error.message});
          }else {
            return false;
          }
        });
      }
    });
  },

  render() {
    //console.log(this.props.item._id)
    return (
      <a className=
      {'item ' + (this.props.item.type ? this.types.messageAccent[this.props.item.type] : '')}
      onClick={this.props.closable ? this.delMessage : ''}>

          {this.props.item.title ?
            <h4 className='ui header'>
              <i className={this.types.messagesIcon[(
                this.props.item.icon ? this.props.item.icon : this.props.item.type
              )]
                + ' icon' +
                (this.props.item.type ? this.types.messageAccent[this.props.item.type] : '')}></i>
              {this.props.item.title}
            </h4>
            : ''
          }
          <p>{this.props.item.message}</p>

      </a>
    );
  }
});
