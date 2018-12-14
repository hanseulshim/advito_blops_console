import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import TopHeader from './TopHeader';
import BreadCrumbs from './BreadCrumbs';

const Container = styled.div`
  margin-bottom: 2em;
`;

const Header = ({ location }) => (
  <Container>
    <TopHeader />
    {location.pathname !== '/' && <BreadCrumbs />}
  </Container>
);

export default withRouter(Header);
