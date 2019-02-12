import gql from 'graphql-tag';

export const PROGRAM_PERFORMANCE_TRAVEL = gql`
  query($clientId: Int!, $sessionToken: String!) {
    programPerformanceTravel(clientId: $clientId, sessionToken: $sessionToken) {
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

export const NET_SPEND_ANALYSIS_TRAVEL = gql`
  query($clientId: Int!, $sessionToken: String!) {
    netSpendAnalysisTravel(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset {
          date
          value
        }
      }
    }
  }
`;

export const NET_SPEND_ANALYSIS_EXECUTIVE = gql`
  query($clientId: Int!, $sessionToken: String!) {
    netSpendAnalysisExecutive(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset {
          date
          value
        }
      }
    }
  }
`;

export const PROGRAM_PERFORMANCE_EXECUTIVE = gql`
  query($clientId: Int!, $sessionToken: String!) {
    programPerformanceExecutive(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset {
          value
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

export const SAVINGS_OPPORTUNITIES_TRAVEL = gql`
  query($clientId: Int!, $sessionToken: String!, $limit: Int) {
    opportunitiesTravel(clientId: $clientId, sessionToken: $sessionToken, limit: $limit) {
      statusCode
      body {
        apidataset {
          opportunities {
            title
            value
            secondaryValue
            unit
            secondaryUnit
          }
        }
      }
    }
  }
`;

export const SAVINGS_OPPORTUNITIES_EXECUTIVE = gql`
  query($clientId: Int!, $sessionToken: String!, $limit: Int) {
    opportunitiesExecutive(clientId: $clientId, sessionToken: $sessionToken, limit: $limit) {
      statusCode
      body {
        apidataset {
          opportunities {
            title
            value
            secondaryValue
            unit
            secondaryUnit
            divisions {
              title
              value
              secondaryValue
              unit
              secondaryUnit
            }
          }
        }
      }
    }
  }
`;

export const RISK_AREAS_TRAVEL = gql`
  query($clientId: Int!, $sessionToken: String!) {
    riskAreasTravel(clientId: $clientId, sessionToken: $sessionToken, limit: 3) {
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

export const RISK_AREAS_EXECUTIVE = gql`
  query($clientId: Int!, $sessionToken: String!) {
    riskAreasExecutive(clientId: $clientId, sessionToken: $sessionToken, limit: 3) {
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
            secondaryValue
            unit
            secondaryUnit
            divisions {
              title
              value
              secondaryValue
              unit
              secondaryUnit
            }
          }
        }
      }
    }
  }
`;
