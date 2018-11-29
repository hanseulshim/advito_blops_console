import React from 'react';
import styled from 'styled-components';
import SidebarEvents from './SidebarEvents';
import SidebarUserInfo from './SidebarUserInfo';

//TODO: eventually delete
import { activeAlerts, upcomingActions } from 'data/sidebarData';

const Container = styled.div`
  flex: 1;
  background: ${props => props.theme.alabaster};
  border: 1px solid ${props => props.theme.pumice};
  padding: 4em 2em;
`;

export default () => (
  <Container>
    <SidebarUserInfo />
    <SidebarEvents title="upcoming actions" data={upcomingActions} />
    <SidebarEvents title="active alerts" data={activeAlerts} />
  </Container>
);
