import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

class LineChart extends Component {
  componentDidMount() {
    am4core.useTheme(am4themes_animated);
    const chart = am4core.create('chartdiv', am4charts.XYChart);

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.disabled = true;
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.disabled = true;

    // Create series
    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.dateX = 'date';
    series.tooltipText = '{value}';
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Create projected series
    const projSeries = chart.series.push(new am4charts.LineSeries());
    projSeries.name = 'Proj. Spend';
    projSeries.dataFields.valueY = 'projValue';
    projSeries.dataFields.dateX = 'date';
    projSeries.tooltipText = '{value}';
    projSeries.strokeWidth = 1;
    projSeries.strokeDasharray = 6;
    projSeries.stroke = '#666666';

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = 'vertical';
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = 'middle';
    series.tooltip.label.textValign = 'middle';

    // Make bullets grow on hover
    const bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color('#fff');
    chart.data = this.props.data;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return <div id="chartdiv" style={{ width: '100%', flex: 1 }} />;
  }
}

export default LineChart;
