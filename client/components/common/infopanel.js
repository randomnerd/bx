import React from 'react';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import Charts from '../bitindex';
import { BitIndexIndicator_BTPR } from '../../../both/collections';


const Infopanel = Component({
    user: ['user'],
    tools: ['tools']
  }, {
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      mosts: 'active',
      pairs: 'btc',
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
      closable: true,
      //scrollLock: true,
      transition: 'overlay',
      onHidden: ()=>{
        //this.props.signals.tools.infoPanel();
        return false;
      }
    });
    this.setState({most: 'active'});
    this.setState({pair: 'btc'});
  },
  componentWillReceiveProps(newProps) {
    $(ReactDOM.findDOMNode(this)).sidebar(newProps.tools.panel ? 'show' : 'hide');
  },


  mostActive(){
    $(this.refs.most).find('.item').removeClass('active');
    this.setState({most: 'active'});
  },
  mostMined(){
    $(this.refs.most).find('.item').removeClass('active');
    this.setState({most: 'mined'});
  },

  mostGainers(){
    $(this.refs.most).find('.item').removeClass('active');
    this.setState({most: 'gainers'});
  },

  mostLoosers(){
    $(this.refs.most).find('.item').removeClass('active');
    this.setState({most: 'loosers'});
  },



  pairBTC(){
    $(this.refs.currTypes).find('.item').removeClass('active');
    this.setState({pair: 'btc'});
  },

  pairUSD(){
    $(this.refs.currTypes).find('.item').removeClass('active');
    this.setState({pair: 'usd'});
  },

  pairCNY(){
    $(this.refs.currTypes).find('.item').removeClass('active');
    this.setState({pair: 'cny'});
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
                <a className='item double negative blue' onClick={this.setStop}>
                  <h4 className="ui header teal text">GLD / BTC</h4>
                  <p>234.9292</p>
                </a>
                <a className='item double positive purple' onClick={this.setStop}>
                  <h4 className="ui header teal text">ANC / BTC</h4>
                  <p>234.9292</p>
                </a>
              </div>
              <div className="ui basic segment nobg">
                {
                  this.data.BTPR_Loading ? <div className='cube'></div> :
                  <Charts.comparechart_infopanel data = {this.data.BTPR.slice(500)} type = "hybrid"/>
                }
              </div>
            </div>
            <div className="column">

              <div className='ui tabular basic menu' ref='most'>
                <a className={'item' + (this.state.most == 'active' ? ' active' : '')} onClick={this.mostActive}>
                  Most Actives
                </a>
                <a className={'item' + (this.state.most == 'mined' ? ' active' : '')} onClick={this.mostMined}>
                  Most Mined
                </a>
                <a className={'item' + (this.state.most == 'gainers' ? ' active' : '')} onClick={this.mostGainers}>
                  Most Gainers
                </a>
                <a className={'item' + (this.state.most == 'loosers' ? ' active' : '')} onClick={this.mostLoosers}>
                  Most Loosers
                </a>
              </div>

              <table className='ui selectable very compact very basic striped table nopadding nomargin'>
                <thead>
                  <tr className='lesspadding'>
                    <td className='two wide'>ANC</td>
                    <td className='five wide center aligned' >11.99 <span className="green text">(+76.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.data.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.data.BTPR.slice(100)} type = "hybrid"/>
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>GLD</td>
                    <td className='five wide center aligned' >21.45 <span className="red text">(-32.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.data.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.data.BTPR.slice(500)} type = "hybrid"/>
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>DRC</td>
                    <td className='five wide center aligned' >11.99 <span className="green text">(+76.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.data.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.data.BTPR.slice(800)} type = "hybrid"/>
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>ANC</td>
                    <td className='five wide center aligned' >11.99 <span className="green text">(+76.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.data.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.data.BTPR.slice(100)} type = "hybrid"/>
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>GLD</td>
                    <td className='five wide center aligned' >21.45 <span className="red text">(-32.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.data.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.data.BTPR.slice(500)} type = "hybrid"/>
                      }
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="column">
              <div className='ui tabular basic menu' ref='currTypes'>
                <a className={'item' + (this.state.pair == 'btc' ? ' active' : '')} onClick={this.pairBTC}>
                  ALT / BTC
                </a>
                <a className={'item' + (this.state.pair == 'usd' ? ' active' : '')} onClick={this.pairUSD}>
                  ALT / USD
                </a>
                <a className={'item' + (this.state.pair == 'cny' ? ' active' : '')} onClick={this.pairCNY}>
                  ALT / CNY
                </a>
              </div>

              <table className='ui selectable very compact very basic striped table nopadding nomargin'>
                <thead>
                  <tr className='lesspadding'>
                    <td className='two wide'>ANC</td>
                    <td className='five wide center aligned' >11.99 <span className="green text">(+76.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.data.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.data.BTPR.slice(100)} type = "hybrid"/>
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>GLD</td>
                    <td className='five wide center aligned' >21.45 <span className="red text">(-32.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.data.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.data.BTPR.slice(500)} type = "hybrid"/>
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>DRC</td>
                    <td className='five wide center aligned' >11.99 <span className="green text">(+76.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.data.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.data.BTPR.slice(800)} type = "hybrid"/>
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>GLD</td>
                    <td className='five wide center aligned' >21.45 <span className="red text">(-32.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.data.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.data.BTPR.slice(500)} type = "hybrid"/>
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>DRC</td>
                    <td className='five wide center aligned' >11.99 <span className="green text">(+76.58%)</span></td>
                    <td className='nine wide right aligned'>
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
        </div>
      </div>
    );
  }
});
export default Infopanel;
