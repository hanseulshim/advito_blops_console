import gql from 'graphql-tag';

export const PROGRAM_PERFORMANCE_EXECUTIVE = gql`
  query($filterId: Int) {
    programPerformanceExecutive(filterId: $filterId) {
      value
    }
  }
`;

export const NET_SPEND_ANALYSIS_LIST_EXECUTIVE = gql`
  query($filterId: Int) {
    netSpendAnalysisListExecutive(filterId: $filterId) {
      date
      value
    }
  }
`;

export const MARKET_LIST = gql`
  query($filterId: Int) {
    marketList(filterId: $filterId) {
      title
      value
      programShare
    }
  }
`;

export const SAVINGS_OPPORTUNITY_FEED_EXECUTIVE = gql`
  query($limit: Int, $cursor: Int, $filterId: Int) {
    savingsOpportunityFeedExecutive(limit: $limit, cursor: $cursor, filterId: $filterId) {
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
        divisionList {
          title
          value
          secondaryValue
          unit
          secondaryUnit
        }
      }
    }
  }
`;

export const RISK_AREA_FEED_EXECUTIVE = gql`
  query($limit: Int, $cursor: Int, $filterId: Int) {
    riskAreaFeedExecutive(limit: $limit, cursor: $cursor, filterId: $filterId) {
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
        divisionList {
          title
          value
          secondaryValue
          unit
          secondaryUnit
        }
      }
    }
  }
`;
