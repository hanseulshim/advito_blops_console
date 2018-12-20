import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import CollapseSidebar from './CollapseSidebar';
import UpcomingActions from './UpcomingActions';
import ActiveAlerts from './ActiveAlerts';
import SidebarUserInfo from './SidebarUserInfo';

const Container = styled.div`
  flex: 1;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grayNurse};
  padding: 3.5em 2.5em;
`;

const Sidebar = ({ location }) =>
  location.pathname === '/' ? (
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
  );

export default withRouter(Sidebar);
