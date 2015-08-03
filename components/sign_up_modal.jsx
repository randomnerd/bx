SignUpModal = React.createClass({
  getInitialState() {
    return {
      errorMessage: null
    };
  },
  hide(e) {
    e.preventDefault();
    this.setState({errorMessage: null});
    Dispatcher.dispatch({actionType: 'HIDE_SIGN_UP_MODAL'});
  },
  signUp(e) {
    e.preventDefault();
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    console.log(email, password);

    Accounts.createUser({email: email, password: password}, (err) => {
      this.setState({errorMessage: err.message});
      console.log(err);
    });
  },
  render() {
    return (
      <Modal size="small" positiveLabel="Sign up" header="Sign up"
        onDeny={this.hide} onPositive={this.signUp} show={this.props.show}
        errorMsg={this.state.errorMessage}>

        <form className="ui large form">

          <div className="field">
            <div className="ui left icon input">
              <i className="user icon" />
              <input type="text" name="email" placeholder="E-mail address" ref="email" autocomplete="off" />
            </div>
          </div>

          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon" />
              <input type="password" name="password" placeholder="Password" ref="password" autocomplete="off" />
            </div>
          </div>

        </form>
      </Modal>
    );
  }
});
