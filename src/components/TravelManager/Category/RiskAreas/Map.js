import React, { Component } from 'react';
import styled from 'styled-components';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow';
import mapMarker from 'assets/map-marker.svg';
import numeral from 'numeral';

const Container = styled.div`
  height: 500px;
  width: 100%;
  margin-top: 1em;
`;

class WorldMap extends Component {
  componentDidMount() {
    const { data } = this.props;
    const chart = am4core.create(this.refs.riskAreaMap, am4maps.MapChart);
    chart.geodata = am4geodataWorldLow;
    chart.projection = new am4maps.projections.Miller();
    chart.seriesContainer.draggable = false;
    chart.seriesContainer.resizable = false;
    chart.maxZoomLevel = 1;

    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ['AQ'];

    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.fill = '#ACB7C7';

    // Create image series
    const imageSeries = chart.series.push(new am4maps.MapImageSeries());
    imageSeries.numberFormatter.numberFormat = '#.%';
    // Create a circle image in image series template so it gets replicated to all new images
    const imageSeriesTemplate = imageSeries.mapImages.template;

    const image = imageSeriesTemplate.createChild(am4core.Image);
    image.href = mapMarker;
    image.width = 55;
    image.height = 55;
    image.opacity = 0.7;
    image.horizontalCenter = 'middle';
    image.verticalCenter = 'middle';

    const circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 18;
    circle.dy = -7;
    circle.fill = am4core.color('#FFF');
    // Set property fields
    imageSeriesTemplate.propertyFields.latitude = 'latitude';
    imageSeriesTemplate.propertyFields.longitude = 'longitude';

    const label = imageSeriesTemplate.createChild(am4core.Label);
    label.text = `{percent}`;
    label.horizontalCenter = 'middle';
    label.verticalCenter = 'top';
    label.dy = -17;
    label.fill = am4core.color('#EB707F');

    imageSeries.tooltip.getFillFromObject = false;
    imageSeries.tooltip.label.fill = am4core.color('#000');
    imageSeries.tooltip.background.fill = am4core.color('#FFF');
    imageSeries.tooltip.background.stroke = am4core.color('#c9ceca');
    imageSeries.tooltip.background.fillOpacity = 1;
    imageSeries.tooltip.background.adapter.add('cornerRadius', () => 10);
    imageSeries.tooltip.background.pointerLength = 0;
    const dropShadow = new am4core.DropShadowFilter();
    dropShadow.opacity = 0;
    imageSeries.tooltip.background.filters.push(dropShadow);
    imageSeriesTemplate.adapter.add('tooltipHTML', (_, context) => {
      const data = context.dataItem.dataContext;
      const hover = data.hover;
      console.log(hover);
      return `<div style="padding: 5px;">
      <div style="margin-top:5px;"><strong>${data.title}: ${numeral(data.percent).format(
        '#.%'
      )} | ${numeral(data.value).format('$0.a')}</strong></div>
      <table style="margin: 1em 0">
      ${hover.fieldList
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

    imageSeriesTemplate.tooltipHTML = '';

    // Add data for the three cities
    imageSeries.data = data;

    this.imageSeries = imageSeries;
    this.chart = chart;
  }

  updateChart(data) {
    this.imageSeries.data = data;
    this.imageSeries.invalidateData();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    const { data } = this.props;
    if (this.chart) {
      this.updateChart(data);
    }
    return <Container ref="riskAreaMap" />;
  }
}

export default WorldMap;
