'use strict';

import React from 'react';
import d3 from 'd3';

import ReStock from 'react-stockcharts';

let {ChartCanvas, Chart} = ReStock;

let {AreaSeries} = ReStock.series;
let {XAxis, YAxis} = ReStock.axes;
let {fitWidth} = ReStock.helper;

class comparechart_infopanel extends React.Component {
    render() {
        if (this.state === null || !this.state.width)
            return <div/>;
        let {data, type, width} = this.props;
        return (
            <ChartCanvas width={width} height={25} margin={{
                left: 0,
                right: 50,
                top: 10,
                bottom: 0
            }} seriesName='MSFT' data={data} type={type} xAccessor={d => d.date} xScale={d3.time.scale()}>
                <Chart id={0} >
                    <YAxis axisAt='right' orient='right' percentScale={true} tickFormat={d3.format('.0%')} stroke='#767676' tickStroke='#767676' fontSize={8}/>
                    <DataSeries id={0} yAccessor={(d) => d.close} stroke='steelblue'>
                        <LineSeries/>
                    </DataSeries>
                </Chart>

                <Chart id={1} >
                    <DataSeries id={0} yAccessor={(d) => d.volume} stroke='green'>
                        <LineSeries stroke='orange'/>
                    </DataSeries>
                </Chart>

            </ChartCanvas>
        );
    }
}

comparechart_infopanel.propTypes = {
    data: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
};

comparechart_infopanel.defaultProps = {
    type: 'svg'
};
comparechart_infopanel = fitWidth(comparechart_infopanel);

export default comparechart_infopanel;
