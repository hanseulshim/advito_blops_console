import gql from 'graphql-tag';

export const UPCOMING_ACTION_LIST = gql`
  query {
    upcomingActionList {
      header
      secondaryHeader
      icon
      alert
    }
  }
`;

export const ACTIVE_ALERT_LIST = gql`
  query {
    activeAlertList {
      header
      secondaryHeader
      icon
      alert
    }
  }
`;

export const PRODUCT_LIST = gql`
  query {
    productList {
      title
      icon
      optionList {
        title
        icon
        domo
        link
      }
      disabled
    }
  }
`;

export const PRODUCT_EVENT_LIST = gql`
  query {
    productEventList {
      title
      description
      icon
      disabled
      button
    }
  }
`;
