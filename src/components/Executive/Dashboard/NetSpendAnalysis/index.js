import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { NET_SPEND_ANALYSIS_LIST_EXECUTIVE } from 'components/graphql/query/executive/dashboard';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';
import Checkbox from 'components/common/Checkbox';
import { SectionTitle } from 'components/common/Typography';
import LineChart from './LineChart';

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

const NetSpendAnalysis = () => (
  <Container>
    <TitleContainer>
      <SectionTitle>Net Spend Analysis</SectionTitle>
      <Link to="/executive/net-spend-analysis">
        <Button spaceLeft text="view more" />
      </Link>
    </TitleContainer>
    <Checkbox>Year to date</Checkbox>
    <Query query={NET_SPEND_ANALYSIS_LIST_EXECUTIVE}>
      {({ data: { netSpendAnalysisListExecutive }, loading }) =>
        loading ? null : <LineChart data={netSpendAnalysisListExecutive} />
      }
    </Query>
  </Container>
);

export default NetSpendAnalysis;
