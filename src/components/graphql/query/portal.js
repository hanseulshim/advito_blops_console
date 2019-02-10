import gql from 'graphql-tag';

export const UPCOMING_ACTIONS = gql`
  query($clientId: Int!, $sessionToken: String!) {
    upcomingActions(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        apidataset {
          header
          secondaryHeader
          icon
        }
      }
    }
  }
`;

export const ACTIVE_ALERTS = gql`
  query($clientId: Int!, $sessionToken: String!) {
    activeAlerts(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        apicode
        apimessage
        apidataset {
          secondaryHeader
          icon
          alert
        }
      }
    }
  }
`;

export const PROGRAM_SELECT = gql`
  query($clientId: Int!, $sessionToken: String!) {
    viewData(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset {
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
    }
  }
`;

export const BOTTOM_INFO = gql`
  query($clientId: Int!, $sessionToken: String!) {
    infoData(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        apicode
        apimessage
        apidataset {
          title
          icon
          description
          disabled
          button
        }
      }
    }
  }
`;
