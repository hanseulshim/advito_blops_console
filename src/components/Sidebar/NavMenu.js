import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  background-color: ${props => props.theme.treePoppy};
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  color: ${props => props.theme.white};
  position: absolute;
  bottom: -170%;
  right: 0;
  border-radius: 5%;
  cursor: pointer;
`;

const NavItem = styled(Link)`
  color: ${props => props.theme.white};
  margin-bottom: 1em;
  :hover {
    color: ${props => props.theme.silver};
    text-decoration: underline;
  }
`;

const NavItems = [
  {
    link: 'user/userProfile',
    title: 'User Profile',
  },
  {
    link: 'user/clientSetup',
    title: 'Client Setup',
  },
  {
    link: 'user/userAccess',
    title: 'User Access',
  },
  {
    link: 'user/appSettings',
    title: 'App Settings',
  },
  {
    link: 'user/login',
    title: 'Log Out',
  },
];

const NavMenu = ({ location }) => (
  <MenuContainer>
    {NavItems.map((nav, index) => (
      <NavItem key={index} to={nav.link}>
        {nav.title}
      </NavItem>
    ))}
  </MenuContainer>
);

export default withRouter(NavMenu);
