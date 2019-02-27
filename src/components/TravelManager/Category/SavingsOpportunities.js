import React from 'react'
import styled from 'styled-components'
import GraphQL from 'components/graphql'
import { SAVINGS_OPPORTUNITIES_TRAVEL } from 'components/graphql/query'

const Container = styled.div`
  display: flex;
`

const Item = styled.div`
  width: 25%;
`

const limit = 3

const SavingsOpportunities = () => {
  return (
    <GraphQL query={SAVINGS_OPPORTUNITIES_TRAVEL} variables={{ limit }} name="opportunitiesTravel">
      {({ data, fetchMore }) => (
        <Container>
          {data.cursor !== limit && (
            <button
              onClick={() =>
                fetchMore({
                  variables: {
                    cursor: data.prevCursor,
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev
                    return fetchMoreResult
                  },
                })
              }
            >
              less
            </button>
          )}
          {data.opportunities.map((opportunity, index) => (
            <Item key={index}>{opportunity.value}</Item>
          ))}
          {data.hasNext && (
            <button
              onClick={() =>
                fetchMore({
                  variables: {
                    cursor: data.cursor,
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    console.log(fetchMoreResult)
                    if (!fetchMoreResult) return prev
                    return fetchMoreResult
                  },
                })
              }
            >
              more
            </button>
          )}
        </Container>
      )}
    </GraphQL>
  )
}

export default SavingsOpportunities
