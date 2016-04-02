import React from 'react';

import {Component} from 'cerebral-view-react';
const Home = Component({
  loggingIn: ['loggingIn'],
  admin: ['admin']
}, (props) => {
    let {loggingIn, admin, redirect, children} = this.props;
    if (!admin && !loggingIn && redirect) {
      // FlowRouter.go(redirect);
    }
    return admin ? children : null;
});
export default Home;
