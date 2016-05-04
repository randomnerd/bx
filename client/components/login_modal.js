import React from 'react';
import Formsy from 'formsy-react';
import Semantic from './semantic';
import {Component} from 'cerebral-view-react';

const LoginModal = Component({
  show: ['showLoginModal']
}, {
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false
    };
  },
  hide(e) {
    //if (e) e.preventDefault();
    this.setState({errorMessage: null});
    this.props.signals.user.loginDone();
  },
  login() {
    var {email, password} = this.refs.form.getCurrentValues();

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({errorMessage: err.message});
      } else {
        this.hide();
      }
    });
  },
  focusLogin() {
    Meteor.setTimeout(() => {
      $(this.refs.email).focus();
    }, 50);

  },
  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },
  render() {
    return (
      <Semantic.Modal size="small" positiveLabel="Log in" header="Log in"
        onDeny={this.hide} onPositive={this.login} show={this.props.show}
        errorMsg={this.state.errorMessage} onVisible={this.focusLogin} allowSubmit={this.state.allowSubmit}>

        <Formsy.Form className="ui large form" onSubmit={this.login} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref="form">

          <Semantic.Input name="email" icon="user" placeholder="E-mail address" ref="email" validations="isEmail" required />
          <Semantic.Input name="password" type="password" icon="lock" placeholder="Password" ref="password" required />
          <input type="submit" className="hidden" />
        </Formsy.Form>

      </Semantic.Modal>
    );
  }
});
export default LoginModal;
