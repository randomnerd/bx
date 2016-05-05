'use strict';

import React from 'react';
import d3 from 'd3';

import ReStock from '/client/lib/react-stockcharts';

let {ChartCanvas, Chart, EventCapture} = ReStock;

let {CandlestickSeries, BarSeries, AreaSeries} = ReStock.series;

let {financeEODDiscontiniousScale} = ReStock.scale;

let {TooltipContainer, OHLCTooltip} = ReStock.tooltip;

let {MouseCoordinates, CurrentCoordinate, EdgeIndicator} = ReStock.coordinates;

let {XAxis, YAxis} = ReStock.axes;
let {sma} = ReStock.indicator;

let {fitWidth} = ReStock.helper;

let margin = {
    left: 30,
    right: 40,
    top: 0,
    bottom: 20
};

class candelstick_default extends React.Component {

    render() {
        let {data, type, width, height, height_bar} = this.props;

        if (data.length > 300) data = _.last(data, 300);

        let gridHeight = height - margin.top - margin.bottom;
        let gridWidth = width - margin.left - margin.right;

        let showGrid = true;
        let yGrid = showGrid
            ? {
                innerTickSize: -1 * gridWidth,
                tickStrokeOpacity: 0.2
            }
            : {};
        let xGrid = showGrid
            ? {
                innerTickSize: -1 * gridHeight,
                tickStrokeOpacity: 0.2
            }
            : {};

        let smaVolume50 = sma().id(0).windowSize(50).source(d => d.volume).merge((d, c) => {
            d.smaVolume50 = c
        }).accessor(d => d.smaVolume50);
        return (
            <ChartCanvas width={width} height={height} margin={margin} type={type} seriesName='MSFT' data={data} xAccessor={d => d.date} discontinous xScale={financeEODDiscontiniousScale()} allowedIntervals={['D', 'W', 'M']} calculator={[smaVolume50]}>
                <Chart id={1} height={height} yExtents={d => [d.high, d.low]}>
                    <YAxis axisAt='left' orient='left' ticks={10} fontSize={10} stroke='#767676' tickStroke='#767676' {...yGrid}/>
                    <CandlestickSeries/>
                </Chart>

                <Chart id={2} origin={(w, h) => [
                    0, h - 150
                ]} height={height_bar} yExtents={[
                    d => d.volume,
                    smaVolume50.accessor()
                ]}>
                    <YAxis axisAt='right' orient='right' ticks={5} fontSize={10} stroke='#767676' tickStroke='#767676' tickFormat={d3.format('s')}/>
                    <BarSeries yAccessor={d => d.volume} fill={(d) => d.close > d.open
                        ? '#21ba45'
                        : '#db2828'}/>
                    <AreaSeries yAccessor={smaVolume50.accessor()}/>

                </Chart>
                <MouseCoordinates xDisplayFormat={d3.time.format('%Y-%m-%d')}/>
                <EventCapture mouseMove={true} zoom={true} pan={true}/>
                <TooltipContainer>
                    <OHLCTooltip forChart={1} origin={[10, 5]}/>
                </TooltipContainer>
            </ChartCanvas>
        );
    }
};
candelstick_default.propTypes = {
    data: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    height_bar: React.PropTypes.number.isRequired,
    type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
};

candelstick_default.defaultProps = {
    type: 'svg'
};
candelstick_default = fitWidth(candelstick_default);

export default candelstick_default;
