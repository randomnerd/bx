NotificationMessage = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      hidden: true
    };
  },
  types: {
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
  },
  getMeteorData() {
    return {

    };
  },
  componentDidMount() {
    var $this=this
    if(this.state.hidden){
      $(this.getDOMNode()).transition({
        animation  : 'fade',
        onComplete : function() {
          $this.setState({hidden: false});
          if($this.props.item.timeout){
            Meteor.setTimeout(() => {
              $this.delMessage()
            },$this.props.item.timeout)
          }
        }
      })
    }
  },
  delMessage(){
    $(this.getDOMNode()).transition('fade')

    Meteor.setTimeout(() => {
      Dispatcher.dispatch({ actionType: 'DEL_NOTIFICATION', payload: { message:this.props.item._id } })
      Meteor.call('notifications/del',this.props.item._id,function(error, result){
        if(error||result){
          this.setState({errorMessage: error.message});
        }else{

        }
      })
    },500)
  },


  render() {
    return (
      <div key={this.props.item._id} className={"ui" + (this.state.hidden ? " hidden" : '') + " small icon message" + (this.props.item.type?this.types.messageAccent[this.props.item.type]:'')}>
        <i className="close icon" onClick={this.delMessage}></i>
        {this.props.item.icon?
          <i className={this.types.messagesIcon[(this.props.item.icon?this.props.item.icon:this.props.item.type)] + " icon"}></i>
          :""
        }
        <div className="content">
          {this.props.item.title?
            <div className="header">
              {this.props.item.title}
            </div>
            :""
          }
          <p>{this.props.item.message}</p>
        </div>
      </div>
    )
  }
});
