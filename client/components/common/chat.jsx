Chats = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      haveMessages: false,
      messages:[],
      countFromDB: 0,
      nowDate: new Date().valueOf(),
      textVal:'',
      isPrivate:false,
      replyId:null,
      replyName:null
    };
  },
  getMeteorData() {
    return {
      mesages: Chat.find({ack: false}, {sort: {createdAt: -1}}).fetch(),
      messages_now: Chat.find({ack: false, createdAt: {$gt: new Date(this.state.nowDate)}}, {sort: {createdAt: -1}}).fetch(),
      messages_all: Chat.find({ $or : [ {isPrivate : false}, {replyId : Meteor.userId()}, {userId : Meteor.userId()} ] }, {sort: {createdAt: 1}}).fetch()
    };
  },
  writeMessage(){
   var message = this.refs.form.getCurrentValues();
     //console.log(message)
   if(this.state.replyId){
     message.replyId=this.state.replyId
     message.replyName=this.state.replyName
   }
   message.isPrivate=this.state.isPrivate
   Meteor.call('chat/add',message,(err, result)=>{
      if(err||result){
        console.log('err')
      }else{
        Meteor.setTimeout(() => {
          this.refs.form.reset();
          $(this.refs.messages.getDOMNode()).scrollTop(15000)
        }, 100);

      }
    });
  },
  reply(item, event){
    this.setState({replyId:item.userId})
    this.setState({replyName: item.userName })
  },
  noReply(){
    this.setState({replyId:null})
    this.setState({replyName:null})
  },
  bePrivate(){
    this.setState({isPrivate:(this.state.isPrivate?false:true)})
    //  console.log(this.state.isPrivate)
  },
  beAnon(){

  },
  componentDidMount() {
    $(this.refs.messages.getDOMNode()).scrollTop(15000)
  },
  renderWithAva(){
    return(
      <div className="comment">
        <a className="avatar">
          <img src="/images/avatar/small/matt.jpg" />
        </a>
        <div className="content">
          <a className="author">Matt</a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">
            How artistic!
          </div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    )
  },
  messages(){
    return(
      this.data.messages_all.map((item) => {
        return(
          <div className="comment" key={item._id}>

            <div className="content">
              <a className="author" onClick={this.reply.bind(this, item)}>{item.userName||"noname"}</a>
              <div className="metadata">
                <span className="date">{moment(item.createdAt).fromNow()}</span>
                <div className={"ui orange text rating" + (item.isPrivate?"":" hidden")}>
                  Private
                </div>
              </div>
              <div className="text">
                <strong className={"ui grey text" + (item.replyName?"":" hidden")}>{item.replyName}, </strong>
                {item.text}
              </div>

            </div>
          </div>
        )
      })
    )
  },
  writeForm(){
    return(
      <Formsy.Form className="ui form chatform" onValidSubmit={this.writeMessage} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='form'>

        <div className="field">
          <label>
            <a className={"ui horizontal label" + (this.state.replyName?"":" hidden")}>
              To: {this.state.replyName}
              <i className="delete icon" onClick={this.noReply}></i>
            </a>
          </label>
          <Semantic.Input name="text" placeholder="text here..." value={this.state.textVal} ref="text" />
        </div>
        <div className="two fields">
          <Semantic.Checkbox className={this.state.replyName?"":" disabled"} name="isPrivate" label="private" onClick={this.bePrivate} ref="isPrivate" isChecked={this.state.isPrivate} />
          <div className="field">
            <a className="ui positive labeled right aligned icon button" onClick={this.writeMessage}>
              <i className="checkmark icon" />
              Send
            </a>
          </div>
        </div>

        <input type="submit" className="hidden" />
      </Formsy.Form>
    )
  },
  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },

  render() {

    return (
      <div className="ui chat">
        <div className="ui chat comments" ref="messages">

          {this.messages()}
        </div>
        {Meteor.userId()?this.writeForm():null}
      </div>
    )
  }
});
