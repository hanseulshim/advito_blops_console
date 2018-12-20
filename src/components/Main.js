import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const Container = styled.div`
  max-width: ${props => (props.collapse ? '1200px' : '1600px')};
  margin: auto;
  display: flex;
`;

const MainContainer = styled.div`
  flex: 3;
  padding: ${props => (props.collapse ? '2em 2.5em 2em 5em' : '2em 2.5em')};
  border: 1px solid ${props => props.theme.grayNurse};
  margin-left: -1px;
`;

const Main = ({ component: Component, location, ...rest }) => (
  <Container collapse={location.pathname !== '/'}>
    <Sidebar />
    <MainContainer collapse={location.pathname !== '/'}>
      <Header />
      <Component {...rest} />
    </MainContainer>
  </Container>
);

export default Main;
