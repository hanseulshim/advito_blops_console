import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import styled from 'styled-components';
import Time from './Time';
import Icon from 'components/common/Icon';
import advito_logo from 'assets/advito_logo.png';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: ${props => (props.dashboard ? '4.3em' : '4.3em')};
  @media (max-width: 1336px) {
    margin-top: ${props => (props.dashboard ? '5.3em' : '5.3em')};
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`;

const TimeSupportContainer = styled.div`
  flex: 1.75;
  display: flex;
  justify-content: flex-end;
`;

const IconContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0 1em;
  color: ${props => props.theme.tradewind};
  cursor: pointer;
  font-size: 0.9em;
`;

const AddyIcon = styled(Icon)`
  font-size: 2.5em;
`;

const TopHeader = ({ dashboard }) => {
  const newYork = moment().tz('America/New_York');
  const london = moment().tz('Europe/London');
  return (
    <Container dashboard={dashboard}>
      <LogoContainer dashboard={dashboard}>
        <Link to={`/`} replace>
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
