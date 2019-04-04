import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_NET_SPEND_DETAIL } from 'components/graphql/query';
import Loader from 'components/common/Loader';

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
        {({ data, loading }) =>
          loading ? (
            <Loader />
          ) : (
            <Container>
              {console.log(data)}
              {/* <TopRow id={riskArea.id} />
              <Detail id={riskArea.id} /> */}
            </Container>
          )
        }
      </Query>
    );
  }
}

export default NetSpendAnalysis;
