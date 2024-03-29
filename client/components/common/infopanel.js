import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import Charts from '../bitindex';
import { BitIndexIndicator_BTPR } from '../../../both/collections';
import { createContainer } from 'meteor/react-meteor-data';

const Infopanel = connect({
    user: 'user',
    tools: 'tools'
}, class Infopanel extends React.Component {
  state = {
    mosts: 'active',
    pairs: 'btc',
  }

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
  }

  componentWillReceiveProps(newProps) {
    $(ReactDOM.findDOMNode(this)).sidebar(newProps.tools.panel ? 'show' : 'hide');
  }

  mostActive() {
    $(this.refs.most).find('.item').removeClass('active');
    this.setState({most: 'active'});
  }
  mostMined(){
    $(this.refs.most).find('.item').removeClass('active');
    this.setState({most: 'mined'});
  }

  mostGainers(){
    $(this.refs.most).find('.item').removeClass('active');
    this.setState({most: 'gainers'});
  }

  mostLoosers(){
    $(this.refs.most).find('.item').removeClass('active');
    this.setState({most: 'loosers'});
  }



  pairBTC(){
    $(this.refs.currTypes).find('.item').removeClass('active');
    this.setState({pair: 'btc'});
  }

  pairUSD(){
    $(this.refs.currTypes).find('.item').removeClass('active');
    this.setState({pair: 'usd'});
  }

  pairCNY(){
    $(this.refs.currTypes).find('.item').removeClass('active');
    this.setState({pair: 'cny'});
  }

  render() {
    return (
      <div className='ui top inverted sidebar panel'>
        <div className="ui grid">
          <div className="three column row">
            <div className="column">
              <div className='ui tabular basic menu nounderline leftline' ref='currType'>
                <a className='item double positive olive' onClick={this.setMarket.bind(this)}>
                  <h4 className="ui header teal text">BTC / USD</h4>
                  <p>234.9292</p>
                </a>
                <a className='item double negative orange' onClick={this.setLimit.bind(this)}>
                  <h4 className="ui header teal text">BTC / CNY</h4>
                  <p>163.9292</p>
                </a>
                <a className='item double negative blue' onClick={this.setStop.bind(this)}>
                  <h4 className="ui header teal text">GLD / BTC</h4>
                  <p>234.9292</p>
                </a>
                <a className='item double positive purple' onClick={this.setStop.bind(this)}>
                  <h4 className="ui header teal text">ANC / BTC</h4>
                  <p>234.9292</p>
                </a>
              </div>
              <div className="ui basic segment nobg">
                {
                  this.props.BTPR_Loading ? <div className='cube'></div> :
                  <Charts.comparechart_infopanel data = {this.props.BTPR.slice(500)} type = "hybrid" id={1} />
                }
              </div>
            </div>
            <div className="column">

              <div className='ui tabular basic menu' ref='most'>
                <a className={'item' + (this.state.most == 'active' ? ' active' : '')} onClick={this.mostActive.bind(this)}>
                  Most Actives
                </a>
                <a className={'item' + (this.state.most == 'mined' ? ' active' : '')} onClick={this.mostMined.bind(this)}>
                  Most Mined
                </a>
                <a className={'item' + (this.state.most == 'gainers' ? ' active' : '')} onClick={this.mostGainers.bind(this)}>
                  Most Gainers
                </a>
                <a className={'item' + (this.state.most == 'loosers' ? ' active' : '')} onClick={this.mostLoosers.bind(this)}>
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
                        this.props.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.props.BTPR.slice(100)} type = "hybrid" id={2} />
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>GLD</td>
                    <td className='five wide center aligned' >21.45 <span className="red text">(-32.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.props.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.props.BTPR.slice(500)} type = "hybrid" id={3} />
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>DRC</td>
                    <td className='five wide center aligned' >11.99 <span className="green text">(+76.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.props.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.props.BTPR.slice(800)} type = "hybrid" id={4} />
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>ANC</td>
                    <td className='five wide center aligned' >11.99 <span className="green text">(+76.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.props.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.props.BTPR.slice(100)} type = "hybrid" id={5} />
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>GLD</td>
                    <td className='five wide center aligned' >21.45 <span className="red text">(-32.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.props.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.props.BTPR.slice(500)} type = "hybrid" id={6} />
                      }
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="column">
              <div className='ui tabular basic menu' ref='currTypes'>
                <a className={'item' + (this.state.pair == 'btc' ? ' active' : '')} onClick={this.pairBTC.bind(this)}>
                  ALT / BTC
                </a>
                <a className={'item' + (this.state.pair == 'usd' ? ' active' : '')} onClick={this.pairUSD.bind(this)}>
                  ALT / USD
                </a>
                <a className={'item' + (this.state.pair == 'cny' ? ' active' : '')} onClick={this.pairCNY.bind(this)}>
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
                        this.props.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.props.BTPR.slice(100)} type = "hybrid" id={7} />
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>GLD</td>
                    <td className='five wide center aligned' >21.45 <span className="red text">(-32.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.props.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.props.BTPR.slice(500)} type = "hybrid" id={8} />
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>DRC</td>
                    <td className='five wide center aligned' >11.99 <span className="green text">(+76.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.props.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.props.BTPR.slice(800)} type = "hybrid" id={9} />
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>GLD</td>
                    <td className='five wide center aligned' >21.45 <span className="red text">(-32.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.props.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.props.BTPR.slice(500)} type = "hybrid" id={10} />
                      }
                    </td>
                  </tr>
                  <tr className='lesspadding'>
                    <td className='two wide'>DRC</td>
                    <td className='five wide center aligned' >11.99 <span className="green text">(+76.58%)</span></td>
                    <td className='nine wide right aligned'>
                      {
                        this.props.BTPR_Loading ? <div className='cube'></div> :
                        <Charts.areachart_infopanel data = {this.props.BTPR.slice(800)} type = "hybrid" id={11} />
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
export default InfopanelContainer = createContainer((props) => {
  let handle_BTPR = Meteor.subscribe("BitIndexIndicator_BTPR");

  return {
   BTPR_Loading: !handle_BTPR.ready(),
   BTPR: BitIndexIndicator_BTPR.find().fetch(),
  };
}, Infopanel);
