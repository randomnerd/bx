import React from 'react';
import ReStock from 'react-stockcharts';
let {ChartCanvas, Chart, DataSeries} = ReStock;

let {AreaSeries} = ReStock.series;
let {XAxis, YAxis} = ReStock.axes;

AreaChartFixed = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    type: React.PropTypes
      .oneOf(['svg', 'hybrid'])
      .isRequired
  },
  render() {
    let {data, type} = this.props;
    return (
      <ChartCanvas width={400} height={400} margin={{
        left: 50,
        right: 50,
        top: 10,
        bottom: 30
      }} data={data} type={type}>
        <Chart id={0} xAccessor={(d) => d.date}>
          <XAxis axisAt='bottom' orient='bottom' ticks={6}/>
          <YAxis axisAt='left' orient='left'/>
          <DataSeries id={0} yAccessor={(d) => d.close}>
            <AreaSeries/>
          </DataSeries>
        </Chart>
      </ChartCanvas>
    );
  }
});
