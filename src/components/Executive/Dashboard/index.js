import React from 'react';
import styled from 'styled-components';
import ProgramPerformance from './ProgramPerformance';
import NetSpendAnalysis from './NetSpendAnalysis';
import Personas from './Personas';
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
    <Personas />
    <Row>
      <SavingsOpportunities />
      <RiskAreas />
    </Row>
  </>
);

export default Dashboard;
