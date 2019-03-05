import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { ApolloConsumer } from 'react-apollo';
import UserContext from 'components/context/UserContext';
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
  margin-top: 1.5em;
  display: flex;
  visibility: ${props => props.first && 'hidden'};
`;

const Crumb = styled.div`
  cursor: pointer;
`;

const CrumbLabel = styled.div`
  color: ${props => props.theme.treePoppy};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.treePoppy};
  }
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

  createChart(data, colors, label, total, last) {
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

    pieSeries.tooltip.getFillFromObject = false;
    pieSeries.tooltip.label.fill = am4core.color('#000');
    pieSeries.tooltip.background.fill = am4core.color('#FFF');
    pieSeries.tooltip.background.stroke = am4core.color('#c9ceca');
    pieSeries.tooltip.background.fillOpacity = 1;
    pieSeries.tooltip.background.adapter.add('cornerRadius', () => 25);
    pieSeries.tooltip.background.pointerLength = 0;
    const dropShadow = new am4core.DropShadowFilter();
    dropShadow.opacity = 0;
    pieSeries.tooltip.background.filters.push(dropShadow);
    last
      ? pieSeries.slices.template.adapter.add('tooltipHTML', (_, context) => {
          const tooltip = context.dataItem.dataContext.tooltip;
          return `
          <div style="padding: 5px;">
          <div style="margin-top:5px;"><strong>${tooltip.title}</strong></div>
          <table>
          ${tooltip.tooltipData
            .map(
              data =>
                `<tr>
              <td>${Math.round(data.value * 100)}%</td>
              <td>${data.name}</td>
            </tr>`
            )
            .join('')}
          </table></div>
          `;
        })
      : (pieSeries.slices.template.tooltipText = '');

    pieSeries.slices.template.innerRadius = am4core.percent(85);
    pieSeries.slices.template.togglable = false;
    pieSeries.slices.template.events.on('hit', this.changeSeries);

    const totalLabel = this.chart.seriesContainer.createChild(am4core.Label);
    totalLabel.text = metricFormat(total);
    totalLabel.horizontalCenter = 'middle';
    totalLabel.verticalCenter = 'middle';
    totalLabel.fontWeight = 400;
    totalLabel.fontSize = 25;
    totalLabel.dy = -25;

    const chartLabel = this.chart.seriesContainer.createChild(am4core.Label);
    chartLabel.text = label;
    chartLabel.horizontalCenter = 'middle';
    chartLabel.verticalCenter = 'middle';
    chartLabel.fontSize = 25;
    chartLabel.fontWeight = 400;
  }

  changeSeries = async e => {
    if (e.target.dataItem.nextLevel) {
      const selected = e.target.dataItem.nextLevel;
      const {
        data: { donut },
      } = await this.props.client.query({
        query: DONUT,
        variables: {
          clientId: this.props.user.clientId,
          sessionToken: this.props.user.sessionToken,
          title: selected,
        },
      });
      const { title, summary, donutData, colors, label, context, total, last } = donut;
      this.props.updateInfo(title, summary);

      this.chart.series.clear();
      this.chart.seriesContainer.disposeChildren();
      const chartLevel = this.state.chartLevel.slice();
      chartLevel.push({ label, context, total });
      this.setState({
        chartLevel,
      });
      this.createChart(donutData, colors, label, total, last);
    }
  };

  removeLevel = async (context, index) => {
    this.chart.series.clear();
    this.chart.seriesContainer.disposeChildren();
    const {
      data: { donut },
    } = await this.props.client.query({
      query: DONUT,
      variables: {
        clientId: this.props.user.clientId,
        sessionToken: this.props.user.sessionToken,
        title: context,
      },
    });
    const { title, summary, donutData, colors, label, total, last } = donut;
    this.props.updateInfo(title, summary);

    this.chart.series.clear();
    this.chart.seriesContainer.disposeChildren();
    const chartLevel = this.state.chartLevel.slice(0, index + 1);
    this.setState({
      chartLevel,
    });
    this.createChart(donutData, colors, label, total, last);
  };

  createBreadcrumbs = (crumb, index) => (
    <React.Fragment key={index + crumb.label}>
      <Crumb onClick={e => this.removeLevel(crumb.context, index)}>
        <CrumbLabel>{crumb.label}</CrumbLabel>
        <div>{metricFormat(crumb.total)}</div>
      </Crumb>
      {index !== this.state.chartLevel.length - 1 && <Spacer key={index}>></Spacer>}
    </React.Fragment>
  );

  render() {
    const { chartLevel } = this.state;
    return (
      <Container>
        <BreadcrumbRow first={chartLevel.length === 1}>
          {chartLevel.map(this.createBreadcrumbs)}
        </BreadcrumbRow>
        <Chart ref="donutContainer" />
      </Container>
    );
  }
}

const DonutWrapper = props => (
  <ApolloConsumer>
    {client => (
      <UserContext.Consumer>
        {({ user, removeUser }) => (
          <Donut client={client} user={user} removeUser={removeUser} {...props} />
        )}
      </UserContext.Consumer>
    )}
  </ApolloConsumer>
);

export default DonutWrapper;
