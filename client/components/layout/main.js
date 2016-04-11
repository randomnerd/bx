import React from 'react';
import {Component} from 'cerebral-view-react';
import Home from '../home';
import Sidebar from '../common/sidebar';
import InfoPanel from '../common/infopanel';
import TopMenu from '../top_menu';
import LoginModal from '../login_modal';
import SignUpModal from '../sign_up_modal';
import WithdrawModal from '../user/withdraw_modal';
import WithdrawAddressModal from '../user/withdraw_addressbook';
import NotificationPopups from '../common/notification_popups';
import Chat from '../common/chat';
import {TradePairs, Currencies} from '../../../both/collections';

const MainLayout = Component({
  page: ['page']
}, (props) => {
  let renderPage = (page) => {
    switch (page) {
      case "home": return <Home/>;
      default: return <Home/>;
    }
  }
  return (
    <div className="ui inverted newgrey body">
      <Sidebar><Chat /></Sidebar>
      <div className="pusher">

        <div className="contwrapper pusher">
          {renderPage(props.page)}
        </div>
      </div>
      <TopMenu title="BitExchange"/>
      <LoginModal />
      <SignUpModal />
      <WithdrawAddressModal/>
      <NotificationPopups />
    </div>
  );
});
export default MainLayout;
