var { ChartCanvas, Chart, DataSeries, OverlaySeries,EventCapture } = ReStock;

var { CandlestickSeries, HistogramSeries, LineSeries, AreaSeries, BollingerSeries } = ReStock.series;
var { EdgeContainer, EdgeIndicator } = ReStock.coordinates;
var { MouseCoordinates, CurrentCoordinate } = ReStock.coordinates;

var { TooltipContainer, OHLCTooltip, MovingAverageTooltip, BollingerBandTooltip } = ReStock.tooltip;
var { StockscaleTransformer } = ReStock.transforms;
var { XAxis, YAxis } = ReStock.axes;
var { EMA, SMA, BollingerBand } = ReStock.indicator;
var { ChartWidthMixin } = ReStock.helper;


var interval, length = 150, rawData;
var func;
var speed = 1000;


CandleStickChartWithBollingerBandOverlay = React.createClass({
	mixins: [ChartWidthMixin],
	propTypes: {
		data: React.PropTypes.array.isRequired,
		type: React.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
	},
	getDefaultProps() {
		return {
			type: "svg"
		}
	},
	getInitialState() {
		return {
			data: this.props.data.slice(0, length),
		};
	},
	onKeyPress(e) {
		var keyCode = e.which;
		switch (keyCode) {
			case 50: {
				// 2 (50) - Start alter data
				func = () => {
					var exceptLast = rawData.slice(0, rawData.length - 1);
					var last = rawData[rawData.length - 1];

					last = {
						...last,
						close: (Math.random() * (last.high - last.low)) + last.close
					}

					this.refs.chartCanvas.alterData(exceptLast.concat(last));

				};
				break;
			}
			case 49: {
				// 1 (49) - Start Push data
				func = () => {
					var pushMe = this.props.data.slice(length, length + 1);
					rawData = rawData.concat(pushMe);
					this.refs.chartCanvas.pushData(pushMe);
					length ++;
					if (this.props.data.length === length) clearInterval(interval);
				};
				break;
			}
			case 48: {
				// 0 (48) - Clear interval
				func = null;
				if (interval) clearInterval(interval);
				break;
			}
			case 43: {
				// + (43) - increase the speed
				speed = Math.max(speed / 2, 100);
				break;
			}
			case 45: {
				// - (45) - reduce the speed
				var delta = Math.min(speed, 1000);
				speed = speed + delta;
				break;
			}
		}
		if (func) {
			if (interval) clearInterval(interval);
			console.log("speed  = ", speed);
			interval = setInterval(func, speed);
		}
	},
	componentDidMount() {
		document.addEventListener("keypress", this.onKeyPress);
	},
	componentWillUnmount() {
		if (interval) clearInterval(interval);
		document.removeEventListener("keypress", this.onKeyPress);
	},
	render() {
		if (this.state === null || !this.state.width) return <div />;
		var { data, type } = this.props;
		var dateFormat = d3.time.format("%Y-%m-%d");
		rawData = this.state.data;
		return (
			<ChartCanvas ref="chartCanvas" width={this.state.width} height={this.props.height}
				margin={{left: 70, right: 70, top:20, bottom: 30}} initialDisplay={200}
				dataTransform={[ { transform: StockscaleTransformer } ]}
				data={rawData} type={type}>
				<Chart id={1} yMousePointerDisplayLocation="right" yMousePointerDisplayFormat={(y) => y.toFixed(2)}>
					<XAxis axisAt="bottom" orient="bottom"/>
					<YAxis axisAt="right" orient="right" ticks={5} />
					<DataSeries id={0} yAccessor={CandlestickSeries.yAccessor} >
						<CandlestickSeries />
					</DataSeries>
					<DataSeries id={1} indicator={EMA} options={{ period: 20, pluck: "close" }}>
						<LineSeries/>
					</DataSeries>
					<DataSeries id={2} indicator={EMA} options={{ period: 30 }} >
						<LineSeries/>
					</DataSeries>
					<DataSeries id={3} indicator={SMA} options={{ period: 50 }} >
						<LineSeries/>
					</DataSeries>
					<DataSeries id={4} indicator={BollingerBand} options={{ period: 20, multiplier: 2, }}>
						<BollingerSeries />
					</DataSeries>
				</Chart>
				<CurrentCoordinate forChart={1} forDataSeries={1} />
				<CurrentCoordinate forChart={1} forDataSeries={2} />
				<CurrentCoordinate forChart={1} forDataSeries={3} />
				<Chart id={2} yMousePointerDisplayLocation="left" yMousePointerDisplayFormat={d3.format(".4s")}
						height={150} origin={(w, h) => [0, h - 150]}>
					<YAxis axisAt="left" orient="left" ticks={5} tickFormat={d3.format("s")}/>
					<DataSeries id={0} yAccessor={(d) => d.volume} >
						<HistogramSeries fill={(d) => d.close > d.open ? "#6BA583" : "red"} />
					</DataSeries>
					<DataSeries id={1} indicator={SMA} options={{ period: 10, pluck:"volume" }} >
						<AreaSeries/>
					</DataSeries>
				</Chart>
				<CurrentCoordinate forChart={2} forDataSeries={0} />
				<CurrentCoordinate forChart={2} forDataSeries={1}/>
				<MouseCoordinates xDisplayFormat={dateFormat} type="crosshair" />
				<EventCapture mouseMove={true} zoom={true} pan={true} mainChart={1} defaultFocus={false} />
				<TooltipContainer>
					<OHLCTooltip forChart={1} origin={[-50, 0]}/>
					<MovingAverageTooltip forChart={1} onClick={(e) => console.log(e)} origin={[-48, 15]} />
					<BollingerBandTooltip forChart={1} onClick={(e) => console.log(e)} origin={[-48, 60]} />
				</TooltipContainer>
			</ChartCanvas>
		);
	}
});
