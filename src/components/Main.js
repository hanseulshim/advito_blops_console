import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  position: ${props => !props.login && 'relative'};
`;

const MainContainer = styled.div`
  flex: 3;
  padding: 3em 5em;
  border: 1px solid ${props => props.theme.pumice};
  margin-left: -1px;
`;

const Main = ({ component: Component, ...rest }) => (
  <Container>
    <Sidebar />
    <MainContainer>
      <Header />
      <Component {...rest} />
    </MainContainer>
  </Container>
);

export default Main;
