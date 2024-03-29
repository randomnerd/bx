'use strict';

import React from 'react';

import {format} from "d3-format";
import {timeFormat} from "d3-time-format";

import {
    ChartCanvas,
    Chart,
    series,
    scale,
    coordinates,
    tooltip,
    axes,
    indicator,
    helper
} from 'react-stockcharts';

const candelstick_mobile = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
        width: React.PropTypes.number.isRequired,
        ratio: React.PropTypes.number.isRequired,
        type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired,
        pairText: React.PropTypes.string.isRequired
    },
    defaultProps: {
        type: 'svg'
    },
    render() {

        let {CandlestickSeries, BarSeries, LineSeries, AreaSeries, VolumeProfileSeries} = series;
        let {discontinuousTimeScaleProvider} = scale;

        let {EdgeIndicator} = coordinates;
        let {CrossHairCursor, MouseCoordinateX, MouseCoordinateY, CurrentCoordinate} = coordinates;

        let {TooltipContainer, OHLCTooltip, MovingAverageTooltip} = tooltip;
        let {XAxis, YAxis} = axes;
        let {ema, sma} = indicator;
        let {fitWidth} = helper

        let margin = {
            left: 7,
            right: 60,
            top: 10,
            bottom: 15
        }

        let ema20 = ema().id(0).windowSize(20).merge((d, c) => {
            d.ema20 = c
        }).accessor(d => d.ema20);

        let ema50 = ema().id(2).windowSize(50).merge((d, c) => {
            d.ema50 = c
        }).accessor(d => d.ema50);

        let smaVolume50 = sma().id(3).windowSize(50).sourcePath("volume").merge((d, c) => {
            d.smaVolume50 = c
        }).accessor(d => d.smaVolume50);

        let {data, type, width, pairText, ratio} = this.props;

        let height = this.props.height || 350;

        return (

            <ChartCanvas  ratio={ratio} width={width} height={height} margin={{
                left: 70,
                right: 70,
                top: 20,
                bottom: 20
            }} type={type} seriesName='MSFT' data={data} calculator={[ema20, ema50, smaVolume50]} xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}>
                <Chart id={2} yExtents={[
                    d => d.volume,
                    smaVolume50.accessor()
                ]} height={100} origin={(w, h) => [
                    0, h - 100
                ]}>
                    <YAxis axisAt='left' orient='left' ticks={4} stroke='#767676' tickStroke='#767676' tickFormat={format('.0s')}/>

                    <BarSeries yAccessor={d => d.volume} fill='#212e3e'/>
                    <AreaSeries yAccessor={smaVolume50.accessor()} stroke={smaVolume50.stroke()} fill={smaVolume50.fill()}/>

                    <CurrentCoordinate yAccessor={smaVolume50.accessor()} fill={smaVolume50.stroke()}/>
                    <CurrentCoordinate yAccessor={d => d.volume} fill='#9B0A47'/>

                    <EdgeIndicator itemType='first' orient='left' edgeAt='left' yAccessor={d => d.volume} displayFormat={format('.4s')} fill='#0F0F0F'/>
                    <EdgeIndicator itemType='last' orient='right' edgeAt='right' yAccessor={d => d.volume} displayFormat={format('.4s')} fill='#0F0F0F'/>
                </Chart>
                <Chart id={1} yPan yExtents={[
                    d => [
                        d.high, d.low
                    ],
                    ema20.accessor(),
                    ema50.accessor()
                ]} padding={{
                    top: 10,
                    bottom: 20
                }}>

                    <YAxis axisAt='right' orient='right' ticks={5} stroke='#767676' tickStroke='#767676'/>

                    <CandlestickSeries/>

                    <LineSeries yAccessor={ema20.accessor()} stroke={ema20.stroke()}/>
                    <LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()}/>

                    <CurrentCoordinate yAccessor={ema20.accessor()} fill={ema20.stroke()}/>
                    <CurrentCoordinate yAccessor={ema50.accessor()} fill={ema50.stroke()}/>

                    <EdgeIndicator itemType='last' orient='right' edgeAt='right' yAccessor={d => d.close} fill={d => d.close > d.open
                        ? '#6BA583'
                        : '#FF0000'}/>
                    <EdgeIndicator itemType='first' orient='left' edgeAt='left' yAccessor={d => d.close} fill={d => d.close > d.open
                        ? '#6BA583'
                        : '#FF0000'}/>

                    <MouseCoordinateX at='top' orient='top' displayFormat={timeFormat('%Y-%m-%d')}/>
                    <MouseCoordinateX at='bottom' orient='bottom' displayFormat={timeFormat('%H:%M:%S')}/>
                    <MouseCoordinateY at='right' orient='right' displayFormat={timeFormat('.4f')}/>
                    <MouseCoordinateY at='left' orient='left' displayFormat={timeFormat('.4f')}/>

                </Chart>
                <CrossHairCursor/>
            </ChartCanvas>
        );
    }
});

export default helper.fitWidth(candelstick_mobile);
