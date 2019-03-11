import gql from 'graphql-tag';

export const GET_CLIENTS = gql`
  query {
    clientList {
      id
      clientName
      clientNameFull
      clientTag
      gcn
      lanyonClientCode
      isActive
      industry
      defaultCurrencyCode
      defaultDistanceUnits
      description
    }
  }
`;
