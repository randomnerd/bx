MainLayout = React.createClass({
  getInitialState() {
    return {
      showLoginModal: false,
      showSignUpModal: false,
      showWithdrawModal: false,
      showSidebar: false,
      sidebarContent:'',
      withdrawCurr: false,
      withdrawAddressModal: false,
      withdrawAddress:'',
      withdrawAmount:''
    };
  },
  chatToggle(){
    this.setState({showSidebar: this.state.showSidebar?false:true});
    this.setState({ sidebarContent: 'chat' });
    if(!this.state.showSidebar){
      $('.body').css('overflow-y','hidden')
    }else{
      $('.body').css('overflow-y','auto')
    }
  },
  componentDidMount() {
    Dispatcher.register((e) => {
      //console.log('new dispatcher event', payload);

      switch (e.actionType) {
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
          if (e.payload) {
            this.setState({withdrawAmount: e.payload.amount});
            this.setState({withdrawAddress: e.payload.addr});
            this.setState({withdrawCurr: e.payload.currId});
          }
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
          if (e.payload) {
            this.setState({withdrawAddress: e.payload.addr});
            this.setState({withdrawAmount: e.payload.amount});
          }
          this.setState({withdrawAddressModal: false});
          break;

        case 'SHOW_SIDEBAR':
          //console.log('withdraw');
          this.setState({showSidebar: true});
          this.chatToggle();
          //this.setState({sidebarContent: payload.payload.content});
          break;

        case 'HIDE_SIDEBAR':
          this.setState({showSidebar: false});
          break;
      }
    })
  },
  renderSidebarContent(){
    switch (this.state.sidebarContent) {
      case 'chat':
        return (

            <Chats />

        )
        break;
    }
  },
  render() {
    return (
      <div className="body">
        <Sidebar show={this.state.showSidebar}>
          {this.renderSidebarContent()}
        </Sidebar>
        <div className="pusher">
          <div className="forsidebar above">
            <div className="ui vertical fluid tabular labeled icon menu">
              <a className="item active" onClick={this.chatToggle}>
                <i className="comment icon"></i>
              </a>
            </div>
          </div>
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
