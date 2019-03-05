import gql from 'graphql-tag';

export const PROGRAM_PERFORMANCE_LIST_TRAVEL = gql`
  query {
    programPerformanceListTravel {
      title
      value
      unit
    }
  }
`;

export const NET_SPEND_ANALYSIS_LIST_TRAVEL = gql`
  query {
    netSpendAnalysisListTravel {
      date
      value
    }
  }
`;

export const PERSONA_LIST = gql`
  query {
    personaList {
      title
      value
      programShare
    }
  }
`;

export const SAVINGS_OPPORTUNITY_FEED_TRAVEL = gql`
  query($limit: Int, $cursor: Int) {
    savingsOpportunityFeedTravel(limit: $limit, cursor: $cursor) {
      prevCursor
      cursor
      totalSavingsOpportunities
      hasNext
      savingsOpportunityList {
        id
        title
        value
        secondaryValue
        unit
        secondaryUnit
      }
    }
  }
`;

export const RISK_AREA_FEED_TRAVEL = gql`
  query($limit: Int, $cursor: Int) {
    riskAreaFeedTravel(limit: $limit, cursor: $cursor) {
      prevCursor
      cursor
      totalRiskAreas
      hasNext
      riskAreaList {
        id
        title
        value
        secondaryValue
        unit
        secondaryUnit
      }
    }
  }
`;
