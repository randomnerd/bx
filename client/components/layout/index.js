import MainLayout from './main';
import AdminLayout from './admin';
import MobileLayout from './mobile_layout';
import {Component} from 'cerebral-view-react';
import React from 'react';

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
  render(){
    this.props.signals.tools.windowWidth();

    console.log(this.props);
    if (this.data.loading) return <div>Loading</div>;
    if (this.props.mobile) return <MobileLayout/>;
    switch (this.props.layout) {
      case 'admin': return <AdminLayout />;
      default: return <MainLayout />;
    }
  }
});
export default Layout;
