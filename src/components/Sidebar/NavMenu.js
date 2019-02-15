import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { LOGOUT } from 'components/graphql/query';
import { ApolloConsumer } from 'react-apollo';
import UserContext from 'components/context/UserContext';

const MenuContainer = styled.div`
  background-color: ${props => props.theme.treePoppy};
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  color: ${props => props.theme.white};
  position: absolute;
  bottom: -140%;
  right: 10%;
  border-radius: 5%;
  cursor: pointer;
  -webkit-animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const NavItem = styled(Link)`
  color: ${props => props.theme.white};
  margin-bottom: 1em;
  :hover {
    color: ${props => props.theme.white};
    text-decoration: underline;
  }
`;

const LogOut = styled.span`
  color: ${props => props.theme.white};
  margin-bottom: 1em;
  :hover {
    color: ${props => props.theme.white};
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
];

const NavMenu = ({ location }) => (
  <ApolloConsumer>
    {client => (
      <UserContext.Consumer>
        {({ user, removeUser }) => (
          <MenuContainer>
            {NavItems.map((nav, index) => (
              <NavItem key={index} to={nav.link} replace={location.pathname.includes(nav.link)}>
                {nav.title}
              </NavItem>
            ))}
            <LogOut
              onClick={async event => {
                event.preventDefault();
                removeUser();
                await client.query({
                  query: LOGOUT,
                  variables: { sessionToken: user.sessionToken },
                });
              }}
            >
              Logout
            </LogOut>
          </MenuContainer>
        )}
      </UserContext.Consumer>
    )}
  </ApolloConsumer>
);

export default withRouter(NavMenu);
