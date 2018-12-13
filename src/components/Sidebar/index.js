import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import ViewContext from 'components/context/ViewContext';
import SidebarEvents from './SidebarEvents';
import SidebarUserInfo from './SidebarUserInfo';

const Container = styled.div`
  flex: 1;
  background: ${props => props.theme.alabaster};
  border: 1px solid ${props => props.theme.pumice};
  padding: 4em 2em;
  transition: all 500ms ease;
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
  <ViewContext.Consumer>
    {({ view }) =>
      view === 'dashboard' && (
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
      )
    }
  </ViewContext.Consumer>
);

export default Sidebar;
