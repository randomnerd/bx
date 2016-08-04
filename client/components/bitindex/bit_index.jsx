import React from 'react';
import { ChartItems } from '/both/collections';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Charts from './';
import ReStock from '/client/lib/react-stockcharts';
import {connect} from 'cerebral-view-react';

const BitIndex = connect({
  pair: ['pair', 'pair'],
  layout: ['layout']
}, class BitIndex extends React.Component {

  mapList(list) {

    return list.map((item) => {
       return {
         pairId: item.pairId,
         date: item.time,
         open: (item.open / Math.pow(10, 8)).toFixed(8),
         high: (item.high / Math.pow(10, 8)).toFixed(8),
         low: (item.low / Math.pow(10, 8)).toFixed(8),
         close: (item.close / Math.pow(10, 8)).toFixed(8),
         volume: (item.volume / Math.pow(10,8)).toFixed(8)

       }
     });
  }

  render() {

      console.log(this.props.chartItems);
      console.log(this.mapList(this.props.chartItems));

    //  let {data} = this.mapList(this.props.chartItems);




        return (
          <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Charts.candelstick_intra_day_cont data={this.mapList(this.props.chartItems)} type='hybrid' height={350} pairText={"sds"}/>
          </div>
        )


  }

});
export default BitIndexContainer = createContainer((props) => {
  return {
      chartItems: ChartItems.find( { pairId: this.props.pair._id }  ).fetch(),
  };
}, BitIndex);
