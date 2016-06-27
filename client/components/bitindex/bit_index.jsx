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

    return {
        chartItems: ChartItems.find( { pairId: this.props.pair._id }, { sort: { time: -1 } } ).fetch(),
    };

  },


  render: function() {
    console.log(this.data.chartItems);
    return (
      <div>
      </div>
    );

  }

});
export default BitIndex;
