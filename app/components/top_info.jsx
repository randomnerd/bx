import React from 'react';
import {Currencies} from 'collections';

export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user(),
      currencies: Currencies.find({ published: true }, { sort: { name: 1 } }).fetch()
    };
  },
  displayCurrent() {
    return this.props.active ? this.props.active.toUpperCase() : 'Choose a pair';
  },
  render() {
    return (
      <div>
        <div className='ui icon item double'>
          <i className="chevron right large grey text icon"></i>
        </div>
        <div className='item double'>
          <h4 className="ui header">Last price</h4>
          <p>234.92929291</p>
        </div>
        <div className='item double'>
          <h4 className="ui header">Bid/Asc</h4>
          <p>
            <span className="red text">234.92929291</span> / <span className="green text">234.93494848</span>
          </p>
        </div>
        <div className='item double'>
          <h4 className="ui header">Range</h4>
          <p>234.92929291 - 234.92929291</p>
        </div>
        <div className='item double'>
          <h4 className="ui header">Volume</h4>
          <p>2435243.45667567</p>
        </div>
      </div>
    );
  }
});
