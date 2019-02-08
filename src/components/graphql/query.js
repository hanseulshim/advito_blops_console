import gql from 'graphql-tag';
// TODO: DELETE THESE FILES EVENTUALLY
// import { AIR_SUMMARY, AIR_TRAFFIC, AIR_AIRLINES, AIR_CABINS } from './airStory';
// import { HOTEL_SUMMARY, HOTEL_SPEND, TOP_HOTEL_CHAINS, TOP_HOTEL_TIERS } from './hotelStory';

export const AIR_MAP = gql`
  query($clientId: Int!, $sessionToken: String!, $title: String!) {
    airMap(clientId: $clientId, sessionToken: $sessionToken, title: $title) {
      statusCode
      body {
        apicode
        apimessage
        apidataset {
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
    }
  }
`;

export const HOTEL_MAP = gql`
  query($clientId: Int!, $sessionToken: String!, $title: String!) {
    hotelMap(clientId: $clientId, sessionToken: $sessionToken, title: $title) {
      statusCode
      body {
        apicode
        apimessage
        apidataset {
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
    }
  }
`;

export const VISUAL = gql`
  query($clientId: Int!, $sessionToken: String!, $title: String!) {
    visual(clientId: $clientId, sessionToken: $sessionToken, title: $title) {
      statusCode
      body {
        apicode
        apimessage
        apidataset {
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
    query: AIR_MAP,
    title: 'airSummary',
    returnVariable: 'airMap',
  },
  {
    query: AIR_MAP,
    title: 'trafficLaneOverview',
    returnVariable: 'airMap',
  },
  {
    query: VISUAL,
    title: 'topAirlines',
    returnVariable: 'visual',
  },
  {
    query: VISUAL,
    title: 'cabinUse',
    returnVariable: 'visual',
  },
  {
    query: DONUT,
    title: 'airRoot',
    returnVariable: 'donut',
  },
];

export const HOTEL_STORY_QUERIES = [
  {
    query: HOTEL_MAP,
    title: 'hotelSummary',
    returnVariable: 'hotelMap',
  },
  {
    query: HOTEL_MAP,
    title: 'hotelSpend',
    returnVariable: 'hotelMap',
  },
  {
    query: VISUAL,
    title: 'topHotelChains',
    returnVariable: 'visual',
  },
  {
    query: VISUAL,
    title: 'topHotelTiers',
    returnVariable: 'visual',
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
  query($username: String!, $pwd: String!) {
    login(username: $username, pwd: $pwd) {
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

export const LOGOUT = gql`
  query($sessionToken: String!) {
    logout(sessionToken: $sessionToken) {
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

export const USER_PROFILE = gql`
  query($clientId: Int!, $sessionToken: String!) {
    userProfile(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        apidataset {
          firstName
          lastName
          profilePicturePath
          username
          timeFormat
          timeZone
          emailNotifications
        }
      }
    }
  }
`;
