import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import numeral from 'numeral';

am4core.useTheme(am4themes_animated);

const colors = ['#8DC6E7', '#7CB2D2', '#6DA2C1', '#5392B7'];

class PieChart extends Component {
  componentDidMount() {
    const { id, data, title } = this.props;
    const chart = am4core.create(`savings-opportunities-chart-${id}`, am4charts.PieChart);
    chart.data = data;
    chart.fontSize = 14;

    const chartTitle = chart.titles.create();
    chartTitle.text = title;
    chartTitle.fontWeight = 400;

    // Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.colors.list = colors.map(color => am4core.color(color));
    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'title';

    pieSeries.ticks.template.disabled = true;
    pieSeries.alignLabels = false;
    pieSeries.labels.template.text = `\${value.formatNumber('#.a')}\n{value.percent.formatNumber('.')}%`;
    pieSeries.labels.template.radius = am4core.percent(-65);
    pieSeries.labels.template.fill = am4core.color('white');

    const as = pieSeries.slices.template.states.getKey('active');
    as.properties.shiftRadius = 0;

    pieSeries.labels.template.adapter.add('radius', (radius, target) => {
      if (target.dataItem && target.dataItem.values.value.percent < 10) {
        return 0;
      }
      return radius;
    });

    pieSeries.labels.template.adapter.add('fill', (color, target) => {
      if (target.dataItem && target.dataItem.values.value.percent < 10) {
        return am4core.color('#000');
      }
      return color;
    });

    chart.legend = new am4charts.Legend();
    chart.legend.align = 'center';
    chart.legend.width = 120;
    chart.legend.itemContainers.template.clickable = false;
    chart.legend.itemContainers.template.focusable = false;
    chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;
    const markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 15;
    markerTemplate.height = 15;

    pieSeries.tooltip.getFillFromObject = false;
    pieSeries.tooltip.label.fill = am4core.color('#000');
    pieSeries.tooltip.background.fill = am4core.color('#FFF');
    pieSeries.tooltip.background.stroke = am4core.color('#c9ceca');
    pieSeries.tooltip.background.fillOpacity = 1;
    pieSeries.tooltip.background.adapter.add('cornerRadius', () => 10);
    pieSeries.tooltip.background.pointerLength = 0;
    const dropShadow = new am4core.DropShadowFilter();
    dropShadow.opacity = 0;
    pieSeries.tooltip.background.filters.push(dropShadow);
    pieSeries.tooltip.dx = 200;

    pieSeries.slices.template.adapter.add('tooltipHTML', (_, context) => {
      const opportunity = context.dataItem.dataContext;
      const hover = opportunity.hover;
      return `
      <div style="padding: 5px;">
      <div style="margin-top:5px;"><strong>${opportunity.title}: ${numeral(
        opportunity.value
      ).format('$0.a')}</strong></div>
      <table style="margin: 1em 0">
      ${hover.fields
        .map(
          data =>
            `<tr>
          <td>${data.name}:</td>
          <td>${data.value}</td>
        </tr>`
        )
        .join('')}
      </table>
      <div><strong>Commentary</strong></div>
      <table>
      ${hover.comments
        .map(
          comment =>
            `<tr>
          <td>• ${comment}</td>
        </tr>`
        )
        .join('')}
      </table>
      </div>
      `;
    });

    this.chart = chart;
  }

  updateChart(title, data) {
    this.chart.titles.clear();
    const chartTitle = this.chart.titles.create();
    chartTitle.text = title;
    chartTitle.fontWeight = 400;
    this.chart.data = data;
    this.chart.invalidateData();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    const { id, title, data } = this.props;
    if (this.chart) {
      this.updateChart(title, data);
    }
    return <div id={`savings-opportunities-chart-${id}`} style={{ width: '100%' }} />;
  }
}

export default PieChart;
