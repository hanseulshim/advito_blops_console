import React from 'react';
import './ChartContainer.scss';
import styled from 'styled-components';

//import charts

//import secondary components
import SummaryMetric from '../Shared/SummaryMetric';
import GraphSummary from '../Shared/GraphSummary';
import ChartTitle from '../Shared/Title';
import WorldMapContainer from '../WorldMap';
import AirplaneContainer from '../Airplane';
import DonutContainer from '../Donut';
import HotelContainer from '../Hotel';

const VizContainer = styled.div`
  width: 100%;
  height: 900px;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const getChart = data => {
  if (data.locations) {
    return <WorldMapContainer data={data} />;
  } else if (data.airlines) {
    return <AirplaneContainer data={data} />;
  } else if (data.hotels) {
    return <HotelContainer data={data} />;
  }
  return <DonutContainer data={data} />;
};

const ChartContainer = props => {
  const { data } = props;

  return (
    <VizContainer>
      <ChartTitle title={data.title} summary={data.summary} />
      {data.kpis && <SummaryMetric {...props} />}
      {getChart(data)}
      {data.barcharts && <GraphSummary {...props} />}
    </VizContainer>
  );
};

export default ChartContainer;
