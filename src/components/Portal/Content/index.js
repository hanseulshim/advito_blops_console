import React from 'react';
import styled from 'styled-components';
import './Content.scss';
import Header from './Header';
import ContentMain from './ContentMain';

//TODO: eventually delete
import { viewData, infoData } from 'data/viewData';

const Container = styled.div`
  flex: 1;
  background: $alabaster;
  border: 1px solid $pumice;
  padding: 4em 2em;
`;

const Content = () => {
  return (
    <Container className="content-container">
      <Header />
      <ContentMain viewData={viewData} infoData={infoData} />
    </Container>
  );
};

export default Content;
