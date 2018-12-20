import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 1em;
  color: ${props => props.theme.black};
`;

const HourZoneContainer = styled.div`
  display: flex;
  margin-bottom: 0.25em;
  align-items: baseline;
`;

const Hours = styled.div`
  font-size: 1.7em;
  padding-right: 0.4em;
`;

const TimeZone = styled.div`
  font-size: 0.75em;
`;

const Location = styled.div`
  padding-top: 0.25em;
  border-top: 1px solid ${props => props.theme.silver};
  font-size: 0.75em;
  text-align: center;
`;

const Time = ({ timeZone, zone }) => {
  return (
    <Container>
      <HourZoneContainer>
        <Hours>{timeZone.format('h:mm')}</Hours>
        <TimeZone>{timeZone.format('A')}</TimeZone>
      </HourZoneContainer>
      <Location>{zone}</Location>
    </Container>
  );
};
export default Time;
