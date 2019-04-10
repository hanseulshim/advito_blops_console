import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_NET_SPEND_DETAIL } from 'components/graphql/query';
import Loader from 'components/common/Loader';
import TopRow from './TopRow';
import LineGraph from './LineGraph';
import Summary from './Summary';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

class NetSpendAnalysis extends Component {
  state = {};
  render() {
    return (
      <Query query={GET_NET_SPEND_DETAIL}>
        {({ data: { netSpendDetail }, loading }) =>
          loading ? (
            <Loader />
          ) : (
            <Container>
              <TopRow spendCategories={netSpendDetail.spendCategories} />
              <LineGraph data={netSpendDetail.spend} />
              <Summary summary={netSpendDetail.summary} />
            </Container>
          )
        }
      </Query>
    );
  }
}

export default NetSpendAnalysis;
