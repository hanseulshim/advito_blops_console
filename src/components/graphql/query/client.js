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

export const UPDATE_CLIENT = gql`
  mutation updateClient(
    $clientId: Int!
    $clientName: String!
    $clientNameFull: String
    $clientTag: String
    $gcn: String
    $lanyonClientCode: String
    $isActive: Boolean!
    $logoPath: String
    $industry: String
    $defaultCurrencyCode: String
    $defaultDistanceUnits: String
    $description: String
  ) {
    updateClient(
      clientId: $clientId
      clientName: $clientName
      clientNameFull: $clientNameFull
      clientTag: $clientTag
      gcn: $gcn
      lanyonClientCode: $lanyonClientCode
      isActive: $isActive
      logoPath: $logoPath
      industry: $industry
      defaultCurrencyCode: $defaultCurrencyCode
      defaultDistanceUnits: $defaultDistanceUnits
      description: $description
    )
  }
`;

export const CREATE_CLIENT = gql`
  mutation createClient(
    $clientName: String!
    $clientNameFull: String
    $clientTag: String
    $gcn: String
    $lanyonClientCode: String
    $isActive: Boolean!
    $logoPath: String
    $industry: String
    $defaultCurrencyCode: String
    $defaultDistanceUnits: String
    $description: String
  ) {
    createClient(
      clientName: $clientName
      clientNameFull: $clientNameFull
      clientTag: $clientTag
      gcn: $gcn
      lanyonClientCode: $lanyonClientCode
      isActive: $isActive
      logoPath: $logoPath
      industry: $industry
      defaultCurrencyCode: $defaultCurrencyCode
      defaultDistanceUnits: $defaultDistanceUnits
      description: $description
    )
  }
`;
