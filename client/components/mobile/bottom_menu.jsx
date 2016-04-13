import React from 'react';
import TradePairsMenu from '../trade/trade_pairs_menu';
import UserTopMenu from '../user_top_menu';
import TopInfo from '../mobile/top_info';
import NotificationShow from '../common/notifications';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';

const BottomMenu = Component({
  layout: ['layout']
}, {  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },
  getInitialState() {
    return {
      drag: false,
      active: "chart"
    };
  },
  showBuysell() {
    Dispatcher.dispatch({ actionType: 'MOBILE_BUYSELL' });
    this.setState({active:"buysell"});
  },
  showChart() {
    Dispatcher.dispatch({ actionType: 'MOBILE_CHART' });
    this.setState({active:"chart"});
  },

  showOrders() {
    Dispatcher.dispatch({ actionType: 'MOBILE_ORDERS' });
    this.setState({active:"orders"});
  },

  showHistory() {
    Dispatcher.dispatch({ actionType: 'MOBILE_HISTORY' });
    this.setState({active:"history"});
  },

  showChat() {
    Dispatcher.dispatch({ actionType: 'MOBILE_CHAT' });
    this.setState({active:"chat"});
  },


  render() {
    return (
      <div className="ui bottom fixed inverted large fluid five item menu">
        <div className={"icon item" + (this.state.active == "buysell" ? " active" : "")} onClick={this.showBuysell}><i className="money large icon"></i></div>
        <div className={"icon item" + (this.state.active == "chart" ? " active" : "")} onClick={this.showChart}><i className="area chart large icon"></i></div>
        <div className={"icon item" + (this.state.active == "orders" ? " active" : "")} onClick={this.showOrders}><i className="tasks large icon"></i></div>
        <div className={"icon item" + (this.state.active == "history" ? " active" : "")} onClick={this.showHistory}><i className="history large icon"></i></div>
        <div className={"icon item" + (this.state.active == "chat" ? " active" : "")} onClick={this.showChat}><i className="comments large icon"></i></div>
      </div>
    );
  }
});
export default BottomMenu;
