import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Story from './Story';

const ProgramPerformance = () => (
  <Switch>
    <Route path={`/travel/program-performance`} exact component={Home} />
    <Route
      path={`/travel/program-performance/:story`}
      render={({ location }) => (
        <Story
          view={location.pathname === '/travel/program-performance/air-story' ? 'air' : 'hotel'}
        />
      )}
    />
  </Switch>
);

export default ProgramPerformance;
