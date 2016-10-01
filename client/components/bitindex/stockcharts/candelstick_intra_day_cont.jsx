'use strict';

import React from 'react';

import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { ChartCanvas, Chart, series, scale, coordinates, tooltip, axes, indicator, helper } from 'react-stockcharts';

const candelstick_intra_day_cont = React.createClass({

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

        let {TooltipContainer, OHLCTooltip, MovingAverageTooltip, HoverTooltip} = tooltip;
        let {XAxis, YAxis} = axes;
        let {ema, sma} = indicator;
        let {fitWidth} = helper;


        let margin = {
            left: 10,
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


        let height = 405;

        let dateFormat = timeFormat("%Y-%m-%d");
        let numberFormat = format(".8f");

        function tooltipContent(calculators) {
          return ({currentItem, xAccessor}) => {
            return {
              x: dateFormat(xAccessor(currentItem)),
              y: [
                  { label: "Open", value: numberFormat(currentItem.open) },
                  { label: "High", value: numberFormat(currentItem.high) },
                  { label: "Low", value: numberFormat(currentItem.low) },
                  { label: "Close", value: numberFormat(currentItem.close) },
                ].concat(calculators.map(each => ({
                  label: each.tooltipLabel(),
                  value: numberFormat(each.accessor()(currentItem)),
                  stroke: each.stroke()
                })))
              }
            }
        }

        return (

            <ChartCanvas ratio={ratio} width={width} height={height} margin={{
                left: 60,
                right: 60,
                top: 24,
                bottom: 20
            }} type={type} seriesName='MSFT' data={data} calculator={[ema20, ema50, smaVolume50]} xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}>
                <Chart id={2} yExtents={[
                    d => d.volume,
                    smaVolume50.accessor()
                ]} height={100} origin={(w, h) => [
                    0, h - 100
                ]}

                padding={{
                    top: 14,
                    bottom: 5
                }}
                >
                    <YAxis axisAt='left' orient='left' ticks={4} fontSize={11} stroke='#767676' tickStroke='#767676' tickFormat={format('.0s')}/>

                    <BarSeries yAccessor={d => d.volume} fill='#212e3e'/>
                    <AreaSeries yAccessor={smaVolume50.accessor()} stroke={smaVolume50.stroke()} fill={smaVolume50.fill()}/>

                    <CurrentCoordinate fontSize={11} yAccessor={smaVolume50.accessor()} fill={smaVolume50.stroke()}/>
                    <CurrentCoordinate fontSize={11} yAccessor={d => d.volume} fill='#9B0A47'/>

                    <EdgeIndicator itemType='first' orient='left' edgeAt='left' fontSize={11} yAccessor={d => d.volume} displayFormat={format('.4s')} fill='#0F0F0F'/>
                    <EdgeIndicator itemType='last' orient='right' edgeAt='right' fontSize={11} yAccessor={d => d.volume} displayFormat={format('.4s')} fill='#0F0F0F'/>
                </Chart>

                <Chart id={1} yPan yExtents={[
                    d => [
                        d.high, d.low
                    ],
                    ema20.accessor(),
                    ema50.accessor()
                ]}
                >

                    <XAxis axisAt='bottom' orient='bottom' stroke='#767676' tickStroke='#767676' fontSize={11}/>
                    <XAxis axisAt='top' orient='top' stroke='#767676' tickStroke='#767676' fontSize={11}/>
                    <YAxis axisAt='right' orient='right' ticks={4} stroke='#767676' tickStroke='#767676' fontSize={11} />
                    <CandlestickSeries/>

                    <LineSeries yAccessor={ema20.accessor()} stroke={ema20.stroke()}/>
                    <LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()}/>

                    <CurrentCoordinate yAccessor={ema20.accessor()} fill={ema20.stroke()}/>
                    <CurrentCoordinate yAccessor={ema50.accessor()} fill={ema50.stroke()}/>


                    <EdgeIndicator fontSize={11} itemType='last' orient='right' edgeAt='right' yAccessor={d => d.close} fill={d => d.close > d.open
                        ? '#6BA583'
                        : '#FF0000'}/>
                    <EdgeIndicator fontSize={11} itemType='first' orient='left' edgeAt='left' yAccessor={d => d.close} fill={d => d.close > d.open
                        ? '#6BA583'
                        : '#FF0000'}/>

                    <MouseCoordinateX fontSize={11} at='top' orient='top' displayFormat={timeFormat('%Y-%m-%d')}/>
                    <MouseCoordinateX fontSize={11} at='bottom' orient='bottom' displayFormat={timeFormat('%H:%M:%S')}/>
                    <MouseCoordinateY fontSize={11} at='right' orient='right' displayFormat={format('.4f')}/>
                    <MouseCoordinateY fontSize={11} at='left' orient='left' displayFormat={format('.4f')}/>
                  <HoverTooltip tooltipContent={tooltipContent([ema20, ema50])} bgwidth={120} bgheight={95} />
                </Chart>

                <CrossHairCursor/>
            </ChartCanvas>
        );
    }
});

export default helper.fitWidth(candelstick_intra_day_cont);
