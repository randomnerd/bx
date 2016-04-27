import React from 'react';
//import InfoPanel from 'components/common/infopanel';
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

import Trades from '../trade/lastTrades';
import Orders from '../trade/orderbook';
import OpenOrders from '../trade/open_orders';
import Balance from '../trade/balance';
import BuySell from '../trade/buysell';

import {TradePairs, Currencies} from '../../../both/collections';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';

const MobileLayout = Component({
  layout: ['layout'],
  mob: ['mob'],
  page: ['page'],
  pair_link: ['pair_link'],
  user: ['user']
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      loading: !Meteor.subs.ready()
    };
  },
  getMeteorData() {
    let pair = TradePairs.findOne({permalink: this.props.pair_link});

    return {
      pair: pair,
      pairId: pair && pair._id,
      loading: !Meteor.subs.ready(),
      user: Meteor.user(),
      authInProgress: Meteor.loggingIn(),
      currencies: Currencies.find({ published: true }, { sort: { name: 1 } }).fetch()
    };
  },
  getInitialState() {
    return {
      showLoginModal: false,
      showSignUpModal: false,
      showWithdrawModal: false,
      showSidebar: false,
      showPanel: false,
      withdrawAddressModal: false,

      showMobile:"buysell"
    };
  },
  currName(id) {
    let curr = _.findWhere(this.data.currencies, {
      _id: id
    });
    return curr
      ? curr.shortName
      : '';
  },
  componentWillReceiveProps(nextProps){
    this.setState({showSidebar: nextProps.mob.menu});
    this.setState({showMobile: nextProps.mob.page});
  },

  componentDidMount() {
    if (!this.data.user && !this.data.authInProgress){
      this.setState({showLoginModal: true});
    }
    // Dispatcher.register((e) => {
    //
    //   switch (e.actionType) {
    //     case 'SHOW_WITHDRAW_MODAL':
    //       this.setState({showWithdrawModal: true});
    //       break;
    //
    //     case 'HIDE_WITHDRAW_MODAL':
    //       this.setState({showWithdrawModal: false});
    //       break;
    //
    //     case 'SHOW_ADDRESSBOOK_MODAL':
    //       this.setState({withdrawAddressModal: true});
    //       break;
    //
    //     case 'HIDE_ADDRESSBOOK_MODAL':
    //       this.setState({withdrawAddressModal: false});
    //       break;

    //   }
    // });
  },
  renderSidebarContent() {
    switch (this.state.sidebarContent) {
    case 'chat':
      return (

            <Chats />

      );
    break;
    }
  },

  renderPage() {
    console.log(this.props.page);
    switch (this.props.page) {
      case "wallets": return <WalletsPage/>;
      case "wallet": return <WalletPage/>;
      case "settings": return <Settings/>;
      case "password": return <PasswordPage/>;
      default: return <WalletsPage/>;
    }
  },

  renderContent(){
    //console.log(this.props.pair);
    if(!this.data.pair && this.state.showMobile != 'chat') return;
    switch (this.state.showMobile) {

      case 'buysell':
        return(
          <div className="ui main fluid mobile container">
            <div className='ui basic segment h100 buysell'>
              <h3 className='ui header'>BALANCE</h3>
              <Balance pairId={this.data.pair._id} pair={this.data.pair} wide="double" />
              <BuySell pairId={this.data.pair._id} wide="double" />
            </div>
          </div>
        )
        break;


      case 'chart':
        return(
          <div className="ui main fluid mobile container">
            <Charts pair={this.data.pair} />
          </div>
        )
        break;

      case 'orders':
        return(
          <div className="ui main fluid mobile container scrollable">
            <div className='ui basic segment max100'>
              <h3 className='ui header'>ORDER BOOK</h3>
              <Orders direction='sell'
                pair={this.data.pair}
                pairId={this.data.pair._id}
                valute1={this.currName(this.data.pair.currId)}
                valute2={this.currName(this.data.pair.marketCurrId)} />
            </div>
            <div className='ui basic segment h100 max100'>
              <h3 className='ui header'>MY ORDERS</h3>
              <OpenOrders
                pair={this.data.pair}
                pairId={this.data.pair._id}
                valute1={this.data.pair.currId}
                valute2={this.data.pair.marketCurrId} />
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
                  pair={this.data.pair}
                  pairId={this.data.pair._id}
                  valute1={this.currName(this.data.pair.currId)}
                  valute2={this.currName(this.data.pair.marketCurrId)} />

            </div>
          </div>
        )
        break;

      case 'chat':
        return(
          <div className="ui main fluid mobile container">
            <Chats />
          </div>
        )

        break;


    }
  },
  renderSidebarContent() {
    // switch (this.state.sidebarContent) {
    //   case 'chat':
        return (

              <LeftMenu />

        );
    //  break;
    //}
  },
  renderLoading() {
    return (
      <div className="ui active dimmer">
        <div className="ui text loader">Loading...</div>
      </div>
    );
  },

  render() {
    this.props.signals.pair.setPair({pair: this.data.pair});
    if (this.data.loading) return this.renderLoading();
    return (
      <div className="ui inverted newgrey body">
        <Sidebar show={this.state.showSidebar}>
          {this.renderSidebarContent()}
        </Sidebar>
        <TopMenu title="BitExchange" pair={this.data.pair} />
        <BottomMenu title="BitExchange" pair={this.data.pair} />

        <div className="pusher">
          <div className="contwrapper pusher ">
            {this.state.showMobile == "chat" ? this.renderContent() : this.props.mob.page? this.renderContent() : (this.props.page ? this.renderPage() : null)}
          </div>
        </div>

        <LoginModal show={this.state.showLoginModal} />
        <SignUpModal show={this.state.showSignUpModal} />
        <WithdrawModal show={this.state.showWithdrawModal} current={this.state.withdrawCurr}
        address={this.state.withdrawAddress} amount={this.state.withdrawAmount} />
        <WithdrawAddressModal show={this.state.withdrawAddressModal} />
      </div>
    );
  }
});
export default MobileLayout;
