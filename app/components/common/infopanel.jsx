import React from 'react';
import Charts from 'components/bitindex';
import { BitIndexIndicator_BTPR } from 'collections';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {

    };
  },

  getMeteorData() {
    let handle_BTPR = Meteor.subscribe("BitIndexIndicator_BTPR");

    return {
     BTPR_Loading: !handle_BTPR.ready(),
     BTPR: BitIndexIndicator_BTPR.find().fetch(),
    };
  },
  componentDidMount() {
    //$this=this;
    $(ReactDOM.findDOMNode(this)).sidebar({
      context: $('.pusher'),
      dimPage: false,
      closable: false,
      //scrollLock: true,
      transition: 'overlay',
    });
    $(ReactDOM.findDOMNode(this)).sidebar(this.props.show ? 'show' : 'hide');
  },
  componentWillReceiveProps(newProps) {
    $(ReactDOM.findDOMNode(this)).sidebar(newProps.show ? 'show' : 'hide');
  },

  delAllMessages() {
    //Dispatcher.dispatch({ actionType: 'SHOW_SIDEBAR', payload: { addr: this.props.item } })
  },

  render() {
    return (
      <div className='ui top inverted sidebar panel'>
        <div className="ui grid">
          <div className="three column row">
            <div className="column">
              <div className='ui tabular basic menu nounderline leftline' ref='currType'>
                <a className='item double positive olive' onClick={this.setMarket}>
                  <h4 className="ui header teal text">BTC / USD</h4>
                  <p>234.9292</p>
                </a>
                <a className='item double negative orange' onClick={this.setLimit}>
                  <h4 className="ui header teal text">BTC / CNY</h4>
                  <p>163.9292</p>
                </a>
                <a className='item double blue' onClick={this.setStop}>
                  <h4 className="ui header teal text">ALTC</h4>
                  <p>234.9292</p>
                </a>
              </div>
              <div className="ui basic segment nobg">

              </div>
            </div>
            <div className="column">
              <div className='ui tabular basic menu nounderline leftline' ref='currType'>
                <a className='item double active positive' onClick={this.setMarket}>
                  <h4 className="ui header teal text">BTC / USD</h4>
                  <p>234.9292</p>
                </a>
                <a className='item double negative' onClick={this.setLimit}>
                  <h4 className="ui header teal text">BTC / CNY</h4>
                  <p>163.9292</p>
                </a>
                <a className='item double' onClick={this.setStop}>
                  <h4 className="ui header teal text">ALTC</h4>
                  <p>234.9292</p>
                </a>
              </div>
              <div className='ui tabular basic menu' ref='currType'>
                <a className='item active' onClick={this.setMarket}>
                  Most Actives
                </a>
                <a className='item' onClick={this.setLimit}>
                  Most Altcoins
                </a>
                <a className='item' onClick={this.setLimit}>
                  Most Gainers
                </a>
                <a className='item' onClick={this.setLimit}>
                  Most Loosers
                </a>
              </div>
              <div className="ui basic segment nobg">
                <table className='ui selectable very compact very basic striped table nopadding nomargin heading'>
                  <thead>
                    <tr className='lesspadding'>
                      <td className='five wide center aligned'>ANC</td>
                      <td className='six wide center aligned' >11.99 <span className="green text">(+76.58%)</span></td>
                      <td className='five wide right aligned'>
                        {
                          this.data.BTPR_Loading ? <div className='cube'></div> :
                          <Charts.areachart_infopanel data = {this.data.BTPR.slice(100)} type = "hybrid"/>
                        }
                      </td>
                    </tr>
                    <tr className='lesspadding'>
                      <td className='five wide center aligned'>GLD</td>
                      <td className='six wide center aligned' >21.45 <span className="red text">(-32.58%)</span></td>
                      <td className='five wide right aligned'>
                        {
                          this.data.BTPR_Loading ? <div className='cube'></div> :
                          <Charts.areachart_infopanel data = {this.data.BTPR.slice(500)} type = "hybrid"/>
                        }
                      </td>
                    </tr>
                    <tr className='lesspadding'>
                      <td className='five wide center aligned'>DRC</td>
                      <td className='six wide center aligned' >11.99 <span className="green text">(+76.58%)</span></td>
                      <td className='five wide right aligned'>
                        {
                          this.data.BTPR_Loading ? <div className='cube'></div> :
                          <Charts.areachart_infopanel data = {this.data.BTPR.slice(800)} type = "hybrid"/>
                        }
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div className="column">
              <div className='ui tabular basic menu nounderline leftline' ref='currType'>
                <a className='item double active positive' onClick={this.setMarket}>
                  <h4 className="ui header teal text">BTC / USD</h4>
                  <p>234.9292</p>
                </a>
                <a className='item double negative' onClick={this.setLimit}>
                  <h4 className="ui header teal text">BTC / CNY</h4>
                  <p>163.9292</p>
                </a>
                <a className='item double' onClick={this.setStop}>
                  <h4 className="ui header teal text">ALTC</h4>
                  <p>234.9292</p>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
});
