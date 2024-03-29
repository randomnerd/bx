import React from 'react';
import Formsy from 'formsy-react';
import Semantic from './semantic';
import {connect} from 'cerebral-view-react';

const LoginModal = connect({
  show: ['showLoginModal']
}, class LoginModal extends React.Component {
  state = {
    errorMessage: null,
    allowSubmit: false
  }

  hide(e) {
    if (e) e.preventDefault();
    this.setState({ errorMessage: null });
    this.props.signals.user.loginDone();
  }

  login() {
    var {email, password} = this.refs.form.getCurrentValues();

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) return this.setState({errorMessage: err.message});
      this.hide();
    });
  }

  focusLogin() {
    Meteor.setTimeout(() => {
      $(this.refs.email).focus();
    }, 50);
  }

  emailSaver(event) {
    this.props.signals.user.loginEmail({email: event.currentTarget.value});
  }

  remainPass() {
    this.hide();
    this.props.signals.user.remainPass();
  }

  getActions() {
    return { name: "Forgot password?", action: this.remainPass.bind(this) };
  }

  allowSubmit() { this.setState({ allowSubmit: true }); }
  disallowSubmit() { this.setState({ allowSubmit: false }); }

  render() {
    return (
      <Semantic.Modal
        size="small"
        positiveLabel="Log in"
        header="Log in"
        onDeny={this.hide.bind(this)}
        onPositive={this.login.bind(this)}
        show={this.props.show}
        errorMsg={this.state.errorMessage}
        onVisible={this.focusLogin.bind(this)}
        allowSubmit={this.state.allowSubmit}
        buttons={this.getActions()}
      >
        <Formsy.Form
          className="ui large form"
          ref="form"
          onSubmit={this.login.bind(this)}
          onValid={this.allowSubmit.bind(this)}
          onInvalid={this.disallowSubmit.bind(this)}
        >
          <Semantic.Input required
            name="email"
            icon="user"
            placeholder="E-mail address"
            ref="email"
            validations="isEmail"
            onChg={this.emailSaver.bind(this)}
          />
          <Semantic.Input required
            type="password"
            ref="password"
            name="password"
            placeholder="Password"
            icon="lock"
          />
          <input type="submit" className="hidden" />
        </Formsy.Form>
      </Semantic.Modal>
    );
  }
});

export default LoginModal;
