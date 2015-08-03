TopMenu = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },
  getMenuItems() {
    return [
      { href: '/', label: 'Home', extraCls: '' }
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
  hideLoginModal() { this.setState({ showLoginModal: false }) },
  renderLoginButtons() {
    return (
      <div className="right menu">
        <div className="item">
          <a href="#" className="ui primary button" onClick={this.showLoginModal}>Log in</a>
        </div>
        <a href="#" className="item">Sign up</a>
      </div>
    );
  },
  render() {
    return (
      <div className="ui top fixed menu">
        <div className="ui container">

          { this.renderMenuItems() }
          { this.data.user ? '<UserTopMenu />' : this.renderLoginButtons() }
        </div>
      </div>
    );
  }
});
