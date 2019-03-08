import gql from 'graphql-tag';

export const USER_PROFILE = gql`
  query {
    userProfile {
      nameFirst
      nameLast
      profilePicturePath
      username
      timezoneDefault
      dateFormatDefault
      emailNotifications
    }
  }
`;

export const USER_PROFILE_OVERVIEW = gql`
  query {
    userProfileOverview {
      myApplications
      persona
      recentActivities {
        date
        activity
      }
    }
  }
`;

export const USER_LIST = gql`
  query {
    userList {
      id
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
`;
