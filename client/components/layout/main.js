import React from 'react';
import {connect} from 'cerebral-view-react';
import Home from '../new_home';
import BitIndex from '../bitindex/bit_index';

import WalletsPage from '../user/wallets';
import WalletPage from '../user/transactions';
import Settings from '../user/settings';
import PasswordPage from '../user/password';
import HistoryPage from '../user/trade_history';

import Sidebar from '../common/sidebar';
import InfoPanel from '../common/infopanel';
import TradeGrid from '../trade/trade_grid';
import TopMenu from '../top_menu';
import LoginModal from '../login_modal';
import SignUpModal from '../sign_up_modal';
import WithdrawModal from '../user/withdraw_modal';
import WithdrawAddressModal from '../user/withdraw_addressbook';
import NotificationPopups from '../common/notification_popups';
import Notifications from '../user/notifications_page';
import Chat from '../common/chat';
import {TradePairs, Currencies} from '../../../both/collections';

const MainLayout = connect({
  page: 'page',
  pair_link: 'pair_link',
  pair: 'pair.pair',
  wallet: 'wallet',
  title: 'title'
}, (props) => {
  //let width=($('body').width() > 680) ? 'norm' : 'mobile';
  let renderPage = (page) => {
    switch (page) {
      case "home": return <Home {...props}/>;
      case "wallets": return <WalletsPage {...props}/>;
      case "wallet": return <WalletPage {...props}/>;
      case "history": return <HistoryPage {...props}/>;
      case "settings": return <Settings {...props}/>;
      case "password": return <PasswordPage {...props}/>;
      case "pair": return <TradeGrid {...props}/>;
      case "notifications": return <Notifications {...props}/>;
      case "bitindex": return <BitIndex {...props}/>;
      default: return <Home {...props}/>;
    }
  }
  return (
    <div className="ui inverted newgrey body">
      <title>{props.title}</title>
      <Sidebar {...props}><Chat {...props}/></Sidebar>
      <div className="pusher">
        {3==2?<InfoPanel  {...props}/>:null}
        <div className="contwrapper pusher">
          {renderPage(props.page)}
        </div>
      </div>
      <TopMenu title="BitExchange" {...props}/>
      <LoginModal  {...props}/>
      <SignUpModal  {...props}/>
      <WithdrawModal  {...props}/>
      <WithdrawAddressModal {...props}/>
      <NotificationPopups  {...props}/>
    </div>
  );
});
export default MainLayout;
