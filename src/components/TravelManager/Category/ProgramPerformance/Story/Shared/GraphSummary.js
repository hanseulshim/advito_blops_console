import React from 'react';
import BarChart from './BarChart';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  align-self: center;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
`;

const GraphSummary = props => {
  const { barcharts } = props.data;

  return (
    <Container>
      {barcharts.map((graph, index) => {
        return <BarChart title={graph.title} data={graph.data} key={index} />;
      })}
    </Container>
  );
};

export default GraphSummary;
