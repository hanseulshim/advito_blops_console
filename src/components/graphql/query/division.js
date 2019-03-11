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
