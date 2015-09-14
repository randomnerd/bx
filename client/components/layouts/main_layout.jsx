MainLayout = React.createClass({
  getInitialState() {
    return {
      showLoginModal: false,
      showSignUpModal: false,
      showWithdrawModal: false,
      withdrawCurr: false,
      withdrawAddressModal: false,
      withdrawAddress:'',
      withdrawAmount:''
    };
  },
  componentDidMount() {
    Dispatcher.register((payload) => {
      //console.log('new dispatcher event', payload);

      switch (payload.actionType) {
        case 'SHOW_LOGIN_MODAL':
          //console.log('login');
          this.setState({showLoginModal: true});
          break;

        case 'HIDE_LOGIN_MODAL':
          this.setState({showLoginModal: false});
          break;

        case 'SHOW_SIGN_UP_MODAL':
          //console.log('signup');
          this.setState({showSignUpModal: true});
          break;

        case 'HIDE_SIGN_UP_MODAL':
          this.setState({showSignUpModal: false});
          break;

        case 'SHOW_WITHDRAW_MODAL':
          //console.log('withdraw');
          this.setState({showWithdrawModal: true});
          this.setState({withdrawAmount: payload.payload.amount});
          this.setState({withdrawAddress: payload.payload.addr});
          this.setState({withdrawCurr: payload.payload.currId});
          break;

        case 'HIDE_WITHDRAW_MODAL':
          this.setState({withdrawAddress: ''});
          this.setState({withdrawAmount: ''});
          this.setState({showWithdrawModal: false});
          break;

        case 'SHOW_ADDRESSBOOK_MODAL':
          //console.log('withdraw');
          this.setState({withdrawAddressModal: true});
          break;

        case 'HIDE_ADDRESSBOOK_MODAL':
          this.setState({withdrawAddress: payload.payload.addr});
          this.setState({withdrawAmount: payload.payload.amount});
          this.setState({withdrawAddressModal: false});
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
        <WithdrawModal show={this.state.showWithdrawModal} current={this.state.withdrawCurr} address={this.state.withdrawAddress} amount={this.state.withdrawAmount} />
        <WithdrawAddressModal show={this.state.withdrawAddressModal} />
        <NotificationPopups />
      </div>
    );
  }
});
