import React from 'react';
import ReactDOM from 'react-dom';
import {TradePairs, Currencies} from '../../../both/collections';
import {Component} from 'cerebral-view-react';
const TradePairsMenu = Component({
  user: ['user'],
}, {
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      //user: Meteor.user(),
      TradePairs: TradePairs.find({}, { sort: { name: 1 } }).fetch(),
      currencies: Currencies.find({ published: true }, { sort: { name: 1 } }).fetch()
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
  displayCurrent() {
    return this.props.pair ?
      (this.currName(this.props.pair.currId) + ' / ' + this.currName(this.props.pair.marketCurrId)) :
      'Choose a pair';
  },
  renderMenuItems() {
    let active = this.props.pair ? this.props.pair : false;
    return this.data.TradePairs.map((pair) => {
      console.log(this.data.currencies);
      return (
        <a className={'item' + (active._id === pair._id ? ' active' : '') }
        key = {pair.permalink}
        href = {'/pair/' + pair.permalink}>
          {this.currName(pair.currId).toUpperCase()} / {this.currName(pair.marketCurrId).toUpperCase()}
        </a>
      );
    });
  },
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).dropdown({on: 'hover', action: 'hide'});
  },
  render() {
    return (
      <div className='ui dropdown item'>
        <i className='bar chart icon' />
        {this.displayCurrent()}
        <i className='dropdown icon' />

        <div className='ui vertical menu'>
          {this.renderMenuItems()}
        </div>
      </div>
    );
  }
});
export default TradePairsMenu;
