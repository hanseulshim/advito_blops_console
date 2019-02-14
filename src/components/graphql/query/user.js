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
        apimessage
        apidataset {
          userId
          username
          isEnabled
          nameFirst
          nameLast
          phone
          address
          role
          roleId
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
  mutation UpdatePassword(
    $clientId: Int!
    $sessionToken: String!
    $pwd: String!
    $confirmPwd: String!
  ) {
    updatePassword(
      clientId: $clientId
      sessionToken: $sessionToken
      pwd: $pwd
      confirmPwd: $confirmPwd
    ) {
      statusCode
      body {
        apimessage
        apidataset
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $clientId: Int!
    $sessionToken: String!
    $username: String!
    $isEnabled: Boolean!
    $nameFirst: String!
    $nameLast: String!
    $phone: String
    $address: String
    $roleId: Int!
    $pwd: String!
    $confirmPwd: String!
  ) {
    createUser(
      clientId: $clientId
      sessionToken: $sessionToken
      username: $username
      isEnabled: $isEnabled
      nameFirst: $nameFirst
      nameLast: $nameLast
      phone: $phone
      address: $address
      roleId: $roleId
      pwd: $pwd
      confirmPwd: $confirmPwd
    ) {
      statusCode
      body {
        apicode
        apimessage
        apidataset
      }
    }
  }
`;

export const EDIT_USER = gql`
  mutation EditUser(
    $userId: Int!
    $sessionToken: String!
    $username: String!
    $isEnabled: Boolean!
    $nameFirst: String!
    $nameLast: String!
    $phone: String
    $address: String
    $roleId: Int!
  ) {
    editUser(
      userId: $userId
      sessionToken: $sessionToken
      username: $username
      isEnabled: $isEnabled
      nameFirst: $nameFirst
      nameLast: $nameLast
      phone: $phone
      address: $address
      roleId: $roleId
    ) {
      statusCode
      body {
        apicode
        apimessage
        apidataset
      }
    }
  }
`;
