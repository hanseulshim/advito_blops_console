import gql from 'graphql-tag';

export const PROGRAM_PERFORMANCE_LIST_TRAVEL = gql`
  query {
    programPerformanceListTravel {
      title
      value
      unit
    }
    noChangeSince
  }
`;
