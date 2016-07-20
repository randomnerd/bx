import React from 'react';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import UserOnly from '../user/user_only';
import Semantic from '../semantic';

const Settings = Component({
  layout: ['layout']
}, {
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      totpEnabled: false,
      qr: null,
      published:''
    };
  },
  componentDidMount() {
    this.getQR();
  },
  getMeteorData() {
    return {
      user: Meteor.user()
    };
  },
  twoFactorAuth(){
    Meteor.call('/totp/key', true, (err, data) => {
      if (err) {
        this.setState({totpEnabled: true});
      } else {
        this.setState({qr: data.qr});
      }
    });
  },
  getQR(){
    Meteor.call('/totp/key', false, (err, data) => {
      if (err) {
        this.setState({totpEnabled: true});
      } else {
        this.setState({qr: data.qr});
      }
    });
  },
  
  checkTotp(){
    var {totp} = this.refs.totp.getCurrentValues();
    this.enableTOTP(totp);
    if(!this.state.totpEnabled) this.getQR();
  },
  totpAdds(){
    return {
      right:{
        buttons:[{name:(this.state.totpEnabled?"Disable":"Enable"),icon:'checkmark',accent:'blue',action:()=>{this.checkTotp()}}]
      }
    }
  },
  verifyTOTP(token) {
    Meteor.call('/totp/verify', token, (err, result) => {
      if (err) return console.error('TOTP verify', err);
      console.log('TOTP verify', result);
    })
  },

  enableTOTP(token) {
    Meteor.call('/totp/enable', token, this.state.totpEnabled, (err, result) => {
      if (err) return console.error('TOTP enable', err);
      this.setState({totpEnabled: result.totpEnabled});

    })
  },

  render() {
    return (
      <UserOnly redirect='/'>
        <div className="ui main container">
          <div className="ui segments">
            <div className="ui basic segment">
              <h2 className='ui header'>Account settings</h2>
            </div>

            <div className="ui basic segment">
              <Formsy.Form key={this.props.k+3} className="ui form" onValidSubmit={this.newPassword} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='auth'>
                <h2 className="ui header">Two-factor authentication</h2>
                <p>
                  Scan this QR code with
                  <a target="_blank" href="https://support.google.com/accounts/answer/1066447"> Google Authenticator</a>
                </p>
                <p>
                  <img src={this.state.totpEnabled?"":this.state.qr}/>
                </p>
                <Formsy.Form key={this.props.k+5} className="ui form" ref='totp'>
                  <Semantic.Input name="totp" validations="minLength:6" placeholder="and type your code here" required adds={this.totpAdds()} />
                </Formsy.Form>
                {this.state.totpEnabled?
                  null :
                  <div className="field">
                    <a className="ui blue labeled icon button" onClick={this.twoFactorAuth}>
                      <i className="refresh icon" />
                      Or generate a new key
                    </a>
                  </div>
                }
              </Formsy.Form>
            </div>
            { (2==3)?
              <div className="ui basic segment">

                <h2 className="ui header lpadding">
                  API Access
                </h2>
                <a className="ui blue labeled icon button" onClick={this.twoFactorAuth}>
                  <i className="refresh icon" />
                  Generate new API key pair
                </a>

                <Formsy.Form key={this.props.k+5} className="ui form" onValidSubmit={this.newPassword} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='api'>
                  <Semantic.Input name="qr_code" label="API key" validations="minLength:3" placeholder="and type your code here" required />
                  <Semantic.Input name="chat_name" label="API Secret" validations="minLength:3" placeholder="Enter yor chat name" buttonAction={this.saveName} actionButton buttonName="Save" required />
                </Formsy.Form>
              </div>
            : null }
          </div>
        </div>
      </UserOnly>
    );
  }
});
export default Settings;
