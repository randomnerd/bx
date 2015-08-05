UserTopMenu = React.createClass({
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
          { this.data.user && this.data.user.isAdmin() ?
            <a className="item" href="/admin/">Admin</a> : ''
          }
          {this.renderMenuItems()}
        </div>
      </div>
    );
  }
});
