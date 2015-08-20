NotificationShow = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      haveMessages: false,
      messages:[]
    };
  },
  getDefaultProps() {
    return {
      messageAccent: {
        error:' negative', //red
        accept:' positive', //green
        warning:' warning', //orange
        info:' info', //blue
        chat:' purple',
        default:false //gray
      },
      messagesIcon:{
        error:' warning sign',
        accept:' checkmark',
        warning:' warning circle',
        info:' info circle',
        chat:' comment',
        default:false
      }
    };
  },
  getMeteorData() {
    return {
      notifications: Notifications.find({deleted: false}).fetch()
    };
  },
  componentDidMount() {
    //this.setState({messages:this.data.notifications});
    console.log(this.state.messages);
    Dispatcher.register((payload) => {
      console.log('new dispatcher event', payload);

      if(payload.actionType=='NEW_NOTIFICATION') {
          var mess=this.state.messages
          mess.push(payload.payload.message)
          this.setState({messages: mess});
          

      }
      if(payload.actionType=='DEL_NOTIFICATION'){
        this.setState({messages: _.reject(this.state.messages,(x)=>{return x._id===payload.payload.message})})
      }
      if(payload.actionType=='CHANGE_NOTIFICATION'){
        //???
      }
    })
    //this.setState({messages: mess});
  },


  renderMessages(){
    return this.state.messages.map((item) => {
      return (
        <NotificationMessage item={item} />
      )
    });
  },

  render() {
    return (
      <div className="ui item pointer">
        <i className="alarm icon" />
        {_.size(this.state.messages) ?
          <div className="down floating ui red circular mini label">{_.size(this.state.messages) }</div>
          : ""
        }
        <div className="notification container" ref="container">
          {this.renderMessages()}
        </div>
      </div>
    )
  }
});
