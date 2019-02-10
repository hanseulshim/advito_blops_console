import gql from 'graphql-tag';

const AIR_MAP = gql`
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

const HOTEL_MAP = gql`
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

const VISUAL = gql`
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
          last
          summary
          label
          context
          total
          colors
          donutData {
            category
            value
            nextLevel
            tooltip {
              title
              tooltipData {
                name
                value
              }
            }
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
