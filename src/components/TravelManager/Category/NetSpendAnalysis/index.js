import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_NET_SPEND_DETAIL } from 'components/graphql/query';
import Loader from 'components/common/Loader';
import TopRow from './TopRow';

const Container = styled.div`
  /* display: flex;
  flex: 1;
  flex-direction: column; */
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
              {console.log(netSpendDetail)}
              <TopRow spendCategories={netSpendDetail.spendCategories} />
            </Container>
          )
        }
      </Query>
    );
  }
}

export default NetSpendAnalysis;
