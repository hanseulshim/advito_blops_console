import gql from 'graphql-tag';

export const PROGRAM_PERFORMANCE = gql`
  query($clientId: Int!, $sessionToken: String!) {
    programPerformance(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset {
          title
          value
          unit
        }
      }
    }
  }
`;

export const PERSONAS = gql`
  query($clientId: Int!, $sessionToken: String!) {
    personaList(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset {
          title
          value
          programShare
        }
      }
    }
  }
`;

export const MARKETS = gql`
  query($clientId: Int!, $sessionToken: String!) {
    marketList(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset {
          title
          value
          programShare
        }
      }
    }
  }
`;

export const SAVINGS_OPPORTUNITIES = gql`
  query($clientId: Int!, $sessionToken: String!, $limit: Int) {
    opportunities(clientId: $clientId, sessionToken: $sessionToken, limit: $limit) {
      statusCode
      body {
        apidataset {
          opportunities {
            title
            value
            unit
          }
        }
      }
    }
  }
`;

export const RISK_AREAS = gql`
  query($clientId: Int!, $sessionToken: String!) {
    riskAreas(clientId: $clientId, sessionToken: $sessionToken, limit: 3) {
      statusCode
      body {
        apidataset {
          prevCursor
          cursor
          totalRiskAreas
          hasNext
          riskAreas {
            title
            value
          }
        }
      }
    }
  }
`;
