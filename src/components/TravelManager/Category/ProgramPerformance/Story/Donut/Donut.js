import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import './donut.scss';
import styled from 'styled-components';
am4core.useTheme(am4themes_animated);

//styled layouts
const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
const BreadcrumbRow = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

const Crumb = styled.span`
  margin-right: 10px;
`;

//main guy
class Donut extends Component {
  state = {
    chartLevel: [],
  };
  componentDidMount() {
    const chart = am4core.create(this.refs.donutContainer, am4charts.PieChart);
    this.chart = chart;

    this.createChart(chart, this.props.data.routes, this.changeSeries);
    const chartLevel = this.state.chartLevel.slice();
    chartLevel.push(this.props.data.context);
    this.setState({
      chartLevel,
    });
    // chartLevel.push();
  }

  createChart(chart, data, changeSeries) {
    chart.validateData();
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.data = data;
    pieSeries.colors.list = [
      am4core.color('#f7e9aa'),
      am4core.color('#75e0e2'),
      am4core.color('#6fcfaf'),
      am4core.color('#86a6d6'),
      am4core.color('#b789d4'),
      am4core.color('#d67a7a'),
    ];

    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'category';
    pieSeries.dataFields.prop = 'prop';
    pieSeries.dataFields.nextProp = 'nextProp';

    pieSeries.alignLabels = false;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.innerRadius = am4core.percent(75);
    pieSeries.labels.template.radius = 30;
    // pieSeries.labels.template.text =
    //   '{category}\n[font-size:175%]{value.value}%[/]';
    pieSeries.slices.template.tooltipText = '';
    pieSeries.slices.template.togglable = false;
    pieSeries.slices.template.events.on('hit', changeSeries);
  }

  changeSeries = e => {
    if (e.target.dataItem.nextProp) {
      const selected = e.target.dataItem.nextProp;
      this.chart.series.clear();
      this.createChart(
        this.chart,
        this.props.data[selected],
        this.changeSeries,
      );
      const chartLevel = this.state.chartLevel.slice();
      chartLevel.push(selected);
      this.setState({
        chartLevel,
      });
    }
  };

  removeLevel = (crumb, index) => {
    console.log(index);
    this.chart.series.clear();
    const chartLevel = this.state.chartLevel.slice(0, index + 1);

    this.setState({
      chartLevel,
    });
    this.createChart(this.chart, this.props.data[crumb], this.changeSeries);
  };

  createBreadcrumbs = crumbs => {
    return crumbs.map((crumb, index) => (
      <Crumb index={index} onClick={e => this.removeLevel(crumb, index)}>
        {crumb}
      </Crumb>
    ));
  };
  render() {
    return (
      <Container>
        <BreadcrumbRow>
          {' '}
          {this.createBreadcrumbs(this.state.chartLevel)}
        </BreadcrumbRow>
        <div ref="donutContainer" style={{ height: '90%' }} />
      </Container>
    );
  }
}

export default Donut;
