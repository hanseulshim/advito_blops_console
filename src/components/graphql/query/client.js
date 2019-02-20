import gql from 'graphql-tag';

export const GET_CLIENTS = gql`
  query($sessionToken: String!) {
    getClients(sessionToken: $sessionToken) {
      statusCode
      body {
        apimessage
        apidataset {
            id
            clientName
            clientNameFull
            clientTag
            isActive
            industry
            defaultCurrencyCode
            defaultDistanceUnits
            description
        }
      }
    }
  }
`;