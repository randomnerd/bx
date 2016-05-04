import MainLayout from './main';
import AdminLayout from './admin';
import MobileLayout from './mobile_layout';
import {
    Component
} from 'cerebral-view-react';
import React from 'react';
export const Main = MainLayout;
export const Admin = AdminLayout;
export const Mobile = MobileLayout;

const Layout = Component({
    layout: ['layout'],
    mobile: ['mobile']
}, {
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            loading: !Meteor.subs.ready(),
        };
    },
    render() {
        this.props.signals.tools.windowWidth();

        console.log(this.props);
        if (this.data.loading) return <div > Loading < /div>;
        if (this.props.mobile) return <Mobile / > ;
        switch (this.props.layout) {
            case 'admin':
                return <Admin / > ;
            case 'home':
                return <Main / > ;
            default:
                return <Main / > ;
        }
    }
});
export default Layout;
