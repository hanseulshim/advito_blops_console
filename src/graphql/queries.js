import gql from 'graphql-tag';

export const GET_SAVINGS_OPPORTUNITY = gql`
  {
    savingsOpportunity @client {
      id
      title
      value
      secondaryValue
      secondaryUnit
    }
  }
`;
export const GET_SELECTED_CLIENT = gql`
  {
    selectedClient @client {
      clientName
      clientNameFull
      clientTag
      defaultCurrencyCode
      defaultDistanceUnits
      description
      gcn
      id
      industry
      isActive
      __typename
    }
  }
`;
