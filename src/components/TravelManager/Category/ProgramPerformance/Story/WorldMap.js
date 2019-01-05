import React, { Component } from 'react';
import styled from 'styled-components';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow';

const Container = styled.div`
  height: 500px;
  @media (max-width: 1336px) {
    height: 400px;
  }
  margin-top: 1em;
`;

class WorldMap extends Component {
  componentDidMount() {
    const chart = am4core.create(this.refs.mapContainer, am4maps.MapChart);
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

    if (this.props.view === 'air') {
      this.props.data.forEach(location => {
        const mapArcSeries = chart.series.push(new am4maps.MapArcSeries());
        mapArcSeries.mapLines.template.stroke = '#2C4E5F';
        mapArcSeries.mapLines.template.line.controlPointDistance = location.height;
        mapArcSeries.mapLines.template.tooltipText = 'From: {origin}\nTo: {destination}';
        mapArcSeries.mapLines.template.tooltipPosition = 'pointer';
        mapArcSeries.mapLines.template.strokeWidth = location.thickness;
        mapArcSeries.mapLines.template.height = location.height;
        mapArcSeries.mapLines.template.opacity = location.opacity;
        mapArcSeries.data = [
          {
            multiGeoLine: [location.coords],
            origin: location.origin,
            destination: location.destination,
          },
        ];
      });
    } else if (this.props.view === 'hotel') {
      const imageSeries = chart.series.push(new am4maps.MapImageSeries());
      imageSeries.data = this.props.data;

      const pointTemplate = imageSeries.mapImages.template;
      const point = pointTemplate.createChild(am4core.Circle);
      point.radius = 2;
      point.fill = am4core.color('#0A4153');
      point.tooltipText = '{title}';
      pointTemplate.propertyFields.latitude = 'latitude';
      pointTemplate.propertyFields.longitude = 'longitude';
      pointTemplate.propertyFields.radius = 'radius';
      const pointRadius = pointTemplate.createChild(am4core.Circle);
      pointRadius.adapter.add('radius', (center, target) => {
        if (!target.dataItem) {
          return center;
        }
        return target.dataItem.dataContext.radius;
      });
      pointRadius.fill = am4core.color('#0A4153');
      pointRadius.opacity = 0.3;
      pointRadius.tooltipText = '{title}';
    }
  }

  render() {
    return <Container ref="mapContainer" />;
  }
}

export default WorldMap;
