import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import CollapseSidebar from 'components/Sidebar/CollapseSidebar';
import UpcomingActions from 'components/Sidebar/UpcomingActions';
import ActiveAlerts from 'components/Sidebar/ActiveAlerts';
import Dashboard from './Dashboard';
import Category from './Category';

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  position: relative;
  height: 100%;
`;

const MainContainer = styled.div`
  flex: 3;
  padding: 0em 4em;
`;

const TravelManagerContainer = styled.div`
  flex: 1;
`;

const TravelManager = () => (
  <Container>
    <CollapseSidebar>
      <UpcomingActions />
      <ActiveAlerts />
    </CollapseSidebar>
    <MainContainer>
      <Header />
      <TravelManagerContainer>
        <Switch>
          <Route path={`/travel/dashboard`} exact component={Dashboard} />
          <Route path={`/travel/:category`} component={Category} />
        </Switch>
      </TravelManagerContainer>
    </MainContainer>
  </Container>
);

export default TravelManager;
