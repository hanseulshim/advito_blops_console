import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { ApolloConsumer } from 'react-apollo';
import styled from 'styled-components';
import { DONUT } from 'components/graphql/query';
import { metricFormat } from 'components/common/helper';
am4core.useTheme(am4themes_animated);

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Chart = styled.div`
  height: 100%;
`;

const BreadcrumbRow = styled.div`
  margin-top: 3.5em;
  display: flex;
`;

const Crumb = styled.div`
  cursor: pointer;
`;

const Spacer = styled.span`
  margin: 0 1em;
`;

//main guy
class Donut extends Component {
  state = {
    chartLevel: [],
  };
  componentDidMount() {
    const { data, colors, label, context, total } = this.props;
    const chart = am4core.create(this.refs.donutContainer, am4charts.PieChart);
    this.chart = chart;
    this.createChart(data, colors, label, total);
    const chartLevel = this.state.chartLevel.slice();
    chartLevel.push({ label, context, total });
    this.setState({
      chartLevel,
    });
  }

  createChart(data, colors, label, total) {
    this.chart.validateData();
    const pieSeries = this.chart.series.push(new am4charts.PieSeries());
    pieSeries.data = data;
    pieSeries.colors.list = colors.map(color => am4core.color(color));
    this.chart.numberFormatter.numberFormat = '#.##a';

    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'category';
    pieSeries.dataFields.nextLevel = 'nextLevel';

    if (this.props.view === 'hotel') {
      pieSeries.labels.template.text = '{category}: {value}';
    }

    pieSeries.alignLabels = false;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.innerRadius = am4core.percent(75);
    pieSeries.labels.template.radius = 30;
    pieSeries.slices.template.tooltipText = '';
    pieSeries.slices.template.togglable = false;
    pieSeries.slices.template.events.on('hit', this.changeSeries);

    const totalLabel = this.chart.seriesContainer.createChild(am4core.Label);
    totalLabel.text = metricFormat(total);
    totalLabel.horizontalCenter = 'middle';
    totalLabel.verticalCenter = 'middle';
    totalLabel.fontSize = 40;
    totalLabel.dy = -40;

    const chartLabel = this.chart.seriesContainer.createChild(am4core.Label);
    chartLabel.text = label;
    chartLabel.horizontalCenter = 'middle';
    chartLabel.verticalCenter = 'middle';
    chartLabel.fontSize = 40;
  }

  changeSeries = async e => {
    if (e.target.dataItem.nextLevel) {
      const selected = e.target.dataItem.nextLevel;
      const { data } = await this.props.client.query({
        query: DONUT,
        variables: { title: selected },
      });
      const { title, summary, donutData, colors, label, context, total } = data.donut;
      this.props.updateInfo(title, summary);

      this.chart.series.clear();
      this.chart.seriesContainer.disposeChildren();
      this.createChart(donutData, colors, label, total);
      const chartLevel = this.state.chartLevel.slice();
      chartLevel.push({ label, context, total });
      this.setState({
        chartLevel,
      });
    }
  };

  removeLevel = async (context, index) => {
    this.chart.series.clear();
    this.chart.seriesContainer.disposeChildren();
    const { data } = await this.props.client.query({
      query: DONUT,
      variables: { title: context },
    });
    const { title, summary, donutData, colors, label, total } = data.donut;
    this.props.updateInfo(title, summary);

    this.chart.series.clear();
    this.chart.seriesContainer.disposeChildren();
    this.createChart(donutData, colors, label, total);
    const chartLevel = this.state.chartLevel.slice(0, index + 1);
    this.setState({
      chartLevel,
    });
  };

  createBreadcrumbs = (crumb, index) => (
    <>
      <Crumb key={index} onClick={e => this.removeLevel(crumb.context, index)}>
        <div>{crumb.label}</div>
        <div>{metricFormat(crumb.total)}</div>
      </Crumb>
      {index !== this.state.chartLevel.length - 1 && <Spacer key={index}>></Spacer>}
    </>
  );

  render() {
    const { chartLevel } = this.state;
    return (
      <Container>
        {chartLevel.length > 1 && (
          <BreadcrumbRow>{chartLevel.map(this.createBreadcrumbs)}</BreadcrumbRow>
        )}
        <Chart ref="donutContainer" />
      </Container>
    );
  }
}

const DonutWrapper = props => (
  <ApolloConsumer>{client => <Donut client={client} {...props} />}</ApolloConsumer>
);

export default DonutWrapper;