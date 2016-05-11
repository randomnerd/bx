import React from 'react';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';

import TradePairsMenu from './trade_pairs_menu';
import UserTopMenu from './user_top_menu';
import TopInfo from '../top_info';
import NotificationShow from '../common/notifications';

const LeftMenu = Component({
  layout: ['layout']
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },
  getInitialState() {
    return {
      drag:false
    };
  },
  showChat() {
    this.props.signals.mob.page({id:'chat'});
    this.setState({active:'chat'});
    this.hideMenu();
    //return false;
  },
  hideMenu() {
    //console.log('ergweg');
    this.props.signals.mob.menu({action: 'close'});
  },
  logOut() {
    Meteor.logout();
    this.hideMenu();
  },
  getMenuItems() {
    return [
      { href: null, label: 'Chat', extraCls: '', onclick: this.showChat},
      { href: '/u/wallets', label: 'My wallets', extraCls: '', onclick: this.hideMenu},
      { href: '/u/settings', label: 'Settings', extraCls: '', onclick: this.hideMenu},
      { href: '/u/password', label: 'Change password', extraCls: '', onclick: this.hideMenu},
      { href: '', label: 'Logout', extraCls: '', onclick: this.logOut }
    ];
  },
  renderMenuItems() {
    return this.getMenuItems().map((item) => {
      return <a className={"item " + item.extraCls} key={item.label} href={item.href}>{item.label}</a>;
    });
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
      <div>

          <a className="item" href="/">Bit.Exchange</a>

          <TradePairsMenu pair={this.props.pair} />
            { this.data.user ?

                this.renderMenuItems()

              : this.renderLoginButtons()
            }



      </div>
    );
  }
});
export default LeftMenu;
