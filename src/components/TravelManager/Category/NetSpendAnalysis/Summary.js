import React, { Component } from 'react';
import styled from 'styled-components';
import { Title } from 'components/common/Typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Summary = ({ summary }) => {
  return (
    <Container>
      <Title>{summary.title}</Title>
      <p>{summary.info}</p>
    </Container>
  );
};

export default Summary;
