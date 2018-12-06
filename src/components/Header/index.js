import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import TopHeader from './TopHeader';
import Navigation from './Navigation';

const Container = styled.div`
  margin-bottom: 4em;
`;

const Header = ({ location }) => (
  <Container>
    <TopHeader />
    {location.pathname !== '/' && <Navigation />}
  </Container>
);

export default withRouter(Header);
