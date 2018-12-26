import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';

const Container = styled.div`
  display: flex;
`;

const Item = styled.div`
  width: 25%;
`;

const query = `
  query($cursor: Int) {
    opportunities(limit: 4, cursor: $cursor) {
      hasNext
      cursor
      opportunities {
        title
        value
        unit
      }
    }
  }
`;

const SavingsOpportunities = () => {
  return (
    <GraphQL query={query}>
      {({ data, fetchMore }) => (
        <Container>
          <button
            onClick={() =>
              fetchMore({
                variables: {
                  cursor: data.opportunities.prevCursor,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return prev;
                  return fetchMoreResult;
                },
              })
            }
          >
            less
          </button>
          {data.opportunities.opportunities.map((opportunity, index) => (
            <Item key={index}>{opportunity.value}</Item>
          ))}
          <button
            onClick={() =>
              fetchMore({
                variables: {
                  cursor: data.opportunities.cursor,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return prev;
                  return fetchMoreResult;
                },
              })
            }
          >
            more
          </button>
        </Container>
      )}
    </GraphQL>
  );
};

export default SavingsOpportunities;
