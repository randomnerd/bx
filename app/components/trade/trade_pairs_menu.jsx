import React from 'react';

export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
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
  displayCurrent(){
    return this.props.active||"Chose pair"
  },
  renderMenuItems() {
    return this.getPairItems().map((item) => {
      return (
        <a className={"item" + (this.props.active==item.href?" active":"")} key={item.href} href={"/pair/"+item.href}>
          <div className="ui label">{item.value}</div>
          {item.pair}


        </a>
      )
    });
  },
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).dropdown({on: 'hover', action: 'hide'});
  },
  render() {
    return (
      <div className="ui dropdown item">
        <i className="bar chart icon" />
        {this.displayCurrent()}
        <i className="dropdown icon" />

        <div className="ui vertical menu">
          {this.renderMenuItems()}
        </div>
      </div>
    );
  }
});
