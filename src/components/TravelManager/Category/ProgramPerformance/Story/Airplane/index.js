import React from 'react';
import Airplane from './Airplane';
import styled from 'styled-components';

// styled layouts
const AirplaneRow = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  justify-content: space-around;
`;

const AirplaneContainer = props => {
  return (
    <AirplaneRow>
      {props.data.airlines.map((airline, index) => (
        <Airplane data={airline} key={index} />
      ))}
    </AirplaneRow>
  );
  // <Airplane {...props} />;
};

export default AirplaneContainer;
