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
  layout: ['layout']
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      loading: !Meteor.subs.ready()
    };
  },
  getMeteorData() {
    let pair = TradePairs.findOne({permalink: this.props.active});

    return {
      pair: pair,
      pairId: pair && pair._id,
      loading: !Meteor.subs.ready(),
      user: Meteor.user(),
      authInProgress: Meteor.loggingIn()
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


  componentDidMount() {
    if (!this.data.user && !this.data.authInProgress){
      this.setState({showLoginModal: true});
    }
    // Dispatcher.register((e) => {
    //   //console.log('new dispatcher event', payload);
    //   switch (e.actionType) {
    //     case 'SHOW_MOBILE_MENU':
    //       this.setState({showSidebar: !this.state.showSidebar});
    //       break;
    //
    //     case 'HIDE_MOBILE_MENU':
    //       this.setState({showSidebar: false});
    //       break;
    //
    //     case 'SHOW_LOGIN_MODAL':
    //       this.setState({showLoginModal: true});
    //       break;
    //
    //     case 'HIDE_LOGIN_MODAL':
    //       this.setState({showLoginModal: false});
    //       break;
    //
    //     case 'SHOW_SIGN_UP_MODAL':
    //       this.setState({showSignUpModal: true});
    //       break;
    //
    //     case 'HIDE_SIGN_UP_MODAL':
    //       this.setState({showSignUpModal: false});
    //       break;
    //
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
    //
    //     case 'MOBILE_BUYSELL':
    //       this.setState({showMobile: "buysell"});
    //       break;
    //
    //     case 'MOBILE_CHART':
    //       this.setState({showMobile: "chart"});
    //       break;
    //
    //     case 'MOBILE_ORDERS':
    //       this.setState({showMobile: "orders"});
    //       break;
    //
    //     case 'MOBILE_HISTORY':
    //       this.setState({showMobile: "history"});
    //       break;
    //
    //     case 'MOBILE_CHAT':
    //       this.setState({showMobile: "chat"});
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
  renderContent(){
    switch (this.state.showMobile) {

      case 'buysell':
        return(
          <div className="ui main fluid mobile container">
            <div className='ui basic segment h100 buysell'>
              <h3 className='ui header'>BALANCE</h3>
              <Balance pairId={this.data.pairId} pair={this.data.pair} wide="double" />
              <BuySell pairId={this.data.pairId} wide="double" />
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
                pairId={this.data.pairId}
                valute1={this.props.active.toUpperCase().split("-")[0]}
                valute2={this.props.active.toUpperCase().split("-")[1]} />
            </div>
            <div className='ui basic segment h100 max100'>
              <h3 className='ui header'>MY ORDERS</h3>
              <OpenOrders
                pairId={this.data.pairId}
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
                  pairId={this.data.pairId}
                  valute1={this.props.active.toUpperCase().split("-")[0]}
                  valute2={this.props.active.toUpperCase().split("-")[1]} />

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
    if (this.data.loading) return this.renderLoading();
    return (
      <div className="ui inverted newgrey body">
        <Sidebar show={this.state.showSidebar}>
          {this.renderSidebarContent()}
        </Sidebar>
        <TopMenu title="BitExchange" pair={this.data.pair} />
        {this.data.pair ? <BottomMenu title="BitExchange" pair={this.data.pair} /> : null}

        <div className="pusher">
          <div className="contwrapper pusher ">
            {this.state.showMobile == "chat" ? this.renderContent() : this.props.active? this.renderContent() : (this.props.content ? this.props.content : null)}
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
