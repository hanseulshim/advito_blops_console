import React from 'react';
import moment from 'moment-timezone';
import styled from 'styled-components';
import Icon from 'components/common/Icon';
import advito_logo from 'assets/advito_logo.png';

const Container = styled.div`
  display: flex;
`;

const LogoContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`;

const TimeSupportContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1em;
`;

const Time = styled.span`
  font-size: 1.7em;
`;

const Location = styled.span`
  border-top: 1px solid;
`;

const IconContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1em;
  color: ${props => props.theme.tradewind};
  cursor: pointer;
`;

const AddyIcon = styled(Icon)`
  font-size: 250%;
  margin-bottom: 0.1em;
`;

export default () => {
  const newYork = moment().tz('America/New_York');
  const london = moment().tz('Europe/London');
  return (
    <Container>
      <LogoContainer>
        <img src={advito_logo} alt="advito logo" />
      </LogoContainer>
      <TimeSupportContainer>
        <TimeContainer>
          <div>
            <Time>{newYork.format('h:m')}</Time>
            <span>{newYork.format('A')}</span>
          </div>
          <Location>Washington, DC</Location>
        </TimeContainer>
        <TimeContainer>
          <div>
            <Time>{london.format('h:m')}</Time>
            <span>{london.format('A')}</span>
          </div>
          <Location>London, UK</Location>
        </TimeContainer>
        <IconContainer>
          <AddyIcon className="far fa-comment-alt" />
          <span>Ask Addy</span>
        </IconContainer>
      </TimeSupportContainer>
    </Container>
  );
};
