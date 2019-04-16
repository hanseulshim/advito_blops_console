import gql from 'graphql-tag';

export const GET_TE_BREAKDOWN_DETAIL = gql`
  query($view: String!) {
    teBreakdownDetail(view: $view) {
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
`;
