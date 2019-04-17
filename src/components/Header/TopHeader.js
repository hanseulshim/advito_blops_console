import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import styled from 'styled-components';
import Time from './Time';
import Icon from 'components/common/Icon';
import advito_logo from 'assets/advito_logo.png';
import Select from 'react-select';
import { Query } from 'react-apollo';
import { GET_QUARTER_FILTER_LIST } from 'components/graphql/query';
import { compose } from 'react-apollo';
import { withApollo } from 'react-apollo';
import { withFilterContext } from 'components/context';

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
  align-self: flex-start;
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

const TopHeader = ({ location, context: { filterObj, updateFilter } }) => {
  const newYork = moment().tz('America/New_York');
  const london = moment().tz('Europe/London');
  const collapse = location.pathname !== '/';
  const filter = location.pathname.includes('travel') || location.pathname.includes('executive');
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
        {filter && (
          <Query query={GET_QUARTER_FILTER_LIST}>
            {({ data: { quarterFilterList }, loading }) => (
              <>
                {!loading && (
                  <div style={{ width: 200 }}>
                    <Select
                      options={quarterFilterList.map(v => ({ value: v.id, label: v.value }))}
                      value={filterObj}
                      onChange={updateFilter}
                    />
                  </div>
                )}
              </>
            )}
          </Query>
        )}
        <IconContainer>
          <AddyIcon className="far fa-comment-alt" />
          <span>Ask Addy</span>
        </IconContainer>
      </TimeSupportContainer>
    </Container>
  );
};

export default compose(
  withRouter,
  withApollo,
  withFilterContext
)(TopHeader);
