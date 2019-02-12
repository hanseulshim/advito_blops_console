import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import CollapseSidebar from 'components/Sidebar/CollapseSidebar';
import UpcomingActions from 'components/Sidebar/UpcomingActions';
import ActiveAlerts from 'components/Sidebar/ActiveAlerts';
import Dashboard from './Dashboard';
import Category from './Category';

import { Container, MainContainer, DashboardContainer } from 'styles/Dashboard';

const TravelManager = () => (
  <Container>
    <CollapseSidebar>
      <UpcomingActions />
      <ActiveAlerts />
    </CollapseSidebar>
    <MainContainer>
      <Header />
      <DashboardContainer>
        <Switch>
          <Route path={`/travel/dashboard`} exact component={Dashboard} />
          <Route path={`/travel/:category`} component={Category} />
        </Switch>
      </DashboardContainer>
    </MainContainer>
  </Container>
);

export default TravelManager;
