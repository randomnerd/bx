import React from 'react';
import {Tracker} from 'meteor/tracker';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {Trades, TradePairs, Currencies} from '../../../both/collections';
import moment from 'moment';

const UserTradeHistory = Component({
  layout: ['layout'],
  pair: ['pair','pair']
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      trades: Trades.find({},{sort: {createdAt: -1}}).fetch(),
      currencies: Currencies.find({}).fetch(),
      pairs: TradePairs.find({}).fetch()
    };
  },
  getInitialState(){
    return{
      test: 1
    }
  },
  componentDidMount() {
    this.props.signals.u.getHistory({limit: 40, skip: 0});
  },
  renderHistoryItems() {
    let nulls = '00000000';
    let data =this.data.trades;
    //console.log(data);
    data.reverse();
    let prev = 1;
    data.map((item) => {
      item.direction = !!(prev < parseFloat(item.displayPrice()) );
      prev = item.displayPrice();
    });
    data.reverse();

    let max = this.data.tradesMax ? parseFloat(this.data.tradesMax.displayAmount()) : 1;
    return data.map((item) => {
      let weight = parseFloat(70 * (item.displayAmount() / max).toFixed(8));

      let amount = parseFloat(item.displayAmount()).toString().split('.');
      let price = item.displayPrice().toString().split('.');
      //console.log(item.displayPrice().toString().split('.'));
      if (!amount[1]) {
        amount[1] = '';
      }
      if (!price[1] && price[1] != "0") {
        price[1] = "0";
      }
      return (
          <tr key={item._id} className='animate'>
            <td className='six wide'>
              <div className='bignum left'>{ amount[0] }</div>
              <div className='bignum dot'>.</div>
              <div className='bignum right'><span>{ amount[1]} </span> { nulls.substr(0,7 - amount[1].length) } {this.curr(item.sellId)}</div>
              <span className={'leveler ' + (item.direction ? 'positive' : 'negative')} style={{width: weight + '%'}}></span>
            </td>
            <td className={'seven wide arr ' + (item.direction ? 'positive' : 'negative') }>
              <div className='bignum left'>{price[0]}</div>
              <div className='bignum dot'>.</div>
              <div className='bignum right'><span>{price[1]}</span>{nulls.substr(0,8-price[1].length)}</div>
            </td>
            <td className='three wide right aligned'>{moment(item.createdAt).format("DD.MM.YYYY - hh:mm:ss")}</td>
          </tr>
        );
    });
  },
  curr(id) {
    let curr = _.findWhere(this.data.currencies, {
      _id: id
    });
    return curr

  },
  pair(id) {
    let pair = _.findWhere(this.data.pairs, {
      _id: id
    });
    return pair

  },
  showWithdraw(){
    // this.props.signals.tools.withdraw({action: 'open'});
    // this.props.signals.u.walletSet({id: this.props.wallet});
  },

  render() {
    let avail = this.data.balance ? this.data.balance.displayAmount() : (0).toFixed(8);
    let held = this.data.balance ? this.data.balance.displayHeld() : (0).toFixed(8);
    let total = this.data.balance ? this.data.balance.displayTotal() : (0).toFixed(8);
    let allowWithdraw = parseFloat(avail) > 0;
    return (
      <div className="ui main container">
        <div className="ui segments">
          <div className="ui secondary segment">
            <div className="ui header clearfix">
              <button className={'ui right floated blue button' + (allowWithdraw ? '' : ' disabled')}  onClick={this.showWithdraw}>
                Withdraw
              </button>
              <a href="/u/wallets" className="ui right floated white button">
                <i className="icon left arrow"></i>
                <span>back</span>
              </a>
              <h1> balance</h1>
            </div>
          </div>
            <div className="ui secondary segment">
              <h2 className="white text">Transactions</h2>
            </div>
            <div className="ui small blue segment">
              <table className="ui selectable very compact very basic striped unstackable table nomargin">
                <thead>
                  <tr className="lesspadding">
                    <th className="two wide" >Time</th>
                    <th className="five wide" >Address</th>
                    <th className="two wide">Amount</th>
                    <th className="two wide">Fee</th>
                    <th className="three wide">Balance</th>
                  </tr>
                </thead>
              </table>
              <div className='ux forscroll'>
                <div className='scrollable100'>
                  <table className='ui selectable very compact very basic unstackable table'>
                    <tbody>
                    { this.renderHistoryItems() }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
});

export default UserTradeHistory;
