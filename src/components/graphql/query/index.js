import gql from 'graphql-tag';
export { AIR_STORY_QUERIES, HOTEL_STORY_QUERIES, DONUT } from './story';
export {
  PROGRAM_PERFORMANCE_TRAVEL,
  PROGRAM_PERFORMANCE_EXECUTIVE,
  NET_SPEND_ANALYSIS_TRAVEL,
  NET_SPEND_ANALYSIS_EXECUTIVE,
  PERSONAS,
  MARKETS,
  SAVINGS_OPPORTUNITIES_TRAVEL,
  SAVINGS_OPPORTUNITIES_EXECUTIVE,
  RISK_AREAS_TRAVEL,
  RISK_AREAS_EXECUTIVE,
} from './dashboard';
export { NO_CHANGE_SINCE } from './category';
export { GET_RISK_AREA_DETAIL } from './riskArea';
export { UPDATE_CLIENT, CREATE_CLIENT, GET_CLIENTS } from './client';
export { USER_PROFILE, UPDATE_USER_PROFILE, UPDATE_PASSWORD } from './user';

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
