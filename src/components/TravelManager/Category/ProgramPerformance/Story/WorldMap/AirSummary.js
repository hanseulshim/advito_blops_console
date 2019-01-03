import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow';

class AirSummary extends Component {
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
    this.props.data.locations.forEach(location => {
      const mapArcSeries = chart.series.push(new am4maps.MapArcSeries());
      mapArcSeries.mapLines.template.stroke = '#2C4E5F';
      mapArcSeries.mapLines.template.line.controlPointDistance = location.height;
      mapArcSeries.mapLines.template.tooltipText = 'From: {from}\nTo: {to}';
      mapArcSeries.mapLines.template.tooltipPosition = 'pointer';
      mapArcSeries.mapLines.template.strokeWidth = 2.5;
      mapArcSeries.mapLines.template.opacity = location.opacity;
      mapArcSeries.data = [
        {
          multiGeoLine: [location.coords],
          from: location.from,
          to: location.to,
        },
      ];
    });
  }

  render() {
    return <div ref="mapContainer" style={{ height: '80%' }} />;
  }
}

export default AirSummary;
