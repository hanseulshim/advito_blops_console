import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from 'components/common/Icon';

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

const HomeIcon = styled(Icon)`
  font-size: 1.2em;
  color: ${props => props.theme.treePoppy};
  padding: 1em;
  cursor: pointer;
`;

const NavItems = [
  {
    link: '/executive/program-performance',
    title: 'Program Performance',
  },
  {
    link: '/executive/net-spend-analysis',
    title: 'Net Spend Analysis',
  },
  {
    link: '/executive/markets',
    title: 'Markets',
  },
  {
    link: '/executive/savings-opportunities',
    title: 'Savings Opportunities',
  },
  {
    link: '/executive/risk-areas',
    title: 'Risk Areas',
  },
];

const Navigation = ({ location }) => (
  <Container>
    <Link to="/executive/dashboard">
      <HomeIcon className="fas fa-home" />
    </Link>
    {NavItems.map((nav, index) => (
      <NavItem key={index} to={nav.link} replace={location.pathname.includes(nav.link)}>
        {nav.title}
      </NavItem>
    ))}
  </Container>
);

export default withRouter(Navigation);
