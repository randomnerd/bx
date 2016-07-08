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
      currencies: Currencies.find().fetch(),
      pairs: TradePairs.find().fetch(),
      user: Meteor.user()
    };
  },
  getInitialState(){
    return{
      test: 1
    }
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
  componentDidMount() {
    this.props.signals.u.getHistory({limit: 40, skip: 0});
  },
  renderHistoryItems() {
    let nulls = '00000000';

    return this.data.trades.map((item) => {

      let pair = this.pair(item.pairId);
      let curr, mcurr, amount, mamount;
      if(item.buyerId == this.data.user._id){
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
              <div className='bignum left'>{ amount[0] }</div>
              <div className='bignum dot'>.</div>
              <div className='bignum right'>{ amount[1]}<span>{ nulls.substr(0,8 - amount[1].length) }</span> {curr.shortName}</div>
            </td>
            <td className='three wide'>
              <div className='bignum left'>{ mamount[0] }</div>
              <div className='bignum dot'>.</div>
              <div className='bignum right'>{ mamount[1]}<span>{ nulls.substr(0,8 - mamount[1].length) }</span> {mcurr.shortName}</div>
            </td>
            <td className='three wide'>
              <div className='bignum left'>{price[0]}</div>
              <div className='bignum dot'>.</div>
              <div className='bignum right'>{price[1]}<span>{nulls.substr(0,8-price[1].length)}</span></div>
            </td>
            <td className='seven wide right aligned'>{moment(item.createdAt).format("DD.MM.YYYY - hh:mm:ss")}</td>
          </tr>
        );
    });
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
      <div className="ui main container myhistory">
        <div className="ui segments">
          <div className="ui secondary segment">
            <div className="ui header clearfix">
              <h1>My history</h1>
            </div>
          </div>
            <div className="ui secondary segment">
              <h2 className="white text">Transactions</h2>
            </div>
            <div className="ui small blue segment">
              <table className="ui selectable very compact very basic striped unstackable table nomargin">
                <thead>
                  <tr className="lesspadding">
                    <th className="three wide center aligned" >Currency</th>
                    <th className="three wide center aligned" >Market currency</th>
                    <th className="three wide center aligned">Price</th>
                    <th className="nine wide right aligned">Time</th>
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
