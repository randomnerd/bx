import MainLayout from './main';
import AdminLayout from './admin';
import MobileLayout from './mobile_layout';
import {Component} from 'cerebral-view-react';
import React from 'react';

const Layout = Component({
  layout: ['layout'],
  mobile: ['mobile'],
  pair: ['pair', 'pair'],
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      loading: !Meteor.subs.ready() || Meteor.loggingIn(),
    };
  },

  componentDidMount() {
    this.props.signals.tools.windowWidth();
  },

  render() {
    if (this.data.loading) return <div className="loader"><img src="/gears.svg" /></div>;
    if (this.props.mobile) return <MobileLayout/>;
    switch (this.props.layout) {
      case 'admin': return <AdminLayout />;
      default: return <MainLayout />;
    }
  }
});
export default Layout;
