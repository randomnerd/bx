import React from 'react';
import Formsy from 'formsy-react';
import Semantic from 'components/semantic';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      published:''
    };
  },
  getMeteorData() {
    return {
      user: Meteor.user()
    };
  },
  twoFactorAuth(){

  },
  saveName(){
    var name = this.refs.chat.getCurrentValues();
    //console.log(message)
    Meteor.call('chatname/update',name.chat_name,(err, result)=>{
       if(err||result){
         console.log(err.message)
       }else{


       }
     });
  },
  getAdds(){
    return {
      right:{
        buttons:[{name:"Save",icon:'checkmark',accent:'blue',action:()=>{this.saveName()}}]
      }
    }
  },
  render() {
    return (
      <div className="ui main container">
        <div className="ui segments">
          <div className="ui basic segment">
            <h3 className='ui header'>Account settings</h3>
          </div>
          <div className="ui basic segment">
            <Formsy.Form key={this.props.k} className="ui form" onValidSubmit={this.newPassword} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='chat'>
              <Semantic.Input name="chat_name" icon="user left" label="Chat name" validations="minLength:3" placeholder="Enter yor chat name" ref="chatname" adds={this.getAdds()} required />
            </Formsy.Form>
          </div>
          <div className="ui basic segment">
            <Formsy.Form key={this.props.k+3} className="ui form" onValidSubmit={this.newPassword} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='auth'>
              <Semantic.Checkbox name="confirmation" label="Don't ask for order confirmation" isChecked={this.published} />
              <h2 className="ui header">Two-factor authentication</h2>
              <p>
                Scan this QR code with
                <a target="_blank" href="https://support.google.com/accounts/answer/1066447"> Google Authenticator</a>
              </p>
              <p>
                <img src="https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth://totp/CoinEx-1st_man@mail.ru?secret=3jvq42j57qpecw3n" />
              </p>
              <Semantic.Input name="qr_code" validations="minLength:3" placeholder="and type your code here" required />

              <div className="field">
                <a className="ui blue labeled icon button" onClick={this.twoFactorAuth()}>
                  <i className="refresh icon" />
                  Or generate a new key
                </a>

              </div>
            </Formsy.Form>
          </div>
          <div className="ui basic segment">
            <div className="ui two column grid">
              <div className="column">
                <h2 className="ui header">
                  API Access
                </h2>
              </div>
              <div className="right aligned column">
                <a className="ui blue labeled icon button" onClick={this.twoFactorAuth()}>
                  <i className="refresh icon" />
                  Generate new API key pair
                </a>
              </div>
            </div>
            <Formsy.Form key={this.props.k+5} className="ui form" onValidSubmit={this.newPassword} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='api'>
              <Semantic.Input name="qr_code" label="API key" validations="minLength:3" placeholder="and type your code here" required />
              <Semantic.Input name="chat_name" label="API Secret" validations="minLength:3" placeholder="Enter yor chat name" buttonAction={this.saveName} actionButton buttonName="Save" required />
            </Formsy.Form>
          </div>
        </div>
      </div>
    );
  }
});
