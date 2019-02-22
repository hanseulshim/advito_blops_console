import gql from 'graphql-tag';

export const UPDATE_CLIENT = gql`
  mutation updateClient(
    $sessionToken: String!,
    $clientId: Int!,
    $clientName: String!,
    $clientNameFull: String,
    $clientTag: String,
    $gcn: String,
    $lanyonClientCode: String,
    $isActive: Boolean!,
    $logoPath: String,
    $industry: String,
    $defaultCurrencyCode: String,
    $defaultDistanceUnits: String,
    $description: String
  ) {
    updateClient(
      sessionToken: $sessionToken,
      clientId: $clientId,
      clientName: $clientName,
      clientNameFull: $clientNameFull,
      clientTag: $clientTag,
      gcn: $gcn,
      lanyonClientCode: $lanyonClientCode,
      isActive: $isActive,
      logoPath: $logoPath,
      industry: $industry,
      defaultCurrencyCode: $defaultCurrencyCode,
      defaultDistanceUnits: $defaultDistanceUnits,
      description: $description,
    ) {
      statusCode
      body {
        apimessage
        apidataset
      }
    }
  }
`;
