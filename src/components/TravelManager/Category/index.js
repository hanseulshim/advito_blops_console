import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';
import ProgramPerformance from './ProgramPerformance';
import SavingsOpportunities from './SavingsOpportunities';
import RiskAreas from './RiskAreas';
import TeBreakdown from './TeBreakdown';

const Container = styled.div`
  padding: 4em;
  min-height: 900px;
  display: flex;
  background: ${props => props.theme.white};
  border-left: ${props => `1px solid ${props.theme.grayNurse}`};
  border-right: ${props => `1px solid ${props.theme.grayNurse}`};
  border-bottom: ${props => `1px solid ${props.theme.grayNurse}`};
`;

const Category = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Switch>
          <Route path={`/travel/program-performance`} component={ProgramPerformance} />
          <Route path={`/travel/savings-opportunities`} component={SavingsOpportunities} />
          <Route path={`/travel/risk-areas`} component={RiskAreas} />
          <Route path={`/travel/te-breakdown`} component={TeBreakdown} />
        </Switch>
      </Container>
    </>
  );
};

export default Category;
