'use strict';

import React from 'react';
import d3 from 'd3';
import ReStock from '/client/lib/react-stockcharts';

const CandleStickChart = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
        type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
    },

    defaultProps: {
        type: 'svg'
    },

    render() {
        let {ChartCanvas, Chart, EventCapture} = ReStock;

        let {CandlestickSeries, BarSeries} = ReStock.series;

        let {financeEODDiscontiniousScale} = ReStock.scale;

        let {TooltipContainer, OHLCTooltip} = ReStock.tooltip;

        let { MouseCoordinates, CurrentCoordinate } = ReStock.coordinates;

        let {XAxis, YAxis} = ReStock.axes;

        let {fitWidth} = ReStock.helper;

        let {data, type, width, height} = this.props;

        let margin = {
            left: 30,
            right: 30,
            top: 0,
            bottom: 20
        };
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

        if (data.length > 300)
            data = _.last(data, 300);

        return (
            <ChartCanvas width={width} height={height} margin={margin} type={type} seriesName='MSFT' data={data} xAccessor={d => d.date} discontinous xScale={financeEODDiscontiniousScale()}>
                <Chart id={1} height={350} yExtents={d => [d.high, d.low]}>
                    <YAxis axisAt='left' orient='left' ticks={5} fontSize={10} stroke='#767676' tickStroke='#767676' {...yGrid}/>
                    <CandlestickSeries/>
                </Chart>
                <Chart id={2} origin={(w, h) => [
                    0, h - 150
                ]} height={150} yExtents={d => d.volume}>
                    <XAxis axisAt='bottom' orient='bottom' fontSize={10} stroke='#767676' tickStroke='#767676'/>
                    <YAxis axisAt='right' orient='right' ticks={5} fontSize={10} stroke='#767676' tickStroke='#767676' tickFormat={d3.format('s')}/>
                    <BarSeries yAccessor={d => d.volume} fill={(d) => d.close > d.open
                        ? '#21ba45'
                        : '#db2828'}/>
                </Chart>
                <MouseCoordinates xDisplayFormat={d3.time.format("%Y-%m-%d")}/>
                <EventCapture mouseMove={true} zoom={true} pan={true}/>
                <TooltipContainer>
                    <OHLCTooltip forChart={1} origin={[10, 5]}/>
                </TooltipContainer>
            </ChartCanvas>
        );
    }
});

export default ReStock.helper.fitWidth(CandleStickChart);
