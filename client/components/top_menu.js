import React from 'react';
import {Meteor} from 'meteor/meteor';
import UserTopMenu from './user_top_menu';

import {Component} from 'cerebral-view-react';
const TopMenu = Component({
  user: ['user'],
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      //user: Meteor.user()
    };
  },
  getInitialState() {
    return {
      drag:false
    };
  },
  getMenuItems() {
    return [
      //{ href: '/', label: 'Bit.Exchange', extraCls: '' },
      //{ href: '/pair', label: 'Pairs', extraCls: '' }
    ];
  },
  renderLoginButtons() {
    return (
      <div className="right menu">
        <a className="item" onClick={this.showLoginModal}>Log in</a>
        <a className="item" onClick={this.showSignUpModal}>Sign up</a>
      </div>
    );
  },
  renderMenuItems() {
    return this.getMenuItems().map((item) => {
      return <a className={"item " + item.extraCls} key={item.label} href={item.href}>{item.label}</a>;
    });
  },
  getInitialState() {
    return {
      drag:false
    };
  },
  showLoginModal() {
    this.props.signals.user.loginClicked();
    // Dispatcher.dispatch({ actionType: 'SHOW_LOGIN_MODAL' });
  },
  showSignUpModal() {
    this.props.signals.user.signUpClicked();
    // Dispatcher.dispatch({ actionType: 'SHOW_SIGN_UP_MODAL' });
  },
  chatToggle() {
    // Dispatcher.dispatch({ actionType: 'SHOW_CHAT' });
  },
  infoToggle(){
    // Dispatcher.dispatch({ actionType: 'SHOW_PANEL' } );
  },
  dragToggle(){
    // Dispatcher.dispatch({ actionType: 'DRAG' } );
    this.setState({drag: !this.state.drag});
  },
  render() {
    return (
      <div className="ui top fixed large menu">
        <div className="ui fluid container">
          <a className="item " href="/"><i className="circle large red icon"></i>Bit.Exchange</a>
          { this.renderMenuItems() }
          <a className="icon item double" onClick={this.infoToggle}>
            <p><i className="dropdown large icon"></i></p>
          </a>
          {this.props.pair ? <TopInfo pair={this.props.pair} /> : null}

          { this.props.user ?
            <div className="right menu">
              {this.props.pair ? <a className={"icon item" + (this.state.drag ? " active" : "")} onClick={this.dragToggle} title="View control">
                <i className="block layout icon"></i>
              </a> : null}
              <UserTopMenu />
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
export default TopMenu;
