import React from 'react';
import Formsy from 'formsy-react'
import Semantic from './semantic';
import {connect} from 'cerebral-view-react';

Formsy.addValidationRule('passwordConfirmationMatch', (values, value) => {
  return values.password === values.password_confirm;
});
Formsy.addValidationRule('passwordSecure', (values, value) => {
  if (values.password && values.password.length < 6) return false;
  let digit = new RegExp("\\d+");
  let letter = new RegExp("[a-zA-Z]+");
  let hasDigit = digit.exec(values.password);
  let hasLetter = letter.exec(values.password);
  return hasDigit && hasLetter;
});
const SignUpModal = connect({
  show: ['showSignUpModal']
}, class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      allowSubmit: false
    };
  }

  hide(e) {
    //if (e) e.preventDefault();
    this.setState({errorMessage: null});
    this.props.signals.user.signUpDone();
  }

  signUp() {
    var {email, password, chat_name} = this.refs.form.getCurrentValues();

    Accounts.createUser({email: email, password: password, username: chat_name}, (err) => {
      if (err) {
        this.setState({errorMessage: err.message});
      } else {
        this.hide();
      }
    });
  }

  signIn() {
    this.setState({errorMessage: null});
    this.props.signals.user.signUpDone();
    this.props.signals.user.loginClicked();
  }

  allowSubmit() { this.setState({allowSubmit: true}) }
  disallowSubmit() { this.setState({allowSubmit: false}) }

  render() {
    return (
      <Semantic.Modal size="small" positiveLabel="Sign up" header="Sign up"
        onDeny={this.hide.bind(this)} onPositive={this.signUp.bind(this)} show={this.props.show}
        errorMsg={this.state.errorMessage} allowSubmit={this.state.allowSubmit} >

        <Formsy.Form className="ui large form" onValidSubmit={this.signUp.bind(this)} onValid={this.allowSubmit.bind(this)} onInvalid={this.disallowSubmit.bind(this)} ref='form'>

          <Semantic.Input name="email" icon="user" placeholder="E-mail address" ref="email" validations="isEmail" required />

          <Semantic.Input name="chat_name" validations="minLength:3" placeholder="Enter yor chat name" ref="chatname" required />

          <Semantic.Input name="password" type="password" icon="lock" placeholder="Password"
            ref="password" validations="passwordConfirmationMatch,passwordSecure" required />
          <Semantic.Input name="password_confirm" type="password" icon="lock" placeholder="Confirmation"
            ref="password_confirm" validations="passwordConfirmationMatch" required/>
          <input type="submit" className="hidden" />
        </Formsy.Form>
        <a href="#" onClick={this.signIn.bind(this)}>Signed up already? Click here!</a>
      </Semantic.Modal>
    );
  }
});
export default SignUpModal;
