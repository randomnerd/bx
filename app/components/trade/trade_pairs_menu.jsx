import React from 'react';
import {Currencies} from 'collections';

export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user(),
      currencies: Currencies.find({ published:true }, { sort: { name: 1 } }).fetch()
    };
  },
  getPairItems() {
    return [
      { pair: 'BTC', value: '0.005467', href: 'btc'},
      { pair: 'LTC', value: '0.006685', href: 'ltc'},
      { pair: 'GLD', value: '0.00093737', href: 'gld'},
      { pair: 'FTC', value: '0.09123', href: 'ftc'},
    ];
  },
  displayCurrent() {
    return this.props.active ? this.props.active.toUpperCase() : 'Chose pair';
  },
  renderMenuItems() {
    let active = this.props.active ? this.props.active.toUpperCase() : false;
    return this.data.currencies.map((curr) => {
      let value = '0.09123';
      return (
        <a className={'item' + (active === curr.shortName.toUpperCase() ? ' active' : '') }
        key = {curr.shortName.toLowerCase()} href = {'/pair/' + curr.shortName.toLowerCase()}>
          <div className='ui label'>{value}</div>
          {curr.shortName}
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
