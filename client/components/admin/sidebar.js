import React from 'react';
import {Component} from 'cerebral-view-react';

const Sidebar = Component({
}, (props) => {
  return (
    <div className='ui fluid vertical menu'>
      <a href='/admin/currencies' className='item'>Currencies</a>
      <a href='/admin/tradepairs' className='item'>Trade pairs</a>
    </div>
  );
});
