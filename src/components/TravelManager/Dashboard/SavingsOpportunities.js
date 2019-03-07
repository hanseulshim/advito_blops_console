import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value, Unit } from 'components/common/Typography';
import { Query, withApollo } from 'react-apollo';
import { SAVINGS_OPPORTUNITY_FEED_TRAVEL } from 'components/graphql/query/travelManager/dashboard';
import { UPDATE_SAVINGS_OPPORTUNITY } from 'graphql/mutations';
import Loader from 'components/common/Loader';
import {
  Container,
  TitleContainer,
  RowContainer,
  Rank,
  Row,
  RowTitle,
  RightIcon,
} from './SavingsRiskStyle';

class SavingsOpportunities extends Component {
  state = {};
  updateSavingsOpportunity = opportunity => {
    this.props.client.mutate({
      mutation: UPDATE_SAVINGS_OPPORTUNITY,
      variables: {
        savingsOpportunity: opportunity,
      },
    });
  };
  render() {
    return (
      <Container>
        <TitleContainer>
          <SectionTitle>top 3 savings opportunities</SectionTitle>
        </TitleContainer>
        <Query query={SAVINGS_OPPORTUNITY_FEED_TRAVEL} variables={{ limit: 3 }}>
          {({ data: { savingsOpportunityFeedTravel }, loading }) =>
            loading ? (
              <Loader />
            ) : (
              savingsOpportunityFeedTravel.savingsOpportunityList.map((opportunity, index) => (
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
            )
          }
        </Query>
      </Container>
    );
  }
}

export default withApollo(SavingsOpportunities);
