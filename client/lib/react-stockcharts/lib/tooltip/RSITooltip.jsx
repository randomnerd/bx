"use strict";

import d3 from "d3";
import React, { PropTypes, Component } from "react";

import GenericChartComponent from "../GenericChartComponent";

import { isDefined } from "../utils";
import ToolTipText from "./ToolTipText";
import ToolTipTSpanLabel from "./ToolTipTSpanLabel";

class RSITooltip extends Component {
	constructor(props) {
		super(props);
		this.renderSVG = this.renderSVG.bind(this);
	}
	renderSVG(moreProps) {
		var { onClick, fontFamily, fontSize, calculator, displayFormat } = this.props;
		var { width, height } = this.context;
		var { currentItem } = moreProps;

		var yAccessor = calculator.accessor();

		var rsi = isDefined(currentItem) && yAccessor(currentItem);
		var value = (rsi && displayFormat(rsi)) || "n/a";

		var { origin: originProp } = this.props;
		var origin = d3.functor(originProp);
		var [x, y] = origin(width, height);

		return (
			<g transform={`translate(${ x }, ${ y })`} onClick={onClick}>
				<ToolTipText x={0} y={0}
					fontFamily={fontFamily} fontSize={fontSize}>
					<ToolTipTSpanLabel>{calculator.tooltipLabel()}</ToolTipTSpanLabel>
					<tspan>{value}</tspan>
				</ToolTipText>
			</g>
		);
	}
	render() {
		return <GenericChartComponent
			clip={false}
			svgDraw={this.renderSVG}
			drawOnMouseMove
			/>;
	}
}

RSITooltip.contextTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

RSITooltip.propTypes = {
	origin: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.func
	]).isRequired,
	fontFamily: PropTypes.string,
	fontSize: PropTypes.number,
	onClick: PropTypes.func,
	calculator: PropTypes.func.isRequired,
	displayFormat: PropTypes.func.isRequired,
};

RSITooltip.defaultProps = {
	displayFormat: d3.format(".2f"),
	origin: [0, 0]
};

export default RSITooltip;