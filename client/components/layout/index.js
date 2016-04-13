import MainLayout from './main';
import AdminLayout from './admin';
import MobileLayout from './mobile_layout';
import {Component} from 'cerebral-view-react';
import React from 'react';
export const Main = MainLayout;
export const Admin = AdminLayout;

const Layout = Component({
  layout: ['layout']
}, (props) => {
  if(props.window_width == 'mobile') return <MobileLayout/>;
  switch (props.layout) {
    case 'admin': return <Admin />;
    case 'home': return <Main />;
    default: return <Main />;
  }
});
export default Layout;
