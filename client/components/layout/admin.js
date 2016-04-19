import React from 'react';
import TopMenu from '../top_menu';
import AdminOnly from '../admin/admin_only';
import AdminSidebar from '../admin/sidebar';
import AdminCurrencies from '../admin/currencies';
import AdminCurrency from '../admin/currency_form';
import AdminTradePairs from '../admin/TradePairs';
import AdminTradePair from '../admin/tradepair_form';
import AdminHome from '../admin/home';
import {Component} from 'cerebral-view-react';

const Admin = Component({
  page: ['page']
}, (props) => {
  let renderPage = (page) => {
    switch (page) {
      case "home": return <AdminHome/>;
      case "currencies": return <AdminCurrencies/>;
      case "currency": return <AdminCurrency/>;
      case "tradepairs": return <AdminTradePairs/>;
      case "tradepair": return <AdminTradePair/>;
      default: return <AdminHome/>;
    }
  }
  return (
    <AdminOnly redirect='/'>
      <div>
        <TopMenu />
        <div className='ui main container'>
          <div className='ui grid'>
            <div className='four wide column'>
              <AdminSidebar/>
            </div>
            <div className='twelve wide column'>
              {renderPage(props.page)}
            </div>
          </div>
        </div>
      </div>
    </AdminOnly>
  );

});
export default Admin;