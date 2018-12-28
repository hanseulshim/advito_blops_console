import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow';
import '../ChartContainer/ChartContainer.scss';

class HotelSpend extends Component {
  componentDidMount() {
    const chart = am4core.create(this.refs.mapContainer, am4maps.MapChart);
    chart.geodata = am4geodataWorldLow;
    chart.projection = new am4maps.projections.Miller();
    chart.seriesContainer.draggable = false;
    chart.maxZoomLevel = 1;

    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ['AQ'];

    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.fill = '#ACB7C7';

    const imageSeries = chart.series.push(new am4maps.MapImageSeries());
    let imageSeriesTemplate = imageSeries.mapImages.template;
    let circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color('#2C4E5F');
    circle.stroke = am4core.color('#2C4E5F');
    circle.strokeWidth = 2;
    circle.nonScaling = true;
    circle.tooltipText = '{name}';
    imageSeriesTemplate.propertyFields.latitude = 'lat';
    imageSeriesTemplate.propertyFields.longitude = 'lng';
    imageSeries.data = this.props.data.locations;
  }

  render() {
    return <div ref="mapContainer" style={{ height: '80%' }} />;
  }
}

export default HotelSpend;
