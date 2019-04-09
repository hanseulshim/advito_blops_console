import gql from 'graphql-tag';

export const GET_NET_SPEND_DETAIL = gql`
  query {
    netSpendDetail {
      spendCategories {
        title
        icon
        amount
        diff
      }
      spend {
        date
        projSpend
        actualSpend
        delta
        color
      }
      summary {
        title
        info
      }
    }
  }
`;
