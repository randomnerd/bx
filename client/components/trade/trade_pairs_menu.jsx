import React from 'react';
import ReactDOM from 'react-dom';
import {TradePairs, Currencies} from '../../../both/collections';
import {connect} from 'cerebral-view-react';
import { createContainer } from 'meteor/react-meteor-data';

const TradePairsMenu = connect({
  user: 'user',
  pair: 'pair.pair'
}, class TradePairsMenu extends React.Component {
  currName(id) {
    let curr = _.findWhere(this.props.currencies, {_id: id});
    return curr ? curr.shortName : '';
  }

  displayCurrent() {
    return this.props.pair ?
      (this.currName(this.props.pair.currId) + ' / ' + this.currName(this.props.pair.marketCurrId)) :
      'Choose a pair';
  }

  renderMenuItems() {
    let active = this.props.pair ? this.props.pair : false;
    return this.props.TradePairs.map((pair) => {
      return (
        <a className={'item' + (active._id === pair._id ? ' active' : '') }
        key = {pair.permalink}
        href = {'/pair/' + pair.permalink}>
          <div className="ui label">{pair.dayVolume? (parseFloat(pair.dayVolume)/100000000).toFixed(4) : 0.0000}</div>
          {this.currName(pair.currId).toUpperCase()} / {this.currName(pair.marketCurrId).toUpperCase()}
        </a>
      );
    });
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).dropdown({on: 'hover', action: 'hide'});
  }

  render() {
    return (
      <div className='ui dropdown item'>
        <i className='bar chart icon' />
        {this.displayCurrent()}
        <i className='dropdown icon' />

        <div className='ui vertical menu pairs'>
          {this.renderMenuItems()}
        </div>
      </div>
    );
  }
});

export default TradePairsMenuContainer = createContainer((props) => {
  return {
    //user: Meteor.user(),
    TradePairs: TradePairs.find({}, { sort: { name: 1 } }).fetch(),
    currencies: Currencies.find({ published: true }, { sort: { name: 1 } }).fetch()
  };
}, TradePairsMenu);
