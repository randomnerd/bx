'use strict';

import React from 'react';
import d3 from 'd3';

import ReStock from 'react-stockcharts';

let {ChartCanvas, Chart, EventCapture} = ReStock;

let {BarSeries, AreaSeries, ScatterSeries, CircleMarker} = ReStock.series;
let {financeEODDiscontiniousScale} = ReStock.scale;

let {MouseCoordinates} = ReStock.coordinates;

let {TooltipContainer, OHLCTooltip} = ReStock.tooltip;
let {XAxis, YAxis} = ReStock.axes;
let {fitWidth} = ReStock.helper;

let xScale = financeEODDiscontiniousScale();

class areachart_infopanel extends React.Component {
    render() {
        let {data, type, width} = this.props;
        return (
            <ChartCanvas width={width} height={400} margin={{
                left: 70,
                right: 70,
                top: 20,
                bottom: 30
            }} type={type} seriesName='MSFT' data={data} xAccessor={d => d.date} discontinous xScale={xScale} xExtents={[
                new Date(2012, 0, 1),
                new Date(2012, 2, 2)
            ]}>
                <Chart id={1} yExtents={d => d.close}>
                    <XAxis axisAt='bottom' orient='bottom'/>
                    <YAxis axisAt='right' orient='right' ticks={5}/>
                    <AreaSeries yAccessor={d => d.close}/>
                    <ScatterSeries yAccessor={d => d.close} marker={CircleMarker} markerProps={{
                        r: 1
                    }}/>
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
