import defaults from './defaults'

export default {
  Mutation: {
    updateSavingsOpportunity: (
      _,
      { savingsOpportunity = defaults.savingsOpportunity },
      { cache }
    ) => {
      cache.writeData({
        data: {
          savingsOpportunity: {
            ...savingsOpportunity,
          },
        },
      })
      return null
    },
    updateRiskArea: (_, { riskArea = defaults.riskArea }, { cache }) => {
      cache.writeData({
        data: {
          riskArea: {
            ...riskArea,
          },
        },
      })
      return null
    },
    updateSelectedClient: (_, { selectedClient = defaults.selectedClient }, { cache }) => {
      cache.writeData({
        data: {
          selectedClient: {
            ...selectedClient,
          },
        },
      })
      return null
    },
  },
}
