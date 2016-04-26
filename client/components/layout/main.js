import React from 'react';
import {Component} from 'cerebral-view-react';
import Home from '../home';

import WalletsPage from '../user/wallets';
import WalletPage from '../user/wallet_one';
import Settings from '../user/settings';
import PasswordPage from '../user/password';

import Sidebar from '../common/sidebar';
import InfoPanel from '../common/infopanel';
import TradeGrid from '../trade/trade_grid';
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
  //let width=($('body').width() > 680) ? 'norm' : 'mobile';
  let renderPage = (page) => {
    switch (page) {
      case "home": return <Home/>;
      case "wallets": return <WalletsPage/>;
      case "wallet": return <WalletPage/>;
      case "settings": return <Settings/>;
      case "password": return <PasswordPage/>;
      case "pair": return <TradeGrid/>;
      default: return <Home/>;
    }
  }
  return (
    <div className="ui inverted newgrey body">
      <Sidebar><Chat /></Sidebar>
      <div className="pusher">
        <InfoPanel />
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
