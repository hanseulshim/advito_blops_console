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

export const GET_USERS = gql`
  query($clientId: Int!, $sessionToken: String!) {
    getUsers(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        apidataset {
          username
          active
          nameFirst
          nameLast
          phone
          address
          role
        }
      }
    }
  }
`;

export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile(
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
        apimessage
        apidataset
      }
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation UpdatePassword($clientId: Int!, $sessionToken: String!, $pwd: String!) {
    updatePassword(clientId: $clientId, sessionToken: $sessionToken, pwd: $pwd) {
      statusCode
      body {
        apimessage
        apidataset
      }
    }
  }
`;
