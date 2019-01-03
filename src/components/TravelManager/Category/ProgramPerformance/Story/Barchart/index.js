import React from 'react';
import Barchart from './Barchart';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.7);
`;

const ChartContainer = ({ data }) => (
  <Container>
    {data.map((chart, index) => (
      <Barchart
        title={chart.title}
        data={chart.data}
        type={chart.type}
        first={index === 0}
        key={index + Math.random()}
      />
    ))}
  </Container>
);

export default ChartContainer;
