import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/common/Typography';

import SummaryMetric from './SummaryMetric';
import Barchart from './Barchart';
import WorldMapContainer from './WorldMap';
import Visual from './Visual';

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

const ChartContainer = ({ data, view, dataView }) => (
  <VizContainer>
    <TitleSpaced>{data.title}</TitleSpaced>
    <div>{data.summary}</div>
    {data.kpis && <SummaryMetric data={data.kpis} dataView={dataView} />}
    {data.locations && <WorldMapContainer key={data.title} data={data.locations} view={view} />}
    {data.categories && (
      <Visual key={data.title} data={data.categories} view={view} dataView={dataView} />
    )}
    {data.barchart && <Barchart data={data.barchart} dataView={dataView} />}
  </VizContainer>
);

export default ChartContainer;
