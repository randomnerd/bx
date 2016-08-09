import React from 'react';
import {connect} from 'cerebral-view-react';
const UserOnly = connect({
  user: ['user'],
  loggingIn: ['loggingIn']
}, ({user, loggingIn, redirect, children}) => {
  if (!user && !loggingIn && redirect) {
    // FlowRouter.go(this.props.redirect);
  }
  return user ? children : <div></div>;
});
export default UserOnly;
