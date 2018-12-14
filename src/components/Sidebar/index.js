import React from 'react';
import styled from 'styled-components';
import ViewContext from 'components/context/ViewContext';
import CollapseSidebar from './CollapseSidebar';
import UpcomingActions from './UpcomingActions';
import ActiveAlerts from './ActiveAlerts';
import SidebarUserInfo from './SidebarUserInfo';

const Container = styled.div`
  flex: 1;
  background: ${props => props.theme.alabaster};
  border: 1px solid ${props => props.theme.pumice};
  padding: 4em 2em;
`;

const Sidebar = () => (
  <ViewContext.Consumer>
    {({ view }) =>
      view === 'dashboard' ? (
        <Container>
          <SidebarUserInfo />
          <UpcomingActions />
          <ActiveAlerts />
        </Container>
      ) : (
        <CollapseSidebar>
          <SidebarUserInfo />
          <UpcomingActions />
          <ActiveAlerts />
        </CollapseSidebar>
      )
    }
  </ViewContext.Consumer>
);

export default Sidebar;
