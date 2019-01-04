import gql from 'graphql-tag';

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
  query($title: String!) {
    donut(title: $title) {
      title
      summary
      label
      total
      context
      colors
      donutData {
        category
        value
        nextLevel
      }
    }
  }
`;

export const AIR_STORY_QUERIES = [
  {
    query: AIR_MAP,
    variables: { title: 'airSummary' },
    returnVariable: 'airMap',
  },
  {
    query: AIR_MAP,
    variables: { title: 'trafficLaneOverview' },
    returnVariable: 'airMap',
  },
  {
    query: VISUAL,
    variables: { title: 'topAirlines' },
    returnVariable: 'visual',
  },
  {
    query: VISUAL,
    variables: { title: 'cabinUse' },
    returnVariable: 'visual',
  },
  {
    query: DONUT,
    variables: { title: 'airRoot' },
    returnVariable: 'donut',
  },
];

export const HOTEL_STORY_QUERIES = [
  {
    query: HOTEL_MAP,
    variables: { title: 'hotelSummary' },
    returnVariable: 'hotelMap',
  },
  {
    query: HOTEL_MAP,
    variables: { title: 'hotelSpend' },
    returnVariable: 'hotelMap',
  },
  {
    query: VISUAL,
    variables: { title: 'topHotelChains' },
    returnVariable: 'visual',
  },
  {
    query: VISUAL,
    variables: { title: 'topHotelTiers' },
    returnVariable: 'visual',
  },
  {
    query: DONUT,
    variables: { title: 'hotelRoot' },
    returnVariable: 'donut',
  },
];

export const ACTIVE_ALERTS = gql`
  {
    activeAlerts {
      secondaryHeader
      icon
      alert
    }
  }
`;

export const BOTTOM_INFO = gql`
  {
    infoData {
      title
      icon
      description
      disabled
      button
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
  {
    personaList {
      title
      value
      programShare
    }
  }
`;

export const PROGRAM_PERFORMANCE = gql`
  {
    programPerformance {
      title
      value
      unit
    }
  }
`;

export const PROGRAM_PERFORMANCE_HOME = gql`
  {
    programPerformance {
      title
      value
    }
    noChangeSince
  }
`;

export const PROGRAM_SELECT = gql`
  {
    viewData {
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
`;

export const RISK_AREAS = gql`
  {
    riskAreas(limit: 3) {
      riskAreas {
        title
        value
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
  {
    opportunities(limit: 3) {
      opportunities {
        title
        value
        unit
      }
    }
  }
`;

export const UPCOMING_ACTIONS = gql`
  {
    upcomingActions {
      header
      secondaryHeader
      icon
    }
  }
`;
