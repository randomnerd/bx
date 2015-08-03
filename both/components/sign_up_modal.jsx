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
  // toggleAllowSubmit() { this.setState({allowS}) }
  render() {
    return (
      <Modal size="small" positiveLabel="Sign up" header="Sign up"
        onDeny={this.hide} onPositive={this.signUp} show={this.props.show}
        errorMsg={this.state.errorMessage} allowSubmit={this.state.allowSubmit} >

        <form className="ui large form">

          <div className="field">
            <div className="ui left icon input">
              <i className="user icon" />
              <input type="text" name="email" placeholder="E-mail address" ref="email" />
            </div>
          </div>

          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon" />
              <input type="password" name="password" placeholder="Password" ref="password" />
            </div>
          </div>

          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon" />
              <input type="password" name="password_confirmation" placeholder="Confirm" ref="password_confirmation" />
            </div>
          </div>

        </form>
      </Modal>
    );
  }
});
