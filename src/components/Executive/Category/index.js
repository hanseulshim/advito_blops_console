import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';
import ProgramPerformance from './ProgramPerformance';
// import SavingsOpportunities from './SavingsOpportunities';

const Container = styled.div`
  padding: 2em 4em;
  background: ${props => props.theme.white};
`;

const Category = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Switch>
          <Route path={`/executive/program-performance`} component={ProgramPerformance} />
        </Switch>
      </Container>
    </>
  );
};

export default Category;
