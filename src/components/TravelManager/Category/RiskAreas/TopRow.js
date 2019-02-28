import React, { Component } from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { withApollo } from 'react-apollo';
import { Value, Unit } from 'components/common/Typography';
import { RISK_AREAS_TRAVEL } from 'components/graphql/query';
import { UPDATE_RISK_AREA } from 'graphql/mutations';

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
  flex-direction: column;
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
  updateRiskArea = riskArea => {
    this.props.client.mutate({
      mutation: UPDATE_RISK_AREA,
      variables: {
        riskArea: riskArea,
      },
    });
  };
  render() {
    const { id } = this.props;
    return (
      <GraphQL query={RISK_AREAS_TRAVEL} variables={{ limit }} name="riskAreasTravel">
        {({ data: { cursor, prevCursor, hasNext, riskAreas }, fetchMore }) => (
          <MetricRow>
            {cursor !== limit && (
              <ArrowButton
                className="fas fa-chevron-left"
                previous
                onClick={() =>
                  fetchMore({
                    variables: {
                      cursor: prevCursor,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      return fetchMoreResult;
                    },
                  })
                }
              />
            )}
            {riskAreas.map((riskArea, index) => (
              <RowContainer key={index}>
                <Rank matched={id === riskArea.id}>{riskArea.id}</Rank>
                <Row>
                  <RowTitle>{riskArea.title}</RowTitle>
                  <Value>
                    {riskArea.value} {riskArea.secondaryValue && `/${riskArea.secondaryValue}`}{' '}
                    <Unit>{riskArea.secondaryUnit}</Unit>
                  </Value>
                  <ShowDetails onClick={() => this.updateRiskArea(riskArea)}>
                    show details »
                  </ShowDetails>
                </Row>
              </RowContainer>
            ))}
            {hasNext && (
              <ArrowButton
                className="fas fa-chevron-right"
                next
                onClick={() =>
                  fetchMore({
                    variables: {
                      cursor: cursor,
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
        )}
      </GraphQL>
    );
  }
}

export default withApollo(TopRow);
