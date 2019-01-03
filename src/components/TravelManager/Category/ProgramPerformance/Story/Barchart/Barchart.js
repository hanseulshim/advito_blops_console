import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import styled from 'styled-components';

const GraphContainer = styled.div`
  flex: ${props => (props.first ? 1.3 : 1)};
  font-size: 0.8em;
`;

class BarChart extends Component {
  componentDidMount() {
    const { title, data, type, first } = this.props;
    const chart = am4core.create(this.refs.chartDiv, am4charts.XYChart);
    chart.data = data;

    if (type === 'money') {
      chart.numberFormatter.numberFormat = '$#.##a';
    } else {
      chart.numberFormatter.numberFormat = '#.##a';
    }

    const chartTitle = chart.titles.create();
    chartTitle.text = title;
    chartTitle.stroke = am4core.color('#000');
    chartTitle.align = 'left';
    chartTitle.marginBottom = 5;
    if (first) {
      chartTitle.dx = 90;
    }

    // Create axes
    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.minGridDistance = 5;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;
    if (!first) {
      categoryAxis.renderer.labels.template.disabled = true;
    }

    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.min = 0;
    const max = Math.max(...data.map(v => v.value));
    valueAxis.max = max * 1.2;

    // Create series
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = 'value';
    series.dataFields.categoryY = 'category';
    series.columns.template.fill = am4core.color('#BBE0DE');
    series.columns.template.strokeWidth = 0;

    const valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = '{value}';
    valueLabel.label.horizontalCenter = 'left';
    valueLabel.label.dx = 3;
    valueLabel.label.hideOversized = true;
    valueLabel.label.truncate = false;
    valueLabel.locationX = 1;

    const deltaLabel = series.bullets.push(new am4charts.LabelBullet());
    deltaLabel.label.text = '({change}{delta})';
    deltaLabel.label.horizontalCenter = 'left';
    deltaLabel.label.dx = 3;
    deltaLabel.label.hideOversized = false;
    deltaLabel.label.truncate = false;
    deltaLabel.locationX = 0;
  }

  render() {
    const { first } = this.props;
    return <GraphContainer first={first} ref="chartDiv" />;
  }
}

export default BarChart;
