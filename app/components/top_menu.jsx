import React from 'react';
import TradePairsMenu from 'components/trade/trade_pairs_menu';
import UserTopMenu from 'components/user_top_menu';
import TopInfo from 'components/top_info';
import NotificationShow from 'components/common/notifications';

export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },
  getInitialState() {
    return {
      
    };
  },
  getMenuItems() {
    return [
      { href: '/', label: 'Bit.Exchange', extraCls: '' },
      //{ href: '/pair', label: 'Pairs', extraCls: '' }
    ];
  },
  renderMenuItems() {
    return this.getMenuItems().map((item) => {
      return <a className={"item " + item.extraCls} key={item.label} href={item.href}>{item.label}</a>;
    });
  },
  showLoginModal() {
    Dispatcher.dispatch({ actionType: 'SHOW_LOGIN_MODAL' });
  },
  showSignUpModal() {
    Dispatcher.dispatch({ actionType: 'SHOW_SIGN_UP_MODAL' });
  },
  chatToggle() {
    Dispatcher.dispatch({ actionType: 'SHOW_CHAT' });
  },
  renderLoginButtons() {
    return (
      <div className="right menu">
        <a className="item" onClick={this.showLoginModal}>Log in</a>
        <a className="item" onClick={this.showSignUpModal}>Sign up</a>
      </div>
    );
  },
  render() {
    return (
      <div className="ui top fixed large menu">
        <div className="ui fluid container">

          { this.renderMenuItems() }
          <TradePairsMenu active={this.props.active} />
          <TopInfo active={this.props.active} />

            { this.data.user ?
              <div className="right menu">
                <UserTopMenu />
                <NotificationShow />
                <a className="icon item" onClick={this.chatToggle}>
                  <i className="comment icon"></i>
                </a>
              </div>
              : this.renderLoginButtons()
            }


        </div>
      </div>
    );
  }
});
