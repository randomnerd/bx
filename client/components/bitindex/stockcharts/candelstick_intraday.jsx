'use strict';

import React from 'react';
import d3 from 'd3';

import ReStock from '/client/lib/react-stockcharts';

const candelstick_intraday = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
  },
  defaultProps: {
      type: 'svg'
  },
  tooltipContent(calculators) {

    let dateFormat = d3.time.format('%Y-%m-%d');
    let numberFormat = d3.format('.2f');

    return ({currentItem, xAccessor}) => {
      return {
        x: dateFormat(xAccessor(currentItem)),
        y: [
          {
            label: 'open',
            value: numberFormat(currentItem.open)
          }, {
            label: 'high',
            value: numberFormat(currentItem.high)
          }, {
            label: 'low',
            value: numberFormat(currentItem.low)
          }, {
            label: 'close',
            value: numberFormat(currentItem.close)
          }
        ].concat(calculators.map(each => ({
          label: each.tooltipLabel(),
          value: numberFormat(each.accessor()(currentItem)),
          stroke: each.stroke()
        })))
      }
    }
  },
  render() {


    let {ChartCanvas, Chart, EventCapture} = ReStock;

    let {CandlestickSeries, BarSeries, LineSeries, AreaSeries, VolumeProfileSeries} = ReStock.series;
    let {discontinuousTimeScaleProvider} = ReStock.scale;

    let {EdgeIndicator} = ReStock.coordinates;
    let {MouseCoordinates, CurrentCoordinate} = ReStock.coordinates;

    let {TooltipContainer, OHLCTooltip, MovingAverageTooltip, HoverTooltip} = ReStock.tooltip;
    let {XAxis, YAxis} = ReStock.axes;
    let {ema, sma, change} = ReStock.indicator;

    let {fitWidth} = ReStock.helper;
    let {data, type, width} = this.props;

    let ema20 = ema().id(0).windowSize(20).merge((d, c) => {
      d.ema20 = c;
    }).accessor(d => d.ema20);
    let ema50 = ema().id(2).windowSize(50).merge((d, c) => {
      d.ema50 = c;
    }).accessor(d => d.ema50);
    let smaVolume50 = sma().id(3).windowSize(50).source(d => d.volume).merge((d, c) => {
      d.smaVolume50 = c;
    }).accessor(d => d.smaVolume50);

    let changeCalculator = change();
    let annotationProps = {
      fontFamily: 'Glyphicons Halflings',
      fontSize: 20,
      fill: '#060F8F',
      opacity: 0.8,
      text: '\ue093',
      y: ({yScale}) => (yScale.range()[0] - 10)
    };

      return (
          <ChartCanvas width={width} height={350} margin={{
              left: 80,
              right: 80,
              top: 10,
              bottom: 30
          }} type={type} seriesName='MSFT' data={data} calculator={[ema20, ema50, changeCalculator]} xExtents={[
              new Date(2014, 9, 1),
              new Date(2015, 2, 2)
          ]} xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}>
              <Chart id={2} yExtents={[d => d.volume]} yMousePointerDisplayLocation='left' yMousePointerDisplayFormat={d3.format('.4s')} height={100} origin={(w, h) => [
                  0, h - 100
              ]}>
                  <YAxis axisAt='left' orient='left' ticks={5} tickFormat={d3.format('s')}/>

                  <BarSeries yAccessor={d => d.volume} widthRatio={0.95} opacity={0.3} fill={d => d.close > d.open
                      ? '#6BA583'
                      : '#FF0000'}/>
              </Chart>
              <Chart id={1} yExtents={[
                  d => [
                      d.high, d.low
                  ],
                  ema20.accessor(),
                  ema50.accessor()
              ]} yMousePointerDisplayLocation='right' yMousePointerDisplayFormat={d3.format('.2f')} padding={{
                  top: 40,
                  bottom: 20
              }}>
                  <XAxis axisAt='bottom' orient='bottom'/>
                  <YAxis axisAt='right' orient='right' ticks={5}/>

                  <VolumeProfileSeries/>
                  <CandlestickSeries/>
                  <LineSeries yAccessor={ema20.accessor()} stroke={ema20.stroke()}/>
                  <LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()}/>
                  <EdgeIndicator itemType='last' orient='right' edgeAt='right' yAccessor={d => d.close} fill={d => d.close > d.open
                      ? '#6BA583'
                      : '#FF0000'}/>
              </Chart>

              <HoverTooltip tooltipContent={this.tooltipContent([ema20, ema50])} bgwidth={120} bgheight={95}/>
              <EventCapture mouseMove={true} zoom={true} pan={true}/>

          </ChartCanvas>
      );
  }
});

export default ReStock.helper.fitWidth(candelstick_intraday);
