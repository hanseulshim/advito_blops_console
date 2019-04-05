import React from 'react';
import styled from 'styled-components';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

const Chart = styled.div`
  display: flex;
  flex: 2;
  margin-top: 4em;
  margin-bottom: 4em;
`;

class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { data } = this.props;
    const chart = am4core.create(this.refs.spendGraph, am4charts.XYChart);

    chart.data = data;

    //Format ya Dates son
    chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';

    // X Axis : Dates
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.category = 'date';

    //Y Axis : Spend
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.dataFields.category = 'spend';

    const projectedSeries = chart.series.push(new am4charts.LineSeries());
    projectedSeries.name = 'Projected Spend';
    projectedSeries.dataFields.valueY = 'projSpend';
    projectedSeries.dataFields.dateX = 'date';

    const actualSeries = chart.series.push(new am4charts.LineSeries());
    actualSeries.name = 'Actual Spend';
    actualSeries.dataFields.valueY = 'actualSpend';
    actualSeries.dataFields.dateX = 'date';

    // const actualSeries = chart.series.push(new am4charts.LineSeries());
  }

  render() {
    return <Chart ref="spendGraph" />;
  }
}

export default LineGraph;
