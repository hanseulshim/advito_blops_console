import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import styled from 'styled-components';
import Time from './Time';
import Icon from 'components/common/Icon';
import advito_logo from 'assets/advito_logo.png';

const Container = styled.div`
  display: flex;
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const TimeSupportContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
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

const TopHeader = () => {
  const newYork = moment().tz('America/New_York');
  const london = moment().tz('Europe/London');
  return (
    <Container>
      <LogoContainer>
        <Link to={`/`}>
          <img src={advito_logo} alt="advito logo" />
        </Link>
      </LogoContainer>
      <TimeSupportContainer>
        <Time timeZone={newYork} zone="Washington, DC" />
        <Time timeZone={london} zone="London, UK" />
        <IconContainer>
          <AddyIcon className="far fa-comment-alt" />
          <span>Ask Addy</span>
        </IconContainer>
      </TimeSupportContainer>
    </Container>
  );
};
export default TopHeader;
