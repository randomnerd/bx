import React from 'react';
import Formsy from 'formsy-react';
import Semantic from 'components/semantic';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false
    };
  },
  getMeteorData() {
    return {
      user: Meteor.user()
    };
  },
  newPassword() {
    let {old_pass, password} = this.refs.pass.getCurrentValues();
    console.log(password);
    Accounts.changePassword(old_pass, password, (err)=>{
      if (err) {
        Dispatcher.dispatch({ actionType: 'NEW_NOTIFICATION', payload:
        { message: {_id: 'pass_not_changed', type: 'error', icon: 'error', title: 'Error!',
        message: err.message, timeout: 3000, needShow: true } } });
        console.log(err.message);
        this.setState({errorMessage: err.message});
      } else {
        Dispatcher.dispatch({ actionType: 'NEW_NOTIFICATION', payload:
        { message: {_id: 'pass_changed', type: 'accept', icon: 'accept',
        title: 'Your password changed!', timeout: 3000, needShow: true} } });
        this.refs.pass.reset();
      }
    });
  },
  allowSubmit() { this.setState({allowSubmit: true}); },
  disallowSubmit() { this.setState({allowSubmit: false}); },

  render() {
    return (
      <div className='ui segments'>
        <div className='ui secondary segment'>
          <h4>Change password</h4>
        </div>
        <div className='ui small blue segment'>
          <Formsy.Form key={this.props.k} className='ui form' onValidSubmit={this.newPassword} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='pass'>
            <Semantic.Input name='old_pass' ref='old_password' type='password' label='Old password' validations='minLength:3' placeholder='Enter old password' required />
            <Semantic.Input name='password' ref='password' validations='passwordConfirmationMatch' type='password' label='New password' placeholder='Enter new password' required />
            <Semantic.Input name='password_confirm' ref='password_confirm' validations='passwordConfirmationMatch' type='password' label='Confirm new password' placeholder='Re-enter new password' required />

            <div className='field'>
              <a className={'ui' + (!this.state.allowSubmit ? ' disabled' : '')+ ' positive labeled icon button'} onClick={this.newPassword}>
                <i className='checkmark icon' />
                Save new password
              </a>

            </div>
          </Formsy.Form>
        </div>
      </div>
    );
  }
});
