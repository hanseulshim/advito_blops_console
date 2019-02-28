import gql from 'graphql-tag'

export const UPDATE_SAVINGS_OPPORTUNITY = gql`
  mutation updateSavingsOpportunity($savingsOpportunity: SavingsOpportunity) {
    updateSavingsOpportunity(savingsOpportunity: $savingsOpportunity) @client
  }
`

export const UPDATE_RISK_AREA = gql`
  mutation updateRiskArea($riskArea: RiskArea) {
    updateRiskArea(riskArea: $riskArea) @client
  }
`

export const UPDATE_SELECTED_CLIENT = gql`
  mutation updateSelectedClient($selectedClient: ClientData) {
    updateSelectedClient(selectedClient: $selectedClient) @client
  }
`
