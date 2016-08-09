import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import UserOnly from '../user/user_only';
import Semantic from '../semantic';
import { createContainer } from 'meteor/react-meteor-data';

const PasswordPage = connect({
  layout: ['layout']
}, class PasswordPage extends React.Component {
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false
    };
  }

  newPassword() {
    let {old_pass, password} = this.refs.pass.getCurrentValues();
    Accounts.changePassword(old_pass, password, (err)=>{
      if (err) {
        this.props.signals.notif.newOne({_id: 'pass_not_changed' + Math.random(), type: 'error', icon: 'error', title: 'Error!',
        message: err.message, timeout: 3000, needShow: true });
        console.log('err');
      } else {
        this.props.signals.notif.newOne({_id: 'pass_changed' + Math.random(), type: 'accept', icon: 'accept',
        title: 'Your password changed!', timeout: 3000, needShow: true});
        this.refs.pass.reset();
        console.log('no err');
      }
    });
  }

  allowSubmit() { this.setState({allowSubmit: true}); }
  disallowSubmit() { this.setState({allowSubmit: false}); }

  render() {
    return (
      <UserOnly redirect='/'>
        <div className="ui main container">
          <div className='ui segments'>
            <div className='ui secondary segment'>
              <h3 className='ui header'>Change password</h3>
            </div>
            <div className='ui small blue segment centered'>
              <Formsy.Form key={this.props.k} className='ui form' onValidSubmit={this.newPassword}
                onValid={this.allowSubmit.bind(this)} onInvalid={this.disallowSubmit.bind(this)} ref='pass'>

                <Semantic.Input name='old_pass' ref='old_password' className="eight wide centered"
                type='password' label='Old password' validations='minLength:3'
                placeholder='Enter old password' required />

                <Semantic.Input name='password' ref='password'
                validations='passwordConfirmationMatch,passwordSecure' type='password' label='New password' className="eight wide centered"
                placeholder='Enter new password' required />

                <Semantic.Input name='password_confirm' ref='password_confirm' className="eight wide centered"
                validations='passwordConfirmationMatch' type='password' label='Confirm new password'
                placeholder='Re-enter new password' required />

                <div className='field'>
                  <a className={'ui' + (!this.state.allowSubmit ? ' disabled' : '') +
                  ' positive normal labeled icon button'} onClick={this.newPassword.bind(this)}>
                    <i className='checkmark icon' />
                    Save new password
                  </a>

                </div>
              </Formsy.Form>
            </div>
          </div>
        </div>
      </UserOnly>
    );
  }
});

export default PasswordPageContainer = createContainer((props) => {
  return {
    user: Meteor.user()
  };
}, PasswordPage);
