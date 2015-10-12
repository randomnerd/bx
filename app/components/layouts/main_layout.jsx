import React from 'react';
import Sidebar from 'components/common/sidebar';
import TopMenu from 'components/top_menu';
import LoginModal from 'components/login_modal';
import SignUpModal from 'components/sign_up_modal';
import WithdrawModal from 'components/user/withdraw_modal';
import WithdrawAddressModal from 'components/user/withdraw_addressbook';
import NotificationPopups from 'components/common/notification_popups';
import Chats from 'components/common/chat';

export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      loading: !Meteor.subs.ready()
    }
  },

  getInitialState() {
    return {
      showLoginModal:       false,
      showSignUpModal:      false,
      showWithdrawModal:    false,
      showSidebar:          false,
      sidebarContent:       null,
      withdrawAddressModal: false
    };
  },

  chatToggle(){
    this.setState({ showSidebar: !this.state.showSidebar });
    this.setState({ sidebarContent: 'chat' });
  },

  componentDidMount() {
    Dispatcher.register((e) => {
      //console.log('new dispatcher event', payload);

      switch (e.actionType) {
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

        case 'SHOW_WITHDRAW_MODAL':
          this.setState({showWithdrawModal: true});
          break;

        case 'HIDE_WITHDRAW_MODAL':
          this.setState({showWithdrawModal: false});
          break;

        case 'SHOW_ADDRESSBOOK_MODAL':
          this.setState({withdrawAddressModal: true});
          break;

        case 'HIDE_ADDRESSBOOK_MODAL':
          this.setState({withdrawAddressModal: false});
          break;

        case 'SHOW_SIDEBAR':
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

  renderLoading() {
    return (
      <div className="ui active dimmer">
        <div className="ui text loader">Loading...</div>
      </div>
    );
  },

  render() {
    if (this.data.loading) return this.renderLoading();
    return (
      <div className="ui inverted newgrey body">

        <Sidebar show={this.state.showSidebar}>
          {this.renderSidebarContent()}
        </Sidebar>
        <div className="pusher">
          <div className="forsidebar above">
            <div className="ui vertical fluid tabular labeled icon inverted newgrey menu">
              <a className="item active" onClick={this.chatToggle}>
                <i className="comment icon"></i>
              </a>
            </div>
          </div>
          <div className="contwrapper">
            <div className="ui main fluid container">

                  {this.props.content}

            </div>
          </div>
        </div>
        <TopMenu title="BitExchange" active={this.props.active} />
        <LoginModal show={this.state.showLoginModal} />
        <SignUpModal show={this.state.showSignUpModal} />
        <WithdrawModal show={this.state.showWithdrawModal} current={this.state.withdrawCurr} address={this.state.withdrawAddress} amount={this.state.withdrawAmount} />
        <WithdrawAddressModal show={this.state.withdrawAddressModal} />
        <NotificationPopups />

      </div>
    );
  }
});
