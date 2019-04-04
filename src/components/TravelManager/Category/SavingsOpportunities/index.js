import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_SAVINGS_OPPORTUNITY } from 'graphql/queries';
import TopRow from './TopRow';
import Detail from './Detail';
import Loader from 'components/common/Loader';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const SavingsOpportunities = () => (
  <Query query={GET_SAVINGS_OPPORTUNITY}>
    {({ data: { savingsOpportunity }, loading }) =>
      loading ? (
        <Loader />
      ) : (
        <Container>
          <TopRow id={savingsOpportunity.id} />
          <Detail id={savingsOpportunity.id} />
        </Container>
      )
    }
  </Query>
);

export default SavingsOpportunities;
