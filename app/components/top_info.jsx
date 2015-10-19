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
  getInitialState() {
    return {
      showInfo: false,
    };
  },
  infoToggle(){
    this.state.showInfo ?
      Dispatcher.dispatch({ actionType: 'HIDE_PANEL' }) :
      Dispatcher.dispatch({ actionType: 'SHOW_PANEL' });

    this.setState({ showInfo: !this.state.showInfo });

  },
  displayCurrent() {
    return this.props.active ? this.props.active.toUpperCase() : 'Choose a pair';
  },
  render() {
    return (
      <div>
        <a className="icon item double" onClick={this.infoToggle}>
          <p><i className="dropdown large icon"></i></p>
        </a>
        <div className='item double'>
          <h4 className="ui header">Last price</h4>
          <p>234.9292</p>
        </div>
        <div className='item double'>
          <h4 className="ui header">Bid/Asc</h4>
          <p>
            <span className="red text">234.9292</span> / <span className="green text">234.9349</span>
          </p>
        </div>
        <div className='item double'>
          <h4 className="ui header">Range</h4>
          <p>234.9292 - 234.9292</p>
        </div>
        <div className='item double'>
          <h4 className="ui header">Volume</h4>
          <p>2435243.45</p>
        </div>
      </div>
    );
  }
});
