import gql from 'graphql-tag'

export const GET_SAVINGS_OPPORTUNITY_DETAIL = gql`
  query($sessionToken: String!, $id: Int!) {
    savingsOpportunityDetail(sessionToken: $sessionToken, id: $id) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset {
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
    }
  }
`
