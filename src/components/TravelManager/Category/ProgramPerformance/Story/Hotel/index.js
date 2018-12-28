import React from 'react';
import Hotel from './Hotel';
import styled from 'styled-components';

// styled layouts
const HotelRow = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  justify-content: space-around;
`;

const HotelContainer = props => {
  return (
    <HotelRow>
      {props.data.hotels.map((hotel, i) => (
        <Hotel data={hotel} key={i} />
      ))}
    </HotelRow>
  );
};

export default HotelContainer;
