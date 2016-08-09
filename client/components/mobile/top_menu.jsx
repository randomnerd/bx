import React from 'react';
import TradePairsMenu from '../trade/trade_pairs_menu';
import UserTopMenu from './user_top_menu';
import TopInfo from './top_info';
import NotificationShow from '../common/notifications';
import { createContainer } from 'meteor/react-meteor-data';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';

const TopMenu = connect({
  layout: ['layout']
}, class TopMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drag:false
    };
  }
  showMenu() {
    this.props.signals.mob.menu();
  }
  showLoginModal() {
    this.props.signals.user.loginClicked();
  }
  showSignUpModal() {
    this.props.signals.user.signUpClicked();
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
      <div className="ui top fixed large menu">
        <a className="icon item" onClick={this.showMenu.bind(this)}><i className="sidebar large black icon"></i></a>

        {this.props.pair ? <TopInfo pair={this.props.pair} /> : null}

        { this.props.user ?
          <div className="right menu">
            <NotificationShow />
          </div>
          : this.renderLoginButtons()
        }
      </div>
    );
  }
});
export default TopMenuContainer = createContainer((props) => {
  return {
    user: Meteor.user()
  }
}, TopMenu);
