import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { NET_SPEND_ANALYSIS_LIST_TRAVEL } from 'components/graphql/query';
import Button from 'components/common/Button';
import Checkbox from 'components/common/Checkbox';
import { SectionTitle } from 'components/common/Typography';
import Loader from 'components/common/Loader';
import LineChart from './LineChart';
import { withFilterContext } from 'components/context';

const Container = styled.div`
  flex: 1;
  padding: 2em 0 2em 2em;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5em;
`;

const NetSpendAnalysis = ({ context: { filterId } }) => (
  <Container>
    <TitleContainer>
      <SectionTitle>Net Spend Analysis</SectionTitle>
      <Link to="/travel/net-spend-analysis">
        <Button spaceLeft text="view more" />
      </Link>
    </TitleContainer>
    <Checkbox>Year to date</Checkbox>
    <Query query={NET_SPEND_ANALYSIS_LIST_TRAVEL} variables={{ filterId }}>
      {({ data: { netSpendAnalysisListTravel }, loading }) =>
        loading ? <Loader /> : <LineChart data={netSpendAnalysisListTravel} />
      }
    </Query>
  </Container>
);

export default withFilterContext(NetSpendAnalysis);
