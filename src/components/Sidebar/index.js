import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import SidebarEvents from './SidebarEvents';
import SidebarUserInfo from './SidebarUserInfo';

const Container = styled.div`
  flex: 1;
  background: ${props => props.theme.alabaster};
  border: 1px solid ${props => props.theme.pumice};
  padding: 4em 2em;
`;

const query = `
{
  upcomingActions {
    header
    secondaryHeader
    icon
    alert
  }
  activeAlerts {
    header
    secondaryHeader
    icon
    alert
  }
}
`;

const Sidebar = () => (
  <Container>
    <SidebarUserInfo />
    <GraphQL query={query}>
      {data => (
        <>
          <SidebarEvents title="upcoming actions" data={data.upcomingActions} />
          <SidebarEvents title="active alerts" data={data.activeAlerts} />
        </>
      )}
    </GraphQL>
  </Container>
);

export default Sidebar;
