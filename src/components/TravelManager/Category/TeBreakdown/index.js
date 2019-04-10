import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_RISK_AREA } from 'graphql/queries';
// import TopRow from './TopRow';
// import Detail from './Detail';
import Loader from 'components/common/Loader';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TeBreakdown = () => (
  <Query query={GET_RISK_AREA}>
    {({ data: { riskArea }, loading }) =>
      loading ? <Loader /> : <Container>TE Breakdown</Container>
    }
  </Query>
);

export default TeBreakdown;
