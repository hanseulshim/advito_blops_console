import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/common/Typography';

//import charts

//import secondary components
import SummaryMetric from './SummaryMetric';
import Barchart from './Barchart';
import WorldMapContainer from './WorldMap';
import AirplaneContainer from './Airplane';
import DonutContainer from './Donut';
import HotelContainer from './Hotel';

const VizContainer = styled.div`
  width: 100%;
  height: 900px;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TitleSpaced = styled(Title)`
  font-size: 1.1em;
  font-weight: 500;
  margin-bottom: 0.5em;
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

const ChartContainer = ({ data }) => (
  <VizContainer>
    <TitleSpaced>{data.title}</TitleSpaced>
    <div>{data.summary}</div>
    {data.kpis && <SummaryMetric data={data.kpis} />}
    {/* {getChart(data)} */}
    {data.barchart && <Barchart data={data.barchart} />}
  </VizContainer>
);

export default ChartContainer;
