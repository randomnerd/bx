import React from 'react';
import TopMenu from '../top_menu';
import AdminOnly from '../admin/admin_only';
import AdminSidebar from '../admin/sidebar';
import AdminCurrencies from '../admin/currencies';
import AdminCurrency from '../admin/currency_form';
import AdminTradePairs from '../admin/TradePairs';
import AdminTradePair from '../admin/tradepair_form';
import CurrTypes from '../admin/currtypes';
import CurrType from '../admin/currtype_form';
import PairTypes from '../admin/pairtypes';
import PairType from '../admin/pairtype_form';
import PairGroups from '../admin/pairgroups';
import PairGroup from '../admin/pairgroup_form';
import AdminHome from '../admin/home';
import {connect} from 'cerebral-view-react';

const Admin = connect({
  page: ['page']
}, (props) => {
  let renderPage = (page) => {
    switch (page) {
      case "home": return <AdminHome {...props}/>;
      case "currencies": return <AdminCurrencies {...props}/>;
      case "currency": return <AdminCurrency {...props}/>;
      case "tradepairs": return <AdminTradePairs {...props}/>;
      case "tradepair": return <AdminTradePair {...props}/>;
      case "currtypes": return <CurrTypes {...props}/>;
      case "currtype": return <CurrType {...props}/>;
      case "pairtypes": return <PairTypes {...props}/>;
      case "pairtype": return <PairType {...props}/>;
      case "pairgroups": return <PairGroups {...props}/>;
      case "pairgroup": return <PairGroup {...props}/>;
      default: return <AdminHome {...props}/>;
    }
  };
  return (
    <AdminOnly redirect='/' {...props}>
      <div>
        <TopMenu  {...props}/>
        <div className='ui main container'>
          <div className='ui grid'>
            <div className='four wide column'>
              <AdminSidebar {...props}/>
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
