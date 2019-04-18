import React from 'react';
import styled from 'styled-components';
import ProgramPerformance from './ProgramPerformance';
import NetSpendAnalysis from './NetSpendAnalysis';
// import Markets from './Markets';
import TeBreakdownRow from './T&EBreakdown';
import SavingsOpportunities from './SavingsOpportunities';
import RiskAreas from './RiskAreas';

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
    </Row>
    <Row>
      <RiskAreas />
    </Row>
  </>
);

export default Dashboard;
