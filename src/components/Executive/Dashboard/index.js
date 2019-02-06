import React from 'react';
import styled from 'styled-components';
import ProgramPerformance from './ProgramPerformance';
import NetSpendAnalysis from './NetSpendAnalysis';
import Markets from './Markets';
import SavingsOpportunities from './SavingsOpportunities';
import RiskAreas from './RiskAreas';
import Select from '../../common/Select';

const Row = styled.div`
  display: flex;
`;


const Dashboard = () => (
  <>
    <Row>
      <ProgramPerformance />
      <NetSpendAnalysis />
    </Row>
    <Markets />
    <Row>
      <SavingsOpportunities />
    </Row>
    <Row>
      <RiskAreas />
    </Row>
  </>
);

export default Dashboard;
