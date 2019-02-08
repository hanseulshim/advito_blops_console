import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import UserContext from 'components/context/UserContext';

const MenuContainer = styled.div`
  background-color: ${props => props.theme.treePoppy};
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  color: ${props => props.theme.white};
  position: absolute;
  bottom: -150%;
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
    link: '/user-profile',
    title: 'User Profile',
  },
  {
    link: '/client-setup',
    title: 'Client Setup',
  },
  {
    link: '/user-access',
    title: 'User Access',
  },
  {
    link: '/login',
    title: 'Log Out',
  },
];

const NavMenu = ({ location }) => (
  <UserContext.Consumer>
    <MenuContainer>
      {NavItems.map((nav, index) => (
        <NavItem key={index} to={nav.link} replace={location.pathname.includes(nav.link)}>
          {nav.title}
        </NavItem>
      ))}
    </MenuContainer>
  </UserContext.Consumer>
);

export default withRouter(NavMenu);
