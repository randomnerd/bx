'use strict';

import React from 'react';
import d3 from 'd3';

import ReStock from '/client/lib/react-stockcharts';

let { ChartCanvas, Chart, EventCapture } = ReStock;

let { BarSeries, LineSeries, AreaSeries, ScatterSeries, CircleMarker } = ReStock.series;
let { financeEODDiscontiniousScale } = ReStock.scale;

let { MouseCoordinates } = ReStock.coordinates;

let { TooltipContainer, OHLCTooltip } = ReStock.tooltip;
let { XAxis, YAxis } = ReStock.axes;
let { fitWidth } = ReStock.helper;

let xScale = financeEODDiscontiniousScale();

class comparechart_infopanel extends React.Component {
    render() {
        let {data, type, width} = this.props;
        return (
            <ChartCanvas width={width} height={250} margin={{
                left: 10,
                right: 10,
                top: 10,
                bottom: 0
            }} type={type} seriesName="MSFT" data={data} xAccessor={d => d.date} discontinous xScale={xScale} xExtents={[
                new Date(2012, 0, 1),
                new Date(2012, 2, 2)
            ]}>
                <Chart id={1} yExtents={d => [d.high, d.low]} yMousePointerDisplayLocation="right" yMousePointerDisplayFormat={d3.format(".2f")}>
                    <XAxis axisAt="bottom" orient="bottom"/>
                    <YAxis axisAt="right" orient="right" ticks={5}/>
                    <LineSeries yAccessor={d => d.close}/>
                    <ScatterSeries yAccessor={d => d.close} marker={CircleMarker} markerProps={{
                        r: 1
                    }}/>
                </Chart>

                <EventCapture mouseMove={true} zoom={true} pan={true}/>
                <TooltipContainer>
                    <OHLCTooltip forChart={1} origin={[-40, 0]}/>
                </TooltipContainer>
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
