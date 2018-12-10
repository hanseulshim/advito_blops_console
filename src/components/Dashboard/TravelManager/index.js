import React from 'react';
import styled from 'styled-components';
import ProgramPerformance from './ProgramPerformance';
import NetSpendAnalysis from './NetSpendAnalysis';
import Personas from './Personas';

const Container = styled.div`
  flex: 1;
`;

const TopRow = styled.div`
  display: flex;
`;

const TravelManager = () => (
  <Container>
    <TopRow>
      <ProgramPerformance />
      <NetSpendAnalysis />
    </TopRow>
    <Personas />
    <div>opportunities</div>
  </Container>
);

export default TravelManager;
