import gql from 'graphql-tag';

export const GET_ALL_APPLICATIONS = gql`
  query {
    noClient: applicationList {
      id
      applicationName
      applicationFull
      applicationTag
      isActive
      description
      features {
        id
        featureName
        featureTag
        isActive
        description
      }
    }
  }
`;

export const GET_CLIENT_APPLICATIONS = gql`
  query($clientId: Int!) {
    client: applicationList(clientId: $clientId) {
      id
      applicationName
      applicationFull
      applicationTag
      isActive
      description
      features {
        id
        featureName
        featureTag
        isActive
        description
      }
    }
  }
`;
