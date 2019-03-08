import gql from 'graphql-tag';
export const LOGIN = gql`
  query($username: String!, $pwd: String!) {
    login(username: $username, pwd: $pwd) {
      displayName
      clientId
      profilePicturePath
      sessionToken
    }
  }
`;

export const LOGOUT = gql`
  query($sessionToken: String!) {
    logout(sessionToken: $sessionToken) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset
      }
    }
  }
`;
