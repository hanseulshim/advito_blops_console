import gql from 'graphql-tag'

export const GET_RISK_AREA_DETAIL = gql`
  query($sessionToken: String!, $id: Int!) {
    riskAreaDetail(sessionToken: $sessionToken, id: $id) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset {
          id
          locationList {
            title
            value
            percent
            latitude
            longitude
            hover {
              fields {
                name
                value
              }
              comments
            }
          }
          comments
        }
      }
    }
  }
`
