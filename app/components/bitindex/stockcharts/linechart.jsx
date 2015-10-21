import React from 'react';
import ReStock from 'react-stockcharts';

let {  EventCapture } = ReStock;

let { TooltipContainer, OHLCTooltip } = ReStock.tooltip;
let { MouseCoordinates } = ReStock.coordinates;

let {ChartCanvas, Chart, DataSeries} = ReStock;
let { HistogramSeries } = ReStock.series;
let {LineSeries} = ReStock.series;
let {XAxis, YAxis} = ReStock.axes;
let {ChartWidthMixin} = ReStock.helper;

let { StockscaleTransformer } = ReStock.transforms;

export default React.createClass({
  mixins: [ChartWidthMixin],
  propTypes: {
    data: React.PropTypes.array.isRequired,
    type: React.PropTypes
      .oneOf(['svg', 'hybrid'])
      .isRequired
  },
  render() {
    if (this.state === null || !this.state.width) return <div/>;
    let {data, type} = this.props;
    return (
      <ChartCanvas width={this.state.width} height={135} margin={{
        left: 0,
        right: 50,
        top: 10,
        bottom: 0
      }} data={data} type={type}>
        <Chart id={0} xAccessor={(d) => d.date}>
          <YAxis axisAt='right' orient='right' percentScale={true}
                tickFormat={d3.format('.0%')} stroke='#767676' tickStroke='#767676' fontSize={8}/>
          <DataSeries id={0} yAccessor={(d) => d.close} stroke='steelblue'>
            <LineSeries/>
          </DataSeries>
        </Chart>
        
      </ChartCanvas>
    );
  }
});
