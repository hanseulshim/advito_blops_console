import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1em;
`;
const TimeStyled = styled.span`
  font-size: 1.7em;
`;

const Location = styled.span`
  border-top: 1px solid;
`;

const Time = ({ timeZone, zone }) => {
  return (
    <Container>
      <div>
        <TimeStyled>{timeZone.format('h:m')}</TimeStyled>
        <span>{timeZone.format('A')}</span>
      </div>
      <Location>{zone}</Location>
    </Container>
  );
};
export default Time;
