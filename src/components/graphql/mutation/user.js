import gql from 'graphql-tag';

export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile(
    $nameFirst: String!
    $nameLast: String!
    $profilePicturePath: String!
    $username: String!
    $dateFormatDefault: String!
    $timezoneDefault: String!
    $emailNotifications: Boolean!
  ) {
    updateUserProfile(
      nameFirst: $nameFirst
      nameLast: $nameLast
      profilePicturePath: $profilePicturePath
      username: $username
      dateFormatDefault: $dateFormatDefault
      timezoneDefault: $timezoneDefault
      emailNotifications: $emailNotifications
    )
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation UpdatePassword($pwd: String!, $confirmPwd: String!) {
    updatePassword(pwd: $pwd, confirmPwd: $confirmPwd)
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $clientId: Int!
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
      username: $username
      isEnabled: $isEnabled
      nameFirst: $nameFirst
      nameLast: $nameLast
      phone: $phone
      address: $address
      roleId: $roleId
      pwd: $pwd
      confirmPwd: $confirmPwd
    )
  }
`;

export const EDIT_USER = gql`
  mutation EditUser(
    $id: Int!
    $username: String!
    $isEnabled: Boolean!
    $nameFirst: String!
    $nameLast: String!
    $phone: String
    $address: String
    $roleId: Int!
  ) {
    editUser(
      id: $id
      username: $username
      isEnabled: $isEnabled
      nameFirst: $nameFirst
      nameLast: $nameLast
      phone: $phone
      address: $address
      roleId: $roleId
    ) {
      id
      username
      isEnabled
      nameFirst
      nameLast
      phone
      address
      roleId
    }
  }
`;
