import React from 'react';
import {
    Component
} from 'cerebral-view-react';
const AdminOnly = Component({
    loggingIn: ['loggingIn'],
    admin: ['admin']
}, (props) => {
    let {
        loggingIn,
        admin,
        redirect,
        children
    } = props;
    if (!admin && !loggingIn && redirect) {
        // FlowRouter.go(redirect);
    }
    return admin ? children : < div > < /div>;
});
export default AdminOnly;
