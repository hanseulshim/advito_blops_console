import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

const NavItem = styled(Link)`
  flex: 1;
  text-align: center;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  padding: 1em;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  background: ${props => props.replace && props.theme.white};
  cursor: pointer;
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
