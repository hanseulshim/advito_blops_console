import gql from 'graphql-tag';

export const NO_CHANGE_SINCE = gql`
  query($clientId: Int!, $sessionToken: String!) {
    noChangeSince(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset
      }
    }
  }
`;
