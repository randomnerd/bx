import React from 'react';
import {connect} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import {ChartItems, TradePairs, Currencies} from '../../../both/collections';
import Charts from '../bitindex';
import { createContainer } from 'meteor/react-meteor-data';

const ChartsShow = connect({

}, class ChartsShow extends React.Component {
    state = {
      chartType: 'candle',
      cartH: 300
    };

    componentDidMount() {
        this.setState({
            chartH: ($(this.refs.chart).height() - 70)
        });
    }

    chartItemsPrepare(list) {
      return list.map((item) => {
        return {
          pairId: item.pairId,
          date: item.time,
          open: (item.open / Math.pow(10, 8)).toFixed(8),
          high: (item.high / Math.pow(10, 8)).toFixed(8),
          low: (item.low / Math.pow(10, 8)).toFixed(8),
          close: (item.close / Math.pow(10, 8)).toFixed(8),
          volume: (item.volume / Math.pow(10,8)).toFixed(8),
        };
      });
    }

    renderChart() {
      if (this.props.chartItems.length <= 2 ) return (
        <div className="not-available">
          <div className="content">No data yet</div>
        </div>
      );
      return (<Charts.candelstick_mobile
        data={this.chartItemsPrepare(this.props.chartItems)}
        type='hybrid'
        height={350}
        height_bar={150}
        pairText=''
      />);
    }

    render() {
        return (
            <div className='ui basic segment h100 charts' ref="chart">
                <h3 className='ui header'>PRICE CHART</h3>
                <div className='ui basic teal segment nopadding'>
                  {this.renderChart()}
                </div>
            </div>
        );
    }
});
export default ChartsShowContainer = createContainer((props) => {
  let pair = TradePairs.findOne({permalink: props.pair_link});
  return {
    chartItems: ChartItems.find({ pairId: pair._id }).fetch()
  };
}, ChartsShow);
