import React from 'react';
import ReStock from 'react-stockcharts';

let {ChartCanvas, Chart, DataSeries, OverlaySeries, EventCapture} = ReStock;

let {CandlestickSeries, HistogramSeries, LineSeries, AreaSeries, CompareSeries} = ReStock.series;
let {MouseCoordinates, CurrentCoordinate} = ReStock.coordinates;
let {EdgeContainer, EdgeIndicator} = ReStock.coordinates;

let {TooltipContainer, OHLCTooltip, CompareTooltip} = ReStock.tooltip;
let {StockscaleTransformer} = ReStock.transforms;
let {XAxis, YAxis} = ReStock.axes;
let {SMA} = ReStock.indicator;
let {ChartWidthMixin} = ReStock.helper;

export default React.createClass({
  mixins: [ChartWidthMixin],
  propTypes: {
    data: React.PropTypes.array.isRequired,
    type: React.PropTypes
      .oneOf(['svg', 'hybrid'])
      .isRequired
  },
  render() {
    if (this.state === null || !this.state.width)
      return <div/>;
    let {data, type} = this.props;

    let parseDate = d3.time
      .format('%Y-%m-%d')
      .parse;
    let dateRange = {
      from: parseDate('2012-12-01'),
      to: parseDate('2012-12-31')
    };
    let dateFormat = d3.time
      .format('%Y-%m-%d');

    return (
      <ChartCanvas width={this.state.width} height={400} margin={{
        left: 90,
        right: 70,
        top: 10,
        bottom: 30
      }} initialDisplay={30} dataTransform={[{
        transform: StockscaleTransformer
      }
      ]} data={data} type={type}>
        <Chart id={1} yMousePointerDisplayLocation='right' yMousePointerDisplayFormat={(y) => y.toFixed(2)}>
          <XAxis axisAt='bottom' orient='bottom'/>
          <YAxis axisAt='right' orient='right' ticks={5}/>
          <DataSeries id={0} yAccessor={CandlestickSeries.yAccessor} compareBase={(d) => d.close}>
            <CandlestickSeries/>
            <CompareSeries id={1} yAccessor={(d) => d.AAPLClose} displayLabel='AAPL'/>
            <CompareSeries id={2} yAccessor={(d) => d.SP500Close} displayLabel='S&P 500'/>
          </DataSeries>
        </Chart>
        <Chart id={2} yMousePointerDisplayLocation='left' yMousePointerDisplayFormat={d3.format('.4s')} height={150} origin={(w,
        h) => [
          0, h - 150
        ]}>
          <YAxis axisAt='left' orient='left' ticks={5} tickFormat={d3.format('s')}/>
          <DataSeries id={0} yAccessor={(d) => d.volume}>
            <HistogramSeries fill={(d) => d.close > d.open
              ? '#6BA583'
              : 'red'}/>
          </DataSeries>
          <DataSeries id={1} indicator={SMA} options={{
            period: 10,
            pluck: 'volume'
          }}>
            <AreaSeries/>
          </DataSeries>
        </Chart>
        <CurrentCoordinate forChart={1} forDataSeries={0} forCompareSeries={1}/>
        <CurrentCoordinate forChart={1} forDataSeries={0} forCompareSeries={2}/>
      <MouseCoordinates xDisplayFormat={dateFormat} type='crosshair' fontSize={10} opacity={0.2} textBGopacity = {2}/>
        <EventCapture mouseMove={true} zoom={true} pan={true} mainChart={1} defaultFocus={false}/>
        <TooltipContainer>
          <OHLCTooltip forChart={1} origin={[
            -50, 0
          ]}/>
          <CompareTooltip forChart={1} forCompareSeries={1} origin={[
            -50, 20
          ]}/>
          <CompareTooltip forChart={1} forCompareSeries={2} origin={[
            -50, 40
          ]}/>
        </TooltipContainer>
      </ChartCanvas>
    );
  }
});