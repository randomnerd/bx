import React from 'react';
import Formsy from 'formsy-react'
import Semantic from './semantic';
import {connect} from 'cerebral-view-react';

const SignUpModal = connect({
  show: 'showSignUpModal'
}, class SignUpModal extends React.Component {
  state = {
    errorMessage: null,
    allowSubmit: false
  }

  hide(e) {
    if (e) e.preventDefault();
    this.setState({ errorMessage: null });
    this.props.signals.user.signUpDone();
  }

  signUp() {
    var {email, password, chat_name} = this.refs.form.getCurrentValues();

    Accounts.createUser({email, password, username: chat_name}, (err) => {
      if (err) return this.setState({ errorMessage: err.message });
      this.hide();
    });
  }

  signIn() {
    this.setState({ errorMessage: null });
    this.props.signals.user.signUpDone();
    this.props.signals.user.loginClicked();
  }

  allowSubmit() { this.setState({ allowSubmit: true }); }
  disallowSubmit() { this.setState({ allowSubmit: false }); }

  render() {
    let showHint = !this.state.allowSubmit;
    return (
      <Semantic.Modal
        size="small"
        positiveLabel="Sign up"
        header="Sign up"
        onDeny={this.hide.bind(this)}
        onPositive={this.signUp.bind(this)}
        show={this.props.show}
        errorMsg={this.state.errorMessage}
        allowSubmit={this.state.allowSubmit}
      >
        <Formsy.Form
          className="ui large form"
          onValidSubmit={this.signUp.bind(this)}
          onValid={this.allowSubmit.bind(this)}
          onInvalid={this.disallowSubmit.bind(this)}
          ref='form'
        >
          <Semantic.Input required
            ref="email"
            name="email"
            placeholder="E-mail address"
            validations="isEmail"
            icon="user"
          />
          <Semantic.Input required
            ref="chatname"
            name="chat_name"
            placeholder="Enter yor chat name"
            validations="minLength:3"
          />

          <div className={"ui tiny message" + (showHint ? '' : ' hidden') }>
            Your password must be at least six characters and include both letters and numbers.
          </div>

          <Semantic.Input required
            type="password"
            ref="password"
            name="password"
            placeholder="Password"
            icon="lock"
            validations="passwordConfirmationMatch,passwordSecure"
          />
          <Semantic.Input required
            type="password"
            ref="password_confirm"
            name="password_confirm"
            placeholder="Confirmation"
            validations="passwordConfirmationMatch"
            icon="lock"
          />
          <input type="submit" className="hidden" />
        </Formsy.Form>
        <a href="#" onClick={this.signIn.bind(this)}>Signed up already? Click here!</a>
      </Semantic.Modal>
    );
  }
});

export default SignUpModal;
