'use strict';

import React from 'react';
import d3 from 'd3';

import ReStock from 'react-stockcharts';

let {ChartCanvas, Chart} = ReStock;

let {BarSeries, AreaSeries,} = ReStock.series;
let {financeEODDiscontiniousScale} = ReStock.scale;



let {XAxis, YAxis} = ReStock.axes;
let {fitWidth} = ReStock.helper;

let xScale = financeEODDiscontiniousScale();

class areachart_infopanel extends React.Component {
    render() {
        let {data, type, width} = this.props;
        return (
            <ChartCanvas width={width} height={25} margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }} type={type} seriesName='MSFT' data={data} xAccessor={d => d.date} discontinous xScale={xScale} xExtents={[
                new Date(2012, 0, 1),
                new Date(2012, 2, 2)
            ]}>
                <Chart id={1} yExtents={d => d.close}>
                    <AreaSeries yAccessor={d => d.close}/>
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
