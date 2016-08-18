'use strict';

import React from 'react';
import d3 from 'd3';
import ReStock from '/client/lib/react-stockcharts';

const candelstick_mobile = React.createClass({
  propTypes: {
      data: React.PropTypes.array.isRequired,
      width: React.PropTypes.number.isRequired,
      type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired,
      pairText: React.PropTypes.string.isRequired
  },
  defaultProps: {
      type: 'svg'
  },
  render() {

      let {ChartCanvas, Chart, EventCapture} = ReStock;

      let {CandlestickSeries, BarSeries, LineSeries, AreaSeries} = ReStock.series;
      let {discontinuousTimeScaleProvider} = ReStock.scale;

      let {EdgeIndicator} = ReStock.coordinates;
      let {CrossHairCursor, MouseCoordinateX, MouseCoordinateY, CurrentCoordinate} = ReStock.coordinates;

      let {TooltipContainer, OHLCTooltip, MovingAverageTooltip} = ReStock.tooltip;
      let {XAxis, YAxis} = ReStock.axes;
      let {ema, sma} = ReStock.indicator;
      let {fitWidth} = ReStock.helper
      let {Label} = ReStock.annotation;


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

      let smaVolume50 = sma().id(3).windowSize(50).source(d => d.volume).merge((d, c) => {
          d.smaVolume50 = c
      }).accessor(d => d.smaVolume50);

      let {data, type, width, pairText} = this.props;


      let height = 405;

      return (

          <ChartCanvas width={width} height={height} margin={{
              left: 60,
              right: 60,
              top: 20,
              bottom: 20
          }} type={type} seriesName='MSFT' data={data} calculator={[ema20, ema50, smaVolume50]} xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}>
              <Chart id={2} yExtents={[
                  d => d.volume,
                  smaVolume50.accessor()
              ]} height={100} origin={(w, h) => [
                  0, h - 100
              ]}>
                  <YAxis axisAt='left' orient='left' ticks={10} stroke='#767676' tickStroke='#767676' tickFormat={d3.format('s')}/>

                  <BarSeries yAccessor={d => d.volume} fill={d => d.close > d.open
                      ? '#6BA583'
                      : '#FF0000'}/>
                  <AreaSeries yAccessor={smaVolume50.accessor()} stroke={smaVolume50.stroke()} fill={smaVolume50.fill()}/>

                  <CurrentCoordinate yAccessor={smaVolume50.accessor()} fill={smaVolume50.stroke()}/>
                  <CurrentCoordinate yAccessor={d => d.volume} fill='#9B0A47'/>

                  <EdgeIndicator itemType='first' orient='left' edgeAt='left' yAccessor={d => d.volume} displayFormat={d3.format('.4s')} fill='#0F0F0F'/>
                  <EdgeIndicator itemType='last' orient='right' edgeAt='right' yAccessor={d => d.volume} displayFormat={d3.format('.4s')} fill='#0F0F0F'/>
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

                  <XAxis axisAt='bottom' orient='bottom' stroke='#767676' tickStroke='#767676' />
                  <XAxis axisAt='top' orient='top' stroke='#767676' tickStroke='#767676'/>
                  <YAxis axisAt='right' orient='right' ticks={5} stroke='#767676' tickStroke='#767676' />
                  <Label x={(width - margin.left - margin.right) / 2} y={height - 45} text={'Live market data' + ' ' + pairText}  fill='#767676' />

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

                  <MouseCoordinateX at='top' orient='top' displayFormat={d3.time.format('%Y-%m-%d')}/>
                  <MouseCoordinateX at='bottom' orient='bottom' displayFormat={d3.time.format('%H:%M:%S')}/>
                  <MouseCoordinateY at='right' orient='right' displayFormat={d3.format('.4f')}/>
                  <MouseCoordinateY at='left' orient='left' displayFormat={d3.format('.4f')}/>

              </Chart>
              <CrossHairCursor/>
          </ChartCanvas>
      );
  }
});

export default ReStock.helper.fitWidth(candelstick_mobile);
