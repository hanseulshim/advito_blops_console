import React from 'react';
import styled from 'styled-components';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { projected, actual } = this.props;
    const chart = am4core.create(this.refs.spendGraph, am4charts.XYChart);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'date';
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.dataFields.category = 'spend';
  }

  render() {
    return <div ref="spendGraph" />;
  }
}

export default LineGraph;
