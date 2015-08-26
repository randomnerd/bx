NotificationShow = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      haveMessages: false,
      messages:[],
      countFromDB: 0,
      nowDate: new Date().valueOf()
    };
  },
  addNotif(){
    console.log('ok');
    Meteor.call('notifications/add',function(error, result){
      if(error||result){
        console.log(error.message);
        this.setState({errorMessage: error.message});
      }else{
          console.log('added');
      }
    })
  },
  getMeteorData() {
    return {
      notifications_new: Notifications.find({ack: false}).fetch(),
      notifications_now: Notifications.find({ack: false, createdAt: {$gt: new Date(this.state.nowDate)}}).fetch(),
      notifications: Notifications.find({}, {limit: 10}).fetch()
    };
  },
  componentDidMount() {
    $(this.getDOMNode()).dropdown({on: 'hover', action: 'nothing'});
    //this.setState({messages:this.data.notifications_new});
    var $this=this
    Dispatcher.register((payload) => {
      //console.log(this.state.messages);
      //console.log('new dispatcher event', payload);

      if(payload.actionType=='CHANGE_NOTIFICATION_TIME'){
        $this.setState({ nowDate: new Date().valueOf() })
      }
      if(payload.actionType=='NEW_NOTIFICATION') {
          var mess=_.clone($this.state.messages);
          mess.push(payload.payload.message)
          $this.setState({messages: mess});


      }
      if(payload.actionType=='DEL_NOTIFICATION'){
        $this.setState({ messages : _.reject( $this.state.messages, (x)=>{
          if(x._id === payload.payload.message){
            if( x.createdAt ){ $this.setState({ nowDate: new Date(x.createdAt).valueOf() }) }
            return true
          }else{
            return false
          } } ) })


        //console.log(this.state.messages);
      }
      if(payload.actionType=='CHANGE_NOTIFICATION'){
        //???
      }
    })
    //this.setState({messages: mess});
  },

  renderDropMessages(){
    return this.data.notifications_new.map((item) => {
      return (
        <DropMessage key={item._id} item={item} />
      )
    });
  },
  renderMessages(){
    var mess=_.clone(this.state.messages)
    if(this.data.notifications_now){
      this.data.notifications_now.map((item) => {
        mess.push(item)
      })
    }

    return mess.map((item) => {
      item.timeout=item.timeout||3000
      return (
        <NotificationMessage key={item._id} item={item} needShow={true} />
      )
    });
  },

  render() {
    return (
      <div className="ui dropdown item" onClick={this.addNotif}>
        <i className="alarm icon" />
        <i className="dropdown icon" />
        {this.data.notifications_new.length ?
          <div className="down floating ui red circular mini label">{this.data.notifications_new.length }</div>
          : ""
        }
        <div className="menu">
          {this.renderDropMessages()}
        </div>
        <div className="notification container" ref="container">
          {this.renderMessages()}
        </div>
      </div>
    )
  }
});
