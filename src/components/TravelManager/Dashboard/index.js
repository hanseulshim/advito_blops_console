import React from 'react';
import styled from 'styled-components';
import ProgramPerformance from './ProgramPerformance';
import NetSpendAnalysis from './NetSpendAnalysis';
import SavingsOpportunities from './SavingsOpportunities';
import RiskAreas from './RiskAreas';
import TeBreakdown from '../Category/TeBreakdown';

const Row = styled.div`
  display: flex;
`;

const Dashboard = () => (
  <>
    <Row>
      <ProgramPerformance />
      <NetSpendAnalysis />
    </Row>
    <TeBreakdown />
    <Row>
      <SavingsOpportunities />
      <RiskAreas />
    </Row>
  </>
);

export default Dashboard;
