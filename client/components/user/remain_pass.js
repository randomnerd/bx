import React from 'react';
import Formsy from 'formsy-react';
import Semantic from '../semantic';
import {connect} from 'cerebral-view-react';

const RemainPass = connect({
  show: 'showRemainPassModal',
  loginEmailSaver: 'loginEmail'
}, class LoginModal extends React.Component {
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
    this.props.signals.user.remainPassDone();
  }
  login() {
    var {email} = this.refs.form.getCurrentValues();

    Accounts.forgotPassword({email}, (err) => {
      if (err) {
        this.props.signals.notif.newOne({_id: 'pass_not_changed' + Math.random(), type: 'error', icon: 'error', title: 'Error!',
        message: err.message, timeout: 3000, needShow: true });
      } else {
        this.props.signals.notif.newOne({_id: 'pass_changed' + Math.random(), type: 'accept', icon: 'accept',
        title: 'OK!', message: "Check your e-mail for new password", timeout: 3000, needShow: true});
        this.hide();
      }
    });
  }
  focusLogin() {
    Meteor.setTimeout(() => {
      $(this.refs.email).focus();
    }, 50);

  }
  remainPass(){

  }

  allowSubmit() { this.setState({allowSubmit: true}) }
  disallowSubmit() { this.setState({allowSubmit: false}) }
  render() {
    return (
      <Semantic.Modal size="small" positiveLabel="Reset" header="Reset password"
        onDeny={this.hide.bind(this)} onPositive={this.login.bind(this)} show={this.props.show}
        errorMsg={this.state.errorMessage} onVisible={this.focusLogin.bind(this)} allowSubmit={this.state.allowSubmit}>

        <Formsy.Form className="ui large form" onSubmit={this.login.bind(this)} onValid={this.allowSubmit.bind(this)} onInvalid={this.disallowSubmit.bind(this)} ref="form">

          <Semantic.Input name="email" icon="user" placeholder="Put your e-mail address here" ref="email" validations="isEmail" value={this.props.loginEmailSaver} required />

          <input type="submit" className="hidden" />
        </Formsy.Form>

      </Semantic.Modal>
    );
  }
});
export default RemainPass;
