import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';

const Container = styled.div`
  flex: 3;
  padding: 3em 5em;
`;

const Main = ({ component: Component, ...rest }) => (
  <Container>
    <Header />
    <Component {...rest} />
  </Container>
);

export default Main;
