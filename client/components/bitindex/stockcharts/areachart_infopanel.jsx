'use strict';

import React from 'react';
import d3 from 'd3';

import ReStock from 'react-stockcharts';

var {ChartCanvas, Chart} = ReStock;

var {AreaSeries} = ReStock.series;
var {XAxis, YAxis} = ReStock.axes;
var {fitWidth} = ReStock.helper;

class areachart_infopanel extends React.Component {
    render() {
        if (this.state === null || !this.state.width)
            return <div/>;
        var {data, type, width} = this.props;
        return (
            <ChartCanvas width={width} height={25} margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }} seriesName='MSFT' data={data} type={type} xAccessor={d => d.date} xScale={d3.time.scale()}>
                <Chart id={0}>

                    <YAxis axisAt='right' orient='right' percentScale={true} tickFormat={d3.format('.0%')} />
                    <DataSeries id={0} stroke='steelblue' fill='steelblue'>
                        <AreaSeries yAccessor={(d) => d.close}/>
                    </DataSeries>
                </Chart>
            </ChartCanvas>
        );
    }
}

areachart_infopanel.propTypes = {
    data: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
};

areachart_infopanel.defaultProps = {
    type: 'svg'
};
areachart_infopanel = fitWidth(areachart_infopanel);

export default areachart_infopanel;

//
// import React from 'react';
// import ReStock from 'react-stockcharts';
// import d3 from 'd3';
//
// let {ChartCanvas, Chart, DataSeries} = ReStock;
//
// let {AreaSeries} = ReStock.series;
// let {XAxis, YAxis} = ReStock.axes;
// let {ChartWidthMixin} = ReStock.helper;
//
// export default React.createClass({
//     mixins: [ChartWidthMixin],
//     propTypes: {
//         data: React.PropTypes.array.isRequired,
//         type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
//     },
//     render() {
//         if (this.state === null || !this.state.width)
//             return <div/>;
//         let {data, type} = this.props;
//         return (
//             <ChartCanvas width={this.state.width} height={25} margin={{
//                 left: 0,
//                 right: 0,
//                 top: 0,
//                 bottom: 0
//             }} data={data} type={type}>
//                 <Chart id={0} xAccessor={(d) => d.date}>
//                     <YAxis axisAt='right' orient='right' percentScale={true} tickFormat={d3.format('.0%')}/>
//                     <DataSeries id={0} yAccessor={(d) => d.close} stroke='steelblue' fill='steelblue'>
//                         <AreaSeries/>
//                     </DataSeries>
//                 </Chart>
//             </ChartCanvas>
//         );
//     }
// });
