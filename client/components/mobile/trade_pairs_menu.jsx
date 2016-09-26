import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {TradePairs, Currencies} from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';

const TradePairsMenu = connect({
  layout: ['layout']
}, class TradePairsMenu extends React.Component {
  state = {
    showPairs: false
  }

  currName(_id) {
    let curr = _.findWhere(this.props.currencies, { _id });
    return curr ? curr.shortName : '';
  }

  displayCurrent() {
    if (!this.props.pair) return 'Choose a pair';
    return `${this.currName(this.props.pair.currId)} / ${this.currName(this.props.pair.marketCurrId)}`;
  }

  renderMenuItems() {
    let active = this.props.pair ? this.props.pair : false;
    return this.props.TradePairs.map((pair) => {
      return (
        <a
          className={'item' + (active._id === pair._id ? ' active' : '') }
          onClick={this.showMenu.bind(this)}
          key = {pair.permalink}
          href = {'/pair/' + pair.permalink}
        >
          {this.currName(pair.currId).toUpperCase()} / {this.currName(pair.marketCurrId).toUpperCase()}
        </a>
      );
    });
  }

  showMenu() {
    this.setState({showPairs:false});
    $(this.refs.accordion).accordion("close", 0);
    //this.props.signals.mob.page({id:'pair'});
    this.props.signals.mob.menu();
  }

  showPairs() {
    this.setState({showPairs:!this.state.showPairs});
  }

  componentDidMount() {
    //$(ReactDOM.findDOMNode(this)).dropdown({on: 'hover', action: 'hide'});
    $(this.refs.accordion).accordion();

  }
  render() {
    return (
        <div className="ui accordion" ref="accordion">
          <div className="ui title item">
            <i className="dropdown icon"></i>
            Trade pair
          </div>
          <div className="content nopadding">
            {this.renderMenuItems()}
          </div>
        </div>

    );
  }
});

export default TradePairsMenuContainer = createContainer((props) => {
  return {
    user: Meteor.user(),
    TradePairs: TradePairs.find({}, { sort: { name: 1 } }).fetch(),
    currencies: Currencies.find({ published: true }, { sort: { name: 1 } }).fetch()
  };
}, TradePairsMenu);
