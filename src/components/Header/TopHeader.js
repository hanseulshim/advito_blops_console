import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import styled from 'styled-components';
import Time from './Time';
import Icon from 'components/common/Icon';
import advito_logo from 'assets/advito_logo.png';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: ${props => (props.collapse ? '4.2em' : '6.25em')};
  @media (max-width: 1336px) {
    margin-top: ${props => (props.collapse ? '4.75em' : '7em')};
  }
`;

const LogoContainer = styled.div`
  flex: 1;
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

const TopHeader = ({ location }) => {
  const newYork = moment().tz('America/New_York');
  const london = moment().tz('Europe/London');
  const collapse = location.pathname !== '/';
  return (
    <Container collapse={collapse}>
      <LogoContainer collapse={collapse}>
        <Link to={`/`} replace>
          <img src={advito_logo} alt="advito logo" />
        </Link>
      </LogoContainer>
      <TimeSupportContainer>
        {!collapse && (
          <>
            <Time timeZone={newYork} zone="Washington, DC" />
            <Time timeZone={london} zone="London, UK" />
          </>
        )}
        <IconContainer>
          <AddyIcon className="far fa-comment-alt" />
          <span>Ask Addy</span>
        </IconContainer>
      </TimeSupportContainer>
    </Container>
  );
};
export default withRouter(TopHeader);
