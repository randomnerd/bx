'use strict';

import React from 'react';
import d3 from 'd3';

import ReStock from '/client/lib/react-stockcharts';

const BRUSH_TYPE = "1D";

const candelstick_intraday = React.createClass({

    propTypes: {
        data: React.PropTypes.array.isRequired,
        width: React.PropTypes.number.isRequired,
        type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
    },
    defaultProps: {
        type: 'svg'
    },
    componentDidMount() {
        document.addEventListener("keyup", this.onKeyPress);
    },
    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyPress);
    },
    onKeyPress(e) {
        let keyCode = e.which;
        console.log(keyCode);
        switch (keyCode) {
            case 27:
                { // ESC
                    this.refs.brush.getWrappedComponent().terminate();
                }
        }
    },
    handleBrush(brushCoords, startAndEndItem, startAndEndMouseLocation, event) {
        let left = Math.min(brushCoords.x1, brushCoords.x2);
        let right = Math.max(brushCoords.x1, brushCoords.x2);

        let low = Math.min(brushCoords.y1, brushCoords.y2);
        let high = Math.max(brushCoords.y1, brushCoords.y2);

        console.log(arguments);
        // uncomment the line below to make the brush to zoom
        this.setState({
            xExtents: [
                left, right
            ],
            yExtents: BRUSH_TYPE === "2D"
                ? [low, high]
                : this.state.yExtents
        })
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
                    }, {
                        label: 'volume',
                        value: numberFormat(currentItem.volume)
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

        let {CandlestickSeries, BarSeries, LineSeries, VolumeProfileSeries} = ReStock.series;
        let {discontinuousTimeScaleProvider} = ReStock.scale;

        let {EdgeIndicator} = ReStock.coordinates;
        let {MouseCoordinates, CurrentCoordinate} = ReStock.coordinates;

        let {TooltipContainer, OHLCTooltip, MovingAverageTooltip, HoverTooltip} = ReStock.tooltip;
        let {XAxis, YAxis} = ReStock.axes;
        let {ema, sma, change} = ReStock.indicator;
        let {Annotate, LabelAnnotation, Label} = ReStock.annotation;
        let {fitWidth} = ReStock.helper;
        let {data, type, width} = this.props;

        let {Brush} = ReStock.interactive;
        let ema20 = ema().id(0).windowSize(20).merge((d, c) => {
            d.ema20 = c;
        }).accessor(d => d.ema20);
        let ema50 = ema().id(2).windowSize(50).merge((d, c) => {
            d.ema50 = c;
        }).accessor(d => d.ema50);
        let smaVolume50 = sma().id(3).windowSize(50).source(d => d.volume).merge((d, c) => {
            d.smaVolume50 = c;
        }).accessor(d => d.smaVolume50);

        this.state = {
            xExtents: [
                new Date(2012, 0, 3),
                new Date(2012, 5, 29)
            ],
            yExtents: [
                [d => d.volume],
                ema20.accessor(),
                ema50.accessor()
            ]
        }
        let changeCalculator = change();

        let annotationProps = {
            fontFamily: 'opensans',
            fontSize: 20,
            fill: '#767676',
            opacity: 0.8,
            text: '\ue093',
            y: ({yScale}) => (yScale.range()[0] - 10)
        };

        let margin = {
            left: 40,
            right: 80,
            top: 10,
            bottom: 30
        }

        let height = 350;

        let [yAxisLabelX,
            yAxisLabelY] = [
            width - margin.left - 40,
            margin.top + (height - margin.top - margin.bottom) / 2
        ];

        return (
            <ChartCanvas width={width} height={height} margin={margin} type={type} seriesName='MSFT' data={data} calculator={[ema20, ema50, changeCalculator]} xExtents={this.state.xExtents} xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}>
                <Label x={(width - margin.left - margin.right) / 2} y={30} fontSize='30' text='BTC USD'/>

                <Chart id={2} yExtents={this.state.yExtents} yMousePointerDisplayLocation='left' yMousePointerDisplayFormat={d3.format('.4s')} height={100} origin={(w, h) => [
                    0, h - 100
                ]}>
                    <YAxis axisAt='left' orient='left' ticks={5} tickFormat={d3.format('s')} fontSize={10} stroke='#767676' tickStroke='#767676'/>

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
                    <XAxis axisAt='bottom' orient='bottom' fontSize={10} stroke='#767676' tickStroke='#767676'/>
                    <YAxis axisAt='right' orient='right' ticks={5} fontSize={10} stroke='#767676' tickStroke='#767676'/>

                    <Label x={(width - margin.left - margin.right) / 2} y={height - 45} fontSize='12' text='XAxis Label here'/>

                    <YAxis axisAt='right' orient='right' ticks={5} fontSize={10} stroke='#767676' tickStroke='#767676'/>

                    <Label x={yAxisLabelX} y={yAxisLabelY} rotate={-90} fontSize='12' text='YAxis Label here'/>

                    <VolumeProfileSeries orient='left'/>
                    <CandlestickSeries/>

                    <Brush ref="brush" id={0} enabled={true} type={BRUSH_TYPE} onStart={e => console.log("Start Event:", e)} onBrush={this.handleBrush}/>
                    <LineSeries yAccessor={ema20.accessor()} stroke={ema20.stroke()}/>
                    <LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()}/>

                    <EdgeIndicator itemType='last' type='horizontal' orient='right' edgeAt='right' yAccessor={d => d.close} fill={d => d.close > d.open
                        ? '#6BA583'
                        : '#FF0000'} fontSize='10'/>
                </Chart>

                <HoverTooltip tooltipContent={this.tooltipContent([ema20, ema50])} bgwidth={120} bgheight={105}/>
                <EventCapture mouseMove={true} zoom={true} pan={true}/>

            </ChartCanvas>
        );
    }
});

export default ReStock.helper.fitWidth(candelstick_intraday);
