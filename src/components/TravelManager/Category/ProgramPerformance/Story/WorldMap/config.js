import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow';
import { locations, moreLocations } from '../../data/locations';

export const TrafficLaneOverviewConfig = () => {
  const chart = am4core.create('chartDiv', am4maps.MapChart);
  chart.geodata = am4geodataWorldLow;
  chart.projection = new am4maps.projections.Miller();
  chart.seriesContainer.draggable = false;
  chart.maxZoomLevel = 1;

  const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.useGeodata = true;
  polygonSeries.exclude = ['AQ'];

  const polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.fill = '#ACB7C7';
  locations.forEach(location => {
    const mapArcSeries = chart.series.push(new am4maps.MapArcSeries());
    mapArcSeries.mapLines.template.stroke = '#2C4E5F';
    mapArcSeries.mapLines.template.line.controlPointDistance = location.height;
    mapArcSeries.mapLines.template.tooltipText = 'From: {from}\nTo: {to}';
    mapArcSeries.mapLines.template.tooltipPosition = 'pointer';
    mapArcSeries.mapLines.template.strokeWidth = location.thickness;
    mapArcSeries.mapLines.template.opacity = location.opacity;
    mapArcSeries.data = [
      {
        multiGeoLine: [location.coords],
        from: location.from,
        to: location.to,
      },
    ];
  });
};

export const AirSummaryConfig = () => {
  const chart = am4core.create('chartDiv', am4maps.MapChart);
  chart.geodata = am4geodataWorldLow;
  chart.projection = new am4maps.projections.Miller();
  chart.seriesContainer.draggable = false;
  chart.maxZoomLevel = 1;

  const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.useGeodata = true;
  polygonSeries.exclude = ['AQ'];

  const polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.fill = '#ACB7C7';
  locations.forEach(location => {
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
};

export const HotelSummaryConfig = () => {
  const chart = am4core.create('chartDiv', am4maps.MapChart);
  chart.geodata = am4geodataWorldLow;
  chart.projection = new am4maps.projections.Miller();
  chart.seriesContainer.draggable = false;
  chart.maxZoomLevel = 1;

  const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.useGeodata = true;
  polygonSeries.exclude = ['AQ'];

  const polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.fill = '#ACB7C7';

  moreLocations.forEach((city, index) => {
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
    imageSeries.data = moreLocations;
  });
};
