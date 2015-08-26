NotificationShow = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      haveMessages: false,
      messages:[]
    };
  },
  addNotif(){
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
      notifications_new: Notifications.find({ack: false}).fetch(),
      notifications: Notifications.find({}, {limit: 10}).fetch(),
    };
  },
  componentDidMount() {
    this.setState({messages:this.data.notifications_new});
    //console.log(this.state.messages);
    Dispatcher.register((payload) => {
      //console.log('new dispatcher event', payload);

      if(payload.actionType=='NEW_NOTIFICATION') {
          var mess=this.state.messages
          mess.push(payload.payload.message)
          this.setState({messages: mess});


      }
      if(payload.actionType=='DEL_NOTIFICATION'){
        this.setState({ messages : _.reject( this.state.messages, (x)=>{ return x._id === payload.payload.message } ) })
      }
      if(payload.actionType=='CHANGE_NOTIFICATION'){
        //???
      }
    })
    //this.setState({messages: mess});
  },


  renderMessages(){

    return this.data.notifications_new.map((item) => {
      return (
        <NotificationMessage key={item._id} item={item} />
      )
    });
  },

  render() {
    return (
      <div className="ui item pointer" onClick={this.addNotif}>
        <i className="alarm icon" />
        {this.data.notifications_new.length ?
          <div className="down floating ui red circular mini label">{this.data.notifications_new.length }</div>
          : ""
        }
        <div className="notification container" ref="container">
          {this.renderMessages()}
        </div>
      </div>
    )
  }
});
