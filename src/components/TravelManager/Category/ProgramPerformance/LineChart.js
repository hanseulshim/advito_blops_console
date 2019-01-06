import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

class LineChart extends Component {
  componentDidMount() {
    am4core.useTheme(am4themes_animated);
    const chart = am4core.create(`chartdiv${this.props.index}`, am4charts.XYChart);

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
    chart.data = [
      {
        date: '2013-01-15',
        value: 73,
      },
      {
        date: '2013-01-16',
        value: 71,
      },
      {
        date: '2013-01-17',
        value: 74,
      },
      {
        date: '2013-01-18',
        value: 78,
      },
      {
        date: '2013-01-19',
        value: 85,
      },
      {
        date: '2013-01-20',
        value: 82,
      },
      {
        date: '2013-01-21',
        value: 83,
      },
      {
        date: '2013-01-22',
        value: 88,
      },
      {
        date: '2013-01-23',
        value: 85,
      },
      {
        date: '2013-01-24',
        value: 85,
      },
      {
        date: '2013-01-25',
        value: 80,
      },
      {
        date: '2013-01-26',
        value: 87,
      },
      {
        date: '2013-01-27',
        value: 84,
      },
      {
        date: '2013-01-28',
        value: 83,
      },
      {
        date: '2013-01-29',
        value: 84,
      },
      {
        date: '2013-01-30',
        value: 81,
      },
    ];
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return <div id={`chartdiv${this.props.index}`} style={{ width: '100%' }} />;
  }
}

export default LineChart;
