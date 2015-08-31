NotificationOne = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      hidden: true,
      closed: false
    };
  },
  types: {
      messageAccent: {
        error:' negative', //red
        accept:' positive', //green
        warning:' warning', //orange
        info:' info', //blue
        chat:' chat',
        default:false //gray
      },
      messagesIcon:{
        error:' warning sign',
        accept:' checkmark',
        warning:' warning circle',
        info:' info circle',
        chat:' comment',
        default:' comment outline'
      }
  },
  getMeteorData() {
    return {

    };
  },
  componentDidMount() {
    
  },
  delMessage(){
    var $this=this
    $(this.getDOMNode()).transition({
      animation  : 'fade',
      onComplete : function() {
        $this.setState({closed: true});
        Meteor.call('notifications/del_realy',$this.props.item._id,function(error, result){
          if(error||result){
            console.log(error,result)
            $this.setState({errorMessage: error.message});
          }else{
            return false
          }
        })
      }
    })
  },


  render() {
    //console.log(this.props.item._id)
    return (

      <tr key={this.props.item._id} className={"item " + (this.props.item.type?this.types.messageAccent[this.props.item.type]:'')}>
        <td><i className={this.types.messagesIcon[(this.props.item.icon?this.props.item.icon:this.props.item.type)] + " icon" + (this.props.item.type?this.types.messageAccent[this.props.item.type]:'')}></i></td>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.message}</td>
        <td>{this.props.item.ack ? 'old' : 'new'}</td>
        <td className="right aligned collapsing">

            <div className="ui tiny icon negative button" onClick={this.delMessage}>
              <i className="remove icon"></i>
            </div>

        </td>
      </tr>

    )
  }
});
