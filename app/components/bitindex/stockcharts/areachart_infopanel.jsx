import React from 'react';
import ReStock from 'react-stockcharts';

let {ChartCanvas, Chart, DataSeries} = ReStock;

let {AreaSeries} = ReStock.series;
let {XAxis, YAxis} = ReStock.axes;
let {ChartWidthMixin} = ReStock.helper;

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
      <ChartCanvas width={this.state.width} height={70} data={data} type={type}>
        <Chart id={0} xAccessor={(d) => d.date}>
          <DataSeries id={0} yAccessor={(d) => d.close}>
            <AreaSeries/>
          </DataSeries>
        </Chart>
      </ChartCanvas>
    );
  }
});
