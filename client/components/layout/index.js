import MainLayout from './main';
import AdminLayout from './admin';
import {Component} from 'cerebral-view-react';
import React from 'react';
export const Main = MainLayout;
export const Admin = AdminLayout;

const Layout = Component({
  layout: ['layout']
}, (props) => {
  switch (props.layout) {
    case 'admin': return <Admin />;
    case 'home': return <Main />;
    default: return <Main />;
  }
});
export default Layout;
