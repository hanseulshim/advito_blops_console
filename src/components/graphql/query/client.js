import gql from 'graphql-tag'

export const GET_CLIENTS = gql`
  query($sessionToken: String!) {
    getClients(sessionToken: $sessionToken) {
      statusCode
      body {
        apimessage
        apicode
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
`

export const UPDATE_CLIENT = gql`
  mutation updateClient(
    $sessionToken: String!
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
      sessionToken: $sessionToken
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
    ) {
      statusCode
      body {
        apimessage
        apidataset
      }
    }
  }
`

export const CREATE_CLIENT = gql`
  mutation createClient(
    $sessionToken: String!
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
      sessionToken: $sessionToken
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
    ) {
      statusCode
      body {
        apimessage
        apidataset
      }
    }
  }
`
