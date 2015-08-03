MainLayout = React.createClass({
  getInitialState() {
    return { showLoginModal: false };
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
      }
    })
  },
  render() {
    return (
      <div>
        <TopMenu title="BitExchange"/>
        <div className="ui main container">
          {this.props.content}
        </div>
        <LoginModal show={this.state.showLoginModal} />
      </div>
    );
  }
});
