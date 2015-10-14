import React from 'react';
import ReStock from 'react-stockcharts';

let {ChartCanvas, Chart, DataSeries, OverlaySeries, EventCapture} = ReStock;

let {CandlestickSeries, HistogramSeries, LineSeries, AreaSeries, StochasticSeries} = ReStock.series;
let {MouseCoordinates, CurrentCoordinate} = ReStock.coordinates;
let {EdgeContainer, EdgeIndicator} = ReStock.coordinates;

let {TooltipContainer, OHLCTooltip, MovingAverageTooltip, StochasticTooltip} = ReStock.tooltip;
let {StockscaleTransformer} = ReStock.transforms;

let {XAxis, YAxis} = ReStock.axes;
let {MACD, EMA, SMA, FullStochasticOscillator} = ReStock.indicator;
let {ChartWidthMixin} = ReStock.helper;

let interval,
  length = 150,
  rawData;
let func;
let speed = 1000;

export default React.createClass({
  mixins: [ChartWidthMixin],
  propTypes: {
    data: React.PropTypes.array.isRequired,
    type: React.PropTypes
      .oneOf(['svg', 'hybrid'])
      .isRequired
  },
  getDefaultProps() {
    return {
      type: 'svg'
    };
  },
  getInitialState() {
    return {
      data: this.props
        .data
        .slice(0, length)
    };
  },
  onKeyPress(e) {
    let keyCode = e.which;
    switch (keyCode) {
    case 50 :
      {
        // 2 (50) - Start alter data
        func = () => {
          let exceptLast = rawData.slice(0, rawData.length - 1);
          let last = rawData[rawData.length - 1];

          last = {
            ...last,
            close: (Math.random() * (last.high - last.low)) + last.close
          };
          this.refs
            .chartCanvas
            .alterData(exceptLast.concat(last));
        };
        break;
      }
    case 49 :
      {
        // 1 (49) - Start Push data
        func = () => {
          let pushMe = this.props
            .data
            .slice(length, length + 1);
          rawData = rawData.concat(pushMe);
          this.refs
            .chartCanvas
            .pushData(pushMe);
          length++;
          if (this.props.data.length === length) { clearInterval(interval); }
        };
        break;
      }
    case 48 :
      {
        // 0 (48) - Clear interval
        func = null;
        if (interval) { clearInterval(interval); }
        break;
      }
    case 43 :
      {
        // + (43) - increase the speed
        speed = Math.max(speed / 2, 100);
        break;
      }
    case 45 :
      {
        // - (45) - reduce the speed
        let delta = Math.min(speed, 1000);
        speed = speed + delta;
        break;
      }
    }
    if (func) {
      if (interval) { clearInterval(interval); }
      console.log('speed  = ', speed);
      interval = setInterval(func, speed);
    }
  },
  componentDidMount() {
    document.addEventListener('keypress', this.onKeyPress);
  },
  componentWillUnmount() {
    if (interval) { clearInterval(interval); }
    document.removeEventListener('keypress', this.onKeyPress);
  },
  render() {
    if (this.state === null || !this.state.width) {  return <div/>; }

    let {data, type} = this.props;
    let dateFormat = d3.time
      .format('%Y-%m-%d');
    rawData = this.state.data;
    return (
      <ChartCanvas ref='chartCanvas' width={this.state.width} height={this.props.height} margin={{
        left: 70,
        right: 70,
        top: 20,
        bottom: 30
      }} initialDisplay={200} dataTransform={[{
        transform: StockscaleTransformer
      }
      ]} data={rawData} type={type}>
        <Chart id={1} yMousePointerDisplayLocation='right' height={200} yMousePointerDisplayFormat={(y) => y.toFixed(2)} padding={{
          top: 10,
          right: 0,
          bottom: 20,
          left: 0
        }} origin={(w,
        h) => [
          0, h - 200
        ]}>
          <YAxis axisAt='right' orient='right' ticks={5}/>
          <XAxis axisAt='bottom' orient='bottom' showTicks={false} outerTickSize={0}/>
          <DataSeries id={0} yAccessor={CandlestickSeries.yAccessor}>
            <CandlestickSeries/>
          </DataSeries>
          <DataSeries id={1} indicator={EMA} options={{
            period: 26
          }}>
            <LineSeries/>
          </DataSeries>
          <DataSeries id={2} indicator={EMA} options={{
            period: 12
          }}>
            <LineSeries/>
          </DataSeries>
        </Chart>
        <CurrentCoordinate forChart={1} forDataSeries={1}/>
        <CurrentCoordinate forChart={1} forDataSeries={2}/>
        <Chart id={2} yMousePointerDisplayLocation='left' yMousePointerDisplayFormat={d3.format('.4s')} height={75} origin={(w,
        h) => [
          0, 0
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
          }} stroke='steelblue' fill='steelblue'>
            <AreaSeries opacity={0.5}/>
          </DataSeries>
        </Chart>
        <CurrentCoordinate forChart={2} forDataSeries={0}/>
        <CurrentCoordinate forChart={2} forDataSeries={1}/>
        <EdgeContainer>
          <EdgeIndicator itemType='last' orient='right' edgeAt='right' forChart={1} forDataSeries={1}/>
          <EdgeIndicator itemType='last' orient='right' edgeAt='right' forChart={1} forDataSeries={2}/>
          <EdgeIndicator itemType='first' orient='left' edgeAt='left' forChart={1} forDataSeries={1}/>
          <EdgeIndicator itemType='first' orient='left' edgeAt='left' forChart={1} forDataSeries={2}/>
        </EdgeContainer>
        <Chart id={3} yMousePointerDisplayLocation='right' yMousePointerDisplayFormat={(y) => y.toFixed(2)} height={100} origin={(w,
        h) => [
          0, h - 100
        ]} padding={{
          top: 10,
          right: 0,
          bottom: 10,
          left: 0
        }}>
          <XAxis axisAt='bottom' orient='bottom' showTicks={false} outerTickSize={0}/>
          <YAxis axisAt='right' orient='right' ticks={2}/>
          <DataSeries id={1} indicator={FullStochasticOscillator} options={{
            period: 14,
            K: 1,
            D: 3
          }}>
            <StochasticSeries/>
          </DataSeries>
        </Chart>

        <MouseCoordinates xDisplayFormat={dateFormat} type='crosshair'/>
        <EventCapture mouseMove={true} zoom={true} pan={true} mainChart={1} defaultFocus={false}/>
        <TooltipContainer>
          <OHLCTooltip forChart={1} origin={[
            -40, -10
          ]}/>
          <MovingAverageTooltip forChart={1} onClick={(e) => console.log(e)} origin={[
            -38, 5
          ]}/>
          <StochasticTooltip forChart={3} origin={[
            -38, 15
          ]}>Fast STO</StochasticTooltip>

        </TooltipContainer>
      </ChartCanvas>
    );
  }
});
