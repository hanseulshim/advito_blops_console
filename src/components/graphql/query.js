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
        from
        to
      }
    }
  }
`;

export const AIR_PLANE = gql`
  query($title: String!) {
    airPlane(title: $title) {
      title
      summary
      categories {
        title
        total
        icon
        subCategories {
          name
          value
          delta
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
        }
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
    query: AIR_PLANE,
    variables: { title: 'topAirlines' },
    returnVariable: 'airPlane',
  },
  {
    query: AIR_PLANE,
    variables: { title: 'cabinUse' },
    returnVariable: 'airPlane',
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
