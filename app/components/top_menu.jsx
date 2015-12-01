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
  chatToggle() {
    Dispatcher.dispatch({ actionType: 'SHOW_CHAT' });
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
      <div className="ui top fixed large menu">
        <div className="ui fluid container">
          <a className="item " href="/"><i className="circle large red icon"></i>Bit.Exchange</a>
          { this.renderMenuItems() }
          <TradePairsMenu pair={this.props.pair} />
          <a className="icon item double" onClick={this.infoToggle}>
            <p><i className="dropdown large icon"></i></p>
          </a>
          {this.props.pair ? <TopInfo pair={this.props.pair} /> : null}

            { this.data.user ?
              <div className="right menu">
                {this.props.pair ? <a className={"icon item" + (this.state.drag ? " active" : "")} onClick={this.dragToggle} title="View control">
                  <i className="block layout icon"></i>
                </a> : null}
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
