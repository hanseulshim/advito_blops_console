import gql from 'graphql-tag';

export const GET_DIVISIONS = gql`
  query($sessionToken: String!, $clientId: Int!) {
    getDivisions(sessionToken: $sessionToken, clientId: $clientId) {
      statusCode
      body {
        apimessage
        apicode
        apidataset {
          id
          clientId
          divisionName
          divisionNameFull
          divisionTag
          gcn
          isActive
          description
        }
      }
    }
  }
`;

export const UPDATE_DIVISION = gql`
  mutation updateDivision(
    $sessionToken: String!
    $clientDivisionId: Int!
    $divisionName: String!
    $divisionNameFull: String
    $isActive: Boolean!
    $divisionTag: String
    $gcn: String
    $description: String
  ) {
    updateDivision(
      sessionToken: $sessionToken
      clientDivisionId: $clientDivisionId
      divisionName: $divisionName
      divisionNameFull: $divisionNameFull
      isActive: $isActive
      divisionTag: $divisionTag
      gcn: $gcn
      description: $description
    ) {
      statusCode
      body {
        apimessage
        apidataset
      }
    }
  }
`;

export const CREATE_DIVISION = gql`
  mutation createDivision(
    $sessionToken: String!
    $clientId: Int!
    $divisionName: String!
    $divisionNameFull: String
    $isActive: Boolean
    $divisionTag: String
    $gcn: String
    $description: String
  ) {
    createDivision(
      sessionToken: $sessionToken
      clientId: $clientId
      divisionName: $divisionName
      divisionNameFull: $divisionNameFull
      isActive: $isActive
      divisionTag: $divisionTag
      gcn: $gcn
      description: $description
    ) {
      statusCode
      body {
        apimessage
        apidataset
      }
    }
  }
`;
