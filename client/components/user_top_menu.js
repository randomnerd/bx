import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import User from '/both/models/user';
//import UserTopMenu from './user_top_menu';

import {connect} from 'cerebral-view-react';
const UserTopMenu = connect({
  user: ['user']
}, class AdminCurrency extends React.Component {
  logOut() { Meteor.logout() }
  getMenuItems() {
    return [
      { href: '/u/wallets', label: 'My wallets', extraCls: ''},
      { href: '/u/history', label: 'My history', extraCls: ''},
      { href: '/u/settings', label: 'Settings', extraCls: ''},
      { href: '/u/password', label: 'Change password', extraCls: ''},
      { href: '', label: 'Logout', extraCls: '', onclick: this.logOut }
    ];
  }

  renderMenuItems() {
    return this.getMenuItems().map((item) => {
      return <a className={"item " + item.extraCls} key={item.label} href={item.href} onClick={item.onclick}>{item.label}</a>;
    });
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).dropdown({on: 'hover', action: 'hide'});
  }

  render() {
    let user = this.props.user ? new User(this.props.user) : null;
    return (
      <div className="ui right floated dropdown item">
        <i className="user icon" />
        {user?user.displayName():null}
        <i className="dropdown icon" />

        <div className="menu">
          {user.isAdmin() ? <a className="item" href="/admin/">Admin</a> : null }
          {this.renderMenuItems()}
        </div>
      </div>
    );
  }
});
export default UserTopMenu;
