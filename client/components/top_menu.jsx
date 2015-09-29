TopMenu = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },
  getMenuItems() {
    return [
      { href: '/', label: 'Home', extraCls: '' },
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
      <div className="ui top fixed inverted newgrey menu">
        <div className="ui container">

          { this.renderMenuItems() }
            { this.data.user ?
              <div className="right menu"><UserTopMenu /><NotificationShow /></div>
              : this.renderLoginButtons()
            }


        </div>
      </div>
    );
  }
});
