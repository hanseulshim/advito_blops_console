import React from 'react';
import styled from 'styled-components';

const Chart = styled.svg`
  display: block;
  margin-left: 3em;
  margin-bottom: 1em;
  max-width: 65px;
  max-height: 250px;
`;

const CircleBG = styled.path`
  fill: none;
  stroke: ${props => props.theme.tropicalBlue};
  stroke-width: 3.8;
`;

const Circle = styled.path`
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
  stroke: ${props => props.theme.steelBlue};
`;

const Percentage = styled.text`
  fill: ${props => props.theme.steelBlue};
  font-family: sans-serif;
  font-size: 10px;
  font-weight: 500;
  text-anchor: middle;
`;

const CircleChart = ({ percent }) => (
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
);

export default CircleChart;
