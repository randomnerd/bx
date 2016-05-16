'use strict';

import React from 'react';
import d3 from 'd3';
import ReStock from '/client/lib/react-stockcharts';

const areachart_infopanel = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
        width: React.PropTypes.number.isRequired,
        type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
    },
    defaultProps: {
        type: 'svg'
    },
    render() {
        let {ChartCanvas, Chart} = ReStock;

        let {AreaSeries} = ReStock.series;

        let {fitWidth} = ReStock.helper;
        let {data, type, width} = this.props;
        if (data.length > 100)
            data = _.last(data, 100);

        return (

            <ChartCanvas seriesName="seriesName1" width={width} height={25} margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }} type={type} data={data} xAccessor={d => d.date} xScale={d3.time.scale()}>
                <Chart id={this.props.id} yExtents={d => d.close}>
                    <AreaSeries yAccessor={d => d.close}/>
                </Chart>
            </ChartCanvas>

        );
    }
});

export default ReStock.helper.fitWidth(areachart_infopanel);
