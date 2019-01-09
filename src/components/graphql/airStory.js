import gql from 'graphql-tag';

export const AIR_SUMMARY = gql`
  query($clientId: Int, $sessionToken: String) {
    airSummary(clientId: $clientId, sessionToken: $sessionToken) {
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

export const AIR_TRAFFIC = gql`
  query($clientId: Int, $sessionToken: String) {
    airTraffic(clientId: $clientId, sessionToken: $sessionToken) {
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

export const AIR_AIRLINES = gql`
  query($clientId: Int, $sessionToken: String) {
    airAirlines(clientId: $clientId, sessionToken: $sessionToken) {
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
            icon
            total
            subCategories {
              name
              value
              delta
              percent
              color
            }
          }
        }
      }
    }
  }
`;

export const AIR_CABINS = gql`
  query($clientId: Int, $sessionToken: String) {
    airCabins(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset {
          title
          summary
          barchart {
            title
            type
            data {
              category
              change
              value
            }
          }
          categories {
            title
            icon
            total
            subCategories {
              name
              value
              delta
              color
            }
          }
        }
      }
    }
  }
`;

export const AIR_ROUTE = gql`
  query($clientId: Int, $sessionToken: String) {
    airRoute(clientId: $clientId, sessionToken: $sessionToken) {
      statusCode
      body {
        success
        apicode
        apimessage
        apidataset {
          airRoot {
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
          transatlantic {
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
          unitedStates {
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
          jfk {
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
  }
`;
