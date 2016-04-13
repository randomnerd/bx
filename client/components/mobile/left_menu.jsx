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
  getMenuItems() {
    return [
      //{ href: '/', label: 'Bit.Exchange', extraCls: '' },
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
  infoToggle(){
      Dispatcher.dispatch({ actionType: 'SHOW_PANEL' } );
  },
  dragToggle(){
      Dispatcher.dispatch({ actionType: 'DRAG' } );
      this.setState({drag: !this.state.drag});
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
          { this.renderMenuItems() }
          <TradePairsMenu pair={this.props.pair} />
            { this.data.user ?

                <UserTopMenu />

              : this.renderLoginButtons()
            }



      </div>
    );
  }
});
export default LeftMenu;
