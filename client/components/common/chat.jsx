Chats = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      haveMessages: false,
      messages:[],
      countFromDB: 0,
      nowDate: new Date().valueOf(),
      text:'',
      isPrivate:false
    };
  },
  getMeteorData() {
    return {
      mesages: Chat.find({ack: false}, {sort: {createdAt: -1}}).fetch(),
      messages_now: Chat.find({ack: false, createdAt: {$gt: new Date(this.state.nowDate)}}, {sort: {createdAt: -1}}).fetch(),
      messages_all: Chat.find({}, {sort: {createdAt: 1}}).fetch()
    };
  },
  writeMessage(){
   var message = this.refs.form.getCurrentValues();
   //console.log(message)
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

  writePrivate(){

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
              <a className="author">{item.userName||"noname"}</a>
              <div className="metadata">
                <span className="date">{moment(item.createdAt).fromNow()}</span>
              </div>
              <div className="text">
                {item.text}
              </div>
              <div className="actions">
                <a className="reply">Reply</a>
              </div>
            </div>
          </div>
        )
      })
    )
  },
  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },

  render() {
    this.isPrivate=this.state.isPrivate?"checked":false
    return (
      <div className="ui chat">
        <div className="ui chat comments" ref="messages">

          {this.messages()}
        </div>


        <Formsy.Form className="ui form chatform" onValidSubmit={this.writeMessage} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='form'>
          <div className="field">
            <label>Short Text</label>
            <Semantic.Input name="text" placeholder="text here..." value={this.state.text} ref="text" />
          </div>
          <div className="two fields">
            <Semantic.Checkbox name="isPrivate" label="private" ref="isPrivate" isChecked={this.isPrivate} />
            <div className="field">
              <a className="ui positive labeled right aligned icon button" onClick={this.writeMessage}>
                <i className="checkmark icon" />
                Send
              </a>
            </div>
          </div>

          <input type="submit" className="hidden" />
        </Formsy.Form>
      </div>
    )
  }
});
