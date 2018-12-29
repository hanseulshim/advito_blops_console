import gql from 'graphql-tag';

export const ACTIVE_ALERTS = gql`
  {
    activeAlerts {
      secondaryHeader
      icon
      alert
    }
  }
`;

export const BOTTOM_INFO = gql`
  {
    infoData {
      title
      icon
      description
      disabled
      button
    }
  }
`;

export const HOME = gql`
  {
    programPerformance {
      title
      value
    }
    noChangeSince
  }
`;

export const LOGIN = gql`
  query($username: String, $password: String) {
    login(username: $username, password: $password) {
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

export const PERSONAS = gql`
  {
    personaList {
      title
      value
      programShare
    }
  }
`;

export const PROGRAM_PERFORMANCE = gql`
  {
    programPerformance {
      title
      value
      unit
    }
  }
`;

export const PROGRAM_SELECT = gql`
  {
    viewData {
      title
      icon
      disabled
      list {
        title
        icon
        domo
        link
      }
    }
  }
`;

export const RISK_AREAS = gql`
  {
    riskAreas(limit: 3) {
      riskAreas {
        title
        value
      }
    }
  }
`;

export const SAVINGS_OPPORTUNITIES = gql`
  query($cursor: Int) {
    opportunities(limit: 4, cursor: $cursor) {
      hasNext
      cursor
      opportunities {
        title
        value
        unit
      }
    }
  }
`;

export const SAVINGS_OPPORTUNITIES_DASHBOARD = gql`
  {
    opportunities(limit: 3) {
      opportunities {
        title
        value
        unit
      }
    }
  }
`;

export const UPCOMING_ACTIONS = gql`
  {
    upcomingActions {
      header
      secondaryHeader
      icon
    }
  }
`;
