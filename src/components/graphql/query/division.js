import gql from 'graphql-tag';

export const GET_DIVISIONS = gql`
  query($clientId: Int!) {
    divisionList(clientId: $clientId) {
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
`;

export const UPDATE_DIVISION = gql`
  mutation updateDivision(
    $id: Int!
    $divisionName: String!
    $divisionNameFull: String
    $isActive: Boolean!
    $divisionTag: String
    $gcn: String
    $description: String
  ) {
    updateDivision(
      id: $id
      divisionName: $divisionName
      divisionNameFull: $divisionNameFull
      isActive: $isActive
      divisionTag: $divisionTag
      gcn: $gcn
      description: $description
    ) {
      id
      divisionName
      divisionNameFull
      isActive
      divisionTag
      gcn
      description
    }
  }
`;

export const CREATE_DIVISION = gql`
  mutation createDivision(
    $clientId: Int!
    $divisionName: String!
    $divisionNameFull: String
    $isActive: Boolean
    $divisionTag: String
    $gcn: String
    $description: String
  ) {
    createDivision(
      clientId: $clientId
      divisionName: $divisionName
      divisionNameFull: $divisionNameFull
      isActive: $isActive
      divisionTag: $divisionTag
      gcn: $gcn
      description: $description
    )
  }
`;
