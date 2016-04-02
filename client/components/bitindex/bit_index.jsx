import React from 'react';
import { BitIndexIndicator_BTPR } from '../../../both/collections';
import Charts from './';

export default React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    // let handle_BTTC = Meteor.subscribe('BitIndexIndicator_BTTC');
    // let handle_BTTN = Meteor.subscribe('BitIndexIndicator_BTTN');
    let handle_BTPR = Meteor.subscribe('BitIndexIndicator_BTPR');
    // let handle_BTUA = Meteor.subscribe('BitIndexIndicator_BTUA');

    return {

      // BTTC_Loading: !handle_BTTC.ready(),
      // BTTN_Loading: !handle_BTTN.ready(),
      BTPR_Loading: !handle_BTPR.ready(),
      // BTUA_Loading: !handle_BTUA.ready(),

      // BTTC: BitIndexIndicator_BTTC.find().fetch(),
      // BTTN: BitIndexIndicator_BTTN.find().fetch(),
      BTPR: BitIndexIndicator_BTPR.find().fetch(),
      // BTUA: BitIndexIndicator_BTUA.find().fetch(),
    };
  },

  componentDidMount() {
    //  console.log(this.data.CURPR)
  },

  renderBlockChainIndicator() {
    // let data = this.data.BTTC.map( (item) => {
    //   return {
    //     date: item.date,
    //     close: item.close,
    //   };
    //
    // });
    // console.log(data);
    // <AreaChart data={this.data.BTTC} />
    // <AreaChart data={this.data.BTTN} />
    //
    // <CandleStickChartWithFullStochasticsIndicator data = {this.data.BTPR} type = 'svg' />
    // <CandleStickChartWithRSIIndicator data = {this.data.BTPR} type = 'svg' />
    //
    // <CandleStickChartWithUpdatingData
    //
    // <CandleStickChartWithBollingerBandOverlay data = {this.data.BTPR} type = 'svg' />
    //
    // <HaikinAshi data = {this.data.BTPR} type = 'hybrid'/>
    //
    //
    // <AreaChartFixed data = {this.data.BTTC} type = 'svg'/>
    // <AreaChartFixed data = {this.data.BTTN} type = 'svg'/>
    // <AreaChartFixed data = {this.data.BTUA} type = 'svg'/>
    //
    // <CandleStickChartWithUpdatingData data = {this.data.BTPR.slice(200)} type = 'svg' />
    // <HaikinAshi data = {this.data.BTPR.slice(200)} type = 'svg' />
    // <Kagi data = {this.data.BTPR.slice(200)} type = 'svg' />
    //
    // <CandleStickChartWithRSIIndicator data = {this.data.BTPR.slice(200)} type = 'svg' />
    // <CandleStickChartWithFullStochasticsIndicator data = {this.data.BTPR.slice(200)} type = 'svg' />
    // <CandleStickChartWithMACDIndicator data = {this.data.BTPR.slice(200)} type = 'svg'/>
    // <CandleStickChartWithBollingerBandOverlay data = {this.data.BTPR.slice(200)} type = 'svg'/>

            // <Charts.CandleStickChartWithInteractiveIndicator data = {this.data.BTPR.slice(200)} type = 'hybrid' />
    return (

      <div>
        <Charts.CandleStickChartWithFibonacciInteractiveIndicator data = {this.data.BTPR.slice(200)} type = 'hybrid' />

      </div>
    );

  },



  render() {

     if (this.data.BTPR_Loading) {

        return (

          			<div className={'cube-grid'}>

                     <div className='cube'></div>
                     <div className='cube'></div>
                     <div className='cube'></div>
                     <div className='cube'></div>
                     <div className='cube'></div>
                     <div className='cube'></div>
                     <div className='cube'></div>
                     <div className='cube'></div>
                     <div className='cube'></div>

                 </div>
        );
     } else {

       return (
              <div>
                    BitIndex
                    { this.renderBlockChainIndicator() }
               </div>

      );
     }
  }
});
