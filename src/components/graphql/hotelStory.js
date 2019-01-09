import gql from 'graphql-tag';

export const HOTEL_SUMMARY = gql`
  query($clientId: Int, $sessionToken: String) {
    hotelSummary(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
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

export const HOTEL_SPEND = gql`
  query($clientId: Int, $sessionToken: String) {
    hotelSpend(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
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

export const TOP_HOTEL_CHAINS = gql`
  query($clientId: Int, $sessionToken: String) {
    topHotelChains(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
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

export const TOP_HOTEL_TIERS = gql`
  query($clientId: Int, $sessionToken: String) {
    topHotelTiers(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
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

export const ROOM_NIGHTS = gql`
  query($clientId: Int, $sessionToken: String) {
    roomNights(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
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
