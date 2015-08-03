Formsy.addValidationRule('passwordConfirmationMatch', (values, value) => {
  return values.password === values.password_confirm;
});

SignUpModal = React.createClass({
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false
    };
  },
  hide(e) {
    if (e) e.preventDefault();
    this.setState({errorMessage: null});
    Dispatcher.dispatch({actionType: 'HIDE_SIGN_UP_MODAL'});
  },
  signUp(e) {
    if (e) e.preventDefault();
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;

    Accounts.createUser({email: email, password: password}, (err) => {
      if (err) {
        this.setState({errorMessage: err.message});
      } else {
        this.hide();
      }
    });
  },
  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },
  matchConfirm(values, value) {
    return false;
  },
  render() {
    return (
      <Semantic.Modal size="small" positiveLabel="Sign up" header="Sign up"
        onDeny={this.hide} onPositive={this.signUp} show={this.props.show}
        errorMsg={this.state.errorMessage} allowSubmit={this.state.allowSubmit} >

        <Formsy.Form className="ui large form" onValidSubmit={this.signUp} onValid={this.allowSubmit} onInvalid={this.disallowSubmit}>

          <Semantic.Input name="email" icon="user" placeholder="E-mail address" ref="email" validations="isEmail" />
          <Semantic.Input name="password" type="password" icon="lock" placeholder="Password"
            ref="password" validations="passwordConfirmationMatch" required />
          <Semantic.Input name="password_confirm" type="password" icon="lock" placeholder="Confirmation"
            ref="password_confirm" validations="passwordConfirmationMatch" required/>

        </Formsy.Form>
      </Semantic.Modal>
    );
  }
});
