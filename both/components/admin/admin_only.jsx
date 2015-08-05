AdminOnly = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      admin: Meteor.user() && Meteor.user().isAdmin()
    };
  },
  render() {
    if (!this.data.admin && this.props.redirect) FlowRouter.go(this.props.redirect);
    return (
      <div>
        {this.data.admin? this.props.children : ''}
      </div>
    );
  }
});
