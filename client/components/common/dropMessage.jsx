DropMessage = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      hidden: true
    };
  },
  types: {
      messageAccent: {
        error:' red', //red
        accept:' green', //green
        warning:' orange', //orange
        info:' blue', //blue
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
    $(this.getDOMNode()).transition('fade')

    Meteor.setTimeout(() => {
      Dispatcher.dispatch({ actionType: 'DEL_NOTIFICATION', payload: { message:this.props.item._id } })
      Meteor.call('notifications/del',this.props.item._id,function(error, result){
        if(error||result){
          console.log(error,result)
          this.setState({errorMessage: error.message});
        }else{
          return false
        }
      })
    },500)
  },


  render() {
    //console.log(this.props.item._id)
    return (
      <a className={"item " + (this.props.item.type?this.types.messageAccent[this.props.item.type]:'')} onClick={this.delMessage}>

          {this.props.item.title?
            <h4 className={"ui header" + (this.props.item.type?this.types.messageAccent[this.props.item.type]:'')}>
              {this.props.item.title}
            </h4>
            :""
          }
          <p>{this.props.item.message}</p>

      </a>
    )
  }
});
