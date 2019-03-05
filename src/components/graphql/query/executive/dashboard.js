import gql from 'graphql-tag';

export const PROGRAM_PERFORMANCE_EXECUTIVE = gql`
  query {
    programPerformanceExecutive {
      value
    }
  }
`;

export const NET_SPEND_ANALYSIS_LIST_EXECUTIVE = gql`
  query {
    netSpendAnalysisListExecutive {
      date
      value
    }
  }
`;

export const MARKET_LIST = gql`
  query {
    marketList {
      title
      value
      programShare
    }
  }
`;

export const SAVINGS_OPPORTUNITY_FEED_EXECUTIVE = gql`
  query($limit: Int, $cursor: Int) {
    savingsOpportunityFeedExecutive(limit: $limit, cursor: $cursor) {
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
  query($limit: Int, $cursor: Int) {
    riskAreaFeedExecutive(limit: $limit, cursor: $cursor) {
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
