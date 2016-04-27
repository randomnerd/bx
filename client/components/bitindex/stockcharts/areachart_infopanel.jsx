import React from 'react';
import ReStock from 'react-stockcharts';
import d3 from 'd3';

let {ChartCanvas, Chart, DataSeries} = ReStock;

let {AreaSeries} = ReStock.series;
let {XAxis, YAxis} = ReStock.axes;
let {ChartWidthMixin} = ReStock.helper;

export default React.createClass({
    mixins: [ChartWidthMixin],
    propTypes: {
        data: React.PropTypes.array.isRequired,
        type: React.PropTypes.oneOf(['svg', 'hybrid']).isRequired
    },
    render() {
        if (this.state === null || !this.state.width)
            return <div/>;
        let {data, type} = this.props;
        return (
            <ChartCanvas width={this.state.width} height={25} margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }} data={data} type={type}>
                <Chart id={0} xAccessor={(d) => d.date}>
                    <YAxis axisAt='right' orient='right' percentScale={true} tickFormat={d3.format('.0%')}/>
                    <DataSeries id={0} yAccessor={(d) => d.close} stroke='steelblue' fill='steelblue'>
                        <AreaSeries/>
                    </DataSeries>
                </Chart>
            </ChartCanvas>
        );
    }
});
