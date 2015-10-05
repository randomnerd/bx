import React from 'react';
import AdminOnly from 'app/components/admin/admin_only';

export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
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
    $(this.getDOMNode()).dropdown({on: 'hover', action: 'hide'});
  },
  render() {
    return (
      <div className="ui right floated dropdown item">
        <i className="user icon" />
        {this.data.user.displayName()}
        <i className="dropdown icon" />

        <div className="menu">
          <AdminOnly>
            <a className="item" href="/admin/">Admin</a>
          </AdminOnly>
          {this.renderMenuItems()}
        </div>
      </div>
    );
  }
});
