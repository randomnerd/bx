'use strict';

import React from 'react';

import d3 from 'd3';
import ReStock from 'react-stockcharts';

let {ChartCanvas, Chart} = ReStock;

let {AreaSeries} = ReStock.series;

let {fitWidth} = ReStock.helper;

class areachart_infopanel extends React.Component {
    render() {
        let {data, type, width} = this.props;
        return (
            <ChartCanvas width={width} height={25} margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }} type={type} data={data} xAccessor={d => d.date} xScale={d3.time.scale()}>
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
