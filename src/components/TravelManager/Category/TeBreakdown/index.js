import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_TE_BREAKDOWN_DETAIL } from 'components/graphql/query';

import Loader from 'components/common/Loader';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TeBreakdown = () => (
  <Query query={GET_TE_BREAKDOWN_DETAIL}>
    {({ data: { teBreakdownDetail }, loading }) =>
      loading ? <Loader /> : <Container>{console.log(teBreakdownDetail)}</Container>
    }
  </Query>
);

export default TeBreakdown;
