import gql from 'graphql-tag';

export const GET_SAVINGS_OPPORTUNITY_DETAIL = gql`
  query($id: Int!) {
    savingsOpportunityDetail(id: $id) {
      id
      metricList {
        title
        personaList {
          title
          value
          hover {
            fields {
              name
              value
            }
            comments
          }
        }
      }
      comments
    }
  }
`;
