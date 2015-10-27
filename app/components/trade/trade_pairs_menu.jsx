import React from 'react';
import {TradePairs, Currencies} from 'collections';

export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user(),
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
    return this.props.pair.shortName ? this.props.pair.shortName.toUpperCase().replace(/-/," / ") : 'Choose a pair';
  },
  renderMenuItems() {
    let active = this.props.pair.shortName ? this.props.pair.shortName.toUpperCase() : false;
    return this.data.TradePairs.map((pair) => {
      let apair = this.currName(pair.currId).toLowerCase() + "-" + this.currName(pair.marketCurrId).toLowerCase();

      return (
        <a className={'item' + (active === apair ? ' active' : '') }
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
