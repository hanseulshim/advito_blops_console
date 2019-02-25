import gql from 'graphql-tag'

export const GET_SAVINGS_OPPORTUNITY = gql`
  {
    savingsOpportunity @client {
      id
      title
      value
      secondaryValue
      secondaryUnit
    }
  }
`
