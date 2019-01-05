import React from 'react';
import Airplane from './Airplane';
import Hotel from './Hotel';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 2em;
`;

const VisualRow = styled.div`
  display: flex;
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

const VisualContainer = ({ data, view, dataView }) => (
  <Container>
    <VisualRow>
      {data.map((visual, index) =>
        view === 'air' ? (
          <Airplane data={visual} key={index} dataView={dataView} />
        ) : (
          <Hotel data={visual} key={index} dataView={dataView} />
        )
      )}
    </VisualRow>
    <Info>
      <Square /> represents approximately 4%
    </Info>
  </Container>
);

export default VisualContainer;
