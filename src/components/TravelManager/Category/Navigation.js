import React from 'react';
import { withRouter } from 'react-router';
import { NavItem } from 'styles/Navigation';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

const NavItems = [
  {
    link: '/travel/program-performance',
    title: 'Program Performance',
  },
  {
    link: '/travel/net-spend-analysis',
    title: 'Net Spend Analysis',
  },
  {
    link: '/travel/personas',
    title: 'Personas',
  },
  {
    link: '/travel/savings-opportunities',
    title: 'Savings Opportunities',
  },
  {
    link: '/travel/risk-areas',
    title: 'Risk Areas',
  },
];

const Navigation = ({ location }) => (
  <Container>
    {NavItems.map((nav, index) => (
      <NavItem key={index} to={nav.link} replace={location.pathname.includes(nav.link)}>
        {nav.title}
      </NavItem>
    ))}
  </Container>
);

export default withRouter(Navigation);
