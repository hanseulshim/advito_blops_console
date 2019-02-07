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

const ExecutiveContainer = styled.div`
  flex: 1;
`;

const Executive = () => (
  <Container>
    <CollapseSidebar>
      <UpcomingActions />
      <ActiveAlerts />
    </CollapseSidebar>
    <MainContainer>
      <Header />
      <ExecutiveContainer>
        <Switch>
          <Route path={`/executive/dashboard`} exact component={Dashboard} />
          <Route path={`/executive/:category`} component={Category} />
        </Switch>
      </ExecutiveContainer>
    </MainContainer>
  </Container>
);

export default Executive;
