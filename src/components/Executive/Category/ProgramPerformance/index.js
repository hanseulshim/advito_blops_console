import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

const ProgramPerformance = () => (
  <Switch>
    <Route path={`/executive/program-performance`} exact component={Home} />
  </Switch>
);

export default ProgramPerformance;
