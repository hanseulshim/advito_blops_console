import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ContentMain from './ContentMain';

//TODO: eventually delete
import { viewData, infoData } from 'data/viewData';

const Container = styled.div`
  flex: 3;
  padding: 3em 5em;
`;
export default () => (
  <Container>
    <Header />
    <ContentMain viewData={viewData} infoData={infoData} />
  </Container>
);
