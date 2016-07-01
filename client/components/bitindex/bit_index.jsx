import React from 'react';
import { ChartItems } from '/both/collections';
import { Meteor } from 'meteor/meteor';

import Charts from './';

import ReStock from '/client/lib/react-stockcharts';
import {Component} from 'cerebral-view-react';



const BitIndex = Component({
  pair: ['pair', 'pair'],
  layout: ['layout'],
}, {
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    console.log(this.props);
    window.ch = ChartItems;
    return {
        chartItems: ChartItems.find( { pairId: this.props.pair._id }  ).fetch(),
    };

  },
  mapList: function(list) {

    return list.map((item) => {
       return {
         pairId: item.pairId,
         date: new Date(item.time),
         open: (item.open / Math.pow(10, 8)).toFixed(8),
         high: (item.high / Math.pow(10, 8)).toFixed(8),
         low: (item.low / Math.pow(10, 8)).toFixed(8),
         close: (item.close / Math.pow(10, 8)).toFixed(8),
         volume: (item.volume / Math.pow(10,8)).toFixed(8),

       };
     });
   },
  render: function() {

      console.log(this.data.chartItems);
      console.log(this.mapList(this.data.chartItems));

    //  let {data} = this.mapList(this.data.chartItems);


        return (
          <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Charts.candelstick_intra_day_cont data={this.mapList(this.data.chartItems)} type='hybrid' height={150} pairText={"sds"}/>
          </div>
        )


  }

});
export default BitIndex;
