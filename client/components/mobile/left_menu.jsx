import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import TradePairsMenu from './trade_pairs_menu';
import UserTopMenu from './user_top_menu';
import TopInfo from '../top_info';
import NotificationShow from '../common/notifications';

const LeftMenu = connect({
  layout: 'layout'
}, class LeftMenu extends React.Component {

  state = {
    drag:false
  }
  showChat() {
    console.log('123');
    this.props.signals.mob.page({id:'chat'});
    this.setState({active:'chat'});
    this.hideMenu();
    //return false;
  }
  hideMenu() {
    //console.log('ergweg');
    this.props.signals.mob.menu({action: 'close'});
  }
  logOut() {
    Meteor.logout();
    this.hideMenu();
  }
  getMenuItems() {
    return [
      { href: null, label: 'Chat', extraCls: '', onclick: this.showChat.bind(this)},
      { href: '/u/wallets', label: 'My wallets', extraCls: '', onclick: this.hideMenu.bind(this)},
      { href: '/u/settings', label: 'Settings', extraCls: '', onclick: this.hideMenu.bind(this)},
      { href: '/u/password', label: 'Change password', extraCls: '', onclick: this.hideMenu.bind(this)},
      { href: '', label: 'Logout', extraCls: '', onclick: this.logOut.bind(this) }
    ];
  }
  renderMenuItems() {
    return this.getMenuItems().map((item) => {
      return <a className={"item " + item.extraCls} key={item.label} href={item.href} onClick={item.onclick}>{item.label}</a>;
    });
  }

  renderLoginButtons() {
    return (
      <div className="right menu">
        <a className="item" onClick={this.showLoginModal.bind(this)}>Log in</a>
        <a className="item" onClick={this.showSignUpModal.bind(this)}>Sign up</a>
      </div>
    );
  }
  render() {
    return (
      <div>

          <a className="item" href="/">Bit.Exchange</a>

          <TradePairsMenu pair={this.props.pair} />
            { this.props.user ?

                this.renderMenuItems()

              : this.renderLoginButtons()
            }



      </div>
    );
  }
});
export default LeftMenuContainer = createContainer((props) => {
  return {
    user: Meteor.user()
  }
}, LeftMenu);
