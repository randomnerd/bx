import React from 'react';
import {connect} from 'cerebral-view-react';

const Sidebar = connect({
}, (props) => {
  return (
    <div className='ui fluid vertical menu'>
      <a href='/admin/currencies' className='item'>Currencies</a>
      <a href='/admin/tradepairs' className='item'>Trade pairs</a>
      <a href='/admin/currtypes' className='item'>Currency types</a>
      <a href='/admin/pairtypes' className='item'>Markets</a>
      <a href='/admin/pairgroups' className='item'>Pair groups</a>
      <a href='/admin/users/1' className='item'>Users</a>
    </div>
  );
});
export default Sidebar;
