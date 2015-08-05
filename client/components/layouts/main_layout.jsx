MainLayout = React.createClass({
  getInitialState() {
    return {
      showLoginModal: false,
      showSignUpModal: false
    };
  },
  componentDidMount() {
    Dispatcher.register((payload) => {
      console.log('new dispatcher event', payload);

      switch (payload.actionType) {
        case 'SHOW_LOGIN_MODAL':
          this.setState({showLoginModal: true});
          break;

        case 'HIDE_LOGIN_MODAL':
          this.setState({showLoginModal: false});
          break;

          case 'SHOW_SIGN_UP_MODAL':
            this.setState({showSignUpModal: true});
            break;

          case 'HIDE_SIGN_UP_MODAL':
            this.setState({showSignUpModal: false});
            break;

      }
    })
  },
  render() {
    return (
      <div>
        <TopMenu title="BitExchange"/>
        <div className="ui main container">
          <div className="ui grid">
            <div className="four wide column">
              <div className="ui fluid vertical menu">
                <PairBar active={this.props.active} />
              </div>
            </div>
            <div className="twelve wide column">
              {this.props.content}
            </div>
          </div>
        </div>
        <LoginModal show={this.state.showLoginModal} />
        <SignUpModal show={this.state.showSignUpModal} />
      </div>
    );
  }
});
