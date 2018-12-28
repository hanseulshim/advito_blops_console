import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  color: #000;
`;

const Summary = styled.p`
  color: #666666;
  font-size: 1em;
  line-height: 16px;
  font-weight: lighter;
`;

const ChartTitle = ({ title, summary }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
    </Container>
  );
};

export default ChartTitle;
