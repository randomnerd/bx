import React from 'react';
import ReStock from 'react-stockcharts';

let { ChartCanvas, Chart, DataSeries } = ReStock;
let { AreaSeries } = ReStock.series;
let { XAxis, YAxis } = ReStock.axes;
let { ChartWidthMixin } = ReStock.helper;

export default React.createClass({

  mixins: [ChartWidthMixin],
  propTypes: {
    data: React.PropTypes.array.isRequired,
    type: React.PropTypes
      .oneOf(['svg', 'hybrid'])
      .isRequired
  },
  getDefaultProps() {
    return {
      type: 'svg'
    };
  },
  getInitialState() {
    return {
      data: this.props
        .data
        .slice(0, length)
    };
  },
  render() {
    if (this.state === null || !this.state.width) return <div/>;

    let {data, type} = this.props;

    return (
      <ChartCanvas width={this.state.width} height={25} margin={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }} data={data} type={type}>

        <Chart id={0} xAccessor={(d) => d.date}>
          <XAxis axisAt='bottom' orient='bottom' ticks={6}/>

          <YAxis axisAt='left' orient='left'/>

          <DataSeries id={0} yAccessor={(d) => d.close} stroke='steelblue' fill='steelblue'>
            <AreaSeries/>
          </DataSeries>

        </Chart>

      </ChartCanvas>
    );
  }
});
