import React from 'react';
import styled from 'styled-components';
import ProgramPerformance from './ProgramPerformance';
import NetSpendAnalysis from './NetSpendAnalysis';
import Personas from './Personas';
import Opportunities from './Opportunities';
import RiskAreas from './RiskAreas';

const Container = styled.div`
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  margin-top: 2em;
`;

const TravelManager = () => (
  <Container>
    <Row>
      <ProgramPerformance />
      <NetSpendAnalysis />
    </Row>
    <Personas />
    <Row>
      <Opportunities />
      <RiskAreas />
    </Row>
  </Container>
);

export default TravelManager;
