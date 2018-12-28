import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import styled from 'styled-components';

const GraphContainer = styled.div`
  flex: 1;
`;

class BarChart extends Component {
  state = {};

  componentDidMount() {
    let chart = am4core.create(this.refs.chartDiv, am4charts.XYChart);
    chart.rotatable = true;
    chart.fontSize = '12px';

    // Add data
    chart.data = this.props.data;

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'field';
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.fillOpacity = 0.7;
    series.dataFields.valueX = 'value';
    series.dataFields.categoryY = 'field';
    series.name = this.props.title;
    series.columns.template.tooltipText = 'Series: {name}\nCategory: {categoryX}\nValue: {valueY}';
    series.columns.template.fill = am4core.color('#FF9E16'); // fill
  }

  render() {
    return (
      <GraphContainer>
        <div ref="chartDiv" />
      </GraphContainer>
    );
  }
}

export default BarChart;
