import React from 'react';
import styled from 'styled-components';
import { NavItem } from 'styles/Navigation';
import { withRouter } from 'react-router';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

const NavItems = [
  {
    link: `general`,
    title: 'General',
  },
  {
    link: `divisions`,
    title: 'Divisions',
  },
  {
    link: `users`,
    title: 'Users',
  },
  {
    link: `applications`,
    title: 'Applications',
  },
];

const Navigation = ({ location }) => {
  return (
    <Container>
      {NavItems.map((tab, index) => (
        <NavItem
          key={index}
          to={{
            pathname: `${tab.link}`,
          }}
          replace={location.pathname.includes(tab.link)}
        >
          {tab.title}
        </NavItem>
      ))}
    </Container>
  );
};

export default withRouter(Navigation);
