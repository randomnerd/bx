import React from 'react';
import TradePairsMenu from '../trade/trade_pairs_menu';
import UserTopMenu from '../user_top_menu';
import TopInfo from '../mobile/top_info';
import NotificationShow from '../common/notifications';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';

const BottomMenu = connect({
  layout: ['layout'],
  mob: ['mob']
}, class BottomMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drag: false,
      active: "buysell"
    };
  }
  showPage(item, event) {
    this.props.signals.mob.page({id:item});
    this.setState({active:item});
  }



  render() {
    return (
      <div className="ui bottom fixed inverted large fluid five item menu">
        <div className={"icon item" + (this.state.active == "buysell" ? " active" : "")} onClick={this.showPage.bind(this, 'buysell')}><i className="money large icon"></i></div>
        <div className={"icon item" + (this.state.active == "chart" ? " active" : "")} onClick={this.showPage.bind(this, 'chart')}><i className="area chart large icon"></i></div>
        <div className={"icon item" + (this.state.active == "orders" ? " active" : "")} onClick={this.showPage.bind(this, 'orders')}><i className="tasks large icon"></i></div>
        <div className={"icon item" + (this.state.active == "history" ? " active" : "")} onClick={this.showPage.bind(this, 'history')}><i className="history large icon"></i></div>
        <div className={"icon item" + (this.state.active == "chat" ? " active" : "")} onClick={this.showPage.bind(this, 'chat')}><i className="comments large icon"></i></div>
      </div>
    );
  }
});
export default BottomMenu;
