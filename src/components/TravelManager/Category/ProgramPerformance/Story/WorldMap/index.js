import React from 'react';
import AirSummary from './AirSummary';
import HotelSpend from './HotelSpend';
import HotelSummary from './HotelSummary';
import TrafficLaneOverview from './TrafficLaneOverview';

const WorldMapContainer = props => {
  return (
    (props.data.title === 'Air Summary' && <AirSummary {...props} />) ||
    (props.data.title === 'Traffic Lane Overview' && (
      <TrafficLaneOverview {...props} />
    )) ||
    (props.data.title === 'Hotel Summary' && <HotelSummary {...props} />) ||
    (props.data.title === 'Hotel Spend by Top Countries' && (
      <HotelSpend {...props} />
    ))
  );
};

export default WorldMapContainer;
