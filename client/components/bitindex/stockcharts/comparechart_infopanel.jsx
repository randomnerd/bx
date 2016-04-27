'use strict';

import React from 'react';
import d3 from 'd3';

import ReStock from 'react-stockcharts';

var {ChartCanvas, Chart} = ReStock;

var {AreaSeries} = ReStock.series;
var {XAxis, YAxis} = ReStock.axes;
var {fitWidth} = ReStock.helper;

class comparechart_infopanel extends React.Component {
    render() {
        if (this.state === null || !this.state.width)
            return <div/>;
        var {data, type, width} = this.props;
        return (
            <ChartCanvas width={width} height={25} margin={{
                       left: 0,
                       right: 50,
                       top: 10,
                     bottom: 0
            }} seriesName='MSFT' data={data} type={type} xAccessor={d => d.date} xScale={d3.time.scale()}>
            <Chart id={0} xAccessor={(d) => d.date}>
                <YAxis axisAt='right' orient='right' percentScale={true}
                      tickFormat={d3.format('.0%')} stroke='#767676' tickStroke='#767676' fontSize={8}/>
                <DataSeries id={0} yAccessor={(d) => d.close} stroke='steelblue'>
                  <LineSeries/>
                </DataSeries>
              </Chart>

              <Chart id={1} xAccessor={(d) => d.date}>
                <DataSeries id={0} yAccessor={(d) => d.volume} stroke='green'>
                  <LineSeries stroke='orange'/>
                </DataSeries>
              </Chart>


            </ChartCanvas>
        );
    }
}

comparechart_infopanel.propTypes = {
    data: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
};

comparechart_infopanel.defaultProps = {
    type: 'svg'
};
comparechart_infopanel = fitWidth(comparechart_infopanel);

export default comparechart_infopanel;
//
//
// import React from 'react';
// import ReStock from 'react-stockcharts';
// import d3 from 'd3';
//
// let {ChartCanvas, Chart, DataSeries} = ReStock;
//
// let {LineSeries} = ReStock.series;
// let {XAxis, YAxis} = ReStock.axes;
// let {ChartWidthMixin} = ReStock.helper;
//
// export default React.createClass({
//   mixins: [ChartWidthMixin],
//   propTypes: {
//     data: React.PropTypes.array.isRequired,
//     type: React.PropTypes
//       .oneOf(['svg', 'hybrid'])
//       .isRequired
//   },
//   render() {
//     if (this.state === null || !this.state.width) return <div/>;
//     let {data, type} = this.props;
//     return (
//       <ChartCanvas width={this.state.width} height={135} margin={{
//         left: 0,
//         right: 50,
//         top: 10,
//         bottom: 0
//       }} data={data} type={type}>
//         <Chart id={0} xAccessor={(d) => d.date}>
//           <YAxis axisAt='right' orient='right' percentScale={true}
//                 tickFormat={d3.format('.0%')} stroke='#767676' tickStroke='#767676' fontSize={8}/>
//           <DataSeries id={0} yAccessor={(d) => d.close} stroke='steelblue'>
//             <LineSeries/>
//           </DataSeries>
//         </Chart>
//
//         <Chart id={1} xAccessor={(d) => d.date}>
//           <DataSeries id={0} yAccessor={(d) => d.volume} stroke='green'>
//             <LineSeries stroke='orange'/>
//           </DataSeries>
//         </Chart>
//
//       </ChartCanvas>
//     );
//   }
// });
