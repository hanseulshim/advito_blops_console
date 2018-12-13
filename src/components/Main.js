import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';

const Container = styled.div`
  flex: 3;
  padding: 3em 5em;
  border: 1px solid ${props => props.theme.pumice};
  margin-left: -1px;
`;

const Main = ({ component: Component, ...rest }) => (
  <Container>
    <Header />
    <Component {...rest} />
  </Container>
);

export default Main;
