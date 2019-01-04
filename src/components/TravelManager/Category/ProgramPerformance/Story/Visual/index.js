import React from 'react';
import Airplane from './Airplane';
import Hotel from './Hotel';
import styled from 'styled-components';

// styled layouts
const VisualRow = styled.div`
  display: flex;
  margin-top: 2em;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  font-style: italic;
  margin-top: 2em;
`;

const Square = styled.div`
  width: 10px;
  height: 10px;
  background: ${props => props.theme.tropicalBlue};
  margin-right: 5px;
`;

const VisualContainer = ({ data, view }) => (
  <>
    <VisualRow>
      {data.map((visual, index) =>
        view === 'air' ? (
          <Airplane data={visual} key={index} />
        ) : (
          <Hotel data={visual} key={index} />
        )
      )}
    </VisualRow>
    <Info>
      <Square /> represents approximately 4%
    </Info>
  </>
);

export default VisualContainer;
