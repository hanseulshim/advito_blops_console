import gql from 'graphql-tag';

export const PROGRAM_PERFORMANCE_LIST_TRAVEL = gql`
  query($filterId: Int) {
    programPerformanceListTravel(filterId: $filterId) {
      title
      value
      unit
    }
  }
`;

export const NET_SPEND_ANALYSIS_LIST_TRAVEL = gql`
  query($filterId: Int) {
    netSpendAnalysisListTravel(filterId: $filterId) {
      date
      value
      projValue
    }
  }
`;

export const PERSONA_LIST = gql`
  query($filterId: Int) {
    personaList(filterId: $filterId) {
      title
      value
      programShare
    }
  }
`;

export const SAVINGS_OPPORTUNITY_FEED_TRAVEL = gql`
  query($limit: Int, $cursor: Int, $filterId: Int) {
    savingsOpportunityFeedTravel(limit: $limit, cursor: $cursor, filterId: $filterId) {
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
  query($limit: Int, $cursor: Int, $filterId: Int) {
    riskAreaFeedTravel(limit: $limit, cursor: $cursor, filterId: $filterId) {
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
