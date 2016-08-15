import React from 'react';
import {Currencies, TradePairs, Trades, PairTypes, Balances, Wallets} from '../../../both/collections';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';
import { createContainer } from 'meteor/react-meteor-data';
import moment from 'moment';

const AdminUser = connect({
}, class AdminUser extends React.Component {
  state = {
    errorMessage: null,
    allowSubmit: false,
    published: ''
  }

  newPair(event) {
    let {currId, marketCurrId, buyFee, sellFee, published, permalink, market} = this.refs.curr.getCurrentValues();

    Meteor.call('tradepair_add', {
      currId: currId,
      marketCurrId: marketCurrId,
      buyFee: buyFee,
      sellFee: sellFee,
      published: !!published,
      permalink: permalink,
      market: market
    }, (error, result) => {
      if (error) {
        this.setState({errorMessage: error.message});
      } else {
        this.props.signals.admin.adminPairs();
      }
    });
  }
  savePair(event) {
    let {currId, marketCurrId, buyFee, sellFee, published, permalink, market} = this.refs.curr.getCurrentValues();
    Meteor.call('tradepair_update', this.props.tradePairs._id, {
      currId: currId,
      marketCurrId: marketCurrId,
      buyFee: buyFee,
      sellFee: sellFee,
      published: !!published,
      permalink: permalink,
      market: market
    },
    (error, result) => {
      if (error) {
        this.setState({errorMessage: error.message});
      } else {
        this.props.signals.admin.adminPairs();
      }
    });
  }
  currentVal(what) {
    return this.props.tradePairs ? this.props.tradePairs[what] : '';
  }
  allowSubmit() { this.setState({allowSubmit: true}); }
  disallowSubmit() { this.setState({allowSubmit: false}); }

  currsForSearch() {
    return this.props.currencies.map((curr) => {
      return {_id: curr._id, title: curr.shortName, description: curr.name};
    });
  }
  marketsForSearch() {
    return this.props.markets.map((m) => {
      return {_id: m._id, title: m.shortName, description: m.name};
    });
  }

  checkboxToggle() {
    this.setState({published: (this.state.published ? false : true)});
  }
  getAddress(currId) {
    if (!this.props.wallets) return;
    let wallet = _.findWhere(this.props.wallets, {currId: currId});
    return wallet && wallet.address;
  }

  getBalance(currId) {
    if (!this.props.balances) return;
    let balance = _.findWhere(this.props.balances, {currId: currId});
    return balance ? balance.displayAmount() : (0).toFixed(8);
  }
  renderWalletItems() {
    return this.props.currencies.map((item) => {
      let address = this.getAddress(item._id);
      let balance = this.getBalance(item._id);
      let allowWithdraw = parseFloat(balance) > 0;

      return  (
        <tr key={item._id} className="ui opacity">
          <td className='four wide'>{balance}</td>
          <td className='three wide'>{item.shortName}</td>
          <td className='nine wide'>{address ? address : ''}</td>
        </tr>
      );
    });
  }
  renderSignInLog() {
    if (!this.props.thisUser.profile.loginHistory) return;
    let i = 0;
    return this.props.thisUser.profile.loginHistory.map((item) => {
      i++;
      if(i>6) return;
      return  (
        <tr key={"time" + i} className="ui opacity">
          <td>{moment(item.time).format("DD.MM.YYYY - hh:mm:ss")}</td>
          <td>{item.addr}</td>
        </tr>
      );
    });
  }


  curr(id) {
    let curr = _.findWhere(this.props.currencies, {_id: id});
    return curr
  }

  pair(id) {
    let pair = _.findWhere(this.props.pairs, {_id: id});
    return pair
  }
  renderHistoryItems() {
    let nulls = '00000000';

    return this.props.trades.map((item) => {

      let pair = this.pair(item.pairId);
      let curr, mcurr, amount, mamount;
      if(item.buyerId == this.props.thisUser._id){
        curr = this.curr(pair.currId);
        mcurr = this.curr(pair.marketCurrId);

        amount = parseFloat(item.displayAmount().toString()).toString().split('.');
        mamount = parseFloat(item.displayMarketAmount().toString()).toString().split('.');
      }else{
        mcurr = this.curr(pair.currId);
        curr = this.curr(pair.marketCurrId);

        mamount = parseFloat(item.displayAmount().toString()).toString().split('.');
        amount = parseFloat(item.displayMarketAmount().toString()).toString().split('.');
      }
      let price = parseFloat(item.displayPrice().toString()).toString().split('.');
      if (!amount[1]) {
        amount[1] = '';
      }else{
        //amount[0] = parseInt(amount[0]).toString();
        amount[1] = parseInt(amount[1]).toString();
      }
      if (!mamount[1]) {
        mamount[1] = '';
      }else{
        //mamount[0] = parseInt(mamount[0]).toString();
        mamount[1] = parseInt(mamount[1]).toString();
      }
      if (!price[1]) {
        price[1] = "";
      }else{
        //price[0] = parseInt(price[0]).toString();
        price[1] = parseInt(price[1]).toString();
      }
      return (
          <tr key={item._id} className='animate'>
            <td className='three wide'>
              { amount[0] }.{ amount[1]}{ nulls.substr(0,8 - amount[1].length) } {curr.shortName}
            </td>
            <td className='three wide'>
              { mamount[0] }.{ mamount[1]}{ nulls.substr(0,8 - mamount[1].length) } {mcurr.shortName}
            </td>
            <td className='three wide'>
              {price[0]}.{price[1]}{nulls.substr(0,8-price[1].length)}
            </td>
            <td className='seven wide right aligned'>{moment(item.createdAt).format("DD.MM.YYYY - hh:mm:ss")}</td>
          </tr>
        );
    });
  }
  render() {
    let user = this.props.thisUser;
    return (
      <div>
        <a className="ui blue button" href="/admin/users/1">
          Back
        </a>
        <div className="ui vertical segment">
          <h3 className="ui header">
            <i className={"circle icon " + (user.profile && user.profile.online ? 'green' : 'thin')}></i> Username: {user.username}
          </h3>

          <div className="ui bulleted list">
            <div className="item">Email: {user.emails[0].address}</div>
            <div className="item">Created at: {moment(user.createdAt).format("DD.MM.YYYY - hh:mm:ss")}</div>
          </div>
        </div>
        <div className="ui vertical segment">
          <h3 className="ui header">
            Wallets
          </h3>
          <table className='ui selectable very basic striped large unstackable table nomargin'>
            <thead>
              <tr className='lesspadding'>
                <th className='four wide' >Amount</th>
                <th className='three wide' >Coin</th>
                <th className='nine wide'>Deposit address</th>
              </tr>
            </thead>
          </table>

          <table className='ui selectable very compact very basic unstackable sortable table'>
            <tbody>
              { this.renderWalletItems() }
            </tbody>
          </table>

        </div>
        <div className="ui vertical segment">
          <h3 className="ui header">
            Sign in log
          </h3>
          <table className='ui selectable very basic striped large unstackable table nomargin'>
            <thead>
              <tr className='lesspadding'>
                <th>When</th>
                <th>IP</th>
              </tr>
            </thead>
          </table>

          <table className='ui selectable very compact very basic unstackable sortable table'>
            <tbody>
              { this.renderSignInLog() }
            </tbody>
          </table>

        </div>
        <div className="ui vertical segment">
          <h3 className="ui header">
            Trade log
          </h3>
          <table className='ui selectable very basic striped large unstackable table nomargin'>
            <thead>
              <tr className="lesspadding">
                <th className="three wide" >Currency</th>
                <th className="three wide" >Market currency</th>
                <th className="three wide">Price</th>
                <th className="nine wide right aligned">Time</th>
              </tr>
            </thead>
          </table>
          <table className='ui selectable very compact very basic unstackable sortable table'>
            <tbody>
            { this.renderHistoryItems() }
            </tbody>
          </table>

        </div>
      </div>
    );
  }
});
export default AdminUserContainer = createContainer((props) => {
  return {
    trades: Trades.find({},{sort: {createdAt: -1}}).fetch(),
    pairs: TradePairs.find().fetch(),
    thisUser: Meteor.users.findOne({_id: props.thisUserId}),
    balances: Balances.find({userId: props.thisUserId}).fetch(),
    currencies: Currencies.find({}, {sort: {name: 1}}).fetch(),
    wallets: Wallets.find({userId: props.thisUserId}, {sort: {createdAt: -1}}).fetch()
  };
}, AdminUser);
