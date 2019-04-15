import gql from 'graphql-tag';

export const GET_TE_BREAKDOWN_DETAIL = gql`
  query {
    teBreakdownDetail {
      personas {
        title
        description
        programShare
        totalTripCost
        totalTripCostDelta
        data {
          name
          value
          delta
          title
          description
          icon
          benchmark
        }
      }
    }
  }
`;
