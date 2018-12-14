import React from 'react';
import styled from 'styled-components';
import ViewContext from 'components/context/ViewContext';
import Dashboard from './Dashboard';
import Category from './Category';

const Container = styled.div`
  flex: 1;
`;

const TravelManager = () => (
  <Container>
    <ViewContext.Consumer>
      {({ view }) => (view === 'dashboard' ? <Dashboard /> : <Category />)}
    </ViewContext.Consumer>
  </Container>
);

export default TravelManager;
