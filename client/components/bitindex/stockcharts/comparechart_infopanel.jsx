'use strict';

import React from 'react';
import d3 from 'd3';

import ReStock from '/client/lib/react-stockcharts';

const comparechart_infopanel = React.createClass({

  propTypes:{
    data: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
  },
  defaultProps:{
    type: 'svg'
  },

  render(){
    let { ChartCanvas, Chart, EventCapture } = ReStock;

    let { BarSeries, LineSeries, AreaSeries, ScatterSeries, CircleMarker } = ReStock.series;

    let { MouseCoordinates } = ReStock.coordinates;

    let { TooltipContainer, OHLCTooltip } = ReStock.tooltip;
    let { XAxis, YAxis } = ReStock.axes;
    let { fitWidth } = ReStock.helper;

    let {discontinuousTimeScaleProvider} = ReStock.scale;

    let {data, type, width} = this.props;

    return(

      <ChartCanvas width={width} height={250} margin={{
          left: 10,
          right: 10,
          top: 10,
          bottom: 0
      }} type={type} seriesName="MSFT" data={data} xAccessor={d => d.date} discontinous xScaleProvider={discontinuousTimeScaleProvider} xExtents={[
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
});

export default ReStock.helper.fitWidth(comparechart_infopanel);
