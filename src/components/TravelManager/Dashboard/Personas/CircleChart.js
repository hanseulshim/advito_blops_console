import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
`;

const Chart = styled.svg`
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
`;

const CircleBG = styled.path`
  fill: none;
  stroke: ${props => props.theme.hippieBlue};
  stroke-width: 3.8;
`;

const Circle = styled.path`
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
  stroke: ${props => props.theme.alabaster};
`;

const Percentage = styled.text`
  fill: ${props => props.theme.alabaster};
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
`;

const CircleChart = ({ percent }) => (
  <Container>
    <Chart viewBox="0 0 36 36">
      <CircleBG
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <Circle
        strokeDasharray={`${percent}, 100`}
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <Percentage x="18" y="20.35">
        {percent}%
      </Percentage>
    </Chart>
  </Container>
);

export default CircleChart;
