Chats = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      haveMessages: false,
      messages:[],
      countFromDB: 0,
      nowDate: new Date().valueOf()
    };
  },
  getMeteorData() {
    return {
      mesages: Chat.find({ack: false}, {sort: {createdAt: -1}}).fetch(),
      messages_now: Chat.find({ack: false, createdAt: {$gt: new Date(this.state.nowDate)}}, {sort: {createdAt: -1}}).fetch(),
      messages_all: Chat.find({}, {limit: 50}, {sort: {createdAt: -1}}).fetch()
    };
  },
  writeMessage(){
    var message = this.refs.form.getCurrentValues();
    Meteor.call('chat/add',message,function(err, result){
      if(result){

      }else{

      }
    });
  },
  writePrivate(){

  },
  beAnon(){

  },
  componentDidMount() {

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
    this.data.messages.map((item) => {
      return(
        <div className="comment">

          <div className="content">
            <a className="author">Joe Henderson</a>
            <div className="metadata">
              <span className="date">5 days ago</span>
            </div>
            <div className="text">
              Dude, this is awesome. Thanks so much
            </div>
            <div className="actions">
              <a className="reply">Reply</a>
            </div>
          </div>
        </div>
      )
    })
  },
  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },

  render() {
    return (
      <div className="ui basic segment chat">
      <div className="ui comments">


        <div className="comment">

          <div className="content">
            <a className="author">Joe Henderson</a>
            <div className="metadata">
              <span className="date">5 days ago</span>
            </div>
            <div className="text">
              Dude, this is awesome. Thanks so much
            </div>
            <div className="actions">
              <a className="reply">Reply</a>
            </div>
          </div>
        </div>

        </div>


        <Formsy.Form className="ui form" onValidSubmit={this.writeMessage} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='form'>
          <div className="field">
            <label>Short Text</label>
            <textarea name="text" rows="2"></textarea>
          </div>
          <div className="two fields">
            <Semantic.Checkbox name="private" label="private" />
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
