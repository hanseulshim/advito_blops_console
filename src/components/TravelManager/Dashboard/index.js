import React from 'react';
import styled from 'styled-components';
import ViewContext from 'components/context/ViewContext';
import ProgramPerformance from './ProgramPerformance';
import NetSpendAnalysis from './NetSpendAnalysis';
import Personas from './Personas';
import SavingsOpportunities from './SavingsOpportunities';
import RiskAreas from './RiskAreas';

const Row = styled.div`
  display: flex;
  margin-top: 2em;
`;

const Dashboard = () => (
  <ViewContext.Consumer>
    {({ changeView }) => (
      <>
        <Row>
          <ProgramPerformance changeView={changeView} />
          <NetSpendAnalysis changeView={changeView} />
        </Row>
        <Personas changeView={changeView} />
        <Row>
          <SavingsOpportunities changeView={changeView} />
          <RiskAreas changeView={changeView} />
        </Row>
      </>
    )}
  </ViewContext.Consumer>
);

export default Dashboard;
