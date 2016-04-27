'use strict';

import React from 'react';
import d3 from 'd3';

import ReStock from 'react-stockcharts';

let {ChartCanvas, Chart} = ReStock;
let {CandlestickSeries, BarSeries} = ReStock.series;
let {financeEODDiscontiniousScale} = ReStock.scale;

let {XAxis, YAxis} = ReStock.axes;

let {fitWidth} = ReStock.helper;

class CandleStickStockScaleChartWithVolumeBarV3 extends React.Component {
    render() {
        let {data, type, width, height} = this.props;

        return (
            <ChartCanvas width={width} height={height} margin={{
                left: 30,
                right: 30,
                top: 0,
                bottom: 20
            }} type={type} seriesName='MSFT' data={data} xAccessor={d => d.date} discontinous xScale={financeEODDiscontiniousScale()} xExtents={[
                new Date(2012, 0, 1),
                new Date(2012, 6, 2)
            ]}>
                <Chart id={1} height={400} yExtents={d => [d.high, d.low]}>
                    <YAxis axisAt='right' orient='right' ticks={5}/>
                    <XAxis axisAt='bottom' orient='bottom' showTicks={false}/>
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
            </ChartCanvas>
        );
    }
}
CandleStickStockScaleChartWithVolumeBarV3.propTypes = {
    data: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
};

CandleStickStockScaleChartWithVolumeBarV3.defaultProps = {
    type: 'svg'
};
CandleStickStockScaleChartWithVolumeBarV3 = fitWidth(CandleStickStockScaleChartWithVolumeBarV3);

export default CandleStickStockScaleChartWithVolumeBarV3;

//
//
// import React from 'react';
// import ReStock from 'react-stockcharts';
// import d3 from 'd3'
//
// let {
//   ChartCanvas,
//   Chart,
//   DataSeries,
//   EventCapture
// } = ReStock;
// let {
//   CandlestickSeries,
//   HistogramSeries
// } = ReStock.series;
// let {
//   TooltipContainer,
//   OHLCTooltip
// } = ReStock.tooltip;
// let {
//   MouseCoordinates
// } = ReStock.coordinates;
// let {
//   StockscaleTransformer
// } = ReStock.transforms;
// let {
//   XAxis,
//   YAxis
// } = ReStock.axes;
// let {
//   ChartWidthMixin
// } = ReStock.helper;
//
// let interval,
//   length = 150,
//   rawData;
// let func;
// let speed = 1000;
//
// export default React.createClass({
//   mixins: [ChartWidthMixin],
//   propTypes: {
//     data: React.PropTypes.array.isRequired,
//     type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
//   },
//   getDefaultProps () {
//     return {type: 'hybrid'};
//   },
//   getInitialState () {
//     return {data: this.props.data.slice(0, length)};
//   },
//   onKeyPress (e) {
//     let keyCode = e.which;
//     switch (keyCode) {
//       case 50:
//         {
//           // 2 (50) - Start alter data
//           func = () => {
//             let exceptLast = rawData.slice(0, rawData.length - 1);
//             let last = rawData[rawData.length - 1];
//
//             last = {
//               ...last,
//               close: (Math.random() * (last.high - last.low)) + last.close
//             };
//             this.refs.chartCanvas.alterData(exceptLast.concat(last));
//           };
//           break;
//         }
//       case 49:
//         {
//           // 1 (49) - Start Push data
//           func = () => {
//             let pushMe = this.props.data.slice(length, length + 1);
//             rawData = rawData.concat(pushMe);
//             this.refs.chartCanvas.pushData(pushMe);
//             length++;
//             if (this.props.data.length === length)
//               clearInterval(interval);
//             };
//           break;
//         }
//       case 48:
//         {
//           // 0 (48) - Clear interval
//           func = null;
//           if (interval) clearInterval(interval);
//           break;
//         }
//       case 43:
//         {
//           // + (43) - increase the speed
//           speed = Math.max(speed / 2, 100);
//           break;
//         }
//       case 45:
//         {
//           // - (45) - reduce the speed
//           let delta = Math.min(speed, 1000);
//           speed = speed + delta;
//           break;
//         }
//       default:
//         break;
//     }
//     if (func) {
//       if (interval)
//         clearInterval(interval);
//       console.log('speed  = ', speed);
//       interval = setInterval(func, speed);
//     }
//   },
//   componentDidMount () {
//     document.addEventListener('keypress', this.onKeyPress);
//   },
//   componentWillUnmount () {
//     if (interval)
//       clearInterval(interval);
//     document.removeEventListener('keypress', this.onKeyPress);
//   },
//   render () {
//     if (this.state === null || !this.state.width)
//       return <div/>;
//     let width = this.props.width || this.state !== null && this.state.width;
//     let {
//       data,
//       type
//     } = this.props;
//     let dateFormat = d3.time.format('%Y-%m-%d');
//
//     let height = this.state.height;
//
//     let margin = {
//       left: 50,
//       right: 50,
//       top: 10,
//       bottom: 10
//     };
//
//     let gridHeight = height - margin.top - margin.bottom;
//     let gridWidth = width - margin.left - margin.right;
//
//     let showGrid = true;
//     let yGrid = showGrid
//       ? {
//         innerTickSize : -1 * gridWidth,
//         tickStrokeOpacity
//       : 0.2
//     }: {};
//     let xGrid = showGrid
//       ? {
//         innerTickSize : -1 * gridHeight,
//         tickStrokeOpacity
//       : 0.2
//     }: {};
//
//     rawData = this.state.data;
//     return (
//
//       <ChartCanvas ref='chartCanvas' width={this.state.width} height={this.props.height} margin={{
//       left: 70, right: 70, top: 0, bottom: 20
//       }} initialDisplay={30} dataTransform={[{
//           transform: StockscaleTransformer
//         }
//       ]} data={rawData} type={type}>
//         <Chart id={1} yMousePointerDisplayLocation='right' yMousePointerDisplayFormat={(y) => y.toFixed(2)}>
//           <XAxis axisAt='bottom' orient='bottom' fontSize={10} stroke='#767676' tickStroke='#767676'/>
//           <YAxis axisAt='right' orient='right' ticks={5} {...yGrid} fontSize={10} stroke='#767676' tickStroke='#767676'/>
//           <DataSeries id={0} yAccessor={CandlestickSeries.yAccessor}>
//
//             <CandlestickSeries/>
//           </DataSeries>
//         </Chart>
//         <Chart id={2} yMousePointerDisplayLocation='left' yMousePointerDisplayFormat={d3.format('.4s')} height={150} origin={(w, h) => [
//           0,
//           h - 150
//         ]}>
//           <YAxis axisAt='left' orient='left' ticks={5} fontSize={10} tickFormat={d3.format('s')} stroke='#767676' tickStroke='#767676'/>
//
//           <DataSeries id={0} yAccessor={(d) => d.volume}>
//             <HistogramSeries fill={(d) => d.close > d.open
//               ? '#21ba45'
//               : '#db2828'}/>
//           </DataSeries>
//         </Chart>
//
//
//         <MouseCoordinates xDisplayFormat={dateFormat} type='crosshair' fontSize={10} opacity={0.2} textBGopacity = {2}/>
//         <EventCapture mouseMove={true} zoom={true} pan={true} mainChart={1} defaultFocus={false}/>
//         <TooltipContainer fontSize={10}>
//           <OHLCTooltip forChart={1} origin={[-40, 5]}/>
//         </TooltipContainer>
//       </ChartCanvas>
//     );
//   }
// });
