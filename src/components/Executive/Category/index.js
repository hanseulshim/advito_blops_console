import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';
import ProgramPerformance from './ProgramPerformance';
import SavingsOpportunities from '../../TravelManager/Category/SavingsOpportunities';
import RiskAreas from '../../TravelManager/Category/RiskAreas';
import TeBreakdown from '../../TravelManager/Category/TeBreakdown';
import NetSpendAnalysis from '../../TravelManager/Category/NetSpendAnalysis';

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
          <Route path={`/executive/program-performance`} component={ProgramPerformance} />
          <Route path={`/executive/savings-opportunities`} component={SavingsOpportunities} />
          <Route path={`/executive/risk-areas`} component={RiskAreas} />
          <Route path={`/executive/te-breakdown`} component={TeBreakdown} />
          <Route path={`/executive/net-spend-analysis`} component={NetSpendAnalysis} />
        </Switch>
      </Container>
    </>
  );
};

export default Category;
