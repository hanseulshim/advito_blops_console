import gql from 'graphql-tag';
export { AIR_STORY_QUERIES, HOTEL_STORY_QUERIES, DONUT } from './story';
export { UPCOMING_ACTIONS, ACTIVE_ALERTS, PROGRAM_SELECT, BOTTOM_INFO } from './portal';
export {
  PROGRAM_PERFORMANCE,
  PERSONAS,
  MARKETS,
  SAVINGS_OPPORTUNITIES,
  RISK_AREAS,
} from './dashboard';
export { NO_CHANGE_SINCE } from './category';
export { USER_PROFILE } from './user';

export const LOGIN = gql`
  query($username: String!, $pwd: String!) {
    login(username: $username, pwd: $pwd) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset {
          displayName
          clientId
          profilePicturePath
          sessionToken
        }
      }
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
