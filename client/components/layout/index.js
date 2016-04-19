import MainLayout from './main';
import AdminLayout from './admin';
import MobileLayout from './mobile_layout';
import {Component} from 'cerebral-view-react';
import React from 'react';
export const Main = MainLayout;
export const Admin = AdminLayout;
export const Mobile = MobileLayout;

const Layout = Component({
  layout: ['layout'],
  mobile: ['mobile']
}, (props) => {
  props.signals.tools.windowWidth();

  console.log(props);
  if(props.mobile) return <Mobile/>;
  switch (props.layout) {
    case 'admin': return <Admin />;
    case 'home': return <Main />;
    default: return <Main />;
  }
});
export default Layout;
