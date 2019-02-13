import gql from 'graphql-tag';

export const USER_PROFILE = gql`
  query($clientId: Int!, $sessionToken: String!) {
    userProfile(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        apidataset {
          nameFirst
          nameLast
          profilePicturePath
          username
          timezoneDefault
          dateFormatDefault
          emailNotifications
        }
      }
    }
  }
`;

export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile(
    $clientId: Int!
    $sessionToken: String!
    $nameFirst: String!
    $nameLast: String!
    $profilePicturePath: String!
    $username: String!
    $dateFormatDefault: String!
    $timezoneDefault: String!
    $emailNotifications: Boolean!
  ) {
    updateUserProfile(
      clientId: $clientId
      sessionToken: $sessionToken
      nameFirst: $nameFirst
      nameLast: $nameLast
      profilePicturePath: $profilePicturePath
      username: $username
      dateFormatDefault: $dateFormatDefault
      timezoneDefault: $timezoneDefault
      emailNotifications: $emailNotifications
    ) {
      statusCode
      body {
        apidataset
      }
    }
  }
`;
