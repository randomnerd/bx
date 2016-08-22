import React from 'react';
import TopMenu from '../mobile/top_menu';
import BottomMenu from '../mobile/bottom_menu';
import LoginModal from '../login_modal';
import SignUpModal from '../sign_up_modal';
import WithdrawModal from '../mobile/withdraw_modal';
import WithdrawAddressModal from '../user/withdraw_addressbook';
import NotificationPopups from '../common/notification_popups';
import Chats from '../common/chat';
import Charts from '../mobile/charts';
import Sidebar from '../mobile/sidebar';
import LeftMenu from '../mobile/left_menu';

import WalletsPage from '../mobile/wallets';
import WalletPage from '../mobile/transactions';
import Settings from '../user/settings';
import PasswordPage from '../user/password';
import Notifications from '../user/notifications_page';

import Trades from '../trade/lastTrades';
import Orders from '../trade/orderbook';
import OpenOrders from '../trade/open_orders';
import Balance from '../trade/balance';
import BuySell from '../trade/buysell';

import {TradePairs, Currencies} from '../../../both/collections';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';
import { createContainer } from 'meteor/react-meteor-data';

const MobileLayout = connect({
  layout: 'layout',
  mob: 'mob',
  page: 'page',
  pair_link: 'pair_link',
  user: 'user',
  wallet: 'wallet'
}, class MobileLayout extends React.Component {
  state = {
    showLoginModal: false,
    showSignUpModal: false,
    showWithdrawModal: false,
    showSidebar: false,
    showPanel: false,
    withdrawAddressModal: false,

    showMobile:"buysell"

  }
  currName(id) {
    let curr = _.findWhere(this.props.currencies, {
      _id: id
    });
    return curr
      ? curr.shortName
      : '';
  }
  componentWillReceiveProps(nextProps){
    this.props.signals.mob.menu({action: 'close'});
    //this.setState({showSidebar: nextProps.mob.menu});
    this.setState({showMobile: nextProps.mob.page});
  }

  componentDidMount() {
    if (!this.props.user && !this.props.authInProgress){
      this.props.signals.user.loginClicked();
    }

  }
  renderSidebarContent() {
    switch (this.state.sidebarContent) {
    case 'chat':
      return (
        <Chats {...this.props}/>
      );
    break;
    }
  }

  renderPage() {
    console.log(this.props.page);
    switch (this.props.page) {
      case "wallets": return <WalletsPage {...this.props}/>;
      case "wallet": return <WalletPage {...this.props}/>;
      case "settings": return <Settings {...this.props}/>;
      case "password": return <PasswordPage {...this.props}/>;
      case "notifications": return <Notifications {...this.props}/>;
      case "pair": return this.renderContent();
      default: return <WalletsPage {...this.props}/>;
    }
  }

  renderContent(){
    if(!this.props.pair && this.state.showMobile != 'chat') return;
    switch (this.state.showMobile) {

      case 'buysell':
        return(
          <div className="ui main fluid mobile container">
            <div className='ui basic segment h100 buysell'>
              <h3 className='ui header'>BALANCE</h3>
              <Balance pairId={this.props.pair._id} pair={this.props.pair} wide="double"  {...this.props}/>
              <BuySell pairId={this.props.pair._id} pair={this.props.pair} wide="double"  {...this.props}/>
            </div>
          </div>
        )
        break;


      case 'chart':
        return(
          <div className="ui main fluid mobile container">
            <Charts pair={this.props.pair}  {...this.props}/>
          </div>
        )
        break;

      case 'orders':
        return(
          <div className="ui main fluid mobile container scrollable">
            <div className='ui basic segment max100'>
              <h3 className='ui header'>ORDER BOOK</h3>
              <Orders direction='sell'
                pair={this.props.pair}
                pairId={this.props.pair._id}
                valute1={this.currName(this.props.pair.currId)}
                valute2={this.currName(this.props.pair.marketCurrId)}  {...this.props}/>
            </div>
            <div className='ui basic segment h100 max100'>
              <h3 className='ui header'>MY ORDERS</h3>
              <OpenOrders
                pair={this.props.pair}
                pairId={this.props.pair._id}
                valute1={this.props.pair.currId}
                valute2={this.props.pair.marketCurrId}  {...this.props}/>
            </div>
          </div>
        )
        break;

      case 'history':
        return(
          <div className="ui main fluid mobile container">
            <div className='ui basic segment h100'>
              <h3 className='ui header'>TRADE HISTORY</h3>

                <Trades
                  pair={this.props.pair}
                  pairId={this.props.pair._id}
                  valute1={this.currName(this.props.pair.currId)}
                  valute2={this.currName(this.props.pair.marketCurrId)}  {...this.props}/>

            </div>
          </div>
        )
        break;

      case 'chat':
        return(
          <div className="ui main fluid mobile container">
            <Chats  {...this.props}/>
          </div>
        )

        break;


    }
  }
  renderSidebarContent() {
    return (
      <LeftMenu  {...this.props}/>
    );
  }
  renderLoading() {
    return (
      <div className="ui active dimmer">
        <div className="ui text loader">
          <img src="gears.svg"/>
        </div>
      </div>
    );
  }

  render() {
    this.props.signals.mob.menu({action: 'close'});
    this.props.signals.pair.setPair({pair: this.props.pair});
    if (this.props.loading) return this.renderLoading();
    return (
      <div className="ui inverted newgrey body">
        <Sidebar>
          {this.renderSidebarContent()}
        </Sidebar>
        <TopMenu title="BitExchange" pair={this.props.pair} {...this.props}/>
        <BottomMenu title="BitExchange" pair={this.props.pair} {...this.props}/>

        <div className="pusher">
          <div className="contwrapper pusher ">
            {this.state.showMobile == "chat" ? this.renderContent() : this.props.mob.page? this.renderContent() : (this.props.page ? this.renderPage() : null)}
          </div>
        </div>

        <LoginModal {...this.props}/>
        <SignUpModal {...this.props}/>
        <WithdrawModal current={this.state.withdrawCurr}
        address={this.state.withdrawAddress} amount={this.state.withdrawAmount} {...this.props}/>
        <WithdrawAddressModal show={this.state.withdrawAddressModal} {...this.props}/>
      </div>
    );
  }
});
export default MobileLayoutContainer = createContainer((props) => {
  let pair = TradePairs.findOne({permalink: props.pair_link});

  return {
    pair: pair,
    pairId: pair && pair._id,
    user: Meteor.user(),
    authInProgress: Meteor.loggingIn(),
    currencies: Currencies.find({ published: true }, { sort: { name: 1 } }).fetch()
  };
}, MobileLayout);
