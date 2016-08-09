import React from 'react';
import {connect} from 'cerebral-view-react';
const AdminOnly = connect({
  loggingIn: ['loggingIn'],
  admin: ['admin']
}, (props) => {
    let {loggingIn, admin, redirect, children} = props;
    if (!admin && !loggingIn && redirect) {
      // FlowRouter.go(redirect);
    }
    return admin ? children : <div></div>;
});
export default AdminOnly;
