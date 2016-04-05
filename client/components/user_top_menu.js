import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
//import UserTopMenu from './user_top_menu';

import {Component} from 'cerebral-view-react';
const UserTopMenu = Component({
  user: ['user']
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      //user: Meteor.user()
    };
  },
  logOut() { Meteor.logout() },
  getMenuItems() {
    return [
      { href: '/u/wallets', label: 'My wallets', extraCls: ''},
      { href: '/u/settings', label: 'Settings', extraCls: ''},
      { href: '/u/password', label: 'Change password', extraCls: ''},
      { href: '', label: 'Logout', extraCls: '', onclick: this.logOut }
    ];
  },
  renderMenuItems() {
    return this.getMenuItems().map((item) => {
      return <a className={"item " + item.extraCls} key={item.label} href={item.href} onClick={item.onclick}>{item.label}</a>;
    });
  },
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).dropdown({on: 'hover', action: 'hide'});
  },
  render() {
    console.log(this.props.user);
    return (
      <div className="ui right floated dropdown item">
        <i className="user icon" />
        {this.props.user.displayName()}
        <i className="dropdown icon" />

        <div className="menu">
            <a className="item" href="/admin/">Admin</a>
          {this.renderMenuItems()}
        </div>
      </div>
    );
  }
});
export default UserTopMenu;
