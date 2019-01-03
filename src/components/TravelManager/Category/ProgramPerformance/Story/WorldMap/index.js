import React from 'react';
import AirSummary from './AirSummary';
import HotelSpend from './HotelSpend';
import HotelSummary from './HotelSummary';

const WorldMapContainer = props => {
  return (
    (props.data.title === 'Air Summary' && <AirSummary key="air" {...props} />) ||
    (props.data.title === 'Traffic Lane Overview' && <AirSummary key="traffic" {...props} />) ||
    (props.data.title === 'Hotel Summary' && <HotelSummary {...props} />) ||
    (props.data.title === 'Hotel Spend by Top Countries' && <HotelSpend {...props} />)
  );
};

export default WorldMapContainer;
