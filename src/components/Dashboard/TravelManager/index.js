import React from 'react';
import styled from 'styled-components';
import ProgramPerformance from './ProgramPerformance';
import NetSpendAnalysis from './NetSpendAnalysis';
import chart from 'assets/chart.png';

const Container = styled.div`
  flex: 1;
`;

const TopRow = styled.div`
  display: flex;
`;

const Image = styled.img`
  margin-top: 2em;
  width: 100%;
`;

const TravelManager = () => (
  <Container>
    <TopRow>
      <ProgramPerformance />
      <NetSpendAnalysis />
    </TopRow>
    <Image src={chart} alt="chart" />
    <div>opportunities</div>
  </Container>
);

export default TravelManager;
