import React from 'react';

export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user(),
      authInProgress: Meteor.loggingIn()
    };
  },
  render() {
    if (!this.data.user && !this.data.authInProgress && this.props.redirect)
      FlowRouter.go(this.props.redirect);
    return (
      <div className="userOnly">
        {this.data.user ? this.props.children : (this.props.unauthorized || '')}
      </div>
    );
  }
});
