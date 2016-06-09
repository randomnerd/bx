import React from 'react';
import {Component} from 'cerebral-view-react';

const Sidebar = Component({
}, (props) => {
  return (
    <div className='ui fluid vertical menu'>
      <a href='/admin/currencies' className='item'>Currencies</a>
      <a href='/admin/tradepairs' className='item'>Trade pairs</a>
      <a href='/admin/currtypes' className='item'>Currency types</a>
      <a href='/admin/pairtypes' className='item'>Markets</a>
      <a href='/admin/pairgroups' className='item'>Pair groups</a>
    </div>
  );
});
export default Sidebar;
