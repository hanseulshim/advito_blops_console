import gql from 'graphql-tag';

export const UPDATE_SAVINGS_OPPORTUNITY = gql`
  mutation updateSavingsOpportunity($savingsOpportunity: SavingsOpportunity) {
    updateSavingsOpportunity(savingsOpportunity: $savingsOpportunity) @client
  }
`;
