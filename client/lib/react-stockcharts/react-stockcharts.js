(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("d3"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "d3"], factory);
	else if(typeof exports === 'object')
		exports["ReStock"] = factory(require("React"), require("d3"));
	else
		root["ReStock"] = factory(root["React"], root["d3"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// common components
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _libChartCanvas = __webpack_require__(1);
	
	var _libChartCanvas2 = _interopRequireDefault(_libChartCanvas);
	
	var _libChart = __webpack_require__(23);
	
	var _libChart2 = _interopRequireDefault(_libChart);
	
	var _libDataSeries = __webpack_require__(24);
	
	var _libDataSeries2 = _interopRequireDefault(_libDataSeries);
	
	// interaction components
	
	var _libEventCapture = __webpack_require__(25);
	
	var _libEventCapture2 = _interopRequireDefault(_libEventCapture);
	
	// chart types & Series
	
	var _libSeries = __webpack_require__(26);
	
	var _libSeries2 = _interopRequireDefault(_libSeries);
	
	var _libCoordinates = __webpack_require__(43);
	
	var _libCoordinates2 = _interopRequireDefault(_libCoordinates);
	
	var _libIndicator = __webpack_require__(50);
	
	var _libIndicator2 = _interopRequireDefault(_libIndicator);
	
	var _libTransforms = __webpack_require__(10);
	
	var _libTransforms2 = _interopRequireDefault(_libTransforms);
	
	var _libAxes = __webpack_require__(57);
	
	var _libAxes2 = _interopRequireDefault(_libAxes);
	
	var _libTooltip = __webpack_require__(63);
	
	var _libTooltip2 = _interopRequireDefault(_libTooltip);
	
	var _libHelper = __webpack_require__(74);
	
	var _libHelper2 = _interopRequireDefault(_libHelper);
	
	var version = "0.2.2";
	
	exports["default"] = {
		ChartCanvas: _libChartCanvas2["default"],
		Chart: _libChart2["default"],
		DataSeries: _libDataSeries2["default"],
		EventCapture: _libEventCapture2["default"],
		series: _libSeries2["default"],
		coordinates: _libCoordinates2["default"],
		indicator: _libIndicator2["default"],
		transforms: _libTransforms2["default"],
		axes: _libAxes2["default"],
		tooltip: _libTooltip2["default"],
		helper: _libHelper2["default"],
		version: version
	};
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utilsChartDataUtil = __webpack_require__(4);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _transforms = __webpack_require__(10);
	
	var _EventHandler = __webpack_require__(19);
	
	var _EventHandler2 = _interopRequireDefault(_EventHandler);
	
	var _CanvasContainer = __webpack_require__(22);
	
	var _CanvasContainer2 = _interopRequireDefault(_CanvasContainer);
	
	var ChartCanvas = (function (_React$Component) {
		_inherits(ChartCanvas, _React$Component);
	
		function ChartCanvas() {
			_classCallCheck(this, ChartCanvas);
	
			_get(Object.getPrototypeOf(ChartCanvas.prototype), "constructor", this).call(this);
			this.getCanvases = this.getCanvases.bind(this);
		}
	
		_createClass(ChartCanvas, [{
			key: "getDimensions",
			value: function getDimensions(props) {
				return {
					height: props.height - props.margin.top - props.margin.bottom,
					width: props.width - props.margin.left - props.margin.right
				};
			}
		}, {
			key: "pushData",
			value: function pushData(array) {
				this.refs.chartContainer.pushData(array);
			}
		}, {
			key: "alterData",
			value: function alterData(array) {
				this.refs.chartContainer.alterData(array);
			}
		}, {
			key: "getCanvases",
			value: function getCanvases() {
				if (this.refs && this.refs.canvases) {
					return this.refs.canvases.getCanvasContexts();
				}
			}
		}, {
			key: "render",
			value: function render() {
				var dimensions = this.getDimensions(this.props);
				var style = "<![CDATA[\n\t\t\t\t\t\t.react-stockcharts-grabbing-cursor {\n\t\t\t\t\t\t\tcursor: grabbing;\n\t\t\t\t\t\t\tcursor: -moz-grabbing;\n\t\t\t\t\t\t\tcursor: -webkit-grabbing;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.react-stockcharts-crosshair-cursor {\n\t\t\t\t\t\t\tcursor: crosshair;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.react-stockcharts-toottip-hover {\n\t\t\t\t\t\t\tpointer-events: all;\n\t\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t}\n\t\t\t\t\t]]>";
				var _props = this.props;
				var data = _props.data;
				var dataTransform = _props.dataTransform;
				var interval = _props.interval;
				var initialDisplay = _props.initialDisplay;
				var type = _props.type;
				var height = _props.height;
				var width = _props.width;
				var margin = _props.margin;
				var className = _props.className;
				var clip = _props.clip;
	
				return _react2["default"].createElement(
					"div",
					{ style: { position: "relative", height: height, width: width }, className: className },
					_react2["default"].createElement(_CanvasContainer2["default"], { ref: "canvases", width: width, height: height, type: this.props.type }),
					_react2["default"].createElement(
						"svg",
						{ width: width, height: height, style: { position: "absolute" } },
						_react2["default"].createElement("style", { type: "text/css", dangerouslySetInnerHTML: { __html: style } }),
						_react2["default"].createElement(
							"defs",
							null,
							_react2["default"].createElement(
								"clipPath",
								{ id: "chart-area-clip" },
								_react2["default"].createElement("rect", { x: "0", y: "0", width: dimensions.width, height: dimensions.height })
							)
						),
						_react2["default"].createElement(
							"g",
							{ transform: "translate(" + (margin.left + 0.5) + ", " + (margin.top + 0.5) + ")" },
							_react2["default"].createElement(
								_EventHandler2["default"],
								{ ref: "chartContainer",
									rawData: data, dataTransform: dataTransform, interval: interval,
									initialDisplay: initialDisplay,
									dimensions: dimensions, type: type, margin: margin, canvasContexts: this.getCanvases },
								this.props.children
							)
						)
					)
				);
			}
		}]);
	
		return ChartCanvas;
	})(_react2["default"].Component);
	
	ChartCanvas.propTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		margin: _react2["default"].PropTypes.object,
		interval: _react2["default"].PropTypes.oneOf(["D", "W", "M"]).isRequired, // ,"m1", "m5", "m15", "W", "M"
		type: _react2["default"].PropTypes.oneOf(["svg", "hybrid"]).isRequired,
		data: _react2["default"].PropTypes.array.isRequired,
		initialDisplay: _react2["default"].PropTypes.number,
		dataTransform: _react2["default"].PropTypes.array.isRequired,
		className: _react2["default"].PropTypes.string
	};
	
	// clip: React.PropTypes.bool.isRequired,
	ChartCanvas.defaultProps = {
		margin: { top: 20, right: 30, bottom: 30, left: 80 },
		interval: "D",
		type: "hybrid",
		// defaultDataTransform: [ { transform: DummyTransformer } ],
		dataTransform: [],
		className: "react-stockchart"
	};
	
	// clip: true,
	// initialDisplay: 30
	module.exports = ChartCanvas;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _utilsScaleUtils = __webpack_require__(6);
	
	var _utilsScaleUtils2 = _interopRequireDefault(_utilsScaleUtils);
	
	var _utilsOverlayUtils = __webpack_require__(7);
	
	var _utilsOverlayUtils2 = _interopRequireDefault(_utilsOverlayUtils);
	
	var _utils = __webpack_require__(8);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var overlayColors = _utils2["default"].overlayColors;
	var pluck = _utils2["default"].pluck;
	var keysAsArray = _utils2["default"].keysAsArray;
	
	var ChartDataUtil = {
		containsChart: function containsChart(props) {
			return this.getCharts(props).length > 0;
		},
		getCharts: function getCharts(props) {
			return this.getChildren(props.children, /Chart$/);
		},
		getChartDataForChart: function getChartDataForChart(props, context) {
			return this.getChartDataForChartNew(context.chartData, props.forChart);
		},
		getCurrentItemForChart: function getCurrentItemForChart(props, context) {
			return this.getCurrentItemForChartNew(context.currentItems, props.forChart);
		},
		getChartDataForChartNew: function getChartDataForChartNew(chartData, chartId) {
			return chartData.filter(function (each) {
				return each.id === chartId;
			})[0];
		},
		getCurrentItemForChartNew: function getCurrentItemForChartNew(currentItems, chartId) {
			var currentItem = currentItems.filter(function (each) {
				return each.id === chartId;
			})[0];
			var item = currentItem !== undefined ? currentItem.data : {};
			return item;
		},
		getChartOrigin: function getChartOrigin(origin, contextWidth, contextHeight) {
			var originCoordinates = typeof origin === "function" ? origin(contextWidth, contextHeight) : origin;
			return originCoordinates;
		},
		getChartData: function getChartData(props, innerDimensions, partialData, fullData, other, domainL, domainR) {
			var _this = this;
	
			var charts = this.getCharts(props);
	
			return charts.map(function (each) {
				var chartProps = each.props;
				var config = _this.getChartConfigFor(innerDimensions, chartProps, partialData, fullData, other);
				var plot = _this.getChartPlotFor(config, partialData, domainL, domainR);
	
				// console.log(config.compareSeries);
	
				return {
					id: each.props.id,
					config: config,
					plot: plot
				};
			});
		},
		getChildren: function getChildren(children, regex) {
			var matchingChildren = [];
			_react2["default"].Children.forEach(children, function (child) {
				if (regex.test(child.props.namespace)) matchingChildren.push(child);
			});
			return matchingChildren;
		},
		getMainChart: function getMainChart(children) {
			var eventCapture = this.getChildren(children, /EventCapture$/);
			if (eventCapture.length > 1) throw new Error("only one EventCapture allowed");
			if (eventCapture.length > 0) return eventCapture[0].props.mainChart;
			if (eventCapture.length === 0) return this.getChildren(children, /Chart$/)[0].props.id;
		},
		getClosestItem: function getClosestItem(plotData, mouseXY, chartData) {
			// console.log(chartData);
			var xValue = chartData.plot.scales.xScale.invert(mouseXY[0]);
			var item = _utils2["default"].getClosestItem(plotData, xValue, chartData.config.xAccessor);
			return item;
		},
		getDimensions: function getDimensions(innerDimension, chartProps, margin) {
	
			// console.log(margin);
			var availableWidth = innerDimension.width;
			var availableHeight = innerDimension.height;
	
			var fullWidth = chartProps.width || availableWidth;
			var fullHeight = chartProps.height || availableHeight;
	
			return {
				availableWidth: availableWidth,
				availableHeight: availableHeight,
				width: fullWidth,
				height: fullHeight
			};
		},
		getChartConfigFor: function getChartConfigFor(innerDimension, chartProps, partialData, fullData, passThroughProps) {
			var padding = chartProps.padding;
			var margin = chartProps.margin;
	
			var dimensions = this.getDimensions(innerDimension, chartProps);
			// var indicator = this.getIndicator(chartProps);
			// this.calculateIndicator(fullData, indicator);
	
			// var accessors = this.getXYAccessors(chartProps, passThroughProps, indicator);
			// identify overlays
			var xAccessor = this.getXAccessor(chartProps, passThroughProps);
			var overlaysToAdd = this.identifyOverlaysToAdd(chartProps);
			var compareBase = this.identifyCompareBase(chartProps);
			var compareSeries = this.identifyCompareSeries(chartProps);
			// console.log(compareBase, compareSeries);
			// calculate overlays
			this.calculateOverlays(fullData, overlaysToAdd);
			// this.calculateRateOfReturn(fullData, compareSeries, compareBase, accessors.yAccessor);
	
			var origin = typeof chartProps.origin === "function" ? chartProps.origin(dimensions.availableWidth, dimensions.availableHeight) : chartProps.origin;
	
			var scales = this.defineScales(chartProps, partialData, passThroughProps);
	
			var indicatorsWithTicks = overlaysToAdd.filter(function (overlay) {
				return overlay.indicator !== undefined;
			}).filter(function (overlay) {
				return overlay.indicator.yTicks !== undefined;
			});
	
			var yTicks;
			if (indicatorsWithTicks.length > 0) {
				yTicks = indicatorsWithTicks.map(function (overlay) {
					return overlay.indicator.yTicks();
				}).reduce(function (ticks1, ticks2) {
					return ticks1.concat(ticks2);
				});
			}
	
			var config = {
				width: dimensions.width,
				height: dimensions.height,
				mouseCoordinates: {
					at: chartProps.yMousePointerDisplayLocation,
					format: chartProps.yMousePointerDisplayFormat
				},
				// indicator: indicator,
				// indicatorOptions: indicator && indicator.options(),
				// domain: indicator && indicator.domain && indicator.domain(),
				origin: origin,
				padding: padding,
				xAccessor: xAccessor,
				overlays: overlaysToAdd,
				compareBase: compareBase,
				compareSeries: compareSeries,
				scaleType: scales,
				yTicks: yTicks
			};
			return config;
		},
		getChartPlotFor: function getChartPlotFor(config, partialData, domainL, domainR) {
			var yaccessors = pluck(keysAsArray(config.overlays), "yAccessor");
			// console.log(yaccessors);
			if (config.compareSeries.length > 0) {
				this.updateComparisonData(partialData, config.compareBase, config.compareSeries);
				yaccessors = [function (d) {
					return d.compare;
				}];
			}
			var xyValues = _utilsScaleUtils2["default"].flattenData(partialData, [config.xAccessor], yaccessors);
	
			var overlayValues = this.updateOverlayFirstLast(partialData, config.overlays);
			var indicators = pluck(keysAsArray(config.overlays), "indicator");
			var domains = indicators.filter(function (indicator) {
				return indicator !== undefined;
			}).filter(function (indicator) {
				return indicator.domain !== undefined;
			}).map(function (indicator) {
				return indicator.domain();
			});
	
			var domain;
			if (domains.length > 0) {
				domain = domains.reduce(function (a, b) {
					return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
				});
			}
	
			var scales = this.updateScales(xyValues, config.scaleType, partialData, config.width, config.height, config.padding, domain);
	
			if (domainL !== undefined && domainR !== undefined) {
				scales.xScale.domain([domainL, domainR]);
			}
	
			var plot = {
				overlayValues: overlayValues,
				scales: scales
			};
			return plot;
		},
		getCompareYAccessors: function getCompareYAccessors(compareWith) {
			var yAccessors = compareWith.map(function (eachCompare) {
				return function (d) {
					return d["compare_" + eachCompare.id + "_percent"];
				};
			});
			yAccessors.push(function (d) {
				return d.compare_base_percent;
			});
			return yAccessors;
		},
		updateComparisonData: function updateComparisonData(partialData, compareBase, compareSeries) {
	
			var first = partialData[0];
			var base = compareBase(first);
	
			partialData.forEach(function (d) {
				d.compare = {};
	
				d.compare.open = (d.open - base) / base;
				d.compare.high = (d.high - base) / base;
				d.compare.low = (d.low - base) / base;
				d.compare.close = (d.close - base) / base;
	
				compareSeries.forEach(function (eachSeries) {
					var key = "compare_" + eachSeries.id;
					d.compare[key] = (eachSeries.yAccessor(d) - eachSeries.yAccessor(first)) / eachSeries.yAccessor(first);
				});
			});
	
			// console.table(partialData);
			// console.log(partialData[7].compare);
		},
	
		defineScales: function defineScales(props, data, passThroughProps) {
			var xScale = props.xScale,
			    yScale = props.yScale;
	
			if (xScale === undefined && passThroughProps) xScale = passThroughProps.xScale;
	
			if (xScale === undefined) {
				var each = data[0];
				if (typeof each === "object") {
					Object.keys(each).forEach(function (key) {
						if (Object.prototype.toString.call(each[key]) === "[object Date]") {
							xScale = _d32["default"].time.scale();
						}
					});
				}
				if (xScale === undefined) xScale = _d32["default"].scale.linear();
				// xScale = polyLinearTimeScale();
			}
			if (yScale === undefined) {
				yScale = _d32["default"].scale.linear();
			}
			return { xScale: xScale, yScale: yScale };
		},
		getIndicator: function getIndicator(props) {
			var indicator; // = new Array();
			_react2["default"].Children.forEach(props.children, function (child) {
				if (["ReStock.DataSeries"].indexOf(child.props.namespace) > -1) {
	
					if (child.props && child.props.indicator) {
						var indicatorProp = child.props.indicator;
						indicator = indicatorProp(child.props.options, props, child.props);
					}
				}
			});
			return indicator;
		},
		getXAccessor: function getXAccessor(props, passThroughProps) {
			var xAccessor = passThroughProps !== undefined && passThroughProps.xAccessor || props.xAccessor !== undefined && props.xAccessor;
			return xAccessor;
		},
		getXYAccessors: function getXYAccessors(props, passThroughProps, indicator) {
			var accessor = { xAccessor: null, yAccessor: null };
	
			_react2["default"].Children.forEach(props.children, function (child) {
				if (["ReStock.DataSeries"].indexOf(child.props.namespace) > -1) {
					if (child.props) {
	
						var xAccessor = passThroughProps !== undefined && passThroughProps.xAccessor ? passThroughProps.xAccessor : child.props.xAccessor;
						accessor.xAccessor = xAccessor;
						accessor.yAccessor = child.props.yAccessor;
					}
				}
			});
			if (!accessor.yAccessor && indicator) {
				accessor.yAccessor = indicator.yAccessor();
			}
			// if (indicator) console.log(indicator.yAccessor());
	
			return accessor;
		},
		identifyOverlaysToAdd: function identifyOverlaysToAdd(chartProps) {
			var overlaysToAdd = [];
			_react2["default"].Children.forEach(chartProps.children, function (child) {
				if (/DataSeries$/.test(child.props.namespace)) {
					var yAccessor = child.props.yAccessor;
					var indicatorProp = child.props.indicator;
					if (yAccessor === undefined && indicatorProp === undefined) {
						console.error("Either have yAccessor or indicator which provides a yAccessor for Chart " + chartProps.id + " DataSeries " + child.props.id);
					}
					var indicator = indicatorProp !== undefined ? indicatorProp(child.props.options, chartProps, child.props) : undefined;
					var _child$props = child.props;
					var stroke = _child$props.stroke;
					var fill = _child$props.fill;
	
					if (stroke === undefined && indicator !== undefined && indicator.stroke !== undefined) stroke = indicator.stroke();
					if (fill === undefined && indicator !== undefined && indicator.fill !== undefined) fill = indicator.fill();
					var overlay = {
						id: child.props.id,
						chartId: chartProps.id,
						yAccessor: yAccessor || indicator.yAccessor(),
						indicator: indicator,
						stroke: stroke,
						fill: fill
					};
					// stroke: indicator.options().stroke || overlayColors(child.props.id)
					overlaysToAdd.push(overlay);
				}
			});
			return overlaysToAdd;
		},
		identifyCompareBase: function identifyCompareBase(props) {
			var compareBase;
			_react2["default"].Children.forEach(props.children, function (child) {
				if (/DataSeries$/.test(child.props.namespace)) {
					compareBase = child.props.compareBase;
				}
			});
			return compareBase;
		},
		identifyCompareSeries: function identifyCompareSeries(props) {
			var overlaysToAdd = [];
			_react2["default"].Children.forEach(props.children, function (child) {
				if (/DataSeries$/.test(child.props.namespace)) {
					_react2["default"].Children.forEach(child.props.children, function (grandChild) {
						if (/CompareSeries$/.test(grandChild.props.namespace)) {
							overlaysToAdd.push({
								yAccessor: grandChild.props.yAccessor,
								id: grandChild.props.id,
								stroke: grandChild.props.stroke || overlayColors(grandChild.props.id),
								displayLabel: grandChild.props.displayLabel,
								percentYAccessor: function percentYAccessor(d) {
									return d.compare["compare_" + grandChild.props.id];
								}
							});
						}
					});
				}
			});
			return overlaysToAdd;
		},
		calculateOverlays: function calculateOverlays(fullData, overlays) {
			if (Array.isArray(fullData)) {
				overlays.filter(function (eachOverlay) {
					return eachOverlay.id !== undefined;
				}).forEach(function (overlay) {
					// OverlayUtils.calculateOverlay(fullData, overlay);
					overlay.indicator.calculate(fullData[key]);
				});
			} else {
				Object.keys(fullData).filter(function (key) {
					return ["D", "W", "M"].indexOf(key) > -1;
				}).forEach(function (key) {
					overlays.filter(function (eachOverlay) {
						return eachOverlay.indicator !== undefined;
					}).forEach(function (overlay) {
						overlay.indicator.calculate(fullData[key]);
						// OverlayUtils.calculateOverlay(fullData[key], overlay);
					});
				});
			}
			// console.table(fullData.M);
			// console.log(overlays);
		},
		calculateIndicator: function calculateIndicator(fullData, indicator) {
			Object.keys(fullData).filter(function (key) {
				return ["D", "W", "M"].indexOf(key) > -1;
			}).forEach(function (key) {
				if (indicator) indicator.calculate(fullData[key]);
			});
		},
		updateOverlayFirstLast: function updateOverlayFirstLast(data, overlays) {
			// console.log("updateOverlayFirstLast");
			var overlayValues = [];
	
			overlays.forEach(function (eachOverlay) {
				// console.log(JSON.stringify(first), Object.keys(first), yAccessor(first));
				overlayValues.push({
					id: eachOverlay.id,
					first: _utilsOverlayUtils2["default"].firstDefined(data, eachOverlay.yAccessor),
					last: _utilsOverlayUtils2["default"].lastDefined(data, eachOverlay.yAccessor)
				});
			});
			return overlayValues;
		},
		updateScales: function updateScales(xyValues, scales, data, width, height, padding, overrideDomain) {
			// console.log("updateScales");
			// width = width - margin.left - margin.right/**/
			// height = height - margin.top - margin.bottom/**/
	
			scales.xScale.range([padding.left, width - padding.right]);
			// if polylinear scale then set data
			if (scales.xScale.isPolyLinear && scales.xScale.isPolyLinear()) {
				scales.xScale.data(data);
			} else {
				// else set the domain
				scales.xScale.domain(_d32["default"].extent(xyValues.xValues));
			}
	
			scales.yScale.range([height - padding.top, padding.bottom]);
	
			if (overrideDomain !== undefined) {
				scales.yScale.domain(overrideDomain);
			} else {
				var domain = _d32["default"].extent(xyValues.yValues);
				scales.yScale.domain(domain);
			}
	
			return {
				xScale: scales.xScale.copy(),
				yScale: scales.yScale.copy()
			};
		},
		getCurrentItems: function getCurrentItems(chartData, mouseXY, plotData) {
			return chartData.map(function (eachChartData) {
				var xValue = eachChartData.plot.scales.xScale.invert(mouseXY[0]);
				var item = _utils2["default"].getClosestItem(plotData, xValue, eachChartData.config.xAccessor);
				return { id: eachChartData.id, data: item };
			});
		},
		getDataToPlotForDomain: function getDataToPlotForDomain(domainL, domainR, data, width, xAccessor) {
			var threshold = 0.5; // number of datapoints per 1 px
			var allowedIntervals = ["D", "W", "M"];
			// console.log(domainL, domainR, data, width);
	
			var dataForInterval, filteredData, interval, leftX, rightX, leftIndex, rightIndex;
			for (var i = 0; i < allowedIntervals.length; i++) {
				interval = allowedIntervals[i];
				dataForInterval = data[interval];
	
				leftIndex = _utils2["default"].getClosestItemIndexes(dataForInterval, domainL, xAccessor).left;
				rightIndex = _utils2["default"].getClosestItemIndexes(dataForInterval, domainR, xAccessor).right;
	
				// leftIndex = leftX.left;
				// rightIndex = rightX.right;
	
				filteredData = dataForInterval.slice(leftIndex, rightIndex);
	
				// console.log(filteredData.length, width * threshold);
				if (filteredData.length < width * threshold) break;
			}
	
			// console.log(leftX, rightX,  (dd[leftX.left]), xAccessor(dd[rightX.right]));
	
			return {
				interval: interval,
				data: filteredData,
				leftIndex: leftIndex,
				rightIndex: rightIndex
			};
		}
	};
	
	module.exports = ChartDataUtil;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	function pushToValues(values, eachValue) {
		if (typeof eachValue === "object" && Object.keys(eachValue).length > 0) {
			Object.keys(eachValue).forEach(function (key) {
				if (!isNaN(eachValue[key])) {
					values.push(eachValue[key]);
				}
			});
		} else {
			if (!isNaN(eachValue)) {
				values.push(eachValue);
			}
		}
	}
	
	var ScaleUtils = {
		flattenData: function flattenData(data, xAccessors, yAccessors) {
			// console.log(xAccessors, yAccessors);
			var xValues = [];
			var yValues = [];
			data.forEach(function (row) {
				xAccessors.forEach(function (xAccessor) {
					var x = xAccessor(row);
					if (x !== undefined) {
						pushToValues(xValues, x);
					}
				});
				yAccessors.forEach(function (yAccessor) {
					var y = yAccessor(row);
					if (y !== undefined) {
						pushToValues(yValues, y);
					}
				});
			});
			return {
				xValues: xValues,
				yValues: yValues
			};
		}
	};
	
	module.exports = ScaleUtils;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(8);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _MovingAverageCalculator = __webpack_require__(9);
	
	var _MovingAverageCalculator2 = _interopRequireDefault(_MovingAverageCalculator);
	
	var OverlayUtils = {
		getToolTipLabel: function getToolTipLabel(props) {
			if (props.type === "sma" || props.type === "ema") {
				var tooltip = props.type.toUpperCase() + "(" + props.options.period + ")";
				return tooltip;
			}
			return "N/A";
		}, /*
	    getYAccessor(chartId, props) {
	    if (props.type === "sma" || props.type === "ema") {
	    var key = props.type + props.options.period + "_chart_" + chartId;
	    return (d) => d[key];
	    }
	    return false;
	    },*/
		getYAccessorKey: function getYAccessorKey(chartId, props) {
			if (props.type === "sma" || props.type === "ema") {
				var key = props.type + props.options.period + "_chart_" + chartId;
				return key;
			}
			return false;
		},
		firstDefined: function firstDefined(data, accessor) {
			var each;
			for (var i = 0; i < data.length; i++) {
				if (accessor(data[i]) === undefined) continue;
				each = data[i];
				// console.log(i, each, accessor(each));
				break;
			}
			return _utils2["default"].cloneMe(each);
		},
		lastDefined: function lastDefined(data, accessor) {
			var each;
			for (var i = data.length - 1; i >= 0; i--) {
				if (accessor(data[i]) === undefined) continue;
				each = data[i];
				// console.log(i, each, accessor(each));
				break;
			}
			return _utils2["default"].cloneMe(each);
		}
	};
	
	module.exports = OverlayUtils;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var overlayColors = _d32["default"].scale.category10();
	
	var Utils = {
		overlayColors: overlayColors,
		isReactVersion13: function isReactVersion13() {
			var version = _react2["default"].version.split(".")[1];
			return version === "13";
		},
		isReactVersion14: function isReactVersion14() {
			return _react2["default"].version.split(".")[1] === "14";
		},
		cloneMe: function cloneMe(obj) {
			if (obj == null || typeof obj !== "object") {
				return obj;
			}
			if (obj instanceof Date) {
				return new Date(obj.getTime());
			}
			var temp = {}; // obj.constructor(); // changed
	
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					temp[key] = this.cloneMe(obj[key]);
				}
			}
			return temp;
		},
		displayDateFormat: _d32["default"].time.format("%Y-%m-%d"),
		displayNumberFormat: function displayNumberFormat(x) {
			return Utils.numberWithCommas(x.toFixed(2));
		},
		numberWithCommas: function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		isNumeric: function isNumeric(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		mergeRecursive: (function (_mergeRecursive) {
			function mergeRecursive(_x, _x2) {
				return _mergeRecursive.apply(this, arguments);
			}
	
			mergeRecursive.toString = function () {
				return _mergeRecursive.toString();
			};
	
			return mergeRecursive;
		})(function (obj1, obj2) {
			for (var p in obj2) {
				try {
					// Property in destination object set; update its value.
					if (obj2[p].constructor == Object) {
						obj1[p] = mergeRecursive(obj1[p], obj2[p]);
					} else {
						obj1[p] = obj2[p];
					}
				} catch (e) {
					// Property in destination object not set; create it and set its value.
					obj1[p] = obj2[p];
				}
			}
	
			return obj1;
		}),
		mousePosition: function mousePosition(e) {
			var container = e.currentTarget,
			    rect = container.getBoundingClientRect(),
			    x = e.clientX - rect.left - container.clientLeft,
			    y = e.clientY - rect.top - container.clientTop,
			    xy = [Math.round(x), Math.round(y)];
			return xy;
		},
		getValue: function getValue(d) {
			if (d instanceof Date) {
				return d.getTime();
			}
			return d;
		},
		getClosestItem: function getClosestItem(array, value, accessor) {
			var lo = 0,
			    hi = array.length - 1;
			while (hi - lo > 1) {
				var mid = Math.round((lo + hi) / 2);
				if (accessor(array[mid]) <= value) {
					lo = mid;
				} else {
					hi = mid;
				}
			}
			if (accessor(array[lo]) === value) hi = lo;
			var closest = Math.abs(accessor(array[lo]) - value) < Math.abs(accessor(array[hi]) - value) ? array[lo] : array[hi];
			// console.log(array[lo], array[hi], closest, lo, hi);
			return Utils.cloneMe(closest);
		},
		getClosestItemIndex: function getClosestItemIndex(array, value, accessor) {
			var lo = 0,
			    hi = array.length - 1;
			while (hi - lo > 1) {
				var mid = Math.round((lo + hi) / 2);
				if (accessor(array[mid]) <= value) {
					lo = mid;
				} else {
					hi = mid;
				}
			}
			if (accessor(array[lo]) === value) hi = lo;
			var closestIndex = Math.abs(accessor(array[lo]) - value) < Math.abs(accessor(array[hi]) - value) ? lo : hi;
	
			return closestIndex;
		},
		getClosestItemIndexes: function getClosestItemIndexes(array, value, accessor) {
			var lo = 0,
			    hi = array.length - 1;
			while (hi - lo > 1) {
				var mid = Math.round((lo + hi) / 2);
				if (accessor(array[mid]) <= value) {
					lo = mid;
				} else {
					hi = mid;
				}
			}
			if (accessor(array[lo]) === value) hi = lo;
			// console.log(array[lo], array[hi], closestIndex, lo, hi);
			return {
				left: value > accessor(array[lo]) ? hi : lo,
				right: value >= accessor(array[hi]) ? hi + 1 : hi
			};
		},
	
		pluck: function pluck(array, key) {
			return array.map(function (each) {
				return Utils.getter(each, key);
			});
		},
		keysAsArray: function keysAsArray(obj) {
			return Object.keys(obj).filter(function (key) {
				return obj[key] !== null;
			}).map(function (key) {
				return obj[key];
			});
		},
		sum: function sum(array) {
			return array.reduce(function (d1, d2) {
				return d1 + d2;
			});
		},
		setter: function setter(obj, subObjectKey, key, value) {
			if (subObjectKey) {
				if (obj[subObjectKey] === undefined) obj[subObjectKey] = {};
				obj[subObjectKey][key] = value;
			} else {
				obj[key] = value;
			}
		},
		getter: function getter(obj, pluckKey) {
			var keys = pluckKey.split(".");
			var value;
			keys.forEach(function (key) {
				if (!value) value = obj[key];else value = value[key];
			});
			return value;
		}
	};
	
	module.exports = Utils;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(8);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var pluck = _utils2["default"].pluck;
	var sum = _utils2["default"].sum;
	
	var MACalculator = {
		setter: function setter(path, key, d, value) {
			var newD = d,
			    i = 0;
			for (i = 0; i < path.length; i++) {
				if (newD[path[i]] === undefined) newD[path[i]] = {};
				newD = newD[path[i]];
			}
			newD[key] = value;
			return d;
		},
		calculateEMANew: function calculateEMANew(data, period, pluckFunc, setFunc) {
			// console.log("calculating EMA", period, key, pluckKey);
			/*
	  EMA = Price(t) * k + EMA(y) * (1 – k)
	  t = today, y = yesterday, N = number of days in EMA (or period), k = 2/(N+1)
	  */
			if (data.length > period) {
				var firstSMA = data.slice(0, period).map(pluckFunc).reduce(function (a, b) {
					return a + b;
				}) / period;
	
				setFunc(data[period], firstSMA);
	
				// console.log(period, key, pluckKey, subObjectKey, firstSMA);
				var k = 2 / (period + 1),
				    prevEMA = firstSMA,
				    ema;
				// index of array starts with 0, so i starts with period - 1
				for (var i = period - 1; i < data.length; i++) {
					ema = pluckFunc(data[i]) * k + prevEMA * (1 - k);
					setFunc(data[i], ema);
					prevEMA = ema;
				}
			}
			return data;
		},
		calculateSMANew: function calculateSMANew(data, period, pluckFunc, setFunc) {
			// console.log("calculateSMA");
	
			var l = data.length - 1;
	
			data.map(function (each, i) {
				return data.slice(i - period + 1, i + 1);
			}).filter(function (array) {
				return array.length === period && array.length > 0;
			}).map(function (array) {
				return array.map(pluckFunc);
			}).map(function (array) {
				return array.reduce(function (a, b) {
					return a + b;
				});
			}).map(function (total) {
				return total / period;
			}).reverse().forEach(function (avg, i) {
				setFunc(data[l - i], avg);
			});
	
			return data;
		}
	};
	
	module.exports = MACalculator;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _DummyTransformer = __webpack_require__(11);
	
	var _DummyTransformer2 = _interopRequireDefault(_DummyTransformer);
	
	var _StockscaleTransformer = __webpack_require__(12);
	
	var _StockscaleTransformer2 = _interopRequireDefault(_StockscaleTransformer);
	
	var _HeikinAshiTransformer = __webpack_require__(14);
	
	var _HeikinAshiTransformer2 = _interopRequireDefault(_HeikinAshiTransformer);
	
	var _KagiTransformer = __webpack_require__(15);
	
	var _KagiTransformer2 = _interopRequireDefault(_KagiTransformer);
	
	var _RenkoTransformer = __webpack_require__(17);
	
	var _RenkoTransformer2 = _interopRequireDefault(_RenkoTransformer);
	
	var _PointAndFigureTransformer = __webpack_require__(18);
	
	var _PointAndFigureTransformer2 = _interopRequireDefault(_PointAndFigureTransformer);
	
	exports["default"] = {
		DummyTransformer: _DummyTransformer2["default"],
		StockscaleTransformer: _StockscaleTransformer2["default"],
		HeikinAshiTransformer: _HeikinAshiTransformer2["default"],
		KagiTransformer: _KagiTransformer2["default"],
		RenkoTransformer: _RenkoTransformer2["default"],
		PointAndFigureTransformer: _PointAndFigureTransformer2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	function DummyTransformer() {
		function transform(data, interval) {
			var responseData = {};
			responseData[interval] = data;
	
			return responseData;
		};
	
		transform.options = function (opt) {
			return opt;
		};
		return transform;
	}
	
	module.exports = DummyTransformer;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _scalePolylineartimescale = __webpack_require__(13);
	
	var _scalePolylineartimescale2 = _interopRequireDefault(_scalePolylineartimescale);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var defaultOptions = {
		dateAccessor: function dateAccessor(d) {
			return d.date;
		},
		indexAccessor: function indexAccessor(d) {
			return d.idx;
		},
		dateMutator: function dateMutator(d, date) {
			d.date = date;
		},
		indexMutator: function indexMutator(d, i) {
			d.idx = i;
		}
	};
	
	function buildWeeklyData(daily, indexMutator, dateAccesor, dateMutator) {
		var weekly = [],
		    prevWeek,
		    eachWeek = {};
	
		for (var i = 0; i < daily.length; i++) {
	
			var d = daily[i];
	
			if (dateAccesor(eachWeek)) indexMutator(eachWeek, i);
	
			dateMutator(eachWeek, dateAccesor(d));
	
			eachWeek.startOfWeek = eachWeek.startOfWeek || d.startOfWeek;
			eachWeek.startOfMonth = eachWeek.startOfMonth || d.startOfMonth;
			eachWeek.startOfQuarter = eachWeek.startOfQuarter || d.startOfQuarter;
			eachWeek.startOfYear = eachWeek.startOfYear || d.startOfYear;
	
			if (!eachWeek.open) eachWeek.open = d.open;
			if (!eachWeek.high) eachWeek.high = d.high;
			if (!eachWeek.low) eachWeek.low = d.low;
	
			eachWeek.close = d.close;
	
			eachWeek.high = Math.max(eachWeek.high, d.high);
			eachWeek.low = Math.min(eachWeek.low, d.low);
	
			if (!eachWeek.volume) eachWeek.volume = 0;
			eachWeek.volume += d.volume;
	
			eachWeek = (0, _objectAssign2["default"])({}, d, eachWeek);
	
			if (d.startOfWeek) {
				if (prevWeek) {
					eachWeek.trueRange = Math.max(eachWeek.high - eachWeek.low, eachWeek.high - prevWeek.close, eachWeek.low - prevWeek.close);
				}
				prevWeek = eachWeek;
				weekly.push(eachWeek);
				eachWeek = {};
			}
		}
		return weekly;
	}
	
	function buildMonthlyData(daily, indexMutator, dateAccesor) {
		var monthly = [],
		    prevMonth,
		    eachMonth = {};
		for (var i = 0; i < daily.length; i++) {
			var d = daily[i];
	
			if (!eachMonth.date) indexMutator(eachMonth, i);
	
			eachMonth.date = dateAccesor(d);
	
			eachMonth.startOfMonth = eachMonth.startOfMonth || d.startOfMonth;
			eachMonth.startOfQuarter = eachMonth.startOfQuarter || d.startOfQuarter;
			eachMonth.startOfYear = eachMonth.startOfYear || d.startOfYear;
	
			if (!eachMonth.open) eachMonth.open = d.open;
			if (!eachMonth.high) eachMonth.high = d.high;
			if (!eachMonth.low) eachMonth.low = d.low;
	
			eachMonth.close = d.close;
	
			eachMonth.high = Math.max(eachMonth.high, d.high);
			eachMonth.low = Math.min(eachMonth.low, d.low);
	
			if (!eachMonth.volume) eachMonth.volume = 0;
			eachMonth.volume += d.volume;
	
			eachMonth = (0, _objectAssign2["default"])({}, d, eachMonth);
	
			if (d.startOfMonth) {
				eachMonth.startOfWeek = d.startOfWeek;
				if (prevMonth) {
					eachMonth.trueRange = Math.max(eachMonth.high - eachMonth.low, eachMonth.high - prevMonth.close, eachMonth.low - prevMonth.close);
				}
				prevMonth = eachMonth;
				monthly.push(eachMonth);
				eachMonth = {};
			}
		}
		return monthly;
	}
	
	function StockscaleTransformer() {
		var newOptions;
		function transform(data, interval) {
			var _newOptions = newOptions;
			var dateAccessor = _newOptions.dateAccessor;
			var dateMutator = _newOptions.dateMutator;
			var indexMutator = _newOptions.indexMutator;
	
			var prevDate;
			var responseData = {};
			var dd = data[interval];
			responseData.D = dd.map(function (each, i) {
				var row = {};
				Object.keys(each).forEach(function (key) {
					row[key] = each[key];
				});
				indexMutator(row, i);
	
				row.startOfWeek = false;
				row.startOfMonth = false;
				row.startOfQuarter = false;
				row.startOfYear = false;
				var date = dateAccessor(row);
	
				if (prevDate !== undefined) {
					// According to ISO calendar
					// Sunday = 0, Monday = 1, ... Saturday = 6
					// day of week of today < day of week of yesterday then today is start of week
					row.startOfWeek = date.getDay() < prevDate.getDay();
					// month of today != month of yesterday then today is start of month
					row.startOfMonth = date.getMonth() !== prevDate.getMonth();
					// if start of month and month % 3 === 0 then it is start of quarter
					row.startOfQuarter = row.startOfMonth && date.getMonth() % 3 === 0;
					// year of today != year of yesterday then today is start of year
					row.startOfYear = date.getYear() !== prevDate.getYear();
				}
				prevDate = date;
				return row;
			});
			// console.table(responseData);
			responseData.W = buildWeeklyData(responseData.D, indexMutator, dateAccessor, dateMutator);
			responseData.M = buildMonthlyData(responseData.D, indexMutator, dateAccessor, dateMutator);
			return responseData;
		};
	
		transform.options = function (opt) {
			newOptions = (0, _objectAssign2["default"])({}, defaultOptions, opt);
			newOptions.xAccessor = newOptions.indexAccessor;
			newOptions.xScale = (0, _scalePolylineartimescale2["default"])(newOptions.xAccessor);
			return newOptions;
		};
		return transform;
	}
	
	module.exports = StockscaleTransformer;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	function financeTimeScale(drawableData, indexAccessor, backingLinearScale) {
	
		var timeScaleSteps = [{ step: 864e5, f: function f(d) {
				return d.date !== undefined && true;
			} }, // 1-day
		{ step: 1728e5, f: function f(d, i) {
				return d.date !== undefined && i % 2 === 0;
			} }, // 2-day
		{ step: 8380e5, f: function f(d, i, arr) {
				if (d.startOfMonth) return true;
				var list = [];
				if (i - 2 >= 0) list.push(arr[i - 2]);
				if (i - 1 >= 0) list.push(arr[i - 1]);
				list.push(arr[i]);
				if (i + 1 <= arr.length - 1) list.push(arr[i + 1]);
				if (i + 2 <= arr.length - 1) list.push(arr[i + 2]);
				var sm = list.map(function (each) {
					return each.startOfMonth;
				}).reduce(function (prev, curr) {
					return prev || curr;
				});
				return sm ? false : d.startOfWeek;
			} }, // 1-week
		{ step: 3525e6, f: function f(d) {
				return d.startOfMonth;
			} }, // 1-month
		{ step: 7776e6, f: function f(d) {
				return d.startOfQuarter;
			} }, // 3-month
		{ step: 31536e6, f: function f(d) {
				return d.startOfYear;
			} }, // 1-year
		{ step: 91536e15, f: function f(d) {
				return d.date !== undefined && (d.startOfYear && d.date.getFullYear() % 2 === 0);
			} } // 2-year
		];
		var timeScaleStepsBisector = _d32["default"].bisector(function (d) {
			return d.step;
		}).left;
		var bisectByIndex = _d32["default"].bisector(function (d) {
			return indexAccessor(d);
		}).left;
		var tickFormat = [[_d32["default"].time.format("%Y"), function (d) {
			return d.startOfYear;
		}], [_d32["default"].time.format("%b %Y"), function (d) {
			return d.startOfQuarter;
		}], [_d32["default"].time.format("%b"), function (d) {
			return d.startOfMonth;
		}], [_d32["default"].time.format("%d %b"), function (d) {
			return d.startOfWeek;
		}], [_d32["default"].time.format("%a %d "), function (d) {
			return true;
		}]];
		function formater(d) {
			var i = 0,
			    format = tickFormat[i];
			while (!format[1](d)) format = tickFormat[++i];
			var tickDisplay = format[0](d.date);
			// console.log(tickDisplay);
			return tickDisplay;
		}
	
		function scale(x) {
			return backingLinearScale(x);
		}
		scale.isPolyLinear = function () {
			return true;
		};
		scale.invert = function (x) {
			return backingLinearScale.invert(x);
		};
		scale.data = function (x) {
			if (!arguments.length) {
				return drawableData;
			} else {
				drawableData = x;
				// this.domain([drawableData.first().index, drawableData.last().index]);
				this.domain([indexAccessor(drawableData[0]), indexAccessor(drawableData[drawableData.length - 1])]);
				return scale;
			}
		};
		scale.domain = function (x) {
			if (!arguments.length) return backingLinearScale.domain();
			// console.log("before = %s, after = %s", JSON.stringify(backingLinearScale.domain()), JSON.stringify(x))
	
			var d = [x[0], x[1]];
			// console.log(d);
			backingLinearScale.domain(d);
			return scale;
		};
		scale.range = function (x) {
			if (!arguments.length) return backingLinearScale.range();
			backingLinearScale.range(x);
			return scale;
		};
		scale.rangeRound = function (x) {
			return backingLinearScale.range(x);
		};
		scale.clamp = function (x) {
			if (!arguments.length) return backingLinearScale.clamp();
			backingLinearScale.clamp(x);
			return scale;
		};
		scale.interpolate = function (x) {
			if (!arguments.length) return backingLinearScale.interpolate();
			backingLinearScale.interpolate(x);
			return scale;
		};
		scale.ticks = function (m) {
			var start,
			    end,
			    count = 0;
			drawableData.forEach(function (d) {
				if (d.date !== undefined) {
					if (start === undefined) start = d;
					end = d;
					count++;
				}
			});
			m = count / drawableData.length * m;
			var span = end.date.getTime() - start.date.getTime();
			var target = span / m;
			/*
	  console.log(drawableData[drawableData.length - 1].date
	  	, drawableData[0].date
	  	, span
	  	, m
	  	, target
	  	, timeScaleStepsBisector(d3_time_scaleSteps, target)
	  	);
	  */
			var ticks = drawableData.filter(timeScaleSteps[timeScaleStepsBisector(timeScaleSteps, target)].f).map(function (d) {
				return indexAccessor(d);
			});
			// return the index of all the ticks to be displayed,
			// console.log(target, span, m, ticks);
			return ticks;
		};
		scale.tickFormat = function (ticks) {
			return function (d) {
				// for each index received from ticks() function derive the formatted output
				var tickIndex = bisectByIndex(drawableData, d);
				return formater(drawableData[tickIndex]);
			};
		};
		scale.nice = function (m) {
			backingLinearScale.nice(m);
			return scale;
		};
		scale.copy = function () {
			return financeTimeScale(drawableData, indexAccessor, backingLinearScale.copy());
		};
		return scale;
	}
	
	var defaultFinanceDateTimeScale = function defaultFinanceDateTimeScale(indexAccessor) {
		return financeTimeScale([0, 1], indexAccessor, _d32["default"].scale.linear());
	};
	
	module.exports = defaultFinanceDateTimeScale;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	function buildHA(data, indexAccessor, indexMutator, dateAccessor, dateMutator) {
		var prevEach;
	
		var haData = data.map(function (d) {
			var each = {};
			indexMutator(each, indexAccessor(d));
			each.close = (d.open + d.high + d.low + d.close) / 4;
	
			dateMutator(each, dateAccessor(d));
	
			if (!prevEach) {
				each.open = d.open;
				each.high = d.high;
				each.low = d.low;
			} else {
				each.open = (prevEach.open + prevEach.close) / 2;
				each.high = Math.max(each.open, d.high, each.close);
				each.low = Math.min(each.open, d.low, each.close);
				each.trueRange = Math.max(d.high - d.low, d.high - prevEach.close, d.low - prevEach.close);
			}
			each.volume = d.volume;
	
			each.startOfWeek = d.startOfWeek;
			each.startOfMonth = d.startOfMonth;
			each.startOfQuarter = d.startOfQuarter;
			each.startOfYear = d.startOfYear;
	
			prevEach = each;
			return each;
		});
		// console.table(haData);
		return haData;
	}
	
	function HeikinAshiTransformer() {
		var newOptions;
		function transform(data) {
			var _newOptions = newOptions;
			var dateAccessor = _newOptions.dateAccessor;
			var dateMutator = _newOptions.dateMutator;
			var indexAccessor = _newOptions.indexAccessor;
			var indexMutator = _newOptions.indexMutator;
	
			// console.log(data, options);
	
			var haData = {};
			Object.keys(data).forEach(function (key) {
				return haData[key] = buildHA(data[key], indexAccessor, indexMutator, dateAccessor, dateMutator);
			});
	
			return haData;
		};
	
		transform.options = function (opt) {
			newOptions = opt;
			return opt;
		};
		return transform;
	}
	
	module.exports = HeikinAshiTransformer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsATRCalculator = __webpack_require__(16);
	
	var _utilsATRCalculator2 = _interopRequireDefault(_utilsATRCalculator);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var defaultOptions = {
		period: 14,
		pricingMethod: function pricingMethod(d) {
			return d.close;
		}
	};
	
	function KagiTransformer() {
		var newOptions;
		function transform(data) {
			var _newOptions = newOptions;
			var period = _newOptions.period;
			var pricingMethod = _newOptions.pricingMethod;
	
			(0, _utilsATRCalculator2["default"])(data.D, period);
			var reversalThreshold = function reversalThreshold(d) {
				return d["atr" + period];
			};
	
			var _newOptions2 = newOptions;
			var dateAccessor = _newOptions2.dateAccessor;
			var dateMutator = _newOptions2.dateMutator;
			var indexMutator = _newOptions2.indexMutator;
	
			var kagiData = [];
	
			var index = 0,
			    prevPeak,
			    prevTrough,
			    direction;
			var line = {};
	
			data.D.forEach(function (d) {
				if (line.from === undefined) {
					indexMutator(line, index++);
					dateMutator(line, dateAccessor(d));
					line.from = dateAccessor(d);
	
					if (!line.open) line.open = d.open;
					line.high = d.high;
					line.low = d.low;
					if (!line.close) line.close = pricingMethod(d);
					line.startOfYear = d.startOfYear;
					line.startOfQuarter = d.startOfQuarter;
					line.startOfMonth = d.startOfMonth;
					line.startOfWeek = d.startOfWeek;
				}
	
				if (!line.startOfYear) {
					line.startOfYear = d.startOfYear;
					if (line.startOfYear) {
						line.date = d.date;
						// line.displayDate = d.displayDate;
					}
				}
	
				if (!line.startOfQuarter) {
					line.startOfQuarter = d.startOfQuarter;
					if (line.startOfQuarter && !line.startOfYear) {
						line.date = d.date;
						// line.displayDate = d.displayDate;
					}
				}
	
				if (!line.startOfMonth) {
					line.startOfMonth = d.startOfMonth;
					if (line.startOfMonth && !line.startOfQuarter) {
						line.date = d.date;
						// line.displayDate = d.displayDate;
					}
				}
				if (!line.startOfWeek) {
					line.startOfWeek = d.startOfWeek;
					if (line.startOfWeek && !line.startOfMonth) {
						line.date = d.date;
						// line.displayDate = d.displayDate;
					}
				}
				line.volume = (line.volume || 0) + d.volume;
				line.high = Math.max(line.high, d.high);
				line.low = Math.min(line.low, d.low);
				line.to = dateAccessor(d);
	
				var priceMovement = pricingMethod(d) - line.close;
	
				if (line.close > line.open /* going up */ && priceMovement > 0 /* and moving in same direction */ || line.close < line.open /* going down */ && priceMovement < 0 /* and moving in same direction */) {
						line.close = pricingMethod(d);
						if (prevTrough && line.close < prevTrough) {
							// going below the prevTrough, so change from yang to yin
							// A yin line forms when a Kagi line breaks below the prior trough.
							line.changePoint = prevTrough;
							if (line.startAs !== "yin") {
								line.changeTo = "yin";
								// line.startAs = "yang";
							}
						}
						if (prevPeak && line.close > prevPeak) {
							// going above the prevPeak, so change from yin to yang
							// A yang line forms when a Kagi line breaks above the prior peak
							line.changePoint = prevPeak;
							if (line.startAs !== "yang") {
								line.changeTo = "yang";
								// line.startAs = "yin";
							}
						}
					} else if (line.close > line.open /* going up */
					 && priceMovement < 0 /* and moving in other direction */
					 && Math.abs(priceMovement) > reversalThreshold(d) /* and the movement is big enough for reversal */ || line.close < line.open /* going down */
					 && priceMovement > 0 /* and moving in other direction */
					 && Math.abs(priceMovement) > reversalThreshold(d) /* and the movement is big enough for reversal */) {
							// reverse direction
							var nextLineOpen = line.close;
	
							direction = (line.close - line.open) / Math.abs(line.close - line.open);
	
							var nextChangePoint, nextChangeTo;
							if (direction < 0 /* if direction so far has been -ve*/) {
									// compare with line.close becomes prevTrough
									if (prevPeak === undefined) prevPeak = line.open;
									prevTrough = line.close;
									if (pricingMethod(d) > prevPeak) {
										nextChangePoint = prevPeak;
										nextChangeTo = "yang";
									}
								} else {
								if (prevTrough === undefined) prevTrough = line.open;
								prevPeak = line.close;
								if (pricingMethod(d) < prevTrough) {
									nextChangePoint = prevTrough;
									nextChangeTo = "yin";
								}
							}
							if (line.startAs === undefined) {
								line.startAs = direction > 0 ? "yang" : "yin";
							}
	
							var startAs = line.changeTo || line.startAs;
							kagiData.push(line);
							direction = -1 * direction; // direction is reversed
	
							line = {
								open: nextLineOpen,
								close: pricingMethod(d),
								startAs: startAs,
								changePoint: nextChangePoint,
								changeTo: nextChangeTo
							};
						}
			});
	
			return { "D": kagiData };
		};
	
		transform.options = function (opt) {
			newOptions = (0, _objectAssign2["default"])({}, defaultOptions, opt);
			return newOptions;
		};
		return transform;
	}
	
	module.exports = KagiTransformer;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	function sumOf(array, offset, length) {
		var sum = 0;
		for (var i = offset; i < offset + length; i++) {
			sum += array[i].trueRange;
		}
		return sum;
	}
	
	function calculateTR(rawData) {
		var prev = rawData[0];
		rawData.filter(function (d, idx) {
			return idx > 0;
		}).forEach(function (d, idx) {
			d.trueRange = Math.max(d.high - d.low, d.high - prev.close, d.low - prev.close);
			prev = rawData[idx];
		});
	}
	
	function calculateATR(rawData, period) {
		calculateTR(rawData);
	
		rawData.forEach(function (d, index) {
			if (index > period) {
				// trueRange starts from index 1 so ATR starts from period (not period -1)
				var num = sumOf(rawData, index - period, period) / period;
				d["atr" + period] = Math.round(num * 100) / 100;
			}
		});
	}
	
	module.exports = calculateATR;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsATRCalculator = __webpack_require__(16);
	
	var _utilsATRCalculator2 = _interopRequireDefault(_utilsATRCalculator);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var defaultOptions = {
		period: 14,
		pricingMethod: function pricingMethod(d) {
			return { high: d.high, low: d.low };
		}
	};
	function RenkoTransformer() {
		var newOptions;
		function transform(rawData, interval) {
			var _newOptions = newOptions;
			var dateAccessor = _newOptions.dateAccessor;
			var dateMutator = _newOptions.dateMutator;
			var indexAccessor = _newOptions.indexAccessor;
			var indexMutator = _newOptions.indexMutator;
			var period = _newOptions.period;
			var pricingMethod = _newOptions.pricingMethod;
	
			(0, _utilsATRCalculator2["default"])(rawData.D, period);
			var brickSize = function brickSize(d) {
				return d["atr" + period];
			};
	
			var renkoData = [];
	
			var index = 0,
			    prevBrickClose = rawData.D[index].open,
			    prevBrickOpen = rawData.D[index].open;
			var brick = {},
			    direction = 0;
	
			rawData.D.forEach(function (d) {
				if (brick.from === undefined) {
					// brick.index = index++;
					// brick.date = d.date;
					// brick.displayDate = d.displayDate;
					// brick.fromDate = d.displayDate;
					// brick.from = d.index;
					brick.high = d.high;
					brick.low = d.low;
					brick.startOfYear = d.startOfYear;
					brick.startOfQuarter = d.startOfQuarter;
					brick.startOfMonth = d.startOfMonth;
					brick.startOfWeek = d.startOfWeek;
	
					brick.from = indexAccessor(d);
					brick.fromDate = dateAccessor(d);
					indexMutator(brick, index++);
					dateMutator(brick, dateAccessor(d));
				}
				brick.volume = (brick.volume || 0) + d.volume;
	
				var prevCloseToHigh = prevBrickClose - pricingMethod(d).high,
				    prevCloseToLow = prevBrickClose - pricingMethod(d).low,
				    prevOpenToHigh = prevBrickOpen - pricingMethod(d).high,
				    prevOpenToLow = prevBrickOpen - pricingMethod(d).low,
				    priceMovement = Math.min(Math.abs(prevCloseToHigh), Math.abs(prevCloseToLow), Math.abs(prevOpenToHigh), Math.abs(prevOpenToLow));
	
				brick.high = Math.max(brick.high, d.high);
				brick.low = Math.min(brick.low, d.low);
	
				if (!brick.startOfYear) {
					brick.startOfYear = d.startOfYear;
					if (brick.startOfYear) {
						dateMutator(brick, dateAccessor(d));
						// brick.displayDate = d.displayDate;
					}
				}
	
				if (!brick.startOfQuarter) {
					brick.startOfQuarter = d.startOfQuarter;
					if (brick.startOfQuarter && !brick.startOfYear) {
						dateMutator(brick, dateAccessor(d));
						// brick.displayDate = d.displayDate;
					}
				}
	
				if (!brick.startOfMonth) {
					brick.startOfMonth = d.startOfMonth;
					if (brick.startOfMonth && !brick.startOfQuarter) {
						dateMutator(brick, dateAccessor(d));
						// brick.displayDate = d.displayDate;
					}
				}
				if (!brick.startOfWeek) {
					brick.startOfWeek = d.startOfWeek;
					if (brick.startOfWeek && !brick.startOfMonth) {
						dateMutator(brick, dateAccessor(d));
						// brick.displayDate = d.displayDate;
					}
				}
	
				// d.brick = JSON.stringify(brick);
				if (brickSize(d)) {
					var noOfBricks = Math.floor(priceMovement / brickSize(d));
	
					brick.open = Math.abs(prevCloseToHigh) < Math.abs(prevOpenToHigh) || Math.abs(prevCloseToLow) < Math.abs(prevOpenToLow) ? prevBrickClose : prevBrickOpen;
	
					if (noOfBricks >= 1) {
						for (var j = 0; j < noOfBricks; j++) {
							brick.close = brick.open < pricingMethod(d).high ?
							// if brick open is less than current price it means it is green/hollow brick
							brick.open + brickSize(d) : brick.open - brickSize(d);
							direction = brick.close > brick.open ? 1 : -1;
							brick.direction = direction;
							brick.to = indexAccessor(d);
							brick.toDate = dateAccessor(d);
							// brick.diff = brick.open - brick.close;
							// brick.atr = d.atr;
							brick.fullyFormed = true;
							renkoData.push(brick);
	
							prevBrickClose = brick.close;
							prevBrickOpen = brick.open;
	
							var newBrick = {
								high: brick.high,
								low: brick.low,
								open: brick.close,
								startOfYear: false,
								startOfMonth: false,
								startOfQuarter: false,
								startOfWeek: false
							};
							brick = newBrick;
							brick.from = indexAccessor(d);
							brick.fromDate = dateAccessor(d);
							indexMutator(brick, index + j);
							dateMutator(brick, dateAccessor(d));
							brick.volume = (brick.volume || 0) + d.volume;
						}
						index = index + j - 1;
						brick = {};
					} else {
						if (indexAccessor(d) === rawData.D.length - 1) {
							brick.close = direction > 0 ? pricingMethod(d).high : pricingMethod(d).low;
							brick.to = indexAccessor(d);
							brick.toDate = dateAccessor(d);
							dateMutator(brick, dateAccessor(d));
	
							brick.fullyFormed = false;
							renkoData.push(brick);
						}
					}
				}
			});
			return { "D": renkoData };
		};
	
		transform.options = function (opt) {
			newOptions = (0, _objectAssign2["default"])({}, defaultOptions, opt);
			return newOptions;
		};
		return transform;
	}
	
	module.exports = RenkoTransformer;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var defaultOptions = {
		boxSize: 0.5,
		reversal: 3,
		pricingMethod: function pricingMethod(d) {
			return { high: d.high, low: d.low };
		}
	};
	
	function createBox(d, dateAccessor, dateMutator) {
		var box = {
			open: d.open,
			fromDate: dateAccessor(d),
			toDate: dateAccessor(d),
			startOfYear: d.startOfYear,
			startOfQuarter: d.startOfQuarter,
			startOfMonth: d.startOfMonth,
			startOfWeek: d.startOfWeek
		};
		dateMutator(box, dateAccessor(d));
		return box;
	}
	
	function updateColumns(columnData, dateAccessor, dateMutator) {
		columnData.forEach(function (d) {
			// var lastBox = d.boxes[d.boxes.length - 1];
	
			d.startOfYear = false;
			d.startOfQuarter = false;
			d.startOfMonth = false;
			d.startOfWeek = false;
	
			d.boxes.forEach(function (eachBox) {
				if (d.open === undefined) d.open = eachBox.open;
				d.close = eachBox.close;
				d.high = Math.max(d.open, d.close);
				d.low = Math.min(d.open, d.close);
	
				if (d.fromDate === undefined) d.fromDate = eachBox.fromDate;
				if (d.date === undefined) d.date = eachBox.date;
				// if (d.displayDate === undefined) d.displayDate = eachBox.displayDate;
				d.toDate = eachBox.toDate;
	
				if (eachBox.startOfYear) {
					d.startOfYear = d.startOfYear || eachBox.startOfYear;
					d.startOfQuarter = eachBox.startOfQuarter;
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
	
					dateMutator(d, dateAccessor(eachBox));
				}
				if (d.startOfQuarter !== true && eachBox.startOfQuarter) {
					d.startOfQuarter = eachBox.startOfQuarter;
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccessor(eachBox));
				}
				if (d.startOfMonth !== true && eachBox.startOfMonth) {
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccessor(eachBox));
				}
				if (d.startOfWeek !== true && eachBox.startOfWeek) {
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccessor(eachBox));
				}
			});
		});
	
		// console.table(columnData);
		// console.table(rawData);
		return columnData;
	}
	
	function PointAndFigureTransformer() {
		var newOptions;
		function transform(rawData, interval) {
			var _newOptions = newOptions;
			var dateAccessor = _newOptions.dateAccessor;
			var dateMutator = _newOptions.dateMutator;
			var indexAccessor = _newOptions.indexAccessor;
			var indexMutator = _newOptions.indexMutator;
			var reversal = _newOptions.reversal;
			var boxSize = _newOptions.boxSize;
			var pricingMethod = _newOptions.pricingMethod;
	
			var columnData = [];
	
			var column = {
				boxes: [],
				open: rawData.D[0].open
			},
			    box = createBox(rawData.D[0], dateAccessor, dateMutator);
	
			indexMutator(column, 0);
			columnData.push(column);
	
			rawData.D.forEach(function (d) {
				column.volume = column.volume || 0;
				column.volume += d.volume;
	
				if (!box.startOfYear) {
					box.startOfYear = d.startOfYear;
					if (box.startOfYear) {
						dateMutator(box, dateAccessor(d));
						// box.displayDate = d.displayDate;
					}
				}
	
				if (!box.startOfYear && !box.startOfQuarter) {
					box.startOfQuarter = d.startOfQuarter;
					if (box.startOfQuarter && !box.startOfYear) {
						dateMutator(box, dateAccessor(d));
						// box.displayDate = d.displayDate;
					}
				}
	
				if (!box.startOfQuarter && !box.startOfMonth) {
					box.startOfMonth = d.startOfMonth;
					if (box.startOfMonth && !box.startOfQuarter) {
						dateMutator(box, dateAccessor(d));
						// box.displayDate = d.displayDate;
					}
				}
				if (!box.startOfMonth && !box.startOfWeek) {
					box.startOfWeek = d.startOfWeek;
					if (box.startOfWeek && !box.startOfMonth) {
						dateMutator(box, dateAccessor(d));
						// box.displayDate = d.displayDate;
					}
				}
	
				if (columnData.length === 1 && column.boxes.length === 0) {
					var upwardMovement = Math.max(pricingMethod(d).high - column.open, 0); // upward movement
					var downwardMovement = Math.abs(Math.min(column.open - pricingMethod(d).low, 0)); // downward movement
					column.direction = upwardMovement > downwardMovement ? 1 : -1;
					if (boxSize * reversal < upwardMovement || boxSize * reversal < downwardMovement) {
						// enough movement to trigger a reversal
						box.toDate = dateAccessor(d);
						box.open = column.open;
						var noOfBoxes = column.direction > 0 ? Math.floor(upwardMovement / boxSize) : Math.floor(downwardMovement / boxSize);
						for (var i = 0; i < noOfBoxes; i++) {
							box.close = box.open + column.direction * boxSize;
							var _prevBoxClose = box.close;
							column.boxes.push(box);
							box = createBox(box, dateAccessor, dateMutator);
							// box = cloneMe(box);
							box.open = _prevBoxClose;
						}
						box.fromDate = dateAccessor(d);
						box.date = dateAccessor(d);
					}
				} else {
					// one or more boxes already formed in the current column
					var upwardMovement = Math.max(pricingMethod(d).high - box.open, 0); // upward movement
					var downwardMovement = Math.abs(Math.min(pricingMethod(d).low - box.open, 0)); // downward movement
	
					if (column.direction > 0 && upwardMovement > boxSize || /* rising column AND box can be formed */
					column.direction < 0 && downwardMovement > boxSize /* falling column AND box can be formed */) {
							// form another box
							box.close = box.open + column.direction * boxSize;
							box.toDate = dateAccessor(d);
							var _prevBoxClose2 = box.close;
							column.boxes.push(box);
							box = createBox(d, dateAccessor, dateMutator);
							box.open = _prevBoxClose2;
							box.fromDate = dateAccessor(d);
							dateMutator(box, dateAccessor(d));
						} else if (column.direction > 0 && downwardMovement > boxSize * reversal || /* rising column and there is downward movement to trigger a reversal */
					column.direction < 0 && upwardMovement > boxSize * reversal /* falling column and there is downward movement to trigger a reversal */) {
							// reversal
	
							box.open = box.open + -1 * column.direction * boxSize;
							box.toDate = dateAccessor(d);
							// box.displayDate = d.displayDate;
							dateMutator(box, dateAccessor(d));
							// box.startOfYear = d.startOfYear;
							// box.startOfQuarter = d.startOfQuarter;
							// box.startOfMonth = d.startOfMonth;
							// box.startOfWeek = d.startOfWeek;
							// console.table(column.boxes);
							var idx = indexAccessor(column) + 1;
							column = {
								boxes: [],
	
								direction: -1 * column.direction
							};
							indexMutator(column, idx);
							var noOfBoxes = column.direction > 0 ? Math.floor(upwardMovement / boxSize) : Math.floor(downwardMovement / boxSize);
							for (var i = 0; i < noOfBoxes; i++) {
								box.close = box.open + column.direction * boxSize;
								var prevBoxClose = box.close;
								column.boxes.push(box);
								box = createBox(d, dateAccessor, dateMutator);
								box.open = prevBoxClose;
							}
	
							columnData.push(column);
						}
				}
			});
			updateColumns(columnData, dateAccessor, dateMutator);
	
			return { "D": columnData };
		};
	
		transform.options = function (opt) {
			newOptions = (0, _objectAssign2["default"])({}, defaultOptions, opt);
			return newOptions;
		};
		return transform;
	}
	
	module.exports = PointAndFigureTransformer;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsPureComponent = __webpack_require__(20);
	
	var _utilsPureComponent2 = _interopRequireDefault(_utilsPureComponent);
	
	var _utilsChartDataUtil = __webpack_require__(4);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _utilsShallowEqual = __webpack_require__(21);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _transforms = __webpack_require__(10);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function getLongValue(value) {
		if (value instanceof Date) {
			return value.getTime();
		}
		return value;
	}
	function deepEquals(arr1, arr2) {
		if (arr1.length === arr2.length) {
			var result = true;
			arr1.forEach(function (each, i) {
				result = result && each.transform === arr2[i].transform && each.options === arr2[i].options;
			});
			return result;
		}
		return false;
	}
	
	var EventHandler = (function (_PureComponent) {
		_inherits(EventHandler, _PureComponent);
	
		function EventHandler(props, context) {
			_classCallCheck(this, EventHandler);
	
			_get(Object.getPrototypeOf(EventHandler.prototype), "constructor", this).call(this, props, context);
			this.handleMouseMove = this.handleMouseMove.bind(this);
			this.handleMouseEnter = this.handleMouseEnter.bind(this);
			this.handleMouseLeave = this.handleMouseLeave.bind(this);
			this.handleZoom = this.handleZoom.bind(this);
			this.handlePanStart = this.handlePanStart.bind(this);
			this.handlePan = this.handlePan.bind(this);
			this.handlePanEnd = this.handlePanEnd.bind(this);
			this.handleFocus = this.handleFocus.bind(this);
			this.deltaXY = this.deltaXY.bind(this);
			this.getCanvasContexts = this.getCanvasContexts.bind(this);
	
			this.state = {
				focus: false,
				currentItems: [],
				show: false,
				mouseXY: [0, 0],
				panInProgress: false
			};
		}
	
		_createClass(EventHandler, [{
			key: "deltaXY",
			value: function deltaXY(dxy) {
				if (dxy) {
					this.setState({
						deltaXY: dxy
					});
				} else {
					return this.state.deltaXY;
				}
			}
		}, {
			key: "getTransformedData",
			value: function getTransformedData(rawData, defaultDataTransform, dataTransform, interval) {
				var i = 0,
				    eachTransform,
				    options = {},
				    data = rawData;
				var transforms = defaultDataTransform.concat(dataTransform);
				for (i = 0; i < transforms.length; i++) {
					// console.log(transforms[i]);
					eachTransform = transforms[i].transform();
					options = (0, _objectAssign2["default"])({}, options, transforms[i].options);
					options = eachTransform.options(options);
					data = eachTransform(data, interval);
				}
				return {
					data: data,
					options: options
				};
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				// console.log("EventHandler.componentWillMount");
				var props = this.props;
				var context = this.context;
				var initialDisplay = props.initialDisplay;
				var rawData = props.rawData;
				var defaultDataTransform = props.defaultDataTransform;
				var dataTransform = props.dataTransform;
				var interval = props.interval;
				var dimensions = props.dimensions;
	
				var transformedData = this.getTransformedData(rawData, defaultDataTransform, dataTransform, interval);
	
				var data = transformedData.data;
				var options = transformedData.options;
	
				var dataForInterval = data[interval];
				var mainChart = _utilsChartDataUtil2["default"].getMainChart(props.children);
				var beginIndex = Math.max(dataForInterval.length - initialDisplay, 0);
				var plotData = dataForInterval.slice(beginIndex);
	
				var chartData = _utilsChartDataUtil2["default"].getChartData(props, dimensions, plotData, data, options);
	
				this.setState({
					data: data,
					rawData: rawData,
					options: options,
					plotData: plotData,
					chartData: chartData,
					interval: this.props.interval,
					mainChart: mainChart,
					currentCharts: [mainChart],
					initialRender: true,
					secretToSuperFastCanvasDraw: []
				});
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var _props = this.props;
				var prevData = _props.rawData;
				var prevDataTransform = _props.dataTransform;
				var nextData = nextProps.rawData;
				var nextDataTransform = nextProps.dataTransform;
				var dimensions = nextProps.dimensions;
				var initialDisplay = nextProps.initialDisplay;
				var defaultDataTransform = nextProps.defaultDataTransform;
				var intervalProp = nextProps.interval;
				var _state = this.state;
				var data = _state.data;
				var options = _state.options;
				var interval = _state.interval;
				var chartData = _state.chartData;
				var plotData = _state.plotData;
				var rawData = _state.rawData;
	
				var prevDataForInterval = data[interval];
	
				var dataChanged = false;
				if (prevData !== nextData || !deepEquals(prevDataTransform, nextDataTransform)) {
					var transformedData = this.getTransformedData(nextData, defaultDataTransform, nextDataTransform, intervalProp);
					data = transformedData.data;
					options = transformedData.options;
	
					dataChanged = true;
					rawData = nextData;
				}
	
				var dataForInterval = data[interval];
	
				var mainChart = _utilsChartDataUtil2["default"].getMainChart(nextProps.children);
				var mainChartData = chartData.filter(function (each) {
					return each.id === mainChart;
				})[0];
				var xScale = mainChartData.plot.scales.xScale;
	
				var domainL,
				    domainR,
				    startDomain = xScale.domain();
				// console.log(dataPushed, lastItemVisible);
	
				if (dataChanged) {
					var beginIndex = Math.max(dataForInterval.length - initialDisplay, 0);
					var endIndex = dataForInterval.length;
	
					plotData = dataForInterval.slice(beginIndex, endIndex);
				} else {
	
					domainL = startDomain[0];
					domainR = startDomain[1];
				}
	
				// console.log(plotData[0], plotData[plotData.length - 1]);
				var newChartData = _utilsChartDataUtil2["default"].getChartData(nextProps, dimensions, plotData, data, options);
	
				newChartData = newChartData.map(function (eachChart) {
					var plot = _utilsChartDataUtil2["default"].getChartPlotFor(eachChart.config, plotData, domainL, domainR);
					return {
						id: eachChart.id,
						config: eachChart.config,
						plot: plot
					};
				});
	
				var newCurrentItems = _utilsChartDataUtil2["default"].getCurrentItems(newChartData, this.state.mouseXY, plotData);
	
				this.clearBothCanvas(nextProps);
	
				this.setState({
					rawData: rawData,
					data: data,
					options: options,
					chartData: newChartData,
					plotData: plotData,
					currentItems: newCurrentItems,
					mainChart: mainChart,
					initialRender: false,
					secretToSuperFastCanvasDraw: [],
					canvases: null
				});
			}
		}, {
			key: "pushData",
			value: function pushData(array) {
				var _this = this;
	
				if (array === undefined || array === null || array.length === 0) return;
	
				var _props2 = this.props;
				var dataTransform = _props2.dataTransform;
				var defaultDataTransform = _props2.defaultDataTransform;
				var dimensions = _props2.dimensions;
				var _state2 = this.state;
				var rawData = _state2.rawData;
				var data = _state2.data;
				var options = _state2.options;
				var interval = _state2.interval;
				var chartData = _state2.chartData;
				var plotData = _state2.plotData;
				var mainChart = _state2.mainChart;
	
				var newRawData = rawData.concat(array);
				var transformedData = this.getTransformedData(newRawData, defaultDataTransform, dataTransform, interval);
	
				var prevDataForInterval = data[interval];
				var dataForInterval = transformedData.data[interval];
	
				var mainChartData = chartData.filter(function (each) {
					return each.id === mainChart;
				})[0];
				var xAccessor = mainChartData.config.xAccessor;
				var xScale = mainChartData.plot.scales.xScale;
	
				var deltaPushed = array.length;
	
				var startDomain = xScale.domain();
				var domainL, domainR;
	
				var lastItemVisible = plotData[plotData.length - 1] === prevDataForInterval[prevDataForInterval.length - 1];
	
				var beginIndex, endIndex;
				if (lastItemVisible) {
					var left = xAccessor(plotData[deltaPushed]);
	
					var tick = xScale(xAccessor(plotData[1])) - xScale(xAccessor(plotData[0]));
	
					// console.log(tick);
	
					if (xScale(xAccessor(plotData[0])) - xScale(startDomain[0]) > tick) {
						left = xAccessor(plotData[0]);
					}
	
					beginIndex = _utilsUtils2["default"].getClosestItemIndexes(dataForInterval, left, xAccessor).left;
					endIndex = dataForInterval.length;
				} else {
					//
					domainL = startDomain[0];
					domainR = startDomain[1];
					var beginIndex = _utilsUtils2["default"].getClosestItemIndexes(dataForInterval, domainL, xAccessor).left;
					var endIndex = beginIndex + plotData.length;
				}
	
				var newPlotData = dataForInterval.slice(beginIndex, endIndex);
	
				if (lastItemVisible && domainL === undefined) {
					if (startDomain[1] > xAccessor(plotData[plotData.length - 1])) {
						domainL = startDomain[0] + (xAccessor(newPlotData[newPlotData.length - 1]) - xAccessor(plotData[plotData.length - 1]));
						domainR = startDomain[1] + (xAccessor(newPlotData[newPlotData.length - 1]) - xAccessor(plotData[plotData.length - 1]));
					}
				}
	
				var newChartData = _utilsChartDataUtil2["default"].getChartData(this.props, dimensions, newPlotData, transformedData.data, transformedData.options);
	
				if (domainL === undefined) {
					domainL = xAccessor(newPlotData[0]);
					domainR = xAccessor(newPlotData[newPlotData.length - 1]);
				}
	
				var l = 2,
				    i = 0,
				    speed = 16;
	
				var updateState = function updateState(L, R) {
					newChartData = newChartData.map(function (eachChart) {
						var plot = _utilsChartDataUtil2["default"].getChartPlotFor(eachChart.config, newPlotData, L, R);
						return {
							id: eachChart.id,
							config: eachChart.config,
							plot: plot
						};
					});
	
					var newCurrentItems = _utilsChartDataUtil2["default"].getCurrentItems(newChartData, _this.state.mouseXY, newPlotData);
	
					_this.clearBothCanvas(_this.props);
	
					// console.log(L, R, this.state.secretToSuperFastCanvasDraw.length);
	
					_this.setState({
						rawData: newRawData,
						data: transformedData.data,
						options: transformedData.options,
						chartData: newChartData,
						plotData: newPlotData,
						currentItems: newCurrentItems,
						secretToSuperFastCanvasDraw: [],
						canvases: null
					});
				};
				if (lastItemVisible) {
	
					var timeout = setInterval(function () {
						var dxL = (startDomain[0] - domainL) / l;
						var dxR = (startDomain[1] - domainR) / l;
	
						i++;
	
						var L = i === l ? domainL : startDomain[0] - dxL * i;
						var R = i === l ? domainR : startDomain[1] - dxR * i;
						// console.log(i, L, domainL, R, domainR);
						// console.log(startDomain[0], domainL, startDomain[0] - dxL * i, i);
						// console.log(startDomain[1], domainR, startDomain[1] - dxR * i, i);
	
						updateState(L, R);
						if (i === l) clearInterval(timeout);
					}, speed);
				} else {
					this.setState({
						rawData: newRawData,
						data: transformedData.data,
						options: transformedData.options
					});
				}
			}
		}, {
			key: "alterData",
			// chartData: newChartData,
			// plotData: newPlotData,
			// currentItems: newCurrentItems,
			// secretToSuperFastCanvasDraw: [],
			// canvases: null,
			value: function alterData(newRawData) {
				if (newRawData === undefined || newRawData === null || newRawData.length === 0) return;
	
				var _props3 = this.props;
				var dataTransform = _props3.dataTransform;
				var defaultDataTransform = _props3.defaultDataTransform;
				var dimensions = _props3.dimensions;
				var _state3 = this.state;
				var rawData = _state3.rawData;
				var data = _state3.data;
				var options = _state3.options;
				var interval = _state3.interval;
				var chartData = _state3.chartData;
				var plotData = _state3.plotData;
				var mainChart = _state3.mainChart;
	
				if (rawData.length !== newRawData.length) {
					console.log(rawData.length, newRawData.length);
					throw Error("Have to update data of same length");
				}
	
				var transformedData = this.getTransformedData(newRawData, defaultDataTransform, dataTransform, interval);
	
				var dataForInterval = transformedData.data[interval];
	
				var mainChartData = chartData.filter(function (each) {
					return each.id === mainChart;
				})[0];
				var xAccessor = mainChartData.config.xAccessor;
				var xScale = mainChartData.plot.scales.xScale;
	
				var startDomain = xScale.domain();
	
				var left = xAccessor(plotData[0]);
				var beginIndex = _utilsUtils2["default"].getClosestItemIndexes(dataForInterval, left, xAccessor).left;
				var endIndex = beginIndex + plotData.length;
	
				var newPlotData = dataForInterval.slice(beginIndex, endIndex);
	
				var newChartData = _utilsChartDataUtil2["default"].getChartData(this.props, dimensions, newPlotData, transformedData.data, transformedData.options);
	
				newChartData = newChartData.map(function (eachChart) {
					var plot = _utilsChartDataUtil2["default"].getChartPlotFor(eachChart.config, newPlotData, startDomain[0], startDomain[1]);
					return {
						id: eachChart.id,
						config: eachChart.config,
						plot: plot
					};
				});
	
				var newCurrentItems = _utilsChartDataUtil2["default"].getCurrentItems(newChartData, this.state.mouseXY, newPlotData);
	
				this.clearBothCanvas(this.props);
	
				// console.log(newPlotData.length);
	
				this.setState({
					rawData: newRawData,
					data: transformedData.data,
					options: transformedData.options,
					chartData: newChartData,
					plotData: newPlotData,
					currentItems: newCurrentItems,
					secretToSuperFastCanvasDraw: [],
					canvases: null
				});
			}
		}, {
			key: "clearBothCanvas",
			value: function clearBothCanvas(props) {
				props = props || this.props;
				var canvases = props.canvasContexts();
				if (canvases && canvases.axes) {
					this.clearCanvas([canvases.axes, canvases.mouseCoord]);
				}
			}
		}, {
			key: "clearCanvas",
			value: function clearCanvas(canvasList) {
				canvasList.forEach(function (each) {
					each.setTransform(1, 0, 0, 1, 0, 0);
					each.clearRect(-1, -1, each.canvas.width + 2, each.canvas.height + 2);
				});
			}
		}, {
			key: "getChildContext",
			value: function getChildContext() {
				return {
					plotData: this.state.plotData,
					chartData: this.state.chartData,
					currentItems: this.state.currentItems,
					mainChart: this.state.mainChart,
					show: this.state.show,
					mouseXY: this.state.mouseXY,
					interval: this.state.interval,
					currentCharts: this.state.currentCharts,
					width: this.props.dimensions.width,
					height: this.props.dimensions.height,
					type: this.props.type,
					dateAccessor: this.state.options.dateAccessor,
					secretToSuperFastCanvasDraw: this.state.secretToSuperFastCanvasDraw,
					margin: this.props.margin,
	
					getCanvasContexts: this.getCanvasContexts,
					onMouseMove: this.handleMouseMove,
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					onZoom: this.handleZoom,
					onPanStart: this.handlePanStart,
					onPan: this.handlePan,
					onPanEnd: this.handlePanEnd,
					onFocus: this.handleFocus,
					deltaXY: this.deltaXY,
					panInProgress: this.state.panInProgress,
					focus: this.state.focus
				};
			}
		}, {
			key: "handleMouseMove",
			value: function handleMouseMove(mouseXY) {
				var currentCharts = this.state.chartData.filter(function (chartData) {
					var top = chartData.config.origin[1];
					var bottom = top + chartData.config.height;
					return mouseXY[1] > top && mouseXY[1] < bottom;
				}).map(function (chartData) {
					return chartData.id;
				});
				var currentItems = _utilsChartDataUtil2["default"].getCurrentItems(this.state.chartData, mouseXY, this.state.plotData);
	
				var chartData = this.state.chartData;
	
				var contexts = this.getCanvasContexts();
	
				if (contexts && contexts.mouseCoord) {
					var mouseCoord = contexts.mouseCoord;
	
					mouseCoord.setTransform(1, 0, 0, 1, 0, 0);
					mouseCoord.clearRect(-1, -1, mouseCoord.canvas.width + 2, mouseCoord.canvas.height + 2);
				}
	
				this.setState({
					mouseXY: mouseXY,
					currentItems: currentItems,
					show: true,
					currentCharts: currentCharts
				});
			}
		}, {
			key: "getCanvasContexts",
			value: function getCanvasContexts() {
				// console.log(this.state.canvases, this.props.canvasContexts())
				return this.state.canvases || this.props.canvasContexts();
			}
		}, {
			key: "handleMouseEnter",
			value: function handleMouseEnter() {
				// if type === svg remove state.canvases
				// if type !== svg get canvases and set in state if state.canvases is not present already
				var _props4 = this.props;
				var type = _props4.type;
				var canvasContexts = _props4.canvasContexts;
				var canvases = this.state.canvases;
	
				if (type === "svg") {
					canvases = null;
				} else {
					canvases = canvasContexts();
				}
				this.setState({
					show: true,
					canvases: canvases
				});
			}
		}, {
			key: "handleMouseLeave",
			value: function handleMouseLeave() {
				var contexts = this.getCanvasContexts();
	
				if (contexts && contexts.mouseCoord) {
					var mouseCoord = contexts.mouseCoord;
	
					mouseCoord.setTransform(1, 0, 0, 1, 0, 0);
					mouseCoord.clearRect(-1, -1, mouseCoord.canvas.width + 2, mouseCoord.canvas.height + 2);
				}
	
				this.setState({
					show: false
				});
			}
		}, {
			key: "handleZoom",
			value: function handleZoom(zoomDirection, mouseXY) {
				// console.log("zoomDirection ", zoomDirection, " mouseXY ", mouseXY);
				var _state4 = this.state;
				var data = _state4.data;
				var mainChart = _state4.mainChart;
				var chartData = _state4.chartData;
				var plotData = _state4.plotData;
				var interval = _state4.interval;
	
				var chart = chartData.filter(function (eachChart) {
					return eachChart.id === mainChart;
				})[0],
				    item = _utilsChartDataUtil2["default"].getClosestItem(plotData, mouseXY, chart),
				    xScale = chart.plot.scales.xScale,
				    domain = xScale.domain(),
				    centerX = chart.config.xAccessor(item),
				    leftX = centerX - domain[0],
				    rightX = domain[1] - centerX,
				    zoom = Math.pow(1 + Math.abs(zoomDirection) / 2, zoomDirection),
				    domainL = getLongValue(centerX) - leftX * zoom,
				    domainR = getLongValue(centerX) + rightX * zoom,
				    domainRange = Math.abs(domain[1] - domain[0]),
				    fullData = data[interval],
				    last = fullData[fullData.length - 1],
				    first = fullData[0];
	
				domainL = Math.max(getLongValue(chart.config.xAccessor(first)) - Math.floor(domainRange / 3), domainL);
				domainR = Math.min(getLongValue(chart.config.xAccessor(last)) + Math.floor(domainRange / 3), domainR);
	
				var dataToPlot = _utilsChartDataUtil2["default"].getDataToPlotForDomain(domainL, domainR, data, chart.config.width, chart.config.xAccessor);
				if (dataToPlot.data.length < 10) return;
				var newChartData = chartData.map(function (eachChart) {
					var plot = _utilsChartDataUtil2["default"].getChartPlotFor(eachChart.config, dataToPlot.data, domainL, domainR);
					return {
						id: eachChart.id,
						config: eachChart.config,
						plot: plot
					};
				});
				this.clearBothCanvas();
	
				this.setState({
					chartData: newChartData,
					plotData: dataToPlot.data,
					interval: dataToPlot.interval,
					secretToSuperFastCanvasDraw: []
				});
			}
		}, {
			key: "handlePanStart",
			value: function handlePanStart(panStartDomain, panOrigin) {
				// console.log("panStartDomain - ", panStartDomain, ", panOrigin - ", panOrigin);
				this.setState({
					panInProgress: true,
					panStartDomain: panStartDomain,
					panOrigin: panOrigin,
					focus: true
				});
			}
		}, {
			key: "panHelper",
			value: function panHelper(mousePosition) {
				var _state5 = this.state;
				var data = _state5.data;
				var mainChart = _state5.mainChart;
				var chartData = _state5.chartData;
				var interval = _state5.interval;
				var panStartDomain = _state5.panStartDomain;
				var panOrigin = _state5.panOrigin;
	
				var chart = chartData.filter(function (eachChart) {
					return eachChart.id === mainChart;
				})[0],
				    domainRange = panStartDomain[1] - panStartDomain[0],
				    fullData = data[interval],
				    last = fullData[fullData.length - 1],
				    first = fullData[0],
				    dx = mousePosition[0] - panOrigin[0],
				    xAccessor = chart.config.xAccessor;
	
				// console.log("pan -- mouse move - ", mousePosition, " dragged by ", dx, " pixels");
	
				var domainStart = getLongValue(panStartDomain[0]) - dx / chart.config.width * domainRange;
				if (domainStart < getLongValue(xAccessor(first)) - Math.floor(domainRange / 3)) {
					domainStart = getLongValue(xAccessor(first)) - Math.floor(domainRange / 3);
				} else {
					domainStart = Math.min(getLongValue(xAccessor(last)) + Math.ceil(domainRange / 3), domainStart + domainRange) - domainRange;
				}
				var domainL = domainStart,
				    domainR = domainStart + domainRange;
				if (panStartDomain[0] instanceof Date) {
					domainL = new Date(domainL);
					domainR = new Date(domainR);
				}
	
				var beginIndex = _utilsUtils2["default"].getClosestItemIndexes(fullData, domainL, xAccessor).left;
				var endIndex = _utilsUtils2["default"].getClosestItemIndexes(fullData, domainR, xAccessor).right;
	
				var filteredData = fullData.slice(beginIndex, endIndex);
	
				var newChartData = chartData.map(function (eachChart) {
					var plot = _utilsChartDataUtil2["default"].getChartPlotFor(eachChart.config, filteredData, domainL, domainR);
					return {
						id: eachChart.id,
						config: eachChart.config,
						plot: plot
					};
				});
				var currentItems = _utilsChartDataUtil2["default"].getCurrentItems(newChartData, mousePosition, filteredData);
	
				var currentCharts = newChartData.filter(function (eachChartData) {
					var top = eachChartData.config.origin[1];
					var bottom = top + eachChartData.config.height;
					return mousePosition[1] > top && mousePosition[1] < bottom;
				}).map(function (eachChartData) {
					return eachChartData.id;
				});
				return {
					plotData: filteredData,
					// show: true,
					mouseXY: mousePosition,
					currentCharts: currentCharts,
					chartData: newChartData,
					currentItems: currentItems
				};
			}
		}, {
			key: "getCurrentCanvasContext",
			value: function getCurrentCanvasContext(canvasList, chartId) {
				var canvasContextList = canvasList.filter(function (each) {
					return parseInt(each.id, 10) === chartId;
				});
				var canvasContext = canvasContextList.length > 0 ? canvasContextList[0].context : undefined;
				return canvasContext;
			}
		}, {
			key: "handlePan",
			value: function handlePan(mousePosition, startDomain) {
				var _this2 = this;
	
				/* can also use plotData, use this if you want to pan and show only within that data set*/
				if (this.state.panStartDomain === null) {
					this.handlePanStart(startDomain, mousePosition);
				} else {
	
					var state = this.panHelper(mousePosition);
					// console.log(this.state.secretToSuperFastCanvasDraw);
					if (this.props.type !== "svg") {
						var _context = this.context;
						var canvasList = _context.canvasList;
						var getCanvasContexts = _context.getCanvasContexts;
						var margin = _context.margin;
	
						var _getCanvasContexts = this.getCanvasContexts();
	
						var axesCanvasContext = _getCanvasContexts.axes;
						var mouseContext = _getCanvasContexts.mouseCoord;
						var chartData = state.chartData;
						var plotData = state.plotData;
	
						requestAnimationFrame(function () {
							_this2.clearCanvas([axesCanvasContext, mouseContext]);
	
							chartData.forEach(function (eachChart) {
								_this2.state.secretToSuperFastCanvasDraw.filter(function (each) {
									return eachChart.id === each.chartId;
								}).forEach(function (each) {
									var _eachChart$plot$scales = eachChart.plot.scales;
									var xScale = _eachChart$plot$scales.xScale;
									var yScale = _eachChart$plot$scales.yScale;
	
									eachChart.config.overlays.filter(function (eachOverlay) {
										return eachOverlay.id === each.seriesId;
									}).forEach(function (eachOverlay) {
										// console.log("Do Stuff here", i);
										var _eachChart$config = eachChart.config;
										var xAccessor = _eachChart$config.xAccessor;
										var compareSeries = _eachChart$config.compareSeries;
										var yAccessor = eachOverlay.yAccessor;
	
										// xScale, yScale, plotData
										each.draw(axesCanvasContext, xScale, yScale, plotData);
									});
									if (each.type === "axis") {
										each.draw(axesCanvasContext, eachChart, xScale, yScale);
									}
								});
							});
							_this2.state.secretToSuperFastCanvasDraw.filter(function (each) {
								return each.chartId === undefined;
							}).filter(function (each) {
								return each.type === "axis";
							}).forEach(function (each) {
								return each.draw(axesCanvasContext, chartData);
							});
	
							_this2.state.secretToSuperFastCanvasDraw.filter(function (each) {
								return each.type === "mouse";
							}).forEach(function (each) {
								return each.draw(mouseContext, _this2.state.show, state.mouseXY, state.currentCharts, state.chartData, state.currentItems);
							});
	
							_this2.state.secretToSuperFastCanvasDraw.filter(function (each) {
								return each.type === "currentcoordinate";
							}).forEach(function (each) {
								return each.draw(mouseContext, _this2.state.show, state.mouseXY, state.currentCharts, state.chartData, state.currentItems);
							});
						});
					} else {
						this.setState(state);
					}
				}
			}
		}, {
			key: "handlePanEnd",
			value: function handlePanEnd(mousePosition) {
				this.clearBothCanvas();
	
				var state = this.panHelper(mousePosition);
				this.setState((0, _objectAssign2["default"])({}, state, {
					show: this.state.show,
					panInProgress: false,
					panStartDomain: null,
					secretToSuperFastCanvasDraw: []
				}));
			}
		}, {
			key: "handleFocus",
			value: function handleFocus(focus) {
				// console.log(focus);
				this.setState({
					focus: focus
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _this3 = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this3.getChildContext(), function () {
						return _react2["default"].createElement(child.type, (0, _objectAssign2["default"])({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					// React.createElement(child.type, objectAssign({ key: child.key, ref: child.ref}, child.props));
	
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					null,
					children
				);
			}
		}]);
	
		return EventHandler;
	})(_utilsPureComponent2["default"]);
	
	EventHandler.defaultProps = {
		defaultDataTransform: [{ transform: _transforms.DummyTransformer }]
	};
	
	EventHandler.childContextTypes = {
		plotData: _react2["default"].PropTypes.array,
		chartData: _react2["default"].PropTypes.array,
		currentItems: _react2["default"].PropTypes.array,
		show: _react2["default"].PropTypes.bool,
		mouseXY: _react2["default"].PropTypes.array,
		interval: _react2["default"].PropTypes.string,
		currentCharts: _react2["default"].PropTypes.array,
		mainChart: _react2["default"].PropTypes.number,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		type: _react2["default"].PropTypes.oneOf(["svg", "hybrid"]).isRequired,
		dateAccessor: _react2["default"].PropTypes.func,
		secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired,
		margin: _react2["default"].PropTypes.object.isRequired,
	
		getCanvasContexts: _react2["default"].PropTypes.func,
		onMouseMove: _react2["default"].PropTypes.func,
		onMouseEnter: _react2["default"].PropTypes.func,
		onMouseLeave: _react2["default"].PropTypes.func,
		onZoom: _react2["default"].PropTypes.func,
		onPanStart: _react2["default"].PropTypes.func,
		onPan: _react2["default"].PropTypes.func,
		onPanEnd: _react2["default"].PropTypes.func,
		panInProgress: _react2["default"].PropTypes.bool.isRequired,
		focus: _react2["default"].PropTypes.bool.isRequired,
		onFocus: _react2["default"].PropTypes.func,
		deltaXY: _react2["default"].PropTypes.func
	};
	
	module.exports = EventHandler;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _shallowEqual = __webpack_require__(21);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var PureComponent = (function (_React$Component) {
		_inherits(PureComponent, _React$Component);
	
		function PureComponent() {
			_classCallCheck(this, PureComponent);
	
			_get(Object.getPrototypeOf(PureComponent.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(PureComponent, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
				return !(0, _shallowEqual2["default"])(this.props, nextProps) || !(0, _shallowEqual2["default"])(this.state, nextState) || !(0, _shallowEqual2["default"])(this.context, nextContext);
			}
		}]);
	
		return PureComponent;
	})(_react2["default"].Component);
	
	module.exports = PureComponent;

/***/ },
/* 21 */
/***/ function(module, exports) {

	// https://github.com/jonschlinkert/is-equal-shallow/
	
	/*
	The MIT License (MIT)
	
	Copyright (c) 2015, Jon Schlinkert.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	*/
	
	'use strict';
	
	function isPrimitive(value) {
		return value == null || typeof value !== 'function' && typeof value !== 'object';
	};
	
	function shallowEqual(a, b) {
		if (!a && !b) {
			return true;
		}
		if (!a && b || a && !b) {
			return false;
		}
	
		var numKeysA = 0,
		    numKeysB = 0,
		    key;
		for (key in b) {
			numKeysB++;
			if ( /* !isPrimitive(b[key]) || */!a.hasOwnProperty(key) || a[key] !== b[key]) {
				// console.log(key, a, b);
				return false;
			}
		}
		for (key in a) {
			numKeysA++;
		}
		return numKeysA === numKeysB;
	};
	
	module.exports = shallowEqual;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var CanvasContainer = (function (_React$Component) {
		_inherits(CanvasContainer, _React$Component);
	
		function CanvasContainer() {
			_classCallCheck(this, CanvasContainer);
	
			_get(Object.getPrototypeOf(CanvasContainer.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(CanvasContainer, [{
			key: "getCanvasContexts",
			value: function getCanvasContexts() {
				var axesCanvasDOM = _utilsUtils2["default"].isReactVersion14() ? this.refs.canvas_axes : _react2["default"].findDOMNode(this.refs.canvas_axes);
	
				var mouseCoordDOM = _utilsUtils2["default"].isReactVersion14() ? this.refs.canvas_mouse_coordinates : _react2["default"].findDOMNode(this.refs.canvas_mouse_coordinates);
	
				if (this.refs.canvas_axes) {
					return {
						axes: axesCanvasDOM.getContext('2d'),
						mouseCoord: mouseCoordDOM.getContext('2d')
					};
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _props = this.props;
				var height = _props.height;
				var width = _props.width;
				var type = _props.type;
	
				if (type === "svg") return null;
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement("canvas", { ref: "canvas_axes", width: width, height: height,
						style: { position: "absolute", left: 0, top: 0, zIndex: -1 } }),
					_react2["default"].createElement("canvas", { ref: "canvas_mouse_coordinates", width: width, height: height,
						style: { position: "absolute", left: 0, top: 0, zIndex: -1 } })
				);
			}
		}]);
	
		return CanvasContainer;
	})(_react2["default"].Component);
	
	CanvasContainer.propTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		type: _react2["default"].PropTypes.string.isRequired
	};
	
	module.exports = CanvasContainer;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utilsPureComponent = __webpack_require__(20);
	
	var _utilsPureComponent2 = _interopRequireDefault(_utilsPureComponent);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(4);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var Chart = (function (_PureComponent) {
		_inherits(Chart, _PureComponent);
	
		function Chart() {
			_classCallCheck(this, Chart);
	
			_get(Object.getPrototypeOf(Chart.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Chart, [{
			key: "getChildContext",
			value: function getChildContext() {
				var _this = this;
	
				var chartData = this.context.chartData.filter(function (each) {
					return each.id === _this.props.id;
				})[0];
	
				var originX = 0.5 + chartData.config.origin[0] + this.context.margin.left;
				var originY = 0.5 + chartData.config.origin[1] + this.context.margin.top;
	
				return {
					chartId: this.props.id,
					xScale: chartData.plot.scales.xScale,
					yScale: chartData.plot.scales.yScale,
					xAccessor: chartData.config.xAccessor,
					overlays: chartData.config.overlays,
					compareSeries: chartData.config.compareSeries,
					chartData: chartData,
					width: chartData.config.width,
					height: chartData.config.height,
					canvasOriginX: originX,
					canvasOriginY: originY
				};
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var origin = _utilsChartDataUtil2["default"].getChartOrigin(this.props.origin, this.context.width, this.context.height);
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this2.getChildContext(), function () {
						return _react2["default"].createElement(child.type, (0, _objectAssign2["default"])({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					// React.createElement(child.type, objectAssign({ key: child.key, ref: child.ref}, child.props));
					return newChild;
				});
				var x = origin[0]; // + 0.5; // refer to http://www.rgraph.net/docs/howto-get-crisp-lines-with-no-antialias.html - similar fix for svg here
				var y = origin[1]; // + 0.5; // refer to http://www.rgraph.net/docs/howto-get-crisp-lines-with-no-antialias.html - similar fix for svg here
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + x + ", " + y + ")" },
					children
				);
			}
		}]);
	
		return Chart;
	})(_utilsPureComponent2["default"]);
	
	Chart.propTypes = {
		height: _react2["default"].PropTypes.number,
		width: _react2["default"].PropTypes.number,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired,
		id: _react2["default"].PropTypes.number.isRequired,
		xScale: _react2["default"].PropTypes.func,
		yScale: _react2["default"].PropTypes.func,
		xDomainUpdate: _react2["default"].PropTypes.bool,
		yDomainUpdate: _react2["default"].PropTypes.bool,
		yMousePointerDisplayLocation: _react2["default"].PropTypes.oneOf(["left", "right"]),
		yMousePointerDisplayFormat: _react2["default"].PropTypes.func,
		padding: _react2["default"].PropTypes.object.isRequired
	};
	
	Chart.defaultProps = {
		namespace: "ReStock.Chart",
		transformDataAs: "none",
		yDomainUpdate: true,
		origin: [0, 0],
		padding: { top: 0, right: 0, bottom: 0, left: 0 },
		id: 0
	};
	
	Chart.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		chartData: _react2["default"].PropTypes.array,
		margin: _react2["default"].PropTypes.object.isRequired,
		type: _react2["default"].PropTypes.string.isRequired
	};
	
	Chart.childContextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		chartData: _react2["default"].PropTypes.object.isRequired,
		overlays: _react2["default"].PropTypes.array.isRequired,
		compareSeries: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		canvasOriginX: _react2["default"].PropTypes.number,
		canvasOriginY: _react2["default"].PropTypes.number,
		chartId: _react2["default"].PropTypes.number.isRequired
	};
	
	module.exports = Chart;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var DataSeries = (function (_React$Component) {
		_inherits(DataSeries, _React$Component);
	
		function DataSeries() {
			_classCallCheck(this, DataSeries);
	
			_get(Object.getPrototypeOf(DataSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(DataSeries, [{
			key: "getChildContext",
			value: function getChildContext() {
				var _this = this;
	
				var overlay = this.context.overlays.filter(function (each) {
					return each.id === _this.props.id;
				})[0];
	
				return {
					seriesId: this.props.id,
					yAccessor: overlay.yAccessor,
					indicator: overlay.indicator,
					stroke: overlay.stroke,
					fill: overlay.fill
				};
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this2.getChildContext(), function () {
						return _react2["default"].createElement(child.type, (0, _objectAssign2["default"])({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					// React.createElement(child.type, objectAssign({ key: child.key, ref: child.ref}, child.props));
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					{ style: { "clipPath": "url(#chart-area-clip)" } },
					children
				);
			}
		}]);
	
		return DataSeries;
	})(_react2["default"].Component);
	
	DataSeries.propTypes = {
		// type: React.PropTypes.oneOf(["sma", "ema"]),
		id: _react2["default"].PropTypes.number.isRequired,
		// stroke: React.PropTypes.string
		// xAccessor: React.PropTypes.func,
		yAccessor: _react2["default"].PropTypes.func,
		indicator: _react2["default"].PropTypes.func,
		options: _react2["default"].PropTypes.object
	};
	DataSeries.defaultProps = {
		namespace: "ReStock.DataSeries",
		compareBase: function compareBase(d) {
			return d.close;
		}
	};
	DataSeries.contextTypes = {
		overlays: _react2["default"].PropTypes.array.isRequired
	};
	DataSeries.childContextTypes = {
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		indicator: _react2["default"].PropTypes.func,
		stroke: _react2["default"].PropTypes.string,
		fill: _react2["default"].PropTypes.string,
		seriesId: _react2["default"].PropTypes.number.isRequired
	};
	module.exports = DataSeries;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var mousemove = "mousemove.pan",
	    mouseup = "mouseup.pan";
	
	function d3Window(node) {
		var d3win = node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
		return d3win;
	}
	
	var EventCapture = (function (_React$Component) {
		_inherits(EventCapture, _React$Component);
	
		function EventCapture(props) {
			_classCallCheck(this, EventCapture);
	
			_get(Object.getPrototypeOf(EventCapture.prototype), "constructor", this).call(this, props);
			this.handleEnter = this.handleEnter.bind(this);
			this.handleLeave = this.handleLeave.bind(this);
			this.handleWheel = this.handleWheel.bind(this);
			this.handleMouseMove = this.handleMouseMove.bind(this);
			this.handleMouseDown = this.handleMouseDown.bind(this);
			this.handlePanEnd = this.handlePanEnd.bind(this);
			this.handlePan = this.handlePan.bind(this);
		}
	
		_createClass(EventCapture, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				if (this.context.onFocus) this.context.onFocus(this.props.defaultFocus);
			}
		}, {
			key: "handleEnter",
			value: function handleEnter() {
				if (this.context.onMouseEnter) {
					this.context.onMouseEnter();
				}
			}
		}, {
			key: "handleLeave",
			value: function handleLeave() {
				if (this.context.onMouseLeave) {
					this.context.onMouseLeave();
				}
			}
		}, {
			key: "handleWheel",
			value: function handleWheel(e) {
				if (this.props.zoom && this.context.onZoom && this.context.focus) {
					e.stopPropagation();
					e.preventDefault();
					var zoomDir = e.deltaY > 0 ? this.props.zoomMultiplier : -this.props.zoomMultiplier;
					var newPos = _utilsUtils2["default"].mousePosition(e);
					this.context.onZoom(zoomDir, newPos);
				}
			}
		}, {
			key: "handleMouseMove",
			value: function handleMouseMove(e) {
				if (this.context.onMouseMove && this.props.mouseMove) {
					if (!this.context.panInProgress) {
						var newPos = _utilsUtils2["default"].mousePosition(e);
						this.context.onMouseMove(newPos);
					}
				}
			}
		}, {
			key: "handleMouseDown",
			value: function handleMouseDown(e) {
				var _this = this;
	
				var mouseEvent = e || _d32["default"].event;
	
				var chartData = this.context.chartData.filter(function (each) {
					return each.id === _this.props.mainChart;
				})[0];
				if (this.props.pan && this.context.onPanStart) {
					var mouseXY = _utilsUtils2["default"].mousePosition(mouseEvent);
					this.context.onPanStart(chartData.plot.scales.xScale.domain(), mouseXY);
	
					var dx = mouseEvent.pageX - mouseXY[0],
					    dy = mouseEvent.pageY - mouseXY[1];
	
					var captureDOM = _utilsUtils2["default"].isReactVersion14() ? this.refs.capture : _react2["default"].findDOMNode(this.refs.capture);
	
					var win = d3Window(captureDOM);
					_d32["default"].select(win).on(mousemove, this.handlePan).on(mouseup, this.handlePanEnd);
	
					this.context.deltaXY([dx, dy]);
				} else {
					if (!this.context.focus && this.context.onFocus) this.context.onFocus(true);
				}
				mouseEvent.preventDefault();
			}
		}, {
			key: "handlePan",
			value: function handlePan() {
				var _this2 = this;
	
				// console.log("handlePan")
	
				var deltaXY = this.context.deltaXY();
				var newPos = [_d32["default"].event.pageX - deltaXY[0], _d32["default"].event.pageY - deltaXY[1]];
				// console.log("moved from- ", startXY, " to ", newPos);
				if (this.props.pan && this.context.onPan) {
					var chartData = this.context.chartData.filter(function (each) {
						return each.id === _this2.props.mainChart;
					})[0];
					this.context.onPan(newPos, chartData.plot.scales.xScale.domain());
				}
			}
		}, {
			key: "handlePanEnd",
			value: function handlePanEnd(event) {
				var deltaXY = this.context.deltaXY();
				var newPos = [_d32["default"].event.pageX - deltaXY[0], _d32["default"].event.pageY - deltaXY[1]];
	
				var captureDOM = _utilsUtils2["default"].isReactVersion14() ? this.refs.capture : _react2["default"].findDOMNode(this.refs.capture);
	
				var win = d3Window(captureDOM);
	
				_d32["default"].select(win).on(mousemove, null).on(mouseup, null);
				if (this.props.pan && this.context.onPanEnd) {
					this.context.onPanEnd(newPos);
				}
				// e.preventDefault();
			}
		}, {
			key: "handleTouchStart",
			value: function handleTouchStart(e) {
				console.log("handleTouchStart", e);
			}
		}, {
			key: "handleTouchEnd",
			value: function handleTouchEnd(e) {
				console.log("handleTouchEnd", e);
			}
		}, {
			key: "handleTouchMove",
			value: function handleTouchMove(e) {
				console.log("handleTouchMove", e);
			}
		}, {
			key: "render",
			value: function render() {
				var className = this.context.panInProgress ? "react-stockcharts-grabbing-cursor" : "react-stockcharts-crosshair-cursor";
	
				return _react2["default"].createElement("rect", { ref: "capture",
					className: className,
					width: this.context.width, height: this.context.height, style: { opacity: 0 },
					onMouseEnter: this.handleEnter,
					onMouseLeave: this.handleLeave,
					onMouseMove: this.handleMouseMove,
					onWheel: this.handleWheel,
					onMouseDown: this.handleMouseDown,
	
					onTouchStart: this.handleTouchStart,
					onTouchEnd: this.handleTouchEnd,
					onTouchMove: this.handleTouchMove
				});
			}
		}]);
	
		return EventCapture;
	})(_react2["default"].Component);
	
	EventCapture.propTypes = {
		mainChart: _react2["default"].PropTypes.number.isRequired,
		mouseMove: _react2["default"].PropTypes.bool.isRequired,
		zoom: _react2["default"].PropTypes.bool.isRequired,
		zoomMultiplier: _react2["default"].PropTypes.number.isRequired,
		pan: _react2["default"].PropTypes.bool.isRequired,
		panSpeedMultiplier: _react2["default"].PropTypes.number.isRequired,
		defaultFocus: _react2["default"].PropTypes.bool.isRequired
	};
	
	EventCapture.defaultProps = {
		namespace: "ReStock.EventCapture",
		mouseMove: false,
		zoom: false,
		zoomMultiplier: 1,
		pan: false,
		panSpeedMultiplier: 1,
		defaultFocus: false
	};
	
	EventCapture.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		chartData: _react2["default"].PropTypes.array,
		onMouseMove: _react2["default"].PropTypes.func,
		onMouseEnter: _react2["default"].PropTypes.func,
		onMouseLeave: _react2["default"].PropTypes.func,
		onZoom: _react2["default"].PropTypes.func,
		onPanStart: _react2["default"].PropTypes.func,
		onPan: _react2["default"].PropTypes.func,
		onPanEnd: _react2["default"].PropTypes.func,
		panInProgress: _react2["default"].PropTypes.bool,
		focus: _react2["default"].PropTypes.bool.isRequired,
		onFocus: _react2["default"].PropTypes.func,
		deltaXY: _react2["default"].PropTypes.func
	};
	
	module.exports = EventCapture;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _AreaSeries = __webpack_require__(27);
	
	var _AreaSeries2 = _interopRequireDefault(_AreaSeries);
	
	var _LineSeries = __webpack_require__(31);
	
	var _LineSeries2 = _interopRequireDefault(_LineSeries);
	
	var _CompareSeries = __webpack_require__(32);
	
	var _CompareSeries2 = _interopRequireDefault(_CompareSeries);
	
	var _CandlestickSeries = __webpack_require__(33);
	
	var _CandlestickSeries2 = _interopRequireDefault(_CandlestickSeries);
	
	var _HistogramSeries = __webpack_require__(34);
	
	var _HistogramSeries2 = _interopRequireDefault(_HistogramSeries);
	
	var _KagiSeries = __webpack_require__(35);
	
	var _KagiSeries2 = _interopRequireDefault(_KagiSeries);
	
	var _PointAndFigureSeries = __webpack_require__(36);
	
	var _PointAndFigureSeries2 = _interopRequireDefault(_PointAndFigureSeries);
	
	var _RenkoSeries = __webpack_require__(37);
	
	var _RenkoSeries2 = _interopRequireDefault(_RenkoSeries);
	
	var _MACDSeries = __webpack_require__(38);
	
	var _MACDSeries2 = _interopRequireDefault(_MACDSeries);
	
	var _BollingerSeries = __webpack_require__(40);
	
	var _BollingerSeries2 = _interopRequireDefault(_BollingerSeries);
	
	var _RSISeries = __webpack_require__(41);
	
	var _RSISeries2 = _interopRequireDefault(_RSISeries);
	
	var _StochasticSeries = __webpack_require__(42);
	
	var _StochasticSeries2 = _interopRequireDefault(_StochasticSeries);
	
	var _Area = __webpack_require__(30);
	
	var _Area2 = _interopRequireDefault(_Area);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(39);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	exports["default"] = {
		AreaSeries: _AreaSeries2["default"],
		LineSeries: _LineSeries2["default"],
		CompareSeries: _CompareSeries2["default"],
		CandlestickSeries: _CandlestickSeries2["default"],
		HistogramSeries: _HistogramSeries2["default"],
		KagiSeries: _KagiSeries2["default"],
		PointAndFigureSeries: _PointAndFigureSeries2["default"],
		RenkoSeries: _RenkoSeries2["default"],
		MACDSeries: _MACDSeries2["default"],
		BollingerSeries: _BollingerSeries2["default"],
		RSISeries: _RSISeries2["default"],
		StochasticSeries: _StochasticSeries2["default"],
		Area: _Area2["default"],
		Line: _Line2["default"],
		StraightLine: _StraightLine2["default"],
		wrap: _wrap2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _Area = __webpack_require__(30);
	
	var _Area2 = _interopRequireDefault(_Area);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var AreaSeries = (function (_React$Component) {
		_inherits(AreaSeries, _React$Component);
	
		function AreaSeries() {
			_classCallCheck(this, AreaSeries);
	
			_get(Object.getPrototypeOf(AreaSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(AreaSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var type = props.type;
				var stroke = props.stroke;
				var fill = props.fill;
				var defaultStroke = props.defaultStroke;
				var opacity = props.opacity;
	
				return _react2["default"].createElement(
					"g",
					null,
					_react2["default"].createElement(_Line2["default"], {
						className: className,
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: yAccessor,
						plotData: plotData,
						stroke: stroke, fill: "none",
						type: type }),
					_react2["default"].createElement(_Area2["default"], {
						className: className,
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: yAccessor,
						plotData: plotData,
						stroke: "none", fill: fill, opacity: opacity,
						type: type })
				);
			}
		}]);
	
		return AreaSeries;
	})(_react2["default"].Component);
	
	AreaSeries.propTypes = {
		stroke: _react2["default"].PropTypes.string,
		fill: _react2["default"].PropTypes.string.isRequired,
		opacity: _react2["default"].PropTypes.number.isRequired,
		className: _react2["default"].PropTypes.string
	};
	
	AreaSeries.defaultProps = {
		stroke: "steelblue",
		opacity: 0.5,
		fill: "steelblue"
	};
	
	exports["default"] = (0, _wrap2["default"])(AreaSeries);
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var Line = (function (_React$Component) {
		_inherits(Line, _React$Component);
	
		function Line() {
			_classCallCheck(this, Line);
	
			_get(Object.getPrototypeOf(Line.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Line, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var stroke = props.stroke;
				var fill = props.fill;
				var className = props.className;
	
				className = className.concat(stroke ? "" : " line-stroke");
				return _react2["default"].createElement("path", { d: Line.getPath(props), stroke: stroke, fill: fill, className: className });
			}
		}]);
	
		return Line;
	})(_react2["default"].Component);
	
	Line.propTypes = {
		className: _react2["default"].PropTypes.string,
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired,
		stroke: _react2["default"].PropTypes.string,
		fill: _react2["default"].PropTypes.string,
		type: _react2["default"].PropTypes.string.isRequired
	};
	
	Line.defaultProps = {
		className: "line ",
		fill: "none",
		stroke: "black"
	};
	
	Line.getPath = function (props) {
		var plotData = props.plotData;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
		var dataSeries = _d32["default"].svg.line().defined(function (d) {
			return yAccessor(d) !== undefined;
		}).x(function (d) {
			return xScale(xAccessor(d));
		}).y(function (d) {
			return yScale(yAccessor(d));
		});
		return dataSeries(plotData);
	};
	
	Line.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var stroke = props.stroke;
	
		var path = Line.getPath(props);
	
		ctx.strokeStyle = stroke;
		ctx.beginPath();
	
		var begin = true;
		plotData.forEach(function (d) {
			if (yAccessor(d) === undefined) {
				ctx.stroke();
				ctx.beginPath();
				begin = true;
			} else {
				if (begin) {
					begin = false;
					var x = xScale(xAccessor(d));
					var y = yScale(yAccessor(d));
	
					ctx.moveTo(x, y);
				}
				ctx.lineTo(xScale(xAccessor(d)), yScale(yAccessor(d)));
			}
		});
		ctx.stroke();
	};
	
	exports["default"] = (0, _wrap2["default"])(Line);
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function getDisplayName(Series) {
		var name = Series.displayName || Series.name || "Series";
		return name;
	}
	
	function wrap(WrappedSeries) {
		var BaseCanvasSeries = (function (_React$Component) {
			_inherits(BaseCanvasSeries, _React$Component);
	
			function BaseCanvasSeries() {
				_classCallCheck(this, BaseCanvasSeries);
	
				_get(Object.getPrototypeOf(BaseCanvasSeries.prototype), "constructor", this).apply(this, arguments);
			}
	
			_createClass(BaseCanvasSeries, [{
				key: "componentDidMount",
				value: function componentDidMount() {
					var callback = WrappedSeries.drawOnCanvas;
					if (callback) {
						var type = this.props.type;
						var getCanvasContexts = this.context.getCanvasContexts;
	
						if (type !== "svg" && getCanvasContexts !== undefined) {
							var contexts = getCanvasContexts();
							if (contexts) BaseCanvasSeries.baseReStockDrawOnCanvasHelper(contexts.axes, this.context, this.props, callback);
						}
					}
				}
			}, {
				key: "componentDidUpdate",
				value: function componentDidUpdate() {
					this.componentDidMount();
				}
			}, {
				key: "componentWillMount",
				value: function componentWillMount() {
					this.componentWillReceiveProps(this.props, this.context);
				}
			}, {
				key: "componentWillReceiveProps",
				value: function componentWillReceiveProps(nextProps, nextContext) {
					var callback = WrappedSeries.drawOnCanvas;
					if (callback) {
						var canvasOriginX = nextContext.canvasOriginX;
						var canvasOriginY = nextContext.canvasOriginY;
						var height = nextContext.height;
						var width = nextContext.width;
						var compareSeries = nextContext.compareSeries;
						var indicator = nextContext.indicator;
						var xAccessor = nextContext.xAccessor;
						var yAccessor = nextContext.yAccessor;
						var seriesId = nextContext.seriesId;
						var chartId = nextContext.chartId;
	
						var canvasOrigin = [canvasOriginX, canvasOriginY];
						var draw = BaseCanvasSeries.baseReStockDrawOnCanvas.bind(null, nextProps, callback, canvasOrigin, height, width, compareSeries, indicator, xAccessor, yAccessor);
	
						nextContext.secretToSuperFastCanvasDraw.push({
							chartId: chartId,
							seriesId: seriesId,
							draw: draw
						});
					}
				}
			}, {
				key: "render",
				value: function render() {
					var _context = this.context;
					var type = _context.type;
					var height = _context.height;
					var width = _context.width;
					var compareSeries = _context.compareSeries;
					var indicator = _context.indicator;
					var xAccessor = _context.xAccessor;
					var yAccessor = _context.yAccessor;
					var xScale = _context.xScale;
					var yScale = _context.yScale;
					var plotData = _context.plotData;
					var stroke = _context.stroke;
					var fill = _context.fill;
	
					var callback = WrappedSeries.drawOnCanvas;
	
					if (type !== "svg" && callback !== undefined) return null;
					return _react2["default"].createElement(WrappedSeries, _extends({ ref: "wrappedSeries",
						type: type,
						height: height, width: width,
						compareSeries: compareSeries,
						indicator: indicator,
						xAccessor: xAccessor, yAccessor: yAccessor,
						xScale: xScale, yScale: yScale,
						stroke: stroke, fill: fill,
						plotData: plotData
					}, this.props));
				}
			}]);
	
			return BaseCanvasSeries;
		})(_react2["default"].Component);
	
		;
	
		BaseCanvasSeries.displayName = "wrap(" + getDisplayName(WrappedSeries) + ")";
	
		BaseCanvasSeries.contextTypes = {
			getCanvasContexts: _react2["default"].PropTypes.func,
			canvasOriginX: _react2["default"].PropTypes.number,
			canvasOriginY: _react2["default"].PropTypes.number,
			height: _react2["default"].PropTypes.number.isRequired,
			width: _react2["default"].PropTypes.number.isRequired,
			secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired,
			chartId: _react2["default"].PropTypes.number.isRequired,
			seriesId: _react2["default"].PropTypes.number.isRequired,
			stroke: _react2["default"].PropTypes.string,
			fill: _react2["default"].PropTypes.string,
	
			type: _react2["default"].PropTypes.string,
			indicator: _react2["default"].PropTypes.func,
			xScale: _react2["default"].PropTypes.func.isRequired,
			yScale: _react2["default"].PropTypes.func.isRequired,
			xAccessor: _react2["default"].PropTypes.func.isRequired,
			yAccessor: _react2["default"].PropTypes.func.isRequired,
			compareSeries: _react2["default"].PropTypes.array.isRequired,
			plotData: _react2["default"].PropTypes.array.isRequired
		};
	
		BaseCanvasSeries.baseReStockDrawOnCanvasHelper = function (canvasContext, context, props, callback) {
			var height = context.height;
			var width = context.width;
			var compareSeries = context.compareSeries;
			var indicator = context.indicator;
			var xAccessor = context.xAccessor;
			var yAccessor = context.yAccessor;
			var xScale = context.xScale;
			var yScale = context.yScale;
			var plotData = context.plotData;
			var canvasOriginX = context.canvasOriginX;
			var canvasOriginY = context.canvasOriginY;
	
			var canvasOrigin = [canvasOriginX, canvasOriginY];
			BaseCanvasSeries.baseReStockDrawOnCanvas(props, callback, canvasOrigin, height, width, compareSeries, indicator, xAccessor, yAccessor, canvasContext, xScale, yScale, plotData);
		};
	
		BaseCanvasSeries.baseReStockDrawOnCanvas = function (props, callback, canvasOrigin, height, width, compareSeries, indicator, xAccessor, yAccessor, ctx, xScale, yScale, plotData) {
			ctx.save();
	
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.translate(canvasOrigin[0], canvasOrigin[1]);
	
			ctx.beginPath();
			ctx.rect(-1, -1, width + 1, height + 1);
			ctx.clip();
	
			if (callback) {
				var newProps = (0, _objectAssign2["default"])({}, { height: height, width: width, compareSeries: compareSeries, indicator: indicator, xAccessor: xAccessor, yAccessor: yAccessor }, props);
				callback(newProps, ctx, xScale, yScale, plotData);
			}
	
			ctx.restore();
		};
	
		Object.keys(WrappedSeries)
		// .filter((key) => key !== "propTypes")
		// .filter((key) => key !== "defaultProps")
		.filter(function (key) {
			return key !== "displayName";
		}).filter(function (key) {
			return key !== "contextTypes";
		}).filter(function (key) {
			return key !== "childContextTypes";
		}).forEach(function (key) {
			return BaseCanvasSeries[key] = WrappedSeries[key];
		});
	
		// console.log(Object.keys(BaseCanvasSeries))
		return BaseCanvasSeries;
	}
	
	exports["default"] = wrap;
	module.exports = exports["default"];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var Area = (function (_React$Component) {
		_inherits(Area, _React$Component);
	
		function Area() {
			_classCallCheck(this, Area);
	
			_get(Object.getPrototypeOf(Area.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Area, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var stroke = props.stroke;
				var fill = props.fill;
				var className = props.className;
				var opacity = props.opacity;
	
				className = className.concat(stroke !== undefined ? "" : " line-stroke");
				return _react2["default"].createElement("path", { d: Area.getArea(props), stroke: stroke, fill: fill, className: className, opacity: opacity });
			}
		}]);
	
		return Area;
	})(_react2["default"].Component);
	
	;
	
	Area.propTypes = {
		className: _react2["default"].PropTypes.string,
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired,
		stroke: _react2["default"].PropTypes.string,
		fill: _react2["default"].PropTypes.string,
		opacity: _react2["default"].PropTypes.number,
		type: _react2["default"].PropTypes.string.isRequired,
		base: _react2["default"].PropTypes.func
	};
	
	Area.defaultProps = {
		className: "line ",
		fill: "none",
		opacity: 1
	};
	Area.getArea = function (props) {
		var plotData = props.plotData;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var base = props.base;
	
		var height = yScale.range()[0];
		if (base === undefined) base = function () {
			return height - 1;
		};
	
		var areaSeries = _d32["default"].svg.area().defined(function (d) {
			return yAccessor(d) !== undefined;
		}).x(function (d) {
			return xScale(xAccessor(d));
		}).y0(base.bind(null, yScale)).y1(function (d) {
			return yScale(yAccessor(d));
		});
	
		return areaSeries(plotData);
	};
	
	Area.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var fill = props.fill;
		var stroke = props.stroke;
		var opacity = props.opacity;
		var base = props.base;
	
		var begin = true;
		var height = yScale.range()[0];
		var newBase = base === undefined ? function () {
			return height - 1;
		} : base;
	
		ctx.fillStyle = fill;
		ctx.strokeStyle = stroke;
		ctx.globalAlpha = opacity;
	
		plotData.forEach(function (d) {
			if (yAccessor(d) !== undefined) {
				if (begin) {
					ctx.beginPath();
					begin = false;
					var x = xScale(xAccessor(d));
					var y = yScale(yAccessor(d));
	
					ctx.moveTo(x, newBase(yScale, d));
					ctx.lineTo(x, y);
				}
				ctx.lineTo(xScale(xAccessor(d)), yScale(yAccessor(d)));
			}
		});
	
		var last = plotData[plotData.length - 1];
		ctx.lineTo(xScale(xAccessor(last)), newBase(yScale, last));
	
		if (base !== undefined) {
			plotData.slice().reverse().forEach(function (d) {
				if (yAccessor(d) !== undefined) {
					ctx.lineTo(xScale(xAccessor(d)), base(yScale, d));
				}
			});
		}
		ctx.closePath();
		ctx.fill();
	};
	
	exports["default"] = (0, _wrap2["default"])(Area);
	module.exports = exports["default"];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var LineSeries = (function (_React$Component) {
		_inherits(LineSeries, _React$Component);
	
		function LineSeries() {
			_classCallCheck(this, LineSeries);
	
			_get(Object.getPrototypeOf(LineSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(LineSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var stroke = props.stroke;
				var type = props.type;
	
				return _react2["default"].createElement(_Line2["default"], {
					className: className,
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: yAccessor,
					plotData: plotData,
					stroke: stroke, fill: "none",
					type: type });
			}
		}]);
	
		return LineSeries;
	})(_react2["default"].Component);
	
	LineSeries.propTypes = {
		className: _react2["default"].PropTypes.string
	};
	
	LineSeries.defaultProps = {
		className: "line "
	};
	
	exports["default"] = (0, _wrap2["default"])(LineSeries);
	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var CompareSeries = (function (_React$Component) {
		_inherits(CompareSeries, _React$Component);
	
		function CompareSeries() {
			_classCallCheck(this, CompareSeries);
	
			_get(Object.getPrototypeOf(CompareSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(CompareSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var compareSeries = props.compareSeries;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var plotData = props.plotData;
				var type = props.type;
				var id = props.id;
	
				var thisSeries = compareSeries.filter(function (each) {
					return each.id === id;
				})[0];
				return _react2["default"].createElement(_Line2["default"], {
					className: className,
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: thisSeries.percentYAccessor,
					plotData: plotData,
					stroke: thisSeries.stroke, fill: "none",
					type: type });
			}
		}]);
	
		return CompareSeries;
	})(_react2["default"].Component);
	
	CompareSeries.propTypes = {
		className: _react2["default"].PropTypes.string,
		stroke: _react2["default"].PropTypes.string,
		displayLabel: _react2["default"].PropTypes.string.isRequired,
		id: _react2["default"].PropTypes.number.isRequired
	};
	
	CompareSeries.defaultProps = {
		className: "line "
	};
	
	exports["default"] = (0, _wrap2["default"])(CompareSeries);
	module.exports = exports["default"];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var CandlestickSeries = (function (_React$Component) {
		_inherits(CandlestickSeries, _React$Component);
	
		function CandlestickSeries() {
			_classCallCheck(this, CandlestickSeries);
	
			_get(Object.getPrototypeOf(CandlestickSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(CandlestickSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
	
				return _react2["default"].createElement(
					"g",
					{ className: "react-stockcharts-candlestick" },
					_react2["default"].createElement(
						"g",
						{ className: "react-stockcharts-candlestick-wick", key: "wicks" },
						CandlestickSeries.getWicksSVG(props)
					),
					_react2["default"].createElement(
						"g",
						{ className: "react-stockcharts-candlestick-candle", key: "candles" },
						CandlestickSeries.getCandlesSVG(props)
					)
				);
			}
		}]);
	
		return CandlestickSeries;
	})(_react2["default"].Component);
	
	CandlestickSeries.propTypes = {
		classNames: _react2["default"].PropTypes.shape({
			up: _react2["default"].PropTypes.string,
			down: _react2["default"].PropTypes.string
		}),
		stroke: _react2["default"].PropTypes.shape({
			up: _react2["default"].PropTypes.string,
			down: _react2["default"].PropTypes.string
		}),
		fill: _react2["default"].PropTypes.shape({
			up: _react2["default"].PropTypes.string,
			down: _react2["default"].PropTypes.string
		})
	};
	
	CandlestickSeries.defaultProps = {
		classNames: {
			up: "up",
			down: "down"
		},
		stroke: {
			up: "none",
			down: "none"
		},
		fill: {
			up: "#6BA583",
			down: "red"
		}
	};
	
	CandlestickSeries.getWicksSVG = function (props) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var compareSeries = props.compareSeries;
		var plotData = props.plotData;
	
		var wickData = CandlestickSeries.getWickData(props, xAccessor, yAccessor, xScale, yScale, compareSeries, plotData);
		var wicks = wickData.map(function (d, idx) {
			return _react2["default"].createElement("line", { key: idx,
				className: d.className, stroke: d.stroke, style: { shapeRendering: "crispEdges" },
				x1: d.x1, y1: d.y1,
				x2: d.x2, y2: d.y2 });
		});
		return wicks;
	};
	CandlestickSeries.getCandlesSVG = function (props) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var compareSeries = props.compareSeries;
		var plotData = props.plotData;
	
		var candleData = CandlestickSeries.getCandleData(props, xAccessor, yAccessor, xScale, yScale, compareSeries, plotData);
		var candles = candleData.map(function (d, idx) {
			if (d.width < 0) return _react2["default"].createElement("line", { className: d.className, key: idx, x1: d.x, y1: d.y, x2: d.x, y2: d.y + d.height, stroke: d.fill });else if (d.height === 0) return _react2["default"].createElement("line", { key: idx, x1: d.x, y1: d.y, x2: d.x + d.width, y2: d.y + d.height, stroke: d.fill });
			return _react2["default"].createElement("rect", { className: d.className, key: idx, x: d.x, y: d.y, width: d.width, height: d.height, fill: d.fill, stroke: d.stroke });
		});
		return candles;
	};
	
	CandlestickSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	CandlestickSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var compareSeries = props.compareSeries;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var stroke = props.stroke;
		var fill = props.fill;
	
		var wickData = CandlestickSeries.getWickData(props, xAccessor, yAccessor, xScale, yScale, compareSeries, plotData);
		wickData.forEach(function (d) {
			ctx.beginPath();
			ctx.moveTo(d.x1, d.y1);
			ctx.lineTo(d.x2, d.y2);
			ctx.stroke();
		});
		var candleData = CandlestickSeries.getCandleData(props, xAccessor, yAccessor, xScale, yScale, compareSeries, plotData);
	
		var each,
		    group = { up: [], down: [] };
		for (var i = 0; i < candleData.length; i++) {
			each = candleData[i];
			if (each.direction >= 0) {
				group.up.push(each);
			} else {
				group.down.push(each);
			}
		};
	
		ctx.fillStyle = fill.up;
		group.up.forEach(function (d) {
			if (d.width < 0) {
				// <line className={d.className} key={idx} x1={d.x} y1={d.y} x2={d.x} y2={d.y + d.height}/>
				ctx.beginPath();
				ctx.moveTo(d.x, d.y);
				ctx.lineTo(d.x, d.y + d.height);
				ctx.stroke();
			} else if (d.height === 0) {
				// <line key={idx} x1={d.x} y1={d.y} x2={d.x + d.width} y2={d.y + d.height} />
				ctx.beginPath();
				ctx.moveTo(d.x, d.y);
				ctx.lineTo(d.x + d.width, d.y + d.height);
				ctx.stroke();
			} else {
				ctx.beginPath();
				ctx.rect(d.x, d.y, d.width, d.height);
				ctx.closePath();
				ctx.fill();
			}
		});
	
		ctx.fillStyle = fill.down;
		group.down.forEach(function (d) {
			if (d.width < 0) {
				// <line className={d.className} key={idx} x1={d.x} y1={d.y} x2={d.x} y2={d.y + d.height}/>
				ctx.beginPath();
				ctx.moveTo(d.x, d.y);
				ctx.lineTo(d.x, d.y + d.height);
				ctx.stroke();
			} else if (d.height === 0) {
				// <line key={idx} x1={d.x} y1={d.y} x2={d.x + d.width} y2={d.y + d.height} />
				ctx.beginPath();
				ctx.moveTo(d.x, d.y);
				ctx.lineTo(d.x + d.width, d.y + d.height);
				ctx.stroke();
			} else {
				ctx.beginPath();
				ctx.rect(d.x, d.y, d.width, d.height);
				ctx.closePath();
				ctx.fill();
			}
		});
		// ctx.fillStyle = fillStyle;
	};
	
	CandlestickSeries.getWickData = function (props, xAccessor, yAccessor, xScale, yScale, compareSeries, plotData) {
		var isCompareSeries = compareSeries.length > 0;
	
		var classNames = props.classNames;
	
		var wickData = plotData.filter(function (d) {
			return d.close !== undefined;
		}).map(function (d, idx) {
			// console.log(yAccessor);
			var ohlc = isCompareSeries ? yAccessor(d.compare) : yAccessor(d);
	
			var x1 = Math.round(xScale(xAccessor(d))),
			    y1 = yScale(ohlc.high),
			    x2 = x1,
			    y2 = yScale(ohlc.low),
			    className = ohlc.open <= ohlc.close ? classNames.up : classNames.down;
	
			return {
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2,
				className: className,
				direction: ohlc.close - ohlc.open,
				stroke: "black"
			};
		});
		return wickData;
	};
	
	CandlestickSeries.getCandleData = function (props, xAccessor, yAccessor, xScale, yScale, compareSeries, plotData) {
		var isCompareSeries = compareSeries.length > 0;
	
		var classNames = props.classNames;
		var fill = props.fill;
		var stroke = props.stroke;
	
		var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
		var cw = width / plotData.length * 0.5;
		var candleWidth = Math.round(cw); // Math.floor(cw) % 2 === 0 ? Math.floor(cw) : Math.round(cw);
		var candles = plotData.filter(function (d) {
			return d.close !== undefined;
		}).map(function (d, idx) {
			var ohlc = isCompareSeries ? yAccessor(d.compare) : yAccessor(d);
			var x = Math.round(xScale(xAccessor(d))) - (candleWidth === 1 ? 0 : 0.5 * candleWidth),
			    y = yScale(Math.max(ohlc.open, ohlc.close)),
			    height = Math.abs(yScale(ohlc.open) - yScale(ohlc.close)),
			    className = ohlc.open <= ohlc.close ? classNames.up : classNames.down;
			return {
				// type: "line"
				x: x,
				y: y,
				height: height,
				width: candleWidth,
				className: className,
				fill: ohlc.open <= ohlc.close ? fill.up : fill.down,
				stroke: ohlc.open <= ohlc.close ? stroke.up : stroke.down,
				direction: ohlc.close - ohlc.open
			};
		});
		return candles;
	};
	
	exports["default"] = (0, _wrap2["default"])(CandlestickSeries);
	module.exports = exports["default"];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var HistogramSeries = (function (_React$Component) {
		_inherits(HistogramSeries, _React$Component);
	
		function HistogramSeries() {
			_classCallCheck(this, HistogramSeries);
	
			_get(Object.getPrototypeOf(HistogramSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(HistogramSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
	
				return _react2["default"].createElement(
					"g",
					{ className: "histogram" },
					HistogramSeries.getBarsSVG(props)
				);
			}
		}]);
	
		return HistogramSeries;
	})(_react2["default"].Component);
	
	HistogramSeries.propTypes = {
		baseAt: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.oneOf(["top", "bottom", "middle"]), _react2["default"].PropTypes.number, _react2["default"].PropTypes.func]).isRequired,
		direction: _react2["default"].PropTypes.oneOf(["up", "down"]).isRequired,
		stroke: _react2["default"].PropTypes.string,
		opacity: _react2["default"].PropTypes.number.isRequired,
		fill: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.func, _react2["default"].PropTypes.string]).isRequired,
		className: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.func, _react2["default"].PropTypes.string]).isRequired
	};
	
	HistogramSeries.defaultProps = {
		baseAt: "bottom",
		direction: "up",
		className: "bar",
		stroke: "none",
		fill: "steelblue",
		opacity: 0.5
	};
	
	HistogramSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var height = props.height;
		var width = props.width;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
		var bars = HistogramSeries.getBars(props, xAccessor, yAccessor, xScale, yScale, plotData);
	
		ctx.globalAlpha = props.opacity;
	
		var each,
		    group = {};
		for (var i = 0; i < bars.length; i++) {
			each = bars[i];
			if (each.x !== undefined) {
				if (group[each.fill] === undefined) {
					group[each.fill] = [];
				}
				group[each.fill].push(each);
			}
		};
	
		Object.keys(group).forEach(function (key) {
			if (group[key][0].barWidth < 1) {
				ctx.strokeStyle = key;
			} else {
				ctx.fillStyle = key;
			}
			group[key].forEach(function (d) {
				if (d.barWidth < 1) {
					/* <line key={idx} className={d.className}
	    			stroke={stroke}
	    			fill={fill}
	    			x1={d.x} y1={d.y}
	    			x2={d.x} y2={d.y + d.height} />*/
					ctx.beginPath();
					ctx.moveTo(d.x, d.y);
					ctx.lineTo(d.x, d.y + d.height);
					ctx.stroke();
				} else {
					/* <rect key={idx} className={d.className}
	    		stroke={stroke}
	    		fill={fill}
	    		x={d.x}
	    		y={d.y}
	    		width={d.barWidth}
	    		height={d.height} /> */
					ctx.beginPath();
					ctx.rect(d.x, d.y, d.barWidth, d.height);
					ctx.fill();
				}
			});
		});
	};
	
	HistogramSeries.getBarsSVG = function (props) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var plotData = props.plotData;
	
		var bars = HistogramSeries.getBars(props, xAccessor, yAccessor, xScale, yScale, plotData);
	
		return bars.map(function (d, idx) {
			if (d.barWidth <= 1) {
				return _react2["default"].createElement("line", { key: idx, className: d.className,
					stroke: d.stroke,
					fill: d.fill,
					x1: d.x, y1: d.y,
					x2: d.x, y2: d.y + d.height });
			}
			return _react2["default"].createElement("rect", { key: idx, className: d.className,
				stroke: d.stroke,
				fill: d.fill,
				x: d.x,
				y: d.y,
				width: d.barWidth,
				opacity: props.opacity,
				height: d.height });
		});
	};
	
	HistogramSeries.getBars = function (props, xAccessor, yAccessor, xScale, yScale, plotData) {
		var baseAt = props.baseAt;
		var direction = props.direction;
		var className = props.className;
		var fill = props.fill;
		var stroke = props.stroke;
	
		var base = baseAt === "top" ? 0 : baseAt === "bottom" ? yScale.range()[0] : baseAt === "middle" ? (yScale.range()[0] + yScale.range()[1]) / 2 : baseAt;
	
		var dir = direction === "up" ? -1 : 1;
	
		var getClassName = function getClassName() {
			return className;
		};
		if (typeof className === "function") {
			getClassName = className;
		}
	
		var getFill = function getFill() {
			return fill;
		};
		if (typeof fill === "function") {
			getFill = fill;
		}
	
		var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
		var barWidth = width / plotData.length * 0.5;
	
		var bars = plotData.filter(function (d) {
			return yAccessor(d) !== undefined;
		}).map(function (d, idx) {
			var yValue = yAccessor(d);
			var x = xScale(xAccessor(d)) - 0.5 * barWidth,
			    className = getClassName(d),
			    y,
			    height;
	
			var newBase = base;
			if (typeof base === "function") {
				newBase = base(xScale, yScale, d);
			}
	
			if (dir > 0) {
				y = newBase;
				height = yScale.range()[0] - yScale(yValue);
			} else {
				y = yScale(yValue);
				height = newBase - y;
			}
	
			if (height < 0) {
				y = newBase;
				height = -height;
			}
			return {
				barWidth: barWidth,
				height: height,
				x: x,
				y: y,
				className: className,
				stroke: stroke,
				fill: getFill(d)
			};
		});
		return bars;
	};
	
	exports["default"] = (0, _wrap2["default"])(HistogramSeries);
	module.exports = exports["default"];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var KagiSeries = (function (_React$Component) {
		_inherits(KagiSeries, _React$Component);
	
		function KagiSeries() {
			_classCallCheck(this, KagiSeries);
	
			_get(Object.getPrototypeOf(KagiSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(KagiSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var stroke = props.stroke;
				var fill = props.fill;
				var strokeWidth = props.strokeWidth;
				var xAccessor = props.xAccessor;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var plotData = props.plotData;
	
				var paths = KagiSeries.helper(plotData, xAccessor).map(function (each, i) {
					var dataSeries = _d32["default"].svg.line().x(function (item) {
						return xScale(item[0]);
					}).y(function (item) {
						return yScale(item[1]);
					}).interpolate("step-before");
					return _react2["default"].createElement("path", { key: i, d: dataSeries(each.plot), className: each.type,
						stroke: stroke[each.type], fill: fill[each.type], strokeWidth: strokeWidth });
				});
				return _react2["default"].createElement(
					"g",
					{ className: className },
					paths
				);
			}
		}]);
	
		return KagiSeries;
	})(_react2["default"].Component);
	
	KagiSeries.defaultProps = {
		className: "react-stockcharts-kagi",
		strokeWidth: 2,
		stroke: {
			yang: "#6BA583",
			yin: "#E60000"
		},
		fill: {
			yang: "none",
			yin: "none"
		}
	};
	
	KagiSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	KagiSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var stroke = props.stroke;
		var fill = props.fill;
		var strokeWidth = props.strokeWidth;
	
		var begin = true;
	
		var paths = KagiSeries.helper(plotData, xAccessor).forEach(function (each, i) {
			ctx.strokeStyle = stroke[each.type];
			ctx.lineWidth = strokeWidth;
	
			ctx.beginPath();
			var prevX, prevY;
			each.plot.forEach(function (d) {
				var x = xScale(d[0]);
				var y = yScale(d[1]);
	
				if (begin) {
					ctx.moveTo(x, y);
					begin = false;
				} else {
					if (prevX !== undefined) {
						ctx.lineTo(prevX, y);
					}
					ctx.lineTo(x, y);
				}
				prevX = x;
				prevY = y;
	
				// console.log(d);
			});
			ctx.stroke();
		});
	};
	
	KagiSeries.helper = function (plotData, xAccessor) {
		var kagiLine = [];
		var kagi = {};
		for (var i = 0; i < plotData.length; i++) {
			var d = plotData[i];
			if (d.close === undefined) continue;
			if (kagi.type === undefined) kagi.type = d.startAs;
			if (kagi.plot === undefined) kagi.plot = [];
			var idx = xAccessor(d);
			kagi.plot.push([idx, d.open]);
	
			if (d.changeTo !== undefined) {
				kagi.plot.push([idx, d.changePoint]);
				// console.log(d, idx);
				kagi.added = true;
				kagiLine.push(kagi);
	
				kagi = {
					type: d.changeTo,
					plot: [],
					added: false
				};
				kagi.plot.push([idx, d.changePoint]);
			}
		}
		if (!kagi.added) {
			kagiLine.push(kagi);
		}
	
		return kagiLine;
	};
	
	exports["default"] = (0, _wrap2["default"])(KagiSeries);
	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var PointAndFigureSeries = (function (_React$Component) {
		_inherits(PointAndFigureSeries, _React$Component);
	
		function PointAndFigureSeries() {
			_classCallCheck(this, PointAndFigureSeries);
	
			_get(Object.getPrototypeOf(PointAndFigureSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(PointAndFigureSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var xScale = props.xScale;
				var xAccessor = props.xAccessor;
				var yScale = props.yScale;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
	
				var columns = PointAndFigureSeries.getColumns(xScale, xAccessor, yScale, yAccessor, plotData);
				var stroke = props.stroke;
				var fill = props.fill;
				var strokeWidth = props.strokeWidth;
				var className = props.className;
	
				return _react2["default"].createElement(
					"g",
					null,
					columns.map(function (col, idx) {
						return _react2["default"].createElement(
							"g",
							{ key: idx, className: col.className, transform: "translate(" + col.offset[0] + ", " + col.offset[1] + ")" },
							col.boxes.map(function (box, i) {
								if (col.direction > 0) {
									return _react2["default"].createElement(
										"g",
										{ key: idx + "-" + i },
										_react2["default"].createElement("line", { className: "up", strokeWidth: strokeWidth, stroke: stroke.up, fill: fill.up,
											x1: 0, y1: box.open, x2: box.columnWidth, y2: box.close }),
										_react2["default"].createElement("line", { className: "up", strokeWidth: strokeWidth, stroke: stroke.up, fill: fill.up,
											x1: 0, y1: box.close, x2: box.columnWidth, y2: box.open })
									);
								}
								return _react2["default"].createElement("ellipse", { key: idx + "-" + i,
									className: "down", strokeWidth: strokeWidth, stroke: stroke.down, fill: fill.down,
									cx: box.columnWidth / 2, cy: (box.open + box.close) / 2,
									rx: box.columnWidth / 2, ry: box.boxHeight / 2 });
							})
						);
					})
				);
			}
		}]);
	
		return PointAndFigureSeries;
	})(_react2["default"].Component);
	
	PointAndFigureSeries.defaultProps = {
		className: "react-stockcharts-point-and-figure",
		strokeWidth: 1,
		stroke: {
			up: "#6BA583",
			down: "red"
		},
		fill: {
			up: "none",
			down: "none"
		}
	};
	
	PointAndFigureSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	PointAndFigureSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
		var columns = PointAndFigureSeries.getColumns(xScale, xAccessor, yScale, yAccessor, plotData);
		var stroke = props.stroke;
		var fill = props.fill;
		var strokeWidth = props.strokeWidth;
		var className = props.className;
	
		columns.forEach(function (col) {
			var _col$offset = _slicedToArray(col.offset, 2);
	
			var offsetX = _col$offset[0];
			var offsetY = _col$offset[1];
	
			col.boxes.forEach(function (box) {
				if (col.direction > 0) {
					ctx.fillStyle = fill.up;
					ctx.strokeStyle = stroke.up;
	
					ctx.beginPath();
	
					ctx.moveTo(offsetX, offsetY + box.open);
					ctx.lineTo(offsetX + box.columnWidth, offsetY + box.close);
					ctx.moveTo(offsetX, offsetY + box.close);
					ctx.lineTo(offsetX + box.columnWidth, offsetY + box.open);
	
					ctx.stroke();
				} else {
					ctx.fillStyle = fill.down;
					ctx.strokeStyle = stroke.down;
	
					ctx.beginPath();
	
					var x = offsetX + box.columnWidth / 2;
					var y = offsetY + box.open + box.boxHeight / 2;
					var rx = box.columnWidth / 2;
					var ry = box.boxHeight / 2;
	
					ctx.ellipse(x, y, rx, ry, 0, 0, 2 * Math.PI);
					ctx.stroke();
				}
			});
		});
	
		ctx.stroke();
	};
	
	PointAndFigureSeries.getColumns = function (xScale, xAccessor, yScale, yAccessor, plotData) {
	
		var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
	
		var columnWidth = width / (plotData.length - 1);
	
		var anyBox,
		    j = 0;
		while (anyBox === undefined) {
			if (plotData[j].close !== undefined) {
				anyBox = plotData[j].boxes[0];
			}
			j++;
		}
	
		var boxHeight = Math.abs(yScale(anyBox.open) - yScale(anyBox.close));
	
		var columns = plotData.filter(function (d) {
			return d.close !== undefined;
		}).map(function (d, idx) {
			var boxes = d.boxes.map(function (box, i) {
				return {
					columnWidth: columnWidth,
					boxHeight: boxHeight,
					open: yScale(box.open),
					close: yScale(box.close)
				};
			});
			// y2: yScale(box.close),
			var xOffset = xScale(xAccessor(d)) - columnWidth / 2;
			return {
				boxes: boxes,
				direction: d.direction,
				offset: [xOffset, 0]
			};
		});
		return columns;
	};
	
	exports["default"] = (0, _wrap2["default"])(PointAndFigureSeries);
	module.exports = exports["default"];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var RenkoSeries = (function (_React$Component) {
		_inherits(RenkoSeries, _React$Component);
	
		function RenkoSeries() {
			_classCallCheck(this, RenkoSeries);
	
			_get(Object.getPrototypeOf(RenkoSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(RenkoSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var plotData = props.plotData;
				var xScale = props.xScale;
				var xAccessor = props.xAccessor;
				var yScale = props.yScale;
				var yAccessor = props.yAccessor;
	
				var candles = RenkoSeries.getRenko(props, plotData, xScale, xAccessor, yScale, yAccessor).map(function (each, idx) {
					return _react2["default"].createElement("rect", { key: idx, className: each.className,
						fill: each.fill,
						x: each.x,
						y: each.y,
						width: each.width,
						height: each.height });
				});
	
				return _react2["default"].createElement(
					"g",
					null,
					_react2["default"].createElement(
						"g",
						{ className: "candle" },
						candles
					)
				);
			}
		}]);
	
		return RenkoSeries;
	})(_react2["default"].Component);
	
	RenkoSeries.propTypes = {
		classNames: _react2["default"].PropTypes.shape({
			up: _react2["default"].PropTypes.string,
			down: _react2["default"].PropTypes.string
		}),
		stroke: _react2["default"].PropTypes.shape({
			up: _react2["default"].PropTypes.string,
			down: _react2["default"].PropTypes.string
		}),
		fill: _react2["default"].PropTypes.shape({
			up: _react2["default"].PropTypes.string,
			down: _react2["default"].PropTypes.string
		})
	};
	
	RenkoSeries.defaultProps = {
		classNames: {
			up: "up",
			down: "down"
		},
		stroke: {
			up: "none",
			down: "none"
		},
		fill: {
			up: "#6BA583",
			down: "red"
		}
	};
	
	RenkoSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	RenkoSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
		RenkoSeries.getRenko(props, plotData, xScale, xAccessor, yScale, yAccessor).forEach(function (d) {
			ctx.beginPath();
			ctx.fillStyle = d.fill;
			ctx.strokeStyle = d.stroke;
			ctx.rect(d.x, d.y, d.width, d.height);
			ctx.closePath();
			ctx.fill();
		});
	};
	
	RenkoSeries.getRenko = function (props, plotData, xScale, xAccessor, yScale, yAccessor) {
		var classNames = props.classNames;
		var fill = props.fill;
	
		var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
	
		var candleWidth = width / (plotData.length - 1);
	
		var candles = plotData.filter(function (d) {
			return d.close !== undefined;
		}).map(function (d, idx) {
			var ohlc = yAccessor(d);
			var x = xScale(xAccessor(d)) - 0.5 * candleWidth,
			    y = yScale(Math.max(ohlc.open, ohlc.close)),
			    height = Math.abs(yScale(ohlc.open) - yScale(ohlc.close)),
			    className = ohlc.open <= ohlc.close ? classNames.up : classNames.down,
			    svgfill = ohlc.open <= ohlc.close ? fill.up : fill.down;
	
			return {
				className: className,
				fill: svgfill,
				x: x,
				y: y,
				height: height,
				width: candleWidth
			};
		});
		return candles;
	};
	
	exports["default"] = (0, _wrap2["default"])(RenkoSeries);
	module.exports = exports["default"];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HistogramSeries = __webpack_require__(34);
	
	var _HistogramSeries2 = _interopRequireDefault(_HistogramSeries);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(39);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var MACDSeries = (function (_React$Component) {
		_inherits(MACDSeries, _React$Component);
	
		function MACDSeries() {
			_classCallCheck(this, MACDSeries);
	
			_get(Object.getPrototypeOf(MACDSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(MACDSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var indicator = props.indicator;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var type = props.type;
	
				var options = indicator.options();
	
				return _react2["default"].createElement(
					"g",
					{ className: "macd-series" },
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).MACDLine;
						},
						plotData: plotData,
						stroke: options.stroke.MACDLine, fill: "none",
						type: type }),
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).signalLine;
						},
						plotData: plotData,
						stroke: options.stroke.signalLine, fill: "none",
						type: type }),
					_react2["default"].createElement(_HistogramSeries2["default"], {
						baseAt: function (xScale, yScale, d) {
							return yScale(0);
						},
						className: "macd-histogram",
						stroke: options.stroke.histogram, fill: options.fill.histogram,
						yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).histogram;
						} }),
					MACDSeries.getHorizontalLine(props)
				);
			}
		}]);
	
		return MACDSeries;
	})(_react2["default"].Component);
	
	MACDSeries.getHorizontalLine = function (props) {
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var plotData = props.plotData;
		var type = props.type;
	
		var first = xAccessor(plotData[0]);
		var last = xAccessor(plotData[plotData.length - 1]);
	
		return _react2["default"].createElement(_StraightLine2["default"], {
			stroke: "black", opacity: 0.3, type: type,
			xScale: xScale, yScale: yScale,
			xAccessor: xAccessor, yAccessor: yAccessor,
			plotData: plotData,
			yValue: 0 });
	};
	
	MACDSeries.childContextTypes = {
		yAccessor: _react2["default"].PropTypes.func.isRequired
	};
	
	exports["default"] = (0, _wrap2["default"])(MACDSeries);
	module.exports = exports["default"];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var StraightLine = (function (_React$Component) {
		_inherits(StraightLine, _React$Component);
	
		function StraightLine() {
			_classCallCheck(this, StraightLine);
	
			_get(Object.getPrototypeOf(StraightLine.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(StraightLine, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var stroke = props.stroke;
				var fill = props.fill;
				var className = props.className;
				var opacity = props.opacity;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var yValue = props.yValue;
	
				var first = xAccessor(plotData[0]);
				var last = xAccessor(plotData[plotData.length - 1]);
	
				return _react2["default"].createElement("line", { className: className,
					stroke: stroke, opacity: opacity,
					x1: xScale(first), y1: yScale(yValue),
					x2: xScale(last), y2: yScale(yValue) });
			}
		}]);
	
		return StraightLine;
	})(_react2["default"].Component);
	
	StraightLine.propTypes = {
		className: _react2["default"].PropTypes.string,
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		stroke: _react2["default"].PropTypes.string,
		fill: _react2["default"].PropTypes.string,
		type: _react2["default"].PropTypes.string.isRequired,
		opacity: _react2["default"].PropTypes.number.isRequired,
		yValue: _react2["default"].PropTypes.number.isRequired
	};
	StraightLine.defaultProps = {
		className: "line ",
		fill: "none",
		stroke: "black",
		opacity: 0.5
	};
	
	StraightLine.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var type = props.type;
		var stroke = props.stroke;
		var fill = props.fill;
		var className = props.className;
		var opacity = props.opacity;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var yValue = props.yValue;
	
		var first = xAccessor(plotData[0]);
		var last = xAccessor(plotData[plotData.length - 1]);
	
		ctx.beginPath();
	
		ctx.strokeStyle = stroke;
		ctx.globalAlpha = opacity;
	
		ctx.moveTo(xScale(first), yScale(yValue));
		ctx.lineTo(xScale(last), yScale(yValue));
		ctx.stroke();
	};
	
	exports["default"] = (0, _wrap2["default"])(StraightLine);
	module.exports = exports["default"];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HistogramSeries = __webpack_require__(34);
	
	var _HistogramSeries2 = _interopRequireDefault(_HistogramSeries);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _Area = __webpack_require__(30);
	
	var _Area2 = _interopRequireDefault(_Area);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var BollingerSeries = (function (_React$Component) {
		_inherits(BollingerSeries, _React$Component);
	
		function BollingerSeries() {
			_classCallCheck(this, BollingerSeries);
	
			_get(Object.getPrototypeOf(BollingerSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(BollingerSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var type = props.type;
				var stroke = props.stroke;
				var className = props.className;
				var fill = props.fill;
				var opacity = props.opacity;
	
				return _react2["default"].createElement(
					"g",
					{ className: "bollinger-band-series" },
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).top;
						},
						plotData: plotData,
						stroke: stroke.top, fill: "none",
						type: type }),
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).middle;
						},
						plotData: plotData,
						stroke: stroke.middle, fill: "none",
						type: type }),
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).bottom;
						},
						plotData: plotData,
						stroke: stroke.bottom, fill: "none",
						type: type }),
					_react2["default"].createElement(_Area2["default"], {
						className: className,
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).top;
						},
						base: function (scale, d) {
							return scale(yAccessor(d) && yAccessor(d).bottom);
						},
						plotData: plotData,
						stroke: "none", fill: fill, opacity: opacity,
						type: type })
				);
			}
		}]);
	
		return BollingerSeries;
	})(_react2["default"].Component);
	
	BollingerSeries.defaultProps = {
		stroke: {
			top: "brown",
			middle: "black",
			bottom: "brown"
		},
		fill: "steelblue",
		opacity: 0.2
	};
	
	exports["default"] = (0, _wrap2["default"])(BollingerSeries);
	module.exports = exports["default"];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(39);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var RSISeries = (function (_React$Component) {
		_inherits(RSISeries, _React$Component);
	
		function RSISeries() {
			_classCallCheck(this, RSISeries);
	
			_get(Object.getPrototypeOf(RSISeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(RSISeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var indicator = props.indicator;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var stroke = props.stroke;
				var type = props.type;
	
				var options = indicator.options();
				return _react2["default"].createElement(
					"g",
					{ className: className },
					_react2["default"].createElement(_Line2["default"], {
						className: className,
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: yAccessor,
						plotData: plotData,
						stroke: stroke, fill: "none",
						type: type }),
					RSISeries.getHorizontalLine(props, options.overSold, "brown"),
					RSISeries.getHorizontalLine(props, 50, "black"),
					RSISeries.getHorizontalLine(props, options.overBought, "brown")
				);
			}
		}]);
	
		return RSISeries;
	})(_react2["default"].Component);
	
	RSISeries.getHorizontalLine = function (props, yValue, stroke) {
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var plotData = props.plotData;
		var type = props.type;
	
		return _react2["default"].createElement(_StraightLine2["default"], {
			stroke: stroke, opacity: 0.3, type: type,
			xScale: xScale, yScale: yScale,
			xAccessor: xAccessor, yAccessor: yAccessor,
			plotData: plotData,
			yValue: yValue });
	};
	
	RSISeries.propTypes = {
		className: _react2["default"].PropTypes.string
	};
	
	RSISeries.defaultProps = {
		className: "react-stockcharts-rsi-series"
	};
	
	exports["default"] = (0, _wrap2["default"])(RSISeries);
	module.exports = exports["default"];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(39);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var StochasticSeries = (function (_React$Component) {
		_inherits(StochasticSeries, _React$Component);
	
		function StochasticSeries() {
			_classCallCheck(this, StochasticSeries);
	
			_get(Object.getPrototypeOf(StochasticSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(StochasticSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var indicator = props.indicator;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var stroke = props.stroke;
				var type = props.type;
	
				var options = indicator.options();
	
				return _react2["default"].createElement(
					"g",
					{ className: className },
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).D;
						},
						plotData: plotData,
						stroke: options.stroke.D, fill: "none",
						type: type }),
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).K;
						},
						plotData: plotData,
						stroke: options.stroke.K, fill: "none",
						type: type }),
					StochasticSeries.getHorizontalLine(props, options.overSold, "brown"),
					StochasticSeries.getHorizontalLine(props, 50, "black"),
					StochasticSeries.getHorizontalLine(props, options.overBought, "brown")
				);
			}
		}]);
	
		return StochasticSeries;
	})(_react2["default"].Component);
	
	StochasticSeries.getHorizontalLine = function (props, yValue, stroke) {
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var plotData = props.plotData;
		var type = props.type;
	
		return _react2["default"].createElement(_StraightLine2["default"], {
			stroke: stroke, opacity: 0.3, type: type,
			xScale: xScale, yScale: yScale,
			xAccessor: xAccessor, yAccessor: yAccessor,
			plotData: plotData,
			yValue: yValue });
	};
	
	StochasticSeries.propTypes = {
		className: _react2["default"].PropTypes.string
	};
	
	StochasticSeries.defaultProps = {
		className: "react-stockcharts-rsi-series"
	};
	
	exports["default"] = (0, _wrap2["default"])(StochasticSeries);
	module.exports = exports["default"];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _EdgeContainer = __webpack_require__(44);
	
	var _EdgeContainer2 = _interopRequireDefault(_EdgeContainer);
	
	var _EdgeIndicator = __webpack_require__(45);
	
	var _EdgeIndicator2 = _interopRequireDefault(_EdgeIndicator);
	
	var _MouseCoordinates = __webpack_require__(47);
	
	var _MouseCoordinates2 = _interopRequireDefault(_MouseCoordinates);
	
	var _CurrentCoordinate = __webpack_require__(49);
	
	var _CurrentCoordinate2 = _interopRequireDefault(_CurrentCoordinate);
	
	exports["default"] = {
		EdgeContainer: _EdgeContainer2["default"],
		EdgeIndicator: _EdgeIndicator2["default"],
		MouseCoordinates: _MouseCoordinates2["default"],
		CurrentCoordinate: _CurrentCoordinate2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utilsPureComponent = __webpack_require__(20);
	
	var _utilsPureComponent2 = _interopRequireDefault(_utilsPureComponent);
	
	var EdgeContainer = (function (_PureComponent) {
		_inherits(EdgeContainer, _PureComponent);
	
		function EdgeContainer() {
			_classCallCheck(this, EdgeContainer);
	
			_get(Object.getPrototypeOf(EdgeContainer.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(EdgeContainer, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this.context, function () {
						return _react2["default"].createElement(child.type, (0, _objectAssign2["default"])({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					// React.createElement(child.type, objectAssign({ key: child.key, ref: child.ref}, child.props));
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					null,
					children
				);
			}
		}]);
	
		return EdgeContainer;
	})(_utilsPureComponent2["default"]);
	
	EdgeContainer.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		chartData: _react2["default"].PropTypes.array.isRequired,
		// currentItems: React.PropTypes.array.isRequired,
		axesCanvasContext: _react2["default"].PropTypes.object,
		type: _react2["default"].PropTypes.string,
		margin: _react2["default"].PropTypes.object.isRequired,
		secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired
	};
	
	module.exports = EdgeContainer;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _EdgeCoordinate = __webpack_require__(46);
	
	var _EdgeCoordinate2 = _interopRequireDefault(_EdgeCoordinate);
	
	var _utilsChartDataUtil = __webpack_require__(4);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var EdgeIndicator = (function (_React$Component) {
		_inherits(EdgeIndicator, _React$Component);
	
		function EdgeIndicator(props) {
			_classCallCheck(this, EdgeIndicator);
	
			_get(Object.getPrototypeOf(EdgeIndicator.prototype), "constructor", this).call(this, props);
			this.drawOnCanvas = this.drawOnCanvas.bind(this);
		}
	
		_createClass(EdgeIndicator, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var type = this.props.type;
				var getCanvasContexts = this.context.getCanvasContexts;
	
				if (type !== "svg" && getCanvasContexts !== undefined) {
					var contexts = getCanvasContexts();
					if (contexts) this.drawOnCanvas(contexts.axes);
				}
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.componentDidMount();
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				this.componentWillReceiveProps(this.props, this.context);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps, nextContext) {
				var chartData = nextContext.chartData;
				var margin = nextContext.margin;
				var width = nextContext.width;
	
				var draw = EdgeIndicator.drawOnCanvasStatic.bind(null, margin, nextProps, width);
	
				nextContext.secretToSuperFastCanvasDraw.push({
					type: "axis",
					draw: draw
				});
			}
		}, {
			key: "drawOnCanvas",
			value: function drawOnCanvas(ctx) {
				var _context = this.context;
				var chartData = _context.chartData;
				var margin = _context.margin;
				var width = _context.width;
	
				EdgeIndicator.drawOnCanvasStatic(margin, this.props, width, ctx, chartData);
			}
		}, {
			key: "render",
			value: function render() {
				if (this.context.type !== "svg") return null;
	
				var _context2 = this.context;
				var width = _context2.width;
				var chartData = _context2.chartData;
	
				var edge = EdgeIndicator.helper(this.props, width, chartData);
	
				if (edge === undefined) return null;
				return _react2["default"].createElement(_EdgeCoordinate2["default"], {
					type: edge.type,
					className: "react-stockcharts-edge-coordinate",
					fill: edge.fill,
					show: edge.show,
					x1: edge.x1,
					y1: edge.y1,
					x2: edge.x2,
					y2: edge.y2,
					coordinate: edge.coordinate,
					edgeAt: edge.edgeAt,
					orient: edge.orient });
			}
		}]);
	
		return EdgeIndicator;
	})(_react2["default"].Component);
	
	EdgeIndicator.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		chartData: _react2["default"].PropTypes.array.isRequired,
		getCanvasContexts: _react2["default"].PropTypes.func,
		type: _react2["default"].PropTypes.string,
		margin: _react2["default"].PropTypes.object.isRequired,
		secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired
	};
	
	EdgeIndicator.propTypes = {
		type: _react2["default"].PropTypes.oneOf(["horizontal"]).isRequired,
		className: _react2["default"].PropTypes.string,
		itemType: _react2["default"].PropTypes.oneOf(["first", "last", "current"]).isRequired,
		orient: _react2["default"].PropTypes.oneOf(["left", "right"]),
		edgeAt: _react2["default"].PropTypes.oneOf(["left", "right"]),
		forChart: _react2["default"].PropTypes.number.isRequired,
		forDataSeries: _react2["default"].PropTypes.number.isRequired,
		displayFormat: _react2["default"].PropTypes.func.isRequired
	};
	
	EdgeIndicator.defaultProps = {
		type: "horizontal",
		orient: "left",
		edgeAt: "left",
		displayFormat: _utilsUtils2["default"].displayNumberFormat,
		yAxisPad: 5,
		namespace: "ReStock.EdgeIndicator"
	};
	
	EdgeIndicator.drawOnCanvasStatic = function (margin, props, width, ctx, chartDataArray) {
		var edge = EdgeIndicator.helper(props, width, chartDataArray);
	
		if (edge === undefined) return null;
	
		var originX = margin.left;
		var originY = margin.top;
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(originX, originY);
	
		_EdgeCoordinate2["default"].drawOnCanvasStatic(ctx, edge);
		ctx.restore();
	};
	
	EdgeIndicator.helper = function (props, width, chartData) {
		var edgeType = props.type;
		var displayFormat = props.displayFormat;
		var forChart = props.forChart;
		var forDataSeries = props.forDataSeries;
		var itemType = props.itemType;
		var edgeAt = props.edgeAt;
		var yAxisPad = props.yAxisPad;
		var orient = props.orient;
	
		var currentChartData = _utilsChartDataUtil2["default"].getChartDataForChartNew(chartData, forChart);
		// var currentItem = ChartDataUtil.getCurrentItemForChartNew(currentItems, forChart);
		var edge = null,
		    item,
		    yAccessor;
		// console.log(chartData.config.compareSeries.length);
		var displayFormat = currentChartData.config.compareSeries.length > 0 ? _d32["default"].format(".0%") : displayFormat;
	
		if (forDataSeries !== undefined && currentChartData.config.overlays.length > 0 && currentChartData.plot.overlayValues.length > 0) {
	
			var overlay = currentChartData.config.overlays.filter(function (eachOverlay) {
				return eachOverlay.id === forDataSeries;
			});
			var overlayValue = currentChartData.plot.overlayValues.filter(function (eachOverlayValue) {
				return eachOverlayValue.id === forDataSeries;
			});
	
			item = itemType === "first" ? overlayValue[0].first : overlayValue[0].last;
	
			yAccessor = overlay[0].yAccessor;
	
			if (item !== undefined) {
				var yValue = yAccessor(item),
				    xValue = currentChartData.config.xAccessor(item);
				var x1 = Math.round(currentChartData.plot.scales.xScale(xValue)),
				    y1 = Math.round(currentChartData.plot.scales.yScale(yValue));
	
				var stroke = overlay[0].stroke;
				var edgeX = edgeAt === "left" ? 0 - yAxisPad : width + yAxisPad;
	
				edge = {
					type: edgeType,
					fill: stroke,
					show: true,
					x1: x1 + currentChartData.config.origin[0],
					y1: y1 + currentChartData.config.origin[1],
					x2: edgeX + currentChartData.config.origin[0],
					y2: y1 + currentChartData.config.origin[1],
					coordinate: displayFormat(yValue),
					edgeAt: edgeX,
					orient: orient,
					chartOrigin: currentChartData.config.origin
				};
			}
		}
		return edge;
	};
	
	module.exports = EdgeIndicator;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	// "../utils/Object.assign"
	
	var EdgeCoordinate = (function (_React$Component) {
		_inherits(EdgeCoordinate, _React$Component);
	
		function EdgeCoordinate() {
			_classCallCheck(this, EdgeCoordinate);
	
			_get(Object.getPrototypeOf(EdgeCoordinate.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(EdgeCoordinate, [{
			key: "render",
			value: function render() {
				var className = this.props.className;
	
				var edge = EdgeCoordinate.helper(this.props);
				if (edge === null) return null;
				var line, coordinateBase, coordinate;
	
				if (edge.line !== undefined) {
					line = _react2["default"].createElement("line", {
						className: "react-stockcharts-cross-hair", opacity: edge.line.opacity, stroke: edge.line.stroke,
						x1: edge.line.x1, y1: edge.line.y1,
						x2: edge.line.x2, y2: edge.line.y2 });
				}
				if (edge.coordinateBase !== undefined) {
					coordinateBase = _react2["default"].createElement("rect", { key: 1, className: "react-stockchart-text-background",
						x: edge.coordinateBase.edgeXRect,
						y: edge.coordinateBase.edgeYRect,
						height: edge.coordinateBase.rectHeight, width: edge.coordinateBase.rectWidth,
						fill: edge.coordinateBase.fill, opacity: edge.coordinateBase.opacity });
					coordinate = _react2["default"].createElement(
						"text",
						{ key: 2, x: edge.coordinate.edgeXText,
							y: edge.coordinate.edgeYText,
							textAnchor: edge.coordinate.textAnchor,
							fontFamily: edge.coordinate.fontFamily,
							fontSize: edge.coordinate.fontSize,
							dy: ".32em", fill: edge.coordinate.textFill },
						edge.coordinate.displayCoordinate
					);
				}
				return _react2["default"].createElement(
					"g",
					{ className: className },
					line,
					coordinateBase,
					coordinate
				);
			}
		}]);
	
		return EdgeCoordinate;
	})(_react2["default"].Component);
	
	EdgeCoordinate.propTypes = {
		type: _react2["default"].PropTypes.oneOf(["vertical", "horizontal"]).isRequired,
		coordinate: _react2["default"].PropTypes.any.isRequired,
		x1: _react2["default"].PropTypes.number.isRequired,
		y1: _react2["default"].PropTypes.number.isRequired,
		x2: _react2["default"].PropTypes.number.isRequired,
		y2: _react2["default"].PropTypes.number.isRequired,
		orient: _react2["default"].PropTypes.oneOf(["bottom", "top", "left", "right"]),
		rectWidth: _react2["default"].PropTypes.number,
		hideLine: _react2["default"].PropTypes.bool,
		fill: _react2["default"].PropTypes.string,
		opacity: _react2["default"].PropTypes.number,
		fontFamily: _react2["default"].PropTypes.string.isRequired,
		fontSize: _react2["default"].PropTypes.number.isRequired
	};
	EdgeCoordinate.defaultProps = {
		namespace: "ReStock.EdgeCoordinate",
		orient: "left",
		hideLine: false,
		fill: "#8a8a8a",
		opacity: 1,
		textFill: "white",
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 13
	};
	
	EdgeCoordinate.helper = function (props) {
		var displayCoordinate = props.coordinate;
		var show = props.show;
		var rectWidth = props.rectWidth;
		var type = props.type;
		var orient = props.orient;
		var edgeAt = props.edgeAt;
		var hideLine = props.hideLine;
		var className = props.className;
		var fill = props.fill;
		var opacity = props.opacity;
		var fontFamily = props.fontFamily;
		var fontSize = props.fontSize;
		var textFill = props.textFill;
		var x1 = props.x1;
		var y1 = props.y1;
		var x2 = props.x2;
		var y2 = props.y2;
	
		if (!show) return null;
	
		rectWidth = rectWidth ? rectWidth : type === "horizontal" ? 60 : 100;
		var rectHeight = 20;
	
		var edgeXRect, edgeYRect, edgeXText, edgeYText;
	
		if (type === "horizontal") {
	
			edgeXRect = orient === "right" ? edgeAt + 1 : edgeAt - rectWidth - 1;
			edgeYRect = y1 - rectHeight / 2;
			edgeXText = orient === "right" ? edgeAt + rectWidth / 2 : edgeAt - rectWidth / 2;
			edgeYText = y1;
		} else {
			edgeXRect = x1 - rectWidth / 2;
			edgeYRect = orient === "bottom" ? edgeAt : edgeAt - rectHeight;
			edgeXText = x1;
			edgeYText = orient === "bottom" ? edgeAt + rectHeight / 2 : edgeAt - rectHeight / 2;
		}
		var coordinateBase,
		    coordinate,
		    textAnchor = "middle";
		if (displayCoordinate !== undefined) {
			coordinateBase = {
				edgeXRect: edgeXRect, edgeYRect: edgeYRect, rectHeight: rectHeight, rectWidth: rectWidth, fill: fill, opacity: opacity
			};
			coordinate = {
				edgeXText: edgeXText, edgeYText: edgeYText, textAnchor: textAnchor, fontFamily: fontFamily, fontSize: fontSize, textFill: textFill, displayCoordinate: displayCoordinate
			};
		}
		var line = hideLine ? undefined : {
			opacity: 0.3, stroke: "black", x1: x1, y1: y1, x2: x2, y2: y2
		};
		return {
			coordinateBase: coordinateBase, coordinate: coordinate, line: line
		};
	};
	
	EdgeCoordinate.drawOnCanvasStatic = function (ctx, props) {
		props = (0, _objectAssign2["default"])({}, EdgeCoordinate.defaultProps, props);
	
		var edge = EdgeCoordinate.helper(props);
	
		if (edge === null) return;
	
		if (edge.coordinateBase !== undefined) {
			// var { globalAlpha, fillStyle } = ctx;
			ctx.globalAlpha = edge.coordinateBase.opacity;
			ctx.fillStyle = edge.coordinateBase.fill;
	
			ctx.beginPath();
			ctx.rect(edge.coordinateBase.edgeXRect, edge.coordinateBase.edgeYRect, edge.coordinateBase.rectWidth, edge.coordinateBase.rectHeight);
			ctx.fill();
	
			ctx.font = edge.coordinate.fontSize + "px " + edge.coordinate.fontFamily;
			ctx.fillStyle = edge.coordinate.textFill;
			ctx.textAlign = edge.coordinate.textAnchor === "middle" ? "center" : edge.coordinate.textAnchor;
			ctx.textBaseline = "middle";
	
			ctx.fillText(edge.coordinate.displayCoordinate, edge.coordinate.edgeXText, edge.coordinate.edgeYText);
		}
		if (edge.line !== undefined) {
			ctx.globalAlpha = edge.line.opacity;
			ctx.strokeStyle = edge.line.stroke;
	
			ctx.beginPath();
			ctx.moveTo(edge.line.x1, edge.line.y1);
			ctx.lineTo(edge.line.x2, edge.line.y2);
			ctx.stroke();
		}
	};
	
	module.exports = EdgeCoordinate;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsPureComponent = __webpack_require__(20);
	
	var _utilsPureComponent2 = _interopRequireDefault(_utilsPureComponent);
	
	var _CrossHair = __webpack_require__(48);
	
	var _CrossHair2 = _interopRequireDefault(_CrossHair);
	
	var MouseCoordinates = (function (_PureComponent) {
		_inherits(MouseCoordinates, _PureComponent);
	
		function MouseCoordinates() {
			_classCallCheck(this, MouseCoordinates);
	
			_get(Object.getPrototypeOf(MouseCoordinates.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(MouseCoordinates, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _context = this.context;
				var type = _context.type;
				var getCanvasContexts = _context.getCanvasContexts;
	
				if (type !== "svg" && getCanvasContexts !== undefined) {
					var contexts = getCanvasContexts();
					if (contexts) MouseCoordinates.drawOnCanvas(contexts.mouseCoord, this.context, this.props);
				}
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.componentDidMount();
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				this.componentWillReceiveProps(this.props, this.context);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps, nextContext) {
				var draw = MouseCoordinates.drawOnCanvasStatic.bind(null, nextContext, nextProps);
	
				var temp = nextContext.secretToSuperFastCanvasDraw.filter(function (each) {
					return each.type === "mouse";
				});
				if (temp.length === 0) {
					nextContext.secretToSuperFastCanvasDraw.push({
						type: "mouse",
						draw: draw
					});
				} else {
					temp[0].draw = draw;
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _context2 = this.context;
				var type = _context2.type;
				var mouseXY = _context2.mouseXY;
				var currentCharts = _context2.currentCharts;
				var chartData = _context2.chartData;
				var currentItems = _context2.currentItems;
				var show = _context2.show;
	
				if (type !== "svg") return null;
	
				var pointer = MouseCoordinates.helper(this.context, this.props, show, mouseXY, currentCharts, chartData, currentItems);
	
				if (!pointer) return null;
	
				return _react2["default"].createElement(_CrossHair2["default"], { height: pointer.height, width: pointer.width, mouseXY: pointer.mouseXY,
					xDisplayValue: pointer.xDisplayValue, edges: pointer.edges });
			}
		}]);
	
		return MouseCoordinates;
	})(_utilsPureComponent2["default"]);
	
	MouseCoordinates.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		mainChart: _react2["default"].PropTypes.number.isRequired,
		show: _react2["default"].PropTypes.bool,
		mouseXY: _react2["default"].PropTypes.array,
		dateAccessor: _react2["default"].PropTypes.func,
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		currentCharts: _react2["default"].PropTypes.array.isRequired,
		getCanvasContexts: _react2["default"].PropTypes.func,
		margin: _react2["default"].PropTypes.object.isRequired,
		secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired,
		type: _react2["default"].PropTypes.string.isRequired
	};
	
	MouseCoordinates.propTypes = {
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		yDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		type: _react2["default"].PropTypes.oneOf(["crosshair"]).isRequired
	};
	
	MouseCoordinates.defaultProps = {
		namespace: "ReStock.MouseCoordinates",
		show: false,
		snapX: true,
		type: "crosshair",
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		yDisplayFormat: _utilsUtils2["default"].displayNumberFormat
	};
	
	MouseCoordinates.drawOnCanvas = function (canvasContext, context, props) {
		var mouseXY = context.mouseXY;
		var currentCharts = context.currentCharts;
		var chartData = context.chartData;
		var currentItems = context.currentItems;
		var show = context.show;
	
		MouseCoordinates.drawOnCanvasStatic(context, props, canvasContext, show, mouseXY, currentCharts, chartData, currentItems);
	};
	MouseCoordinates.drawOnCanvasStatic = function (context, props, ctx, show, mouseXY, currentCharts, chartData, currentItems) {
		var margin = context.margin;
	
		var pointer = MouseCoordinates.helper(context, props, show, mouseXY, currentCharts, chartData, currentItems);
	
		if (!pointer) return null;
	
		var originX = 0.5 + margin.left;
		var originY = 0.5 + margin.top;
	
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(originX, originY);
	
		_CrossHair2["default"].drawOnCanvasStatic(ctx, pointer);
		ctx.restore();
	};
	
	MouseCoordinates.helper = function (context, props, show, mouseXY, currentCharts, chartData, currentItems) {
		if (!show) return;
		var mainChart = context.mainChart;
		var dateAccessor = context.dateAccessor;
		var height = context.height;
		var width = context.width;
		var snapX = props.snapX;
		var type = props.type;
		var xDisplayFormat = props.xDisplayFormat;
	
		var edges = chartData.filter(function (eachChartData) {
			return currentCharts.indexOf(eachChartData.id) > -1;
		}).map(function (each) {
			var yDisplayFormat = each.config.compareSeries.length > 0 ? function (d) {
				return (Math.round(d * 10000) / 100).toFixed(2) + "%";
			} : each.config.mouseCoordinates.format;
			var mouseY = mouseXY[1] - each.config.origin[1];
			var yValue = each.plot.scales.yScale.invert(mouseY);
			return {
				id: each.id,
				at: each.config.mouseCoordinates.at,
				yValue: yValue,
				yDisplayFormat: yDisplayFormat
			};
		}).filter(function (each) {
			return each.at !== undefined;
		}).filter(function (each) {
			return each.yDisplayFormat !== undefined;
		}).map(function (each) {
			each.yDisplayValue = each.yDisplayFormat(each.yValue);
			return each;
		});
	
		// console.log(edges);
		var singleChartData = chartData.filter(function (eachChartData) {
			return eachChartData.id === mainChart;
		})[0];
	
		// var yDisplayFormat = singleChartData.config.compareSeries.length > 0 ? (d) => (Math.round(d * 10000) / 100).toFixed(2) + "%" : this.props.yDisplayFormat;
	
		var item = currentItems.filter(function (eachItem) {
			return eachItem.id === mainChart;
		})[0]; // ChartDataUtil.getCurrentItemForChart(this.props, this.context);
		if (item === undefined) return null;
		item = item.data;
		// console.log(singleChartData, item);
		var xValue = singleChartData.config.xAccessor(item);
	
		var xDisplayValue = dateAccessor === undefined ? xValue : dateAccessor(item);
	
		// var yValue = singleChartData.plot.scales.yScale.invert(mouseXY[1]);
		if (xValue === undefined) return null;
		var x = snapX ? Math.round(singleChartData.plot.scales.xScale(xValue)) : mouseXY[0];
		var y = mouseXY[1];
	
		return { height: height, width: width, mouseXY: [x, y], xDisplayValue: xDisplayFormat(xDisplayValue), edges: edges };
	};
	
	module.exports = MouseCoordinates;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _EdgeCoordinate = __webpack_require__(46);
	
	var _EdgeCoordinate2 = _interopRequireDefault(_EdgeCoordinate);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	// "../utils/Object.assign"
	
	var CrossHair = (function (_React$Component) {
		_inherits(CrossHair, _React$Component);
	
		function CrossHair() {
			_classCallCheck(this, CrossHair);
	
			_get(Object.getPrototypeOf(CrossHair.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(CrossHair, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps) {
				return nextProps.mouseXY !== this.props.mouseXY;
			}
		}, {
			key: "render",
			value: function render() {
				var result = CrossHair.helper(this.props);
				var line = result.line;
				var edges = result.edges;
	
				var svgLine = line !== undefined ? _react2["default"].createElement("line", { className: "react-stockcharts-cross-hair", opacity: line.opacity, stroke: line.stroke,
					x1: line.x1, y1: line.y1,
					x2: line.x2, y2: line.y2 }) : null;
				return _react2["default"].createElement(
					"g",
					{ className: "crosshair " },
					svgLine,
					edges.map(function (edge, idx) {
						return _react2["default"].createElement(_EdgeCoordinate2["default"], {
							key: idx,
							type: edge.type,
							className: "horizontal",
							show: edge.show,
							x1: edge.x1, y1: edge.y1,
							x2: edge.x2, y2: edge.y2,
							coordinate: edge.coordinate,
							edgeAt: edge.edgeAt,
							orient: edge.orient,
							hideLine: edge.hideLine
						});
					})
				);
			}
		}]);
	
		return CrossHair;
	})(_react2["default"].Component);
	
	CrossHair.propTypes = {
		yAxisPad: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		mouseXY: _react2["default"].PropTypes.array.isRequired,
		xDisplayValue: _react2["default"].PropTypes.string.isRequired,
		edges: _react2["default"].PropTypes.array.isRequired
	};
	
	CrossHair.defaultProps = {
		namespace: "ReStock.CrossHair",
		yAxisPad: 5
	};
	
	CrossHair.helper = function (props) {
		var width = props.width;
		var edges = props.edges;
		var yAxisPad = props.yAxisPad;
		var mouseXY = props.mouseXY;
		var xDisplayValue = props.xDisplayValue;
		var height = props.height;
	
		var x1 = 0,
		    x2 = width;
	
		var edges = edges.map(function (edge, idx) {
			if (edge.at === "left") {
				x1 = -yAxisPad;
			}
			if (edge.at === "right") {
				x2 = width + yAxisPad;
			}
			return {
				type: "horizontal",
				show: true,
				x1: 0,
				y1: mouseXY[1],
				x2: 0,
				y2: mouseXY[1],
				coordinate: edge.yDisplayValue,
				edgeAt: edge.at === "left" ? x1 : x2,
				orient: edge.at,
				hideLine: true
			};
		});
		edges.push({
			type: "vertical",
			show: true,
			x1: mouseXY[0],
			y1: 0,
			x2: mouseXY[0],
			y2: height,
			coordinate: xDisplayValue,
			edgeAt: height,
			orient: "bottom"
		});
		var line;
		if (edges.length > 1) {
			line = {
				opacity: 0.3,
				stroke: "black",
				x1: x1,
				y1: mouseXY[1],
				x2: x2,
				y2: mouseXY[1]
			};
		}
		return { edges: edges, line: line };
	};
	
	CrossHair.drawOnCanvasStatic = function (ctx, props) {
		props = (0, _objectAssign2["default"])({}, CrossHair.defaultProps, props);
	
		var result = CrossHair.helper(props);
		var line = result.line;
		var edges = result.edges;
	
		edges.forEach(function (edge) {
			return _EdgeCoordinate2["default"].drawOnCanvasStatic(ctx, edge);
		});
	
		if (line) {
			ctx.globalAlpha = line.opacity;
			ctx.strokeStype = line.stroke;
	
			ctx.beginPath();
			ctx.moveTo(line.x1, line.y1);
			ctx.lineTo(line.x2, line.y2);
			ctx.stroke();
		}
	};
	
	module.exports = CrossHair;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var CurrentCoordinate = (function (_React$Component) {
		_inherits(CurrentCoordinate, _React$Component);
	
		function CurrentCoordinate() {
			_classCallCheck(this, CurrentCoordinate);
	
			_get(Object.getPrototypeOf(CurrentCoordinate.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(CurrentCoordinate, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _context = this.context;
				var type = _context.type;
				var getCanvasContexts = _context.getCanvasContexts;
	
				if (type !== "svg" && getCanvasContexts !== undefined) {
					var contexts = getCanvasContexts();
					if (contexts) CurrentCoordinate.drawOnCanvas(contexts.mouseCoord, this.context, this.props);
				}
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.componentDidMount();
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				this.componentWillReceiveProps(this.props, this.context);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps, nextContext) {
				var draw = CurrentCoordinate.drawOnCanvasStatic.bind(null, nextContext, nextProps);
	
				var forChart = nextProps.forChart;
				var forCompareSeries = nextProps.forCompareSeries;
				var forDataSeries = nextProps.forDataSeries;
	
				var temp = nextContext.secretToSuperFastCanvasDraw.filter(function (each) {
					return each.type === "currentcoordinate" && each.forChart === forChart && each.forDataSeries === forDataSeries;
				}).filter(function (each) {
					return each.forCompareSeries === forCompareSeries;
				});
	
				if (temp.length === 0) {
					nextContext.secretToSuperFastCanvasDraw.push({
						type: "currentcoordinate",
						forChart: forChart,
						forDataSeries: forDataSeries,
						forCompareSeries: forCompareSeries,
						draw: draw
					});
				} else {
					temp[0].draw = draw;
				}
			}
		}, {
			key: "render",
			value: function render() {
				var className = this.props.className;
				var _context2 = this.context;
				var type = _context2.type;
				var show = _context2.show;
				var chartData = _context2.chartData;
				var currentItems = _context2.currentItems;
	
				if (type !== "svg") return null;
	
				var circle = CurrentCoordinate.helper(this.props, show, chartData, currentItems);
	
				if (!circle) return null;
	
				return _react2["default"].createElement("circle", { className: className, cx: circle.x, cy: circle.y, r: circle.r, fill: circle.fill });
			}
		}]);
	
		return CurrentCoordinate;
	})(_react2["default"].Component);
	
	CurrentCoordinate.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		forDataSeries: _react2["default"].PropTypes.number.isRequired,
		forCompareSeries: _react2["default"].PropTypes.number,
		yAccessor: _react2["default"].PropTypes.func,
		r: _react2["default"].PropTypes.number.isRequired,
		className: _react2["default"].PropTypes.string
	};
	
	CurrentCoordinate.defaultProps = { namespace: "ReStock.CurrentCoordinate", r: 3 };
	
	CurrentCoordinate.contextTypes = {
		show: _react2["default"].PropTypes.bool.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		chartData: _react2["default"].PropTypes.array.isRequired,
	
		getCanvasContexts: _react2["default"].PropTypes.func,
		margin: _react2["default"].PropTypes.object.isRequired,
		secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired,
		type: _react2["default"].PropTypes.string.isRequired
	};
	
	CurrentCoordinate.drawOnCanvas = function (canvasContext, context, props) {
		var mouseXY = context.mouseXY;
		var currentCharts = context.currentCharts;
		var chartData = context.chartData;
		var currentItems = context.currentItems;
		var show = context.show;
	
		CurrentCoordinate.drawOnCanvasStatic(context, props, canvasContext, show, mouseXY, currentCharts, chartData, currentItems);
	};
	
	CurrentCoordinate.drawOnCanvasStatic = function (context, props, ctx, show, mouseXY, currentCharts, chartData, currentItems) {
		var margin = context.margin;
	
		var circle = CurrentCoordinate.helper(props, show, chartData, currentItems);
	
		if (!circle) return null;
	
		var originX = 0.5 + margin.left;
		var originY = 0.5 + margin.top;
	
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(originX, originY);
	
		ctx.fillStyle = circle.fill;
		ctx.beginPath();
		ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI, false);
		ctx.fill();
		// CurrentCoordinate.drawOnCanvasStatic(ctx, pointer);
		ctx.restore();
	};
	
	CurrentCoordinate.helper = function (props, show, chartData, currentItems) {
		var forChart = props.forChart;
		var forCompareSeries = props.forCompareSeries;
		var forDataSeries = props.forDataSeries;
		var r = props.r;
	
		var chartData = chartData.filter(function (each) {
			return each.id === forChart;
		})[0];
		var currentItem = currentItems.filter(function (each) {
			return each.id === forChart;
		})[0];
		var item = currentItem ? currentItem.data : undefined;
		var fill = "black";
	
		if (!show || item === undefined) return null;
		var yAccessor;
	
		if (forCompareSeries !== undefined) {
			var compSeries = chartData.config.compareSeries.filter(function (each) {
				return each.id === forCompareSeries;
			});
	
			if (compSeries.length !== 1) {
				console.warn("Unique compareSeries with id={%s} not found", forCompareSeries);
				throw new Error("Unique compareSeries not found");
			}
			fill = compSeries[0].stroke;
			yAccessor = compSeries[0].percentYAccessor;
		} else if (forDataSeries !== undefined) {
			var overlays = chartData.config.overlays.filter(function (each) {
				return each.id === forDataSeries;
			});
	
			if (overlays.length !== 1) {
				console.warn("Unique DataSeries with id={%s} not found", forDataSeries);
				throw new Error("Unique DataSeries not found");
			}
	
			fill = overlays[0].stroke;
	
			yAccessor = overlays[0].yAccessor;
		}
	
		var xValue = chartData.config.xAccessor(item);
		var yValue = yAccessor(item);
	
		if (yValue === undefined) return null;
	
		var x = Math.round(chartData.plot.scales.xScale(xValue)) + chartData.config.origin[0];
		var y = Math.round(chartData.plot.scales.yScale(yValue)) + chartData.config.origin[1];
	
		return { x: x, y: y, r: r, fill: fill };
	};
	
	module.exports = CurrentCoordinate;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _MACDIndicator = __webpack_require__(51);
	
	var _MACDIndicator2 = _interopRequireDefault(_MACDIndicator);
	
	var _EMAIndicator = __webpack_require__(52);
	
	var _EMAIndicator2 = _interopRequireDefault(_EMAIndicator);
	
	var _SMAIndicator = __webpack_require__(53);
	
	var _SMAIndicator2 = _interopRequireDefault(_SMAIndicator);
	
	var _BollingerBandIndicator = __webpack_require__(54);
	
	var _BollingerBandIndicator2 = _interopRequireDefault(_BollingerBandIndicator);
	
	var _RSIIndicator = __webpack_require__(55);
	
	var _RSIIndicator2 = _interopRequireDefault(_RSIIndicator);
	
	var _FullStochasticOscillator = __webpack_require__(56);
	
	var _FullStochasticOscillator2 = _interopRequireDefault(_FullStochasticOscillator);
	
	exports["default"] = {
		MACD: _MACDIndicator2["default"],
		EMA: _EMAIndicator2["default"],
		SMA: _SMAIndicator2["default"],
		BollingerBand: _BollingerBandIndicator2["default"],
		RSI: _RSIIndicator2["default"],
		FullStochasticOscillator: _FullStochasticOscillator2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsMovingAverageCalculator = __webpack_require__(9);
	
	var _utilsMovingAverageCalculator2 = _interopRequireDefault(_utilsMovingAverageCalculator);
	
	var _utilsUtilsJs = __webpack_require__(8);
	
	var _utilsUtilsJs2 = _interopRequireDefault(_utilsUtilsJs);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var defaultOptions = {
		fast: 12,
		slow: 26,
		signal: 9,
		pluck: "close",
		fill: {
			MACDLine: 'none',
			signalLine: 'none',
			histogram: 'steelblue'
		},
		stroke: {
			MACDLine: 'red',
			signalLine: 'green',
			histogram: 'steelblue'
		}
	};
	
	function MACDIndicator(options, chartProps, dataSeriesProps) {
	
		var prefix = "chart_" + chartProps.id;
		var key = "overlay_" + dataSeriesProps.id;
	
		var settings = (0, _objectAssign2["default"])({}, defaultOptions, options);
	
		function indicator() {}
		indicator.options = function () {
			return settings;
		};
		indicator.calculate = function (data) {
			// console.log(prefix, options);
			var fastKey = "ema" + settings.fast;
			var slowKey = "ema" + settings.slow;
			var source = settings.pluck;
	
			var setter = function setter(setKey, d, value) {
				if (d[prefix] === undefined) d[prefix] = {};
				if (d[prefix][key] === undefined) d[prefix][key] = {};
				d[prefix][key][setKey] = value;
				return d;
			};
			var getter = function getter(d) {
				return d[settings.pluck];
			};
	
			var newData = _utilsMovingAverageCalculator2["default"].calculateEMANew(data, settings.fast, getter, setter.bind(null, fastKey));
			newData = _utilsMovingAverageCalculator2["default"].calculateEMANew(newData, settings.slow, getter, setter.bind(null, slowKey));
	
			newData.forEach(function (each) {
				if (each[prefix]) {
					if (each[prefix][key][slowKey] && each[prefix][key][fastKey]) {
						// each[prefix][key] = {};
						each[prefix][key].MACDLine = each[prefix][key][fastKey] - each[prefix][key][slowKey];
					}
				}
			});
			newData = _utilsMovingAverageCalculator2["default"].calculateEMANew(newData.slice(settings.slow), settings.signal, function (d) {
				return d[prefix][key].MACDLine;
			}, setter.bind(null, "signalLine"));
	
			newData.forEach(function (each) {
				if (each[prefix] && each[prefix][key]) {
					if (each[prefix][key].MACDLine && each[prefix][key].signalLine) {
						each[prefix][key].histogram = each[prefix][key].MACDLine - each[prefix][key].signalLine;
					}
				}
			});
	
			// console.table(newData);
			// console.log(newData[newData.length - 3]);
			return newData;
		};
		indicator.yAccessor = function () {
			return function (d) {
				if (d && d[prefix] && d[prefix][key]) {
					return { MACDLine: d[prefix][key].MACDLine, signalLine: d[prefix][key].signalLine, histogram: d[prefix][key].histogram };
				}
			};
		};
		indicator.isMACD = function () {
			return true;
		};
		return indicator;
	}
	
	exports["default"] = MACDIndicator;
	module.exports = exports["default"];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsMovingAverageCalculator = __webpack_require__(9);
	
	var _utilsMovingAverageCalculator2 = _interopRequireDefault(_utilsMovingAverageCalculator);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utilsUtils = __webpack_require__(8);
	
	var defaultOptions = {
		pluck: "close"
	};
	
	function EMAIndicator(options, chartProps, dataSeriesProps) {
	
		var prefix = "chart_" + chartProps.id;
		var key = "overlay_" + dataSeriesProps.id;
	
		var settings = (0, _objectAssign2["default"])({}, defaultOptions, options);
		if (typeof settings.pluck === "string") {
			var pluck = settings.pluck;
	
			settings.pluck = function (d) {
				return d[pluck];
			};
		}
	
		var stroke = settings.stroke || (0, _utilsUtils.overlayColors)(dataSeriesProps.id);
	
		function indicator() {}
		indicator.options = function () {
			return settings;
		};
		indicator.stroke = function () {
			return stroke;
		};
		indicator.calculate = function (data) {
	
			var setter = _utilsMovingAverageCalculator2["default"].setter.bind(null, [prefix], key);
	
			var newData = _utilsMovingAverageCalculator2["default"].calculateEMANew(data, settings.period, settings.pluck, setter);
			// console.log(newData[newData.length - 3]);
	
			return newData;
		};
		indicator.yAccessor = function () {
			return function (d) {
				if (d && d[prefix]) return d[prefix][key];
			};
		};
		indicator.tooltipLabel = function () {
			return "EMA (" + settings.period + ")";
		};
		indicator.isMovingAverage = function () {
			return true;
		};
		return indicator;
	}
	
	exports["default"] = EMAIndicator;
	module.exports = exports["default"];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsMovingAverageCalculator = __webpack_require__(9);
	
	var _utilsMovingAverageCalculator2 = _interopRequireDefault(_utilsMovingAverageCalculator);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utilsUtils = __webpack_require__(8);
	
	var defaultOptions = {
		pluck: "close"
	};
	
	function SMAIndicator(options, chartProps, dataSeriesProps) {
	
		var prefix = "chart_" + chartProps.id;
		var key = "overlay_" + dataSeriesProps.id;
	
		var settings = (0, _objectAssign2["default"])({}, defaultOptions, options);
		if (typeof settings.pluck === "string") {
			var pluck = settings.pluck;
	
			settings.pluck = function (d) {
				return d[pluck];
			};
		}
		var stroke = settings.stroke || (0, _utilsUtils.overlayColors)(dataSeriesProps.id);
	
		function indicator() {}
	
		indicator.options = function () {
			return settings;
		};
		indicator.stroke = function () {
			return stroke;
		};
		indicator.calculate = function (data) {
			var setter = _utilsMovingAverageCalculator2["default"].setter.bind(null, [prefix], key);
	
			var newData = _utilsMovingAverageCalculator2["default"].calculateSMANew(data, settings.period, settings.pluck, setter);
			return newData;
		};
		indicator.yAccessor = function () {
			return function (d) {
				if (d && d[prefix]) return d[prefix][key];
			};
		};
		indicator.tooltipLabel = function () {
			return "SMA (" + settings.period + ")";
		};
		indicator.isMovingAverage = function () {
			return true;
		};
		return indicator;
	}
	
	exports["default"] = SMAIndicator;
	module.exports = exports["default"];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsMovingAverageCalculator = __webpack_require__(9);
	
	var _utilsMovingAverageCalculator2 = _interopRequireDefault(_utilsMovingAverageCalculator);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var defaultOptions = {
		period: 20,
		pluck: "close",
		multiplier: 2,
		maType: "sma"
	};
	
	function BollingerBandIndicator(options, chartProps, dataSeriesProps) {
	
		var prefix = "chart_" + chartProps.id;
		var key = "overlay_" + dataSeriesProps.id;
	
		var settings = (0, _objectAssign2["default"])({}, defaultOptions, options);
	
		function indicator() {}
		indicator.options = function () {
			return settings;
		};
		indicator.calculate = function (data) {
			var period = settings.period;
	
			var ma = settings.maType === "sma" ? _utilsMovingAverageCalculator2["default"].calculateSMANew : _utilsMovingAverageCalculator2["default"].calculateEMANew;
			var getter = function getter(d) {
				return d[settings.pluck];
			};
			var setter = _utilsMovingAverageCalculator2["default"].setter.bind(null, [prefix, key], "middle");
			var newData = ma(data, period, getter, setter);
	
			// console.log(period, newData.slice(0, 20));
	
			newData.map(function (each, i) {
				return newData.slice(i - period + 1, i + 1);
			}).filter(function (array) {
				return array.length === period && array.length > 0;
			}).map(function (array) {
				return {
					array: array,
					mean: array[array.length - 1][prefix][key].middle
				};
			}).forEach(function (meanAndArray) {
				var averageOfDeviationSquared = meanAndArray.array.map(getter).map(function (val) {
					return val - meanAndArray.mean;
				}).map(function (val) {
					return val * val;
				}).reduce(function (a, b) {
					return a + b;
				}) / meanAndArray.array.length;
				var standardDev = Math.sqrt(averageOfDeviationSquared);
				var item = meanAndArray.array[meanAndArray.array.length - 1][prefix][key];
				item.top = item.middle + settings.multiplier * standardDev;
				item.bottom = item.middle - settings.multiplier * standardDev;
				// console.log(meanAndArray.array[meanAndArray.array.length - 1]);
			});
			// console.log(newData[newData.length - 1]);
			return newData;
		};
		indicator.yAccessor = function () {
			return function (d) {
				// console.log(d[prefix][key]);
				if (d && d[prefix]) return d[prefix][key];
			};
		};
		indicator.isBollingerBand = function () {
			return true;
		};
		return indicator;
	}
	
	exports["default"] = BollingerBandIndicator;
	module.exports = exports["default"];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var defaultOptions = {
		period: 14,
		pluck: "close",
		overSold: 70,
		overBought: 30
	};
	
	function RSIIndicator(options, chartProps, dataSeriesProps) {
	
		var prefix = "chart_" + chartProps.id;
		var key = "overlay_" + dataSeriesProps.id;
	
		var settings = (0, _objectAssign2["default"])({}, defaultOptions, options);
		function indicator() {}
		indicator.options = function () {
			return settings;
		};
		indicator.calculate = function (data) {
			var period = settings.period;
			var pluck = settings.pluck;
	
			var getter = function getter(d) {
				return d[pluck];
			};
			var now, prev, change;
	
			var first = data[0];
			first[prefix] = {};
			first[prefix][key] = {};
	
			for (var i = 1; i < data.length; i++) {
				now = data[i];
				prev = data[i - 1];
				now[prefix] = {};
				now[prefix][key] = {};
	
				change = getter(now) - getter(prev);
				now[prefix][key].gain = Math.max(change, 0);
				now[prefix][key].loss = Math.min(change, 0);
	
				if (prev[prefix][key].avgGain === undefined) {
					// first avg gain & loss
					if (i >= period) {
						// calculate first average after n periods
						var firstN = data.slice(1, i - 1);
						now[prefix][key].avgGain = firstN.map(function (d) {
							return d[prefix][key].gain;
						}).reduce(function (a, b) {
							return a + b;
						}) / period;
	
						now[prefix][key].avgLoss = firstN.map(function (d) {
							return d[prefix][key].loss;
						}).reduce(function (a, b) {
							return a + b;
						}) / period;
					}
				} else {
					// subsequent avg gain & loss
					now[prefix][key].avgGain = (prev[prefix][key].avgGain * (period - 1) + now[prefix][key].gain) / period;
					now[prefix][key].avgLoss = (prev[prefix][key].avgLoss * (period - 1) + now[prefix][key].loss) / period;
				}
				if (now[prefix][key].avgGain !== undefined) {
					now[prefix][key].relativeStrength = now[prefix][key].avgGain / Math.abs(now[prefix][key].avgLoss);
					now[prefix][key].rsi = 100 - 100 / (1 + now[prefix][key].relativeStrength);
				}
			}
			// console.log(data[data.length - 3]);
			return data;
		};
		indicator.yAccessor = function () {
			return function (d) {
				// console.log(d[prefix][key]);
				if (d && d[prefix]) return d[prefix][key].rsi;
			};
		};
		indicator.domain = function () {
			return [0, 100];
		};
		indicator.yTicks = function () {
			return [settings.overSold, 50, settings.overBought];
		};
		indicator.isRSI = function () {
			return true;
		};
		return indicator;
	}
	
	exports["default"] = RSIIndicator;
	module.exports = exports["default"];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsMovingAverageCalculator = __webpack_require__(9);
	
	var _utilsMovingAverageCalculator2 = _interopRequireDefault(_utilsMovingAverageCalculator);
	
	var _utilsUtilsJs = __webpack_require__(8);
	
	var _utilsUtilsJs2 = _interopRequireDefault(_utilsUtilsJs);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var defaultOptions = {
		period: 12,
		K: 3,
		D: 3,
		ohlc: function ohlc(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		},
		stroke: {
			D: 'green',
			K: 'red'
		},
		overSold: 80,
		overBought: 20
	};
	
	function FullStochasticOscillator(options, chartProps, dataSeriesProps) {
	
		var prefix = "chart_" + chartProps.id;
		var key = "overlay_" + dataSeriesProps.id;
	
		var settings = (0, _objectAssign2["default"])({}, defaultOptions, options);
	
		function indicator() {}
		indicator.options = function () {
			return settings;
		};
		indicator.calculate = function (data) {
			var arr, highAndLow, ohlc;
	
			var setter = function setter(setKey, d, value) {
				if (d[prefix] === undefined) d[prefix] = {};
				if (d[prefix][key] === undefined) d[prefix][key] = {};
				d[prefix][key][setKey] = value;
				return d;
			};
	
			for (var i = settings.period - 1; i < data.length; i++) {
				arr = data.slice(i - settings.period + 1, i + 1);
				highAndLow = arr.map(settings.ohlc).map(function (ohlc) {
					return [ohlc.high, ohlc.low];
				}).reduce(function (a, b) {
					return [Math.max(a[0], b[0]), Math.min(a[1], b[1])];
				});
				ohlc = settings.ohlc(data[i]);
	
				var oscilator = (ohlc.close - highAndLow[1]) / (highAndLow[0] - highAndLow[1]) * 100;
	
				setter("stochasticOscillatorBase", data[i], oscilator);
			}
	
			var newData = _utilsMovingAverageCalculator2["default"].calculateSMANew(data.slice(settings.period), settings.K, function (d) {
				return d[prefix][key].stochasticOscillatorBase;
			}, setter.bind(null, "K"));
	
			newData = _utilsMovingAverageCalculator2["default"].calculateSMANew(newData.slice(settings.period), settings.D, function (d) {
				return d[prefix][key].K;
			}, setter.bind(null, "D"));
	
			// console.log(newData[newData.length - 1]);
			return newData;
		};
		indicator.yAccessor = function () {
			return function (d) {
				if (d && d[prefix] && d[prefix][key]) {
					return { K: d[prefix][key].K, D: d[prefix][key].D };
					// return d[prefix][key].K;
				}
			};
		};
		indicator.domain = function () {
			return [0, 100];
		};
		indicator.yTicks = function () {
			return [settings.overSold, 50, settings.overBought];
		};
		indicator.isStochastic = function () {
			return true;
		};
		return indicator;
	}
	
	exports["default"] = FullStochasticOscillator;
	module.exports = exports["default"];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _XAxis = __webpack_require__(58);
	
	var _XAxis2 = _interopRequireDefault(_XAxis);
	
	var _YAxis = __webpack_require__(62);
	
	var _YAxis2 = _interopRequireDefault(_YAxis);
	
	exports["default"] = {
		XAxis: _XAxis2["default"],
		YAxis: _YAxis2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Axis = __webpack_require__(59);
	
	var _Axis2 = _interopRequireDefault(_Axis);
	
	var XAxis = (function (_React$Component) {
		_inherits(XAxis, _React$Component);
	
		function XAxis() {
			_classCallCheck(this, XAxis);
	
			_get(Object.getPrototypeOf(XAxis.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(XAxis, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var axisAt = _props.axisAt;
				var showTicks = _props.showTicks;
				var tickFormat = _props.tickFormat;
				var ticks = _props.ticks;
	
				var range = this.context.yScale.range(),
				    axisLocation;
				if (axisAt === "top") axisLocation = 0;else if (axisAt === "bottom") axisLocation = this.context.height;else if (axisAt === "middle") axisLocation = this.context.height / 2;else axisLocation = axisAt;
	
				if (tickFormat && this.context.xScale.isPolyLinear && this.context.xScale.isPolyLinear()) {
					console.warn("Cannot set tickFormat on a poly linear scale, ignoring tickFormat on XAxis");
					tickFormat = undefined;
				}
	
				if (ticks) ticks = [ticks];
				return _react2["default"].createElement(_Axis2["default"], _extends({}, this.props, {
					transform: [0, axisLocation],
					showTicks: showTicks, tickFormat: tickFormat, ticks: ticks,
					scale: this.context.xScale }));
			}
		}]);
	
		return XAxis;
	})(_react2["default"].Component);
	
	XAxis.propTypes = {
		axisAt: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.oneOf(["top", "bottom", "middle"]), _react2["default"].PropTypes.number]).isRequired,
		orient: _react2["default"].PropTypes.oneOf(["top", "bottom"]).isRequired,
		innerTickSize: _react2["default"].PropTypes.number,
		outerTickSize: _react2["default"].PropTypes.number,
		tickFormat: _react2["default"].PropTypes.func,
		tickPadding: _react2["default"].PropTypes.number,
		tickSize: _react2["default"].PropTypes.number,
		ticks: _react2["default"].PropTypes.number,
		tickValues: _react2["default"].PropTypes.array,
		showTicks: _react2["default"].PropTypes.bool,
		className: _react2["default"].PropTypes.string
	};
	XAxis.defaultProps = {
		namespace: "ReStock.XAxis",
		showGrid: false,
		showTicks: true,
		className: "react-stockcharts-x-axis",
		ticks: 10
	};
	
	XAxis.contextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		width: _react2["default"].PropTypes.number.isRequired
	};
	
	exports["default"] = XAxis;
	module.exports = exports["default"];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AxisTicks = __webpack_require__(60);
	
	var _AxisTicks2 = _interopRequireDefault(_AxisTicks);
	
	var _AxisLine = __webpack_require__(61);
	
	var _AxisLine2 = _interopRequireDefault(_AxisLine);
	
	var Axis = (function (_React$Component) {
		_inherits(Axis, _React$Component);
	
		function Axis(props) {
			_classCallCheck(this, Axis);
	
			_get(Object.getPrototypeOf(Axis.prototype), "constructor", this).call(this, props);
			this.drawOnCanvas = this.drawOnCanvas.bind(this);
		}
	
		_createClass(Axis, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				this.componentWillReceiveProps(this.props, this.context);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps, nextContext) {
				var axesCanvasContext = nextContext.axesCanvasContext;
				var chartData = nextContext.chartData;
				var margin = nextContext.margin;
				var chartId = nextContext.chartId;
				var canvasOriginX = nextContext.canvasOriginX;
				var canvasOriginY = nextContext.canvasOriginY;
	
				var draw = Axis.drawOnCanvasStatic.bind(null, margin, nextProps, [canvasOriginX, canvasOriginY]);
	
				nextContext.secretToSuperFastCanvasDraw.push({
					chartId: chartId,
					type: "axis",
					draw: draw
				});
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				if (this.props.type !== "svg" && this.context.getCanvasContexts !== undefined) {
					var contexts = this.context.getCanvasContexts();
					if (contexts) this.drawOnCanvas(contexts.axes);
				}
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate(prevProps, prevState, prevContext) {
				this.componentDidMount();
			}
		}, {
			key: "drawOnCanvas",
			value: function drawOnCanvas(ctx) {
				var _context = this.context;
				var chartData = _context.chartData;
				var margin = _context.margin;
				var canvasOriginX = _context.canvasOriginX;
				var canvasOriginY = _context.canvasOriginY;
				var scale = this.props.scale;
	
				Axis.drawOnCanvasStatic(margin, this.props, [canvasOriginX, canvasOriginY], ctx, chartData, scale, scale);
			}
		}, {
			key: "render",
			value: function render() {
				if (this.context.type !== "svg") return null;
	
				var domain = this.props.showDomain ? _react2["default"].createElement(_AxisLine2["default"], this.props) : null;
				var ticks = this.props.showTicks ? _react2["default"].createElement(_AxisTicks2["default"], this.props) : null;
				var className = "";
				if (this.props.className) className = this.props.defaultClassName.concat(this.props.className);
				return _react2["default"].createElement(
					"g",
					{ className: className,
						transform: "translate(" + this.props.transform[0] + ", " + this.props.transform[1] + ")" },
					ticks,
					domain
				);
			}
		}]);
	
		return Axis;
	})(_react2["default"].Component);
	
	Axis.propTypes = {
		className: _react2["default"].PropTypes.string.isRequired,
		orient: _react2["default"].PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
		innerTickSize: _react2["default"].PropTypes.number,
		outerTickSize: _react2["default"].PropTypes.number,
		tickFormat: _react2["default"].PropTypes.func,
		tickPadding: _react2["default"].PropTypes.number,
		tickSize: _react2["default"].PropTypes.number,
		ticks: _react2["default"].PropTypes.array,
		tickValues: _react2["default"].PropTypes.array,
		scale: _react2["default"].PropTypes.func.isRequired,
		showDomain: _react2["default"].PropTypes.bool.isRequired,
		showTicks: _react2["default"].PropTypes.bool.isRequired,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number.isRequired
	};
	
	Axis.defaultProps = {
		defaultClassName: "react-stockcharts-axis ",
		showDomain: true,
		showTicks: true,
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 12
	};
	
	Axis.contextTypes = {
		getCanvasContexts: _react2["default"].PropTypes.func,
		type: _react2["default"].PropTypes.string,
		chartData: _react2["default"].PropTypes.object.isRequired,
		chartId: _react2["default"].PropTypes.number.isRequired,
		margin: _react2["default"].PropTypes.object.isRequired,
		canvasOriginX: _react2["default"].PropTypes.number,
		canvasOriginY: _react2["default"].PropTypes.number,
		secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired
	};
	
	Axis.drawOnCanvasStatic = function (margin, props, canvasOrigin, ctx, chartData, xScale, yScale) {
		var transform = props.transform;
		var showDomain = props.showDomain;
		var showTicks = props.showTicks;
	
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(canvasOrigin[0] + transform[0], canvasOrigin[1] + transform[1]);
	
		if (showDomain) _AxisLine2["default"].drawOnCanvasStatic(props, ctx, chartData, xScale, yScale);
		if (showTicks) _AxisTicks2["default"].drawOnCanvasStatic(props, ctx, chartData, xScale, yScale);
	
		ctx.restore();
	};
	
	exports["default"] = Axis;
	module.exports = exports["default"];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function d3_identity(d) {
		return d;
	}
	
	function tickTransform_svg_axisX(scale, tick) {
		return [scale(tick), 0];
	}
	
	function tickTransform_svg_axisY(scale, tick) {
		return [0, scale(tick)];
	}
	
	var Tick = (function (_React$Component) {
		_inherits(Tick, _React$Component);
	
		function Tick() {
			_classCallCheck(this, Tick);
	
			_get(Object.getPrototypeOf(Tick.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Tick, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var transform = _props.transform;
				var tickStroke = _props.tickStroke;
				var textAnchor = _props.textAnchor;
				var fontSize = _props.fontSize;
				var fontFamily = _props.fontFamily;
				var _props2 = this.props;
				var x = _props2.x;
				var y = _props2.y;
				var x2 = _props2.x2;
				var y2 = _props2.y2;
				var dy = _props2.dy;
	
				return _react2["default"].createElement(
					"g",
					{ className: "tick", transform: "translate(" + transform[0] + ", " + transform[1] + ")" },
					_react2["default"].createElement("line", { shapeRendering: "crispEdges", opacity: 1, stroke: tickStroke, x2: x2, y2: y2 }),
					_react2["default"].createElement(
						"text",
						{
							dy: dy, x: x, y: y,
							fontSize: fontSize,
							fontFamily: fontFamily,
							textAnchor: textAnchor },
						this.props.children
					)
				);
			}
		}]);
	
		return Tick;
	})(_react2["default"].Component);
	
	Tick.drawOnCanvasStatic = function (tick, ctx, chartData, result) {
		var scale = result.scale;
		var tickTransform = result.tickTransform;
		var tickStroke = result.tickStroke;
		var dy = result.dy;
		var canvas_dy = result.canvas_dy;
		var x = result.x;
		var y = result.y;
		var x2 = result.x2;
		var y2 = result.y2;
		var textAnchor = result.textAnchor;
		var fontSize = result.fontSize;
		var fontFamily = result.fontFamily;
		var format = result.format;
	
		var origin = tickTransform(scale, tick);
	
		ctx.beginPath();
		ctx.moveTo(origin[0], origin[1]);
		ctx.lineTo(origin[0] + x2, origin[1] + y2);
		ctx.stroke();
	
		ctx.font = fontSize + "px " + fontFamily;
		ctx.fillStyle = tickStroke;
		ctx.textAlign = textAnchor === "middle" ? "center" : textAnchor;
		ctx.textBaseline = 'middle';
	
		ctx.fillText(format(tick), origin[0] + x, origin[1] + y2 + y);
	};
	
	var AxisTicks = (function (_React$Component2) {
		_inherits(AxisTicks, _React$Component2);
	
		function AxisTicks() {
			_classCallCheck(this, AxisTicks);
	
			_get(Object.getPrototypeOf(AxisTicks.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(AxisTicks, [{
			key: "render",
			value: function render() {
				var result = AxisTicks.helper(this.props, this.props.scale);
				var ticks = result.ticks;
				var scale = result.scale;
				var tickTransform = result.tickTransform;
				var tickStroke = result.tickStroke;
				var dy = result.dy;
				var x = result.x;
				var y = result.y;
				var x2 = result.x2;
				var y2 = result.y2;
				var textAnchor = result.textAnchor;
				var fontSize = result.fontSize;
				var fontFamily = result.fontFamily;
				var format = result.format;
	
				return _react2["default"].createElement(
					"g",
					null,
					ticks.map(function (tick, idx) {
						return _react2["default"].createElement(
							Tick,
							{ key: idx, transform: tickTransform(scale, tick), tickStroke: tickStroke,
								dy: dy, x: x, y: y,
								x2: x2, y2: y2, textAnchor: textAnchor,
								fontSize: fontSize, fontFamily: fontFamily },
							format(tick)
						);
					})
				);
			}
		}]);
	
		return AxisTicks;
	})(_react2["default"].Component);
	
	AxisTicks.propTypes = {
		orient: _react2["default"].PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
		innerTickSize: _react2["default"].PropTypes.number,
		tickFormat: _react2["default"].PropTypes.func,
		tickPadding: _react2["default"].PropTypes.number,
		ticks: _react2["default"].PropTypes.array,
		tickValues: _react2["default"].PropTypes.array,
		scale: _react2["default"].PropTypes.func.isRequired,
		tickStroke: _react2["default"].PropTypes.string
	};
	
	AxisTicks.defaultProps = {
		innerTickSize: 6,
		tickPadding: 3,
		ticks: [10],
		tickStroke: "#000"
	};
	
	AxisTicks.helper = function (props, scale) {
		var orient = props.orient;
		var innerTickSize = props.innerTickSize;
		var tickFormat = props.tickFormat;
		var tickPadding = props.tickPadding;
		var fontSize = props.fontSize;
		var fontFamily = props.fontFamily;
		var tickStroke = props.tickStroke;
		var tickSize = props.tickSize;
		var tickArguments = props.ticks;
		var tickValues = props.tickValues;
	
		var ticks = tickValues === undefined ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues;
	
		var format = tickFormat === undefined ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : d3_identity : tickFormat;
	
		var sign = orient === "top" || orient === "left" ? -1 : 1;
		var tickSpacing = Math.max(innerTickSize, 0) + tickPadding;
	
		var tickTransform, x, y, x2, y2, dy, canvas_dy, textAnchor;
	
		if (orient === "bottom" || orient === "top") {
			tickTransform = tickTransform_svg_axisX;
			x2 = 0;
			y2 = sign * innerTickSize;
			x = 0;
			y = sign * tickSpacing;
			dy = sign < 0 ? "0em" : ".71em";
			canvas_dy = sign < 0 ? 0 : 3;
			textAnchor = "middle";
		} else {
			tickTransform = tickTransform_svg_axisY;
			x2 = sign * innerTickSize;
			y2 = 0;
			x = sign * tickSpacing;
			y = 0;
			dy = ".32em";
			canvas_dy = 3;
			textAnchor = sign < 0 ? "end" : "start";
		}
		return { ticks: ticks, scale: scale, tickTransform: tickTransform, tickStroke: tickStroke, dy: dy, canvas_dy: canvas_dy, x: x, y: y, x2: x2, y2: y2, textAnchor: textAnchor, fontSize: fontSize, fontFamily: fontFamily, format: format };
	};
	
	AxisTicks.drawOnCanvasStatic = function (props, ctx, chartData, xScale, yScale) {
		props = (0, _objectAssign2["default"])({}, AxisTicks.defaultProps, props);
	
		var _props3 = props;
		var orient = _props3.orient;
	
		var xAxis = orient === "bottom" || orient === "top";
	
		var result = AxisTicks.helper(props, xAxis ? xScale : yScale);
	
		result.ticks.forEach(function (tick) {
			Tick.drawOnCanvasStatic(tick, ctx, chartData, result);
		});
	};
	
	module.exports = AxisTicks;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function d3_scaleExtent(domain) {
		var start = domain[0],
		    stop = domain[domain.length - 1];
		return start < stop ? [start, stop] : [stop, start];
	}
	
	function d3_scaleRange(scale) {
		return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
	}
	
	var AxisLine = (function (_React$Component) {
		_inherits(AxisLine, _React$Component);
	
		function AxisLine() {
			_classCallCheck(this, AxisLine);
	
			_get(Object.getPrototypeOf(AxisLine.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(AxisLine, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var orient = _props.orient;
				var scale = _props.scale;
				var outerTickSize = _props.outerTickSize;
				var fill = _props.fill;
				var stroke = _props.stroke;
				var strokeWidth = _props.strokeWidth;
				var className = _props.className;
				var shapeRendering = _props.shapeRendering;
				var opacity = _props.opacity;
	
				var sign = orient === "top" || orient === "left" ? -1 : 1;
	
				var range = d3_scaleRange(scale);
	
				var d;
	
				if (orient === "bottom" || orient === "top") {
					d = "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize;
				} else {
					d = "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize;
				}
	
				return _react2["default"].createElement("path", {
					className: className,
					shapeRendering: shapeRendering,
					d: d,
					fill: fill,
					opacity: opacity,
					stroke: stroke,
					strokeWidth: strokeWidth });
			}
		}]);
	
		return AxisLine;
	})(_react2["default"].Component);
	
	AxisLine.propTypes = {
		className: _react2["default"].PropTypes.string,
		shapeRendering: _react2["default"].PropTypes.string,
		orient: _react2["default"].PropTypes.string.isRequired,
		scale: _react2["default"].PropTypes.func.isRequired,
		outerTickSize: _react2["default"].PropTypes.number,
		fill: _react2["default"].PropTypes.string,
		stroke: _react2["default"].PropTypes.string,
		strokeWidth: _react2["default"].PropTypes.number,
		opacity: _react2["default"].PropTypes.number
	};
	
	AxisLine.defaultProps = {
		className: "react-stockcharts-axis-line",
		shapeRendering: "crispEdges",
		outerTickSize: 6,
		fill: "none",
		stroke: "#000",
		strokeWidth: 1,
		opacity: 1
	};
	
	AxisLine.drawOnCanvasStatic = function (props, ctx, chartData, xScale, yScale) {
		props = (0, _objectAssign2["default"])({}, AxisLine.defaultProps, props);
	
		var _props2 = props;
		var orient = _props2.orient;
		var outerTickSize = _props2.outerTickSize;
		var fill = _props2.fill;
		var stroke = _props2.stroke;
		var strokeWidth = _props2.strokeWidth;
		var className = _props2.className;
		var shapeRendering = _props2.shapeRendering;
		var opacity = _props2.opacity;
	
		var sign = orient === "top" || orient === "left" ? -1 : 1;
		var xAxis = orient === "bottom" || orient === "top";
	
		var range = d3_scaleRange(xAxis ? xScale : yScale);
	
		var strokeStyle = ctx.strokeStyle;
		var globalAlpha = ctx.globalAlpha;
	
		ctx.strokeStyle = stroke;
		ctx.globalAlpha = opacity;
	
		ctx.beginPath();
	
		if (xAxis) {
			ctx.moveTo(range[0], sign * outerTickSize);
			ctx.lineTo(range[0], 0);
			ctx.lineTo(range[1], 0);
			ctx.lineTo(range[1], sign * outerTickSize);
		} else {
			ctx.moveTo(sign * outerTickSize, range[0]);
			ctx.lineTo(0, range[0]);
			ctx.lineTo(0, range[1]);
			ctx.lineTo(sign * outerTickSize, range[1]);
		}
		ctx.stroke();
	
		ctx.strokeStyle = strokeStyle;
		ctx.globalAlpha = globalAlpha;
	};
	
	module.exports = AxisLine;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Axis = __webpack_require__(59);
	
	var _Axis2 = _interopRequireDefault(_Axis);
	
	var YAxis = (function (_React$Component) {
		_inherits(YAxis, _React$Component);
	
		function YAxis() {
			_classCallCheck(this, YAxis);
	
			_get(Object.getPrototypeOf(YAxis.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(YAxis, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var axisAt = _props.axisAt;
				var tickFormat = _props.tickFormat;
				var ticks = _props.ticks;
				var percentScale = _props.percentScale;
				var tickValues = _props.tickValues;
				var _context = this.context;
				var yScale = _context.yScale;
				var chartData = _context.chartData;
	
				if (percentScale) yScale = yScale.copy().domain([0, 1]);
	
				tickValues = tickValues || chartData.config.yTicks;
	
				var axisLocation;
	
				if (axisAt === "left") axisLocation = 0;else if (axisAt === "right") axisLocation = this.context.width;else if (axisAt === "middle") axisLocation = this.context.width / 2;else axisLocation = axisAt;
	
				if (this.context.compareSeries.length > 0) {
					tickFormat = d3.format(".0%");
				}
	
				return _react2["default"].createElement(_Axis2["default"], _extends({}, this.props, {
					transform: [axisLocation, 0],
					tickFormat: tickFormat, ticks: [ticks], tickValues: tickValues,
					scale: yScale }));
			}
		}]);
	
		return YAxis;
	})(_react2["default"].Component);
	
	YAxis.propTypes = {
		axisAt: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.oneOf(["left", "right", "middle"]), _react2["default"].PropTypes.number]).isRequired,
		orient: _react2["default"].PropTypes.oneOf(["left", "right"]).isRequired,
		innerTickSize: _react2["default"].PropTypes.number,
		outerTickSize: _react2["default"].PropTypes.number,
		tickFormat: _react2["default"].PropTypes.func,
		tickPadding: _react2["default"].PropTypes.number,
		tickSize: _react2["default"].PropTypes.number,
		ticks: _react2["default"].PropTypes.number,
		tickValues: _react2["default"].PropTypes.array,
		percentScale: _react2["default"].PropTypes.bool,
		showTicks: _react2["default"].PropTypes.bool,
		showDomain: _react2["default"].PropTypes.bool,
		className: _react2["default"].PropTypes.string
	};
	YAxis.defaultProps = {
		namespace: "ReStock.YAxis",
		showGrid: false,
		showDomain: false,
		className: "react-stockcharts-y-axis",
		ticks: 10
	};
	YAxis.contextTypes = {
		chartData: _react2["default"].PropTypes.object.isRequired,
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		compareSeries: _react2["default"].PropTypes.array.isRequired
	};
	
	exports["default"] = YAxis;
	module.exports = exports["default"];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _MACDTooltip = __webpack_require__(64);
	
	var _MACDTooltip2 = _interopRequireDefault(_MACDTooltip);
	
	var _TooltipContainer = __webpack_require__(67);
	
	var _TooltipContainer2 = _interopRequireDefault(_TooltipContainer);
	
	var _OHLCTooltip = __webpack_require__(68);
	
	var _OHLCTooltip2 = _interopRequireDefault(_OHLCTooltip);
	
	var _CompareTooltip = __webpack_require__(69);
	
	var _CompareTooltip2 = _interopRequireDefault(_CompareTooltip);
	
	var _MovingAverageTooltip = __webpack_require__(70);
	
	var _MovingAverageTooltip2 = _interopRequireDefault(_MovingAverageTooltip);
	
	var _BollingerBandTooltip = __webpack_require__(71);
	
	var _BollingerBandTooltip2 = _interopRequireDefault(_BollingerBandTooltip);
	
	var _RSITooltip = __webpack_require__(72);
	
	var _RSITooltip2 = _interopRequireDefault(_RSITooltip);
	
	var _StochasticTooltip = __webpack_require__(73);
	
	var _StochasticTooltip2 = _interopRequireDefault(_StochasticTooltip);
	
	exports["default"] = {
		MACDTooltip: _MACDTooltip2["default"],
		TooltipContainer: _TooltipContainer2["default"],
		OHLCTooltip: _OHLCTooltip2["default"],
		CompareTooltip: _CompareTooltip2["default"],
		MovingAverageTooltip: _MovingAverageTooltip2["default"],
		BollingerBandTooltip: _BollingerBandTooltip2["default"],
		RSITooltip: _RSITooltip2["default"],
		StochasticTooltip: _StochasticTooltip2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(4);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(65);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(66);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var MACDTooltip = (function (_React$Component) {
		_inherits(MACDTooltip, _React$Component);
	
		function MACDTooltip() {
			_classCallCheck(this, MACDTooltip);
	
			_get(Object.getPrototypeOf(MACDTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(MACDTooltip, [{
			key: "render",
			value: function render() {
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var _props = this.props;
				var forChart = _props.forChart;
				var forDataSeries = _props.forDataSeries;
	
				var overlays = chartData.config.overlays.filter(function (eachOverlay) {
					return forDataSeries === undefined ? true : forDataSeries === eachOverlay.id;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator !== undefined;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator.isMACD && eachOverlay.indicator.isMACD();
				});
	
				if (overlays.length > 1 || overlays.length === 0) {
					console.error("Could not find Exactly one DataSeries with MACD indicator for Chart id=" + forChart + ", either use \n\t\t\t\tsingle MACD indicator per chart\n\t\t\t\tor use forDataSeries property to narrow down to single Series");
				}
				var overlay = overlays[0];
				var options = overlay.indicator.options();
	
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var macd = overlay.yAccessor(item);
				var format = chartData.config.mouseCoordinates.format;
	
				var MACDLine = macd && macd.MACDLine && format(macd.MACDLine) || "n/a";
				var signalLine = macd && macd.signalLine && format(macd.signalLine) || "n/a";
				var histogram = macd && macd.histogram && format(macd.histogram) || "n/a";
	
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")" },
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 0, y: 0,
							fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"MACD ("
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.MACDLine },
							options.slow
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							", "
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.MACDLine },
							options.fast
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"): "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							MACDLine
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							" Signal ("
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.signalLine },
							options.signal
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"): "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							signalLine
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							" Histogram: "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							histogram
						)
					)
				);
			}
		}]);
	
		return MACDTooltip;
	})(_react2["default"].Component);
	
	MACDTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired
	};
	
	MACDTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number,
		forDataSeries: _react2["default"].PropTypes.number
	};
	
	MACDTooltip.defaultProps = {
		namespace: "ReStock.MACDTooltip",
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = MACDTooltip;
	// export default MACDTooltip;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ToolTipText = (function (_React$Component) {
		_inherits(ToolTipText, _React$Component);
	
		function ToolTipText() {
			_classCallCheck(this, ToolTipText);
	
			_get(Object.getPrototypeOf(ToolTipText.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(ToolTipText, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"text",
					_extends({
						fontFamily: this.props.fontFamily,
						fontSize: this.props.fontSize
					}, this.props, {
						className: "react-stockcharts-tooltip" }),
					this.props.children
				);
			}
		}]);
	
		return ToolTipText;
	})(_react2["default"].Component);
	
	ToolTipText.propTypes = {
		fontFamily: _react2["default"].PropTypes.string.isRequired,
		fontSize: _react2["default"].PropTypes.number.isRequired
	};
	ToolTipText.defaultProps = {
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 11
	};
	
	module.exports = ToolTipText;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ToolTipTSpanLabel = (function (_React$Component) {
		_inherits(ToolTipTSpanLabel, _React$Component);
	
		function ToolTipTSpanLabel() {
			_classCallCheck(this, ToolTipTSpanLabel);
	
			_get(Object.getPrototypeOf(ToolTipTSpanLabel.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(ToolTipTSpanLabel, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"tspan",
					_extends({ className: "react-stockcharts-tooltip-label", fill: "steelblue" }, this.props),
					this.props.children
				);
			}
		}]);
	
		return ToolTipTSpanLabel;
	})(_react2["default"].Component);
	
	module.exports = ToolTipTSpanLabel;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsPureComponent = __webpack_require__(20);
	
	var _utilsPureComponent2 = _interopRequireDefault(_utilsPureComponent);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var TooltipContainer = (function (_PureComponent) {
		_inherits(TooltipContainer, _PureComponent);
	
		function TooltipContainer() {
			_classCallCheck(this, TooltipContainer);
	
			_get(Object.getPrototypeOf(TooltipContainer.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(TooltipContainer, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this.context, function () {
						return _react2["default"].createElement(child.type, (0, _objectAssign2["default"])({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					// React.createElement(child.type, objectAssign({ key: child.key, ref: child.ref}, child.props));
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					{ className: "react-stockcharts-toottip-hover" },
					children
				);
			}
		}]);
	
		return TooltipContainer;
	})(_utilsPureComponent2["default"]);
	
	TooltipContainer.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	TooltipContainer.defaultProps = { namespace: "ReStock.TooltipContainer" };
	
	module.exports = TooltipContainer;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(4);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(65);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(66);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var billion = 1 * 1000 * 1000 * 1000;
	var million = 1 * 1000 * 1000;
	var thousand = 1 * 1000;
	
	var OHLCTooltip = (function (_React$Component) {
		_inherits(OHLCTooltip, _React$Component);
	
		function OHLCTooltip() {
			_classCallCheck(this, OHLCTooltip);
	
			_get(Object.getPrototypeOf(OHLCTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(OHLCTooltip, [{
			key: "render",
			value: function render() {
				var displayDate, fromDate, toDate, open, high, low, close, volume;
	
				displayDate = fromDate = toDate = open = high = low = close = volume = "n/a";
	
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
	
				if (item !== undefined && item.close !== undefined) {
					volume = item.volume / billion > 1 ? (item.volume / billion).toFixed(2) + "b" : item.volume / million > 1 ? (item.volume / million).toFixed(2) + "m" : item.volume / thousand > 1 ? (item.volume / thousand).toFixed(2) + "k" : item.volume;
	
					displayDate = this.props.xDisplayFormat(item.date);
					open = _utilsUtils2["default"].displayNumberFormat(item.open);
					high = _utilsUtils2["default"].displayNumberFormat(item.high);
					low = _utilsUtils2["default"].displayNumberFormat(item.low);
					close = _utilsUtils2["default"].displayNumberFormat(item.close);
				}
	
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")" },
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 0, y: 0,
							fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label", x: 0, dy: "5" },
							"Date: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value" },
							displayDate
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label_O" },
							" O: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_O" },
							open
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label_H" },
							" H: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_H" },
							high
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label_L" },
							" L: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_L" },
							low
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label_C" },
							" C: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_C" },
							close
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label_Vol" },
							" Vol: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_Vol" },
							volume
						)
					)
				);
			}
		}]);
	
		return OHLCTooltip;
	})(_react2["default"].Component);
	
	OHLCTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired
	};
	
	OHLCTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		accessor: _react2["default"].PropTypes.func.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number
	};
	
	OHLCTooltip.defaultProps = {
		namespace: "ReStock.OHLCTooltip",
		accessor: function accessor(d) {
			return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
		},
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = OHLCTooltip;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(4);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(65);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(66);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var CompareTooltip = (function (_React$Component) {
		_inherits(CompareTooltip, _React$Component);
	
		function CompareTooltip() {
			_classCallCheck(this, CompareTooltip);
	
			_get(Object.getPrototypeOf(CompareTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(CompareTooltip, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var displayValue = "n/a";
	
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
	
				var thisSeries = chartData.config.compareSeries.filter(function (each) {
					return each.id === _this.props.forCompareSeries;
				})[0];
	
				if (item !== undefined && thisSeries.yAccessor(item) !== undefined) {
					displayValue = thisSeries.yAccessor(item);
				}
	
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")" },
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 0, y: 0,
							fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label", x: 0, dy: "5", fill: thisSeries.stroke },
							thisSeries.displayLabel + ": "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value", fill: thisSeries.stroke },
							displayValue
						)
					)
				);
			}
		}]);
	
		return CompareTooltip;
	})(_react2["default"].Component);
	
	CompareTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	CompareTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		forCompareSeries: _react2["default"].PropTypes.number.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.array.isRequired,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number
	};
	
	CompareTooltip.defaultProps = {
		namespace: "ReStock.CompareTooltip",
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = CompareTooltip;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(4);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(65);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(66);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var SingleMAToolTip = (function (_React$Component) {
		_inherits(SingleMAToolTip, _React$Component);
	
		function SingleMAToolTip() {
			_classCallCheck(this, SingleMAToolTip);
	
			_get(Object.getPrototypeOf(SingleMAToolTip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(SingleMAToolTip, [{
			key: "handleClick",
			value: function handleClick(overlay) {
				if (this.props.onClick) {
					this.props.onClick(overlay);
				}
			}
		}, {
			key: "render",
			value: function render() {
				var translate = "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")";
				return _react2["default"].createElement(
					"g",
					{ transform: translate },
					_react2["default"].createElement("line", { x1: 0, y1: 2, x2: 0, y2: 28, stroke: this.props.color, strokeWidth: "4px" }),
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 5, y: 11,
							fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							this.props.displayName
						),
						_react2["default"].createElement(
							"tspan",
							{ x: "5", dy: "15" },
							this.props.value
						)
					),
					_react2["default"].createElement("rect", { x: 0, y: 0, width: 55, height: 30, onClick: this.handleClick.bind(this, this.props.overlay),
						fill: "none", stroke: "none" })
				);
			}
		}]);
	
		return SingleMAToolTip;
	})(_react2["default"].Component);
	
	SingleMAToolTip.propTypes = {
		origin: _react2["default"].PropTypes.array.isRequired,
		color: _react2["default"].PropTypes.string.isRequired,
		displayName: _react2["default"].PropTypes.string.isRequired,
		value: _react2["default"].PropTypes.string.isRequired,
		onClick: _react2["default"].PropTypes.func,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number
	};
	
	var MovingAverageTooltip = (function (_React$Component2) {
		_inherits(MovingAverageTooltip, _React$Component2);
	
		function MovingAverageTooltip() {
			_classCallCheck(this, MovingAverageTooltip);
	
			_get(Object.getPrototypeOf(MovingAverageTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(MovingAverageTooltip, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var forDataSeries = this.props.forDataSeries;
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")", className: this.props.className },
					chartData.config.overlays.filter(function (eachOverlay) {
						return eachOverlay.indicator !== undefined;
					}).filter(function (eachOverlay) {
						return eachOverlay.indicator.isMovingAverage && eachOverlay.indicator.isMovingAverage();
					}).filter(function (eachOverlay) {
						return forDataSeries === undefined ? true : forDataSeries.indexOf(eachOverlay.id) > -1;
					}).map(function (eachOverlay, idx) {
						var yValue = eachOverlay.yAccessor(item);
						var yDisplayValue = yValue ? _this.props.displayFormat(yValue) : "n/a";
						return _react2["default"].createElement(SingleMAToolTip, {
							key: idx,
							origin: [_this.props.width * idx, 0],
							color: eachOverlay.stroke,
							displayName: eachOverlay.indicator.tooltipLabel(),
							value: yDisplayValue,
							overlay: eachOverlay,
							onClick: _this.props.onClick,
							fontFamily: _this.props.fontFamily, fontSize: _this.props.fontSize });
					})
				);
			}
		}]);
	
		return MovingAverageTooltip;
	})(_react2["default"].Component);
	
	MovingAverageTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	MovingAverageTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		displayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.array.isRequired,
		onClick: _react2["default"].PropTypes.func,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number,
		forDataSeries: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.number)
	};
	
	MovingAverageTooltip.defaultProps = {
		namespace: "ReStock.MovingAverageTooltip",
		className: "react-stockcharts-moving-average-tooltip",
		displayFormat: _utilsUtils2["default"].displayNumberFormat,
		origin: [0, 10],
		width: 65
	};
	
	module.exports = MovingAverageTooltip;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(4);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(65);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(66);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var BollingerBandTooltip = (function (_React$Component) {
		_inherits(BollingerBandTooltip, _React$Component);
	
		function BollingerBandTooltip() {
			_classCallCheck(this, BollingerBandTooltip);
	
			_get(Object.getPrototypeOf(BollingerBandTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(BollingerBandTooltip, [{
			key: "render",
			value: function render() {
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var top, middle, bottom;
				top = middle = bottom = "n/a";
	
				var forDataSeries = this.props.forDataSeries;
	
				var overlays = chartData.config.overlays.filter(function (eachOverlay) {
					return forDataSeries === undefined ? true : forDataSeries === eachOverlay.id;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator !== undefined;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator.isBollingerBand && eachOverlay.indicator.isBollingerBand();
				});
	
				if (overlays.length > 1 || overlays.length === 0) {
					console.error("Could not find Exactly one DataSeries with BollingerBand indicator for Chart id=" + forChart + ", either use \n\t\t\t\tsingle BollingerBand indicator per chart\n\t\t\t\tor use forDataSeries property to narrow down to single Series");
				}
				var overlay = overlays[0];
				var options = overlay.indicator.options();
	
				var yAccessor = overlay.indicator.yAccessor();
				var value = yAccessor(item);
				var format = _utilsUtils2["default"].displayNumberFormat;
	
				if (value !== undefined) {
					top = format(value.top);
					middle = format(value.middle);
					bottom = format(value.bottom);
				}
	
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")", className: this.props.className },
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 0, y: 0,
							fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"BB (" + options.period + ", " + options.pluck + ", " + options.multiplier + ", " + options.maType + "): "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							top + ", " + middle + ", " + bottom
						)
					)
				);
			}
		}]);
	
		return BollingerBandTooltip;
	})(_react2["default"].Component);
	
	BollingerBandTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	BollingerBandTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		displayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.array.isRequired,
		onClick: _react2["default"].PropTypes.func,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number,
		forDataSeries: _react2["default"].PropTypes.number
	};
	
	BollingerBandTooltip.defaultProps = {
		namespace: "ReStock.BollingerBandTooltip",
		className: "react-stockcharts-moving-average-tooltip",
		displayFormat: _utilsUtils2["default"].displayNumberFormat,
		origin: [0, 10],
		width: 65
	};
	
	module.exports = BollingerBandTooltip;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(4);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(65);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(66);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var RSITooltip = (function (_React$Component) {
		_inherits(RSITooltip, _React$Component);
	
		function RSITooltip() {
			_classCallCheck(this, RSITooltip);
	
			_get(Object.getPrototypeOf(RSITooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(RSITooltip, [{
			key: "render",
			value: function render() {
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
	
				var _props = this.props;
				var forChart = _props.forChart;
				var forDataSeries = _props.forDataSeries;
	
				var overlays = chartData.config.overlays.filter(function (eachOverlay) {
					return forDataSeries === undefined ? true : forDataSeries === eachOverlay.id;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator !== undefined;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator.isRSI && eachOverlay.indicator.isRSI();
				});
	
				if (overlays.length > 1 || overlays.length === 0) {
					console.error("Could not find Exactly one DataSeries with RSI indicator for Chart id=" + forChart + ", either use \n\t\t\t\tsingle RSI indicator per chart\n\t\t\t\tor use forDataSeries property to narrow down to single Series");
				}
	
				var overlay = overlays[0];
				var options = overlay.indicator.options();
	
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var rsi = overlay.yAccessor(item);
				var format = chartData.config.mouseCoordinates.format;
	
				var value = rsi !== undefined && format(rsi) || "n/a";
	
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")" },
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 0, y: 0,
							fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"RSI (" + options.period + ", " + options.pluck + ", " + options.overSold + ", " + options.overBought + "): "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							value
						)
					)
				);
			}
		}]);
	
		return RSITooltip;
	})(_react2["default"].Component);
	
	RSITooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired
	};
	
	RSITooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		accessor: _react2["default"].PropTypes.func.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number,
		forDataSeries: _react2["default"].PropTypes.number
	};
	
	RSITooltip.defaultProps = {
		namespace: "ReStock.RSITooltip",
		accessor: function accessor(d) {
			return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
		},
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = RSITooltip;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(8);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(4);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(65);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(66);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var StochasticTooltip = (function (_React$Component) {
		_inherits(StochasticTooltip, _React$Component);
	
		function StochasticTooltip() {
			_classCallCheck(this, StochasticTooltip);
	
			_get(Object.getPrototypeOf(StochasticTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(StochasticTooltip, [{
			key: "render",
			value: function render() {
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var _props = this.props;
				var forChart = _props.forChart;
				var forDataSeries = _props.forDataSeries;
	
				var overlays = chartData.config.overlays.filter(function (eachOverlay) {
					return forDataSeries === undefined ? true : forDataSeries === eachOverlay.id;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator !== undefined;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator.isStochastic && eachOverlay.indicator.isStochastic();
				});
	
				if (overlays.length > 1 || overlays.length === 0) {
					console.error("Could not find Exactly one DataSeries with Stochastic indicator for Chart id=" + forChart + ", either use \n\t\t\t\tsingle Stochastic indicator per chart\n\t\t\t\tor use forDataSeries property to narrow down to single Series");
				}
				var overlay = overlays[0];
				var options = overlay.indicator.options();
	
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var stochastic = overlay.yAccessor(item);
				var format = chartData.config.mouseCoordinates.format;
	
				var K = stochastic && stochastic.K && format(stochastic.K) || "n/a";
				var D = stochastic && stochastic.D && format(stochastic.D) || "n/a";
	
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
				var label = this.props.children || "Stochastic";
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")" },
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 0, y: 0, fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							label + " %K("
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.K },
							options.period + ", " + options.K
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"): "
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.K },
							K
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							" %D ("
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.D },
							options.D
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"): "
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.D },
							D
						)
					)
				);
			}
		}]);
	
		return StochasticTooltip;
	})(_react2["default"].Component);
	
	StochasticTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired
	};
	
	StochasticTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number,
		forDataSeries: _react2["default"].PropTypes.number
	};
	
	StochasticTooltip.defaultProps = {
		namespace: "ReStock.StochasticTooltip",
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = StochasticTooltip;
	// export default StochasticTooltip;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _TypeChooser = __webpack_require__(75);
	
	var _TypeChooser2 = _interopRequireDefault(_TypeChooser);
	
	var _ChartWidthMixin = __webpack_require__(76);
	
	var _ChartWidthMixin2 = _interopRequireDefault(_ChartWidthMixin);
	
	var _SaveChartAsImage = __webpack_require__(77);
	
	var _SaveChartAsImage2 = _interopRequireDefault(_SaveChartAsImage);
	
	exports["default"] = {
		TypeChooser: _TypeChooser2["default"],
		ChartWidthMixin: _ChartWidthMixin2["default"],
		SaveChartAsImage: _SaveChartAsImage2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var TypeChooser = (function (_React$Component) {
		_inherits(TypeChooser, _React$Component);
	
		function TypeChooser(props) {
			_classCallCheck(this, TypeChooser);
	
			_get(Object.getPrototypeOf(TypeChooser.prototype), "constructor", this).call(this, props);
			this.state = {
				type: this.props.type
			};
			this.handleTypeChange = this.handleTypeChange.bind(this);
		}
	
		_createClass(TypeChooser, [{
			key: "handleTypeChange",
			value: function handleTypeChange(e) {
				// console.log(e.target.value);
				this.setState({
					type: e.target.value
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"label",
						{ forHtml: "type" },
						"Type: "
					),
					_react2["default"].createElement(
						"select",
						{ name: "type", id: "type", onChange: this.handleTypeChange, value: this.state.type },
						_react2["default"].createElement(
							"option",
							{ value: "svg" },
							"svg"
						),
						_react2["default"].createElement(
							"option",
							{ value: "hybrid" },
							"canvas + svg"
						)
					),
					this.props.children(this.state.type)
				);
			}
		}]);
	
		return TypeChooser;
	})(_react2["default"].Component);
	
	TypeChooser.defaultProps = {
		type: "hybrid"
	};
	
	module.exports = TypeChooser;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	// import ReactDOM from "react-dom";
	
	var ChartWidthMixin = {
		handleWindowResize: function handleWindowResize() {
			var el = _react2["default"].findDOMNode(this);
			// console.log(this.refs, el, this);
	
			var w = el.parentNode.clientWidth;
			// console.log("width = ", w);
			this.setState({
				width: w
			});
		},
		componentWillUnmount: function componentWillUnmount() {
			// console.log("unmounting...")
			window.removeEventListener("resize", this.handleWindowResize);
		},
		componentDidMount: function componentDidMount() {
			window.addEventListener("resize", this.handleWindowResize);
			var el = _react2["default"].findDOMNode(this);
			// console.log(this.refs, el);
			var w = el.parentNode.clientWidth;
			this.setState({
				width: w
			});
		}
	};
	
	module.exports = ChartWidthMixin;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var saveAsPng = __webpack_require__(78);
	
	var SaveChartAsImage = {
		save: function save(doc, container, background, cb) {
			if (saveAsPng === undefined) {
				throw new Error("dependency save-svg-as-png is not installed, execute npm install -S save-svg-as-png");
			}
			saveAsPng.svgAsDataUri(container.getElementsByTagName("svg")[0], {}, function (uri) {
				var image = new Image();
				image.onload = function () {
					var canvas = doc.createElement('canvas');
					canvas.width = image.width;
					canvas.height = image.height;
					var context = canvas.getContext('2d');
	
					if (background !== undefined) {
						context.fillStyle = background;
						context.fillRect(0, 0, canvas.width, canvas.height);
					}
					var canvasList = container.getElementsByTagName("canvas");
					for (var i = 0; i < canvasList.length; i++) {
						var each = canvasList[i];
						if (each !== undefined) {
							var parent = each.parentNode.parentNode.getBoundingClientRect();
							var rect = each.getBoundingClientRect();
							context.drawImage(each, rect.left - parent.left, rect.top - parent.top);
						}
					};
	
					context.drawImage(image, 0, 0);
					cb(canvas.toDataURL('image/png'));
				};
				image.src = uri;
			});
		},
		saveWithWhiteBG: function saveWithWhiteBG(doc, container, cb) {
			return this.save(doc, container, "white", cb);
		},
		saveChartAsImage: function saveChartAsImage(container) {
			this.saveWithWhiteBG(document, container, function (src) {
				var a = document.createElement("a");
				a.setAttribute("href", src);
				a.setAttribute("download", "Chart.png");
	
				document.body.appendChild(a);
				a.addEventListener("click", function (e) {
					a.parentNode.removeChild(a);
				});
	
				a.click();
			});
		}
	};
	
	module.exports = SaveChartAsImage;

/***/ },
/* 78 */
/***/ function(module, exports) {

	(function() {
	  var out$ = typeof exports != 'undefined' && exports || this;
	
	  var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
	
	  function isExternal(url) {
	    return url && url.lastIndexOf('http',0) == 0 && url.lastIndexOf(window.location.host) == -1;
	  }
	
	  function inlineImages(el, callback) {
	    var images = el.querySelectorAll('image');
	    var left = images.length;
	    if (left == 0) {
	      callback();
	    }
	    for (var i = 0; i < images.length; i++) {
	      (function(image) {
	        var href = image.getAttributeNS("http://www.w3.org/1999/xlink", "href");
	        if (href) {
	          if (isExternal(href.value)) {
	            console.warn("Cannot render embedded images linking to external hosts: "+href.value);
	            return;
	          }
	        }
	        var canvas = document.createElement('canvas');
	        var ctx = canvas.getContext('2d');
	        var img = new Image();
	        href = href || image.getAttribute('href');
	        img.src = href;
	        img.onload = function() {
	          canvas.width = img.width;
	          canvas.height = img.height;
	          ctx.drawImage(img, 0, 0);
	          image.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL('image/png'));
	          left--;
	          if (left == 0) {
	            callback();
	          }
	        }
	        img.onerror = function() {
	          console.log("Could not load "+href);
	          left--;
	          if (left == 0) {
	            callback();
	          }
	        }
	      })(images[i]);
	    }
	  }
	
	  function styles(el, selectorRemap) {
	    var css = "";
	    var sheets = document.styleSheets;
	    for (var i = 0; i < sheets.length; i++) {
	      if (isExternal(sheets[i].href)) {
	        console.warn("Cannot include styles from other hosts: "+sheets[i].href);
	        continue;
	      }
	      var rules = sheets[i].cssRules;
	      if (rules != null) {
	        for (var j = 0; j < rules.length; j++) {
	          var rule = rules[j];
	          if (typeof(rule.style) != "undefined") {
	            var match = null;
	            try {
	              match = el.querySelector(rule.selectorText);
	            } catch(err) {
	              console.warn('Invalid CSS selector "' + rule.selectorText + '"', err);
	            }
	            if (match) {
	              var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
	              css += selector + " { " + rule.style.cssText + " }\n";
	            } else if(rule.cssText.match(/^@font-face/)) {
	              css += rule.cssText + '\n';
	            }
	          }
	        }
	      }
	    }
	    return css;
	  }
	
	  out$.svgAsDataUri = function(el, options, cb) {
	    options = options || {};
	    options.scale = options.scale || 1;
	    var xmlns = "http://www.w3.org/2000/xmlns/";
	
	    inlineImages(el, function() {
	      var outer = document.createElement("div");
	      var clone = el.cloneNode(true);
	      var width, height, viewBoxWidth, viewBoxHeight;
	      if(el.tagName == 'svg') {
	        var box = el.getBoundingClientRect();
	        width = (clone.getAttribute('width') !== null && !clone.getAttribute('width').match(/%$/) && parseInt(clone.getAttribute('width'))) ||
	          box.width ||
	          parseInt(clone.style.width) ||
	          parseInt(window.getComputedStyle(el).getPropertyValue('width'));
	        height = (clone.getAttribute('height') !== null && !clone.getAttribute('height').match(/%$/) && parseInt(clone.getAttribute('height'))) ||
	          box.height ||
	          parseInt(clone.style.height) ||
	          parseInt(window.getComputedStyle(el).getPropertyValue('height'));
	        if (width === undefined || 
	            width === null || 
	            isNaN(parseFloat(width))) {
	      	  width = 0;
	        }
	        if (height === undefined || 
	            height === null || 
	            isNaN(parseFloat(height))) {
	      	  height = 0;
	        }
	        viewBoxWidth = el.viewBox.baseVal.width === 0 ? width : el.viewBox.baseVal.width;
	        viewBoxHeight = el.viewBox.baseVal.height === 0 ? height : el.viewBox.baseVal.height;
	
	      } else {
	        var box = el.getBBox();
	        width = box.x + box.width;
	        height = box.y + box.height;
	        clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));
	        viewBoxWidth = width;
	        viewBoxHeight =  height;
	
	        var svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
	        svg.appendChild(clone)
	        clone = svg;
	      }
	
	      clone.setAttribute("version", "1.1");
	      clone.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
	      clone.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
	      clone.setAttribute("width", width * options.scale);
	      clone.setAttribute("height", height * options.scale);
	      clone.setAttribute("viewBox", "0 0 " + viewBoxWidth + " " + viewBoxHeight);
	
	      outer.appendChild(clone);
	
	      var css = styles(el, options.selectorRemap);
	      var s = document.createElement('style');
	      s.setAttribute('type', 'text/css');
	      s.innerHTML = "<![CDATA[\n" + css + "\n]]>";
	      var defs = document.createElement('defs');
	      defs.appendChild(s);
	      clone.insertBefore(defs, clone.firstChild);
	
	      var svg = doctype + outer.innerHTML;
	      var uri = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svg)));
	      if (cb) {
	        cb(uri);
	      }
	    });
	  }
	
	  out$.saveSvgAsPng = function(el, name, options) {
	    options = options || {};
	    out$.svgAsDataUri(el, options, function(uri) {
	      var image = new Image();
	      image.onload = function() {
	        var canvas = document.createElement('canvas');
	        canvas.width = image.width;
	        canvas.height = image.height;
	        var context = canvas.getContext('2d');
	        context.drawImage(image, 0, 0);
	
	        var a = document.createElement('a');
	        a.download = name;
	        a.href = canvas.toDataURL('image/png');
	        document.body.appendChild(a);
	        a.addEventListener("click", function(e) {
	          a.parentNode.removeChild(a);
	        });
	        a.click();
	      }
	      image.src = uri;
	    });
	  }
	})();


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-stockcharts.js.map