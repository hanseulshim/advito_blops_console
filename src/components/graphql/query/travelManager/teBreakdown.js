import gql from 'graphql-tag';

export const GET_TE_BREAKDOWN_DETAIL = gql`
  query($view: String!, $filterId: Int) {
    teBreakdownDetail(view: $view, filterId: $filterId) {
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
