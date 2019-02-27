import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SectionTitle, Value, Unit } from 'components/common/Typography'
import GraphQL from 'components/graphql'
import { withApollo } from 'react-apollo'
import { SAVINGS_OPPORTUNITIES_TRAVEL } from 'components/graphql/query'
import { UPDATE_SAVINGS_OPPORTUNITY } from 'graphql/mutations'
import {
  Container,
  TitleContainer,
  RowContainer,
  Rank,
  Row,
  RowTitle,
  RightIcon,
} from './SavingsRiskStyle'

class SavingsOpportunities extends Component {
  state = {}
  updateSavingsOpportunity = opportunity => {
    this.props.client.mutate({
      mutation: UPDATE_SAVINGS_OPPORTUNITY,
      variables: {
        savingsOpportunity: opportunity,
      },
    })
  }
  render() {
    return (
      <Container>
        <TitleContainer>
          <SectionTitle>top 3 savings opportunities</SectionTitle>
        </TitleContainer>
        <GraphQL
          query={SAVINGS_OPPORTUNITIES_TRAVEL}
          variables={{ limit: 3 }}
          name="opportunitiesTravel"
        >
          {({ data }) =>
            data.opportunities.map((opportunity, index) => (
              <RowContainer key={index}>
                <Rank>{opportunity.id}</Rank>
                <Row first={opportunity.id === 1}>
                  <RowTitle>{opportunity.title}</RowTitle>
                  <Value>
                    {opportunity.value}{' '}
                    {opportunity.secondaryValue && `/${opportunity.secondaryValue}`}{' '}
                    <Unit>{opportunity.secondaryUnit}</Unit>
                  </Value>
                </Row>
                <Link
                  to="/travel/savings-opportunities"
                  onClick={() => this.updateSavingsOpportunity(opportunity)}
                >
                  <RightIcon className="fas fa-angle-right" />
                </Link>
              </RowContainer>
            ))
          }
        </GraphQL>
      </Container>
    )
  }
}

export default withApollo(SavingsOpportunities)
