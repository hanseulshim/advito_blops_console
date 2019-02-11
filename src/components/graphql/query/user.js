import gql from 'graphql-tag';

export const USER_PROFILE = gql`
  query($clientId: Int!, $sessionToken: String!) {
    userProfile(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        apidataset {
          firstName
          lastName
          profilePicturePath
          username
          timeFormat
          timeZone
          emailNotifications
        }
      }
    }
  }
`;
