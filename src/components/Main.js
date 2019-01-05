import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const Container = styled.div`
  max-width: ${props => !props.collapse && '1600px'};
  margin: auto;
  display: flex;
  position: relative;
  height: ${props => !props.collapse && '100%'};
`;

const MainContainer = styled.div`
  flex: 3;
  padding: 0em 4em;
`;

const Main = ({ component: Component, location, ...rest }) => (
  <Container collapse={location.pathname !== '/'}>
    <Sidebar />
    <MainContainer>
      <Header />
      <Component {...rest} />
    </MainContainer>
  </Container>
);

export default Main;
