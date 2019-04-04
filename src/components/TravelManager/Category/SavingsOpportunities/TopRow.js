import React, { Component } from 'react';
import styled from 'styled-components';
import { Query, withApollo, compose } from 'react-apollo';
import { Value, Unit } from 'components/common/Typography';
import { SAVINGS_OPPORTUNITY_FEED_TRAVEL } from 'components/graphql/query';
import { UPDATE_SAVINGS_OPPORTUNITY } from 'graphql/mutations';
import Loader from 'components/common/Loader';
import { withFilterContext } from 'components/context';

const MetricRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RowContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: 2.5em;
`;

const ArrowButton = styled.i`
  color: ${props => props.theme.treePoppy};
  font-size: 2.5em;
  cursor: pointer;
  margin-right: ${props => props.previous && '1em'};
  margin-left: ${props => props.next && '1em'};
`;

const Rank = styled.div`
  color: ${props => (props.matched ? props.theme.white : props.theme.easternWind)};
  background: ${props => props.matched && props.theme.easternWind};
  border: 2px solid ${props => props.theme.easternWind};
  border-radius: 100%;
  padding: 0.35em;
  margin-right: 0.5em;
  margin-bottom: 2em;
  font-size: 1.15em;
  font-weight: 400;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  padding: 1em 0;
  flex: 1;
`;

const RowTitle = styled.div`
  margin-bottom: 0.5em;
  height: 2em;
  display: flex;
  align-items: flex-start;
`;

const ShowDetails = styled.div`
  color: ${props => props.theme.treePoppy};
  cursor: pointer;
  font-size: 0.8em;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`;

const limit = 3;

class TopRow extends Component {
  state = {};
  updateSavingsOpportunity = opportunity => {
    this.props.client.mutate({
      mutation: UPDATE_SAVINGS_OPPORTUNITY,
      variables: {
        savingsOpportunity: opportunity,
      },
    });
  };
  render() {
    const {
      id,
      context: { filterId },
    } = this.props;
    return (
      <Query
        query={SAVINGS_OPPORTUNITY_FEED_TRAVEL}
        variables={{ limit, filterId }}
        fetchPolicy="cache-and-network"
      >
        {({ data: { savingsOpportunityFeedTravel }, loading, fetchMore }) =>
          loading ? (
            <Loader />
          ) : (
            <MetricRow>
              {savingsOpportunityFeedTravel.cursor !== limit && (
                <ArrowButton
                  className="fas fa-chevron-left"
                  previous
                  onClick={() =>
                    fetchMore({
                      variables: {
                        cursor: savingsOpportunityFeedTravel.prevCursor,
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev;
                        return fetchMoreResult;
                      },
                    })
                  }
                />
              )}
              {savingsOpportunityFeedTravel.savingsOpportunityList.map((opportunity, index) => (
                <RowContainer key={index}>
                  <Rank matched={id === opportunity.id}>{opportunity.id}</Rank>
                  <Row>
                    <RowTitle>{opportunity.title}</RowTitle>
                    <Value>
                      {opportunity.value}{' '}
                      {opportunity.secondaryValue && `/${opportunity.secondaryValue}`}{' '}
                      <Unit>{opportunity.secondaryUnit}</Unit>
                    </Value>
                    <ShowDetails onClick={() => this.updateSavingsOpportunity(opportunity)}>
                      show details »
                    </ShowDetails>
                  </Row>
                </RowContainer>
              ))}
              {savingsOpportunityFeedTravel.hasNext && (
                <ArrowButton
                  className="fas fa-chevron-right"
                  next
                  onClick={() =>
                    fetchMore({
                      variables: {
                        cursor: savingsOpportunityFeedTravel.cursor,
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev;
                        return fetchMoreResult;
                      },
                    })
                  }
                />
              )}
            </MetricRow>
          )
        }
      </Query>
    );
  }
}

export default compose(
  withApollo,
  withFilterContext
)(TopRow);
