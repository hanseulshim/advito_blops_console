import React from 'react';
import styled from 'styled-components';
import ProgramPerformance from './ProgramPerformance';
import NetSpendAnalysis from './NetSpendAnalysis';
import SavingsOpportunities from './SavingsOpportunities';
import RiskAreas from './RiskAreas';
import TeBreakdownRow from './T&EBreakdown';

const Row = styled.div`
  display: flex;
`;

const Dashboard = () => (
  <>
    <Row>
      <ProgramPerformance />
      <NetSpendAnalysis />
    </Row>
    <TeBreakdownRow />
    <Row>
      <SavingsOpportunities />
      <RiskAreas />
    </Row>
  </>
);

export default Dashboard;
