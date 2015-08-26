NotificationMessage = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      hidden: true,
      needShow:true,

    };
  },
  getDefaultProps(){
    return {
      item: {timeout: 5000}
    }
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
    //Dispatcher.dispatch({ actionType: 'CHANGE_NOTIFICATION_TIME' })
    if(this.state.hidden&&this.state.needShow){
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
    var $this=this;
    $(this.getDOMNode()).transition({
      animation  : 'fade',
      onComplete : function() {
        Dispatcher.dispatch({ actionType: 'DEL_NOTIFICATION', payload: { message:$this.props.item._id } })
      }
    })
  },


  render() {
    //console.log(this.props.item._id)
    return (
      <div className={"ui" + (this.state.hidden ? " hidden" : '') + " small icon message" + (this.props.item.type?this.types.messageAccent[this.props.item.type]:'')}>
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
