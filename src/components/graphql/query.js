import gql from 'graphql-tag';
import { AIR_SUMMARY, AIR_TRAFFIC, AIR_AIRLINES, AIR_CABINS, AIR_ROUTE } from './airStory';
import {
  HOTEL_SUMMARY,
  ROOM_NIGHTS,
  HOTEL_SPEND,
  TOP_HOTEL_CHAINS,
  TOP_HOTEL_TIERS,
} from './hotelStory';

export const AIR_MAP = gql`
  query($title: String!) {
    airMap(title: $title) {
      title
      summary
      kpis {
        title
        value
        delta
        percent
        change
        type
        icon
      }
      barchart {
        title
        type
        data {
          category
          value
          change
          delta
          percent
        }
      }
      locations {
        thickness
        height
        opacity
        coords {
          latitude
          longitude
        }
        origin
        destination
      }
    }
  }
`;

export const HOTEL_MAP = gql`
  query($title: String!) {
    hotelMap(title: $title) {
      title
      summary
      kpis {
        title
        value
        delta
        percent
        change
        type
        icon
      }
      barchart {
        title
        type
        data {
          category
          value
          change
          delta
          percent
        }
      }
      locations {
        title
        radius
        latitude
        longitude
      }
    }
  }
`;

export const VISUAL = gql`
  query($title: String!) {
    visual(title: $title) {
      title
      summary
      categories {
        title
        type
        total
        icon
        subCategories {
          name
          value
          delta
          percent
          color
        }
      }
      barchart {
        title
        type
        data {
          category
          change
          value
          delta
          percent
        }
      }
    }
  }
`;

export const DONUT = gql`
  query($clientId: Int!, $sessionToken: String!, $title: String!) {
    donut(clientId: $clientId, sessionToken: $sessionToken, title: $title) {
      statusCode
      body {
        apicode
        apimessage
        apidataset {
          title
          summary
          label
          context
          total
          colors
          donutData {
            category
            value
            nextLevel
          }
        }
      }
    }
  }
`;

export const AIR_STORY_QUERIES = [
  {
    query: AIR_SUMMARY,
    returnVariable: 'airSummary',
  },
  {
    query: AIR_TRAFFIC,
    returnVariable: 'airTraffic',
  },
  {
    query: AIR_AIRLINES,
    returnVariable: 'airAirlines',
  },
  {
    query: AIR_CABINS,
    returnVariable: 'airCabins',
  },
  {
    query: DONUT,
    title: 'airRoot',
    returnVariable: 'donut',
  },
];

export const HOTEL_STORY_QUERIES = [
  {
    query: HOTEL_SUMMARY,
    returnVariable: 'hotelSummary',
  },
  {
    query: HOTEL_SPEND,
    returnVariable: 'hotelSpend',
  },
  {
    query: TOP_HOTEL_CHAINS,
    returnVariable: 'topHotelChains',
  },
  {
    query: TOP_HOTEL_TIERS,
    returnVariable: 'topHotelTiers',
  },
  {
    query: DONUT,
    title: 'hotelRoot',
    returnVariable: 'donut',
  },
];

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

export const NO_CHANGE_SINCE = gql`
  query($clientId: Int!, $sessionToken: String!) {
    noChangeSince(clientId: $clientId, sessionToken: $sessionToken) {
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

export const RISK_AREAS = gql`
  query($clientId: Int!, $sessionToken: String!) {
    riskAreas(clientId: $clientId, sessionToken: $sessionToken, limit: 3) {
      statusCode
      body {
        apidataset {
          prevCursor
          cursor
          totalOpportunities
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
  query($clientId: Int!, $sessionToken: String!) {
    opportunities(clientId: $clientId, sessionToken: $sessionToken, limit: 3) {
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
