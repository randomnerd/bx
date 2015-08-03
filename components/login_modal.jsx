LoginModal = React.createClass({
  getInitialState() {
    return {
      errorMessage: null
    };
  },
  hide(e) {
    if (e) e.preventDefault();
    this.setState({errorMessage: null});
    Dispatcher.dispatch({actionType: 'HIDE_LOGIN_MODAL'});
  },
  login(e) {
    if (e) e.preventDefault();
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    console.log(email, password);

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        console.log('login failed', err);
        this.setState({errorMessage: err.message});
      } else {
        this.hide();
        console.log('login successful');
      };
    });
  },
  focusLogin() {
    Meteor.setTimeout(() => {
      this.refs.email.getDOMNode().focus();
    }, 50);

  },
  render() {
    return (
      <Modal size="small" positiveLabel="Log in" header="Log in"
        onDeny={this.hide} onPositive={this.login} show={this.props.show}
        errorMsg={this.state.errorMessage} onVisible={this.focusLogin}>

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
              <input type="password" name="password" placeholder="Password" ref="password"/>
            </div>
          </div>

        </form>
      </Modal>
    );
  }
});
