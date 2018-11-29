import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  background: #fff;
  flex: 1;
  padding: 5em 0;
`;

export default () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};
