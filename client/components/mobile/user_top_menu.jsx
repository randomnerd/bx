import React from 'react';
import ReactDOM from 'react-dom';
import AdminOnly from '../admin/admin_only';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

const UserTopMenu = connect({
  layout: ['layout']
}, class UserTopMenu extends React.Component {

  logOut() {
    Meteor.logout();
    this.hideMenu();
  }
  getMenuItems() {
    return [
      { href: null, label: 'Chat', extraCls: '', onclick: this.showChat},
      { href: '/u/wallets', label: 'My wallets', extraCls: '', onclick: this.hideMenu},
      { href: '/u/settings', label: 'Settings', extraCls: '', onclick: this.hideMenu},
      { href: '/u/password', label: 'Change password', extraCls: '', onclick: this.hideMenu},
      { href: '', label: 'Logout', extraCls: '', onclick: this.logOut }
    ];
  }
  renderMenuItems() {
    return this.getMenuItems().map((item) => {
      return <a className={"item " + item.extraCls} key={item.label} href={item.href} onClick={item.onclick}>{item.label}</a>;
    });
  }
  showChat() {
    this.props.signals.mob.page({id:'chat'});
    this.setState({active:'chat'});
    this.hideMenu();
    //return false;
  }
  hideMenu() {
    console.log('ergweg');
    this.props.signals.mob.menu();
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).dropdown({on: 'hover', action: 'hide'});
  }
  render() {
    return (

      <span>
        <AdminOnly>
          <a className="item" href="/admin/">Admin</a>
        </AdminOnly>
        {this.renderMenuItems()}
      </span>

    );
  }
});
export default UserTopMenuContainer = createContainer(({ params }) => {
  return {
    user: Meteor.user()
  };
}, UserTopMenu);
