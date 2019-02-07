import React from 'react';
import styled from 'styled-components';

import SidebarUserInfo from './SidebarUserInfo';

const Container = styled.div`
  flex: 1.25;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grayNurse};
  padding: 0 2.5em;
`;

const Sidebar = ({ children }) => (
  <Container>
    <SidebarUserInfo />
    {children}
  </Container>
);

export default Sidebar;
