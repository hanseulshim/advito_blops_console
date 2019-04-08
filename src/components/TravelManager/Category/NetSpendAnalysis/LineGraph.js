import React from 'react';
import styled from 'styled-components';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

const Chart = styled.div`
  display: flex;
  flex: 3;
  margin-top: 4em;
  margin-bottom: 2em;
`;

class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    const { data } = this.props;
    const chart = am4core.create(this.refs.spendGraph, am4charts.XYChart);

    chart.data = data;

    //Format ya Dates son
    chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';

    //Chart Title
    let title = chart.titles.create();
    title.text = "Average Total Trip Cost";
    title.fontSize = '1em';
    title.marginBottom = 25;
    title.marginLeft = 60;
    title.align = 'left';

    //Chart Cursor
    // chart.cursor = new am4charts.XYCursor();

    // X Axis : Dates
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.category = 'date';

    //Y Axis : Spend
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.dataFields.category = 'spend';
    valueAxis.min = 0;

    //Line for Projected Spend
    const projectedSeries = chart.series.push(new am4charts.LineSeries());
    projectedSeries.name = 'Projected Spend';
    projectedSeries.dataFields.valueY = 'projSpend';
    projectedSeries.dataFields.dateX = 'date';
    projectedSeries.strokeDasharray = 6;
    let bullet = projectedSeries.bullets.push(new am4charts.Bullet());
    let circle = bullet.createChild(am4core.Circle);
    circle.width = 10;
    circle.height = 10;
    circle.fill = '#FFF'
    projectedSeries.stroke = '#666666'

    //Line for actual spend
    const actualSeries = chart.series.push(new am4charts.LineSeries());
    actualSeries.name = 'Actual Spend';
    actualSeries.dataFields.valueY = 'actualSpend';
    actualSeries.dataFields.dateX = 'date';
    let actualBullet = actualSeries.bullets.push(new am4charts.Bullet());
    let actualCircle = actualBullet.createChild(am4core.Circle);
    actualCircle.width = 10;
    actualCircle.height = 10;
    actualCircle.fill = '#FFF';
    actualSeries.stroke = '#20ABA3';

    let totalSpendBudget = (1000000 + Math.floor(Math.random() * 100000))

    //Tooltip #2 attempt
    actualSeries.tooltip.getFillFromObject = false;
    actualSeries.tooltip.label.fill = am4core.color('#000');
    actualSeries.tooltip.background.fill = am4core.color('#FFF');
    actualSeries.tooltip.background.stroke = am4core.color('#c9ceca');
    actualSeries.tooltip.background.fillOpacity = 1;
    actualSeries.tooltip.pointerOrientation = "vertical";
    actualBullet.adapter.add('tooltipHTML', (_, context) => {

      return `
      <div style='padding:1em; '>
    <p> {dateX} </p>
    <div style="display:flex;">
      <div style=" border-right:1px solid black;  margin-right:1em; padding-right:1em;" >
        <p>$ {valueY}</p>
        <p>Average total trip cost.</p>
      </div>
      <div style="margin-right:1em;">
        <p>$ ${totalSpendBudget}</p>
        <p>Total Spend Budget</p>
      </div>
    </div>
    <p>0.27% more than projected</p>
    </div>
      `;
    });



    //Legend
    chart.legend = new am4charts.Legend();
    // const actualSeries = chart.series.push(new am4charts.LineSeries());
  }

  render() {
    return <Chart ref="spendGraph" />;
  }
}

export default LineGraph;
