import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value, Unit } from 'components/common/Typography';
import GraphQL from 'components/graphql';
import { SAVINGS_OPPORTUNITIES_TRAVEL } from 'components/graphql/query';
import {
  Container,
  TitleContainer,
  RowContainer,
  Rank,
  Row,
  RowTitle,
  RightIcon,
} from './SavingsRiskStyle';

const SavingsOpportunities = () => (
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
            <Rank>{index + 1}</Rank>
            <Row first={index === 0}>
              <RowTitle>{opportunity.title}</RowTitle>
              <Value>
                {opportunity.value} {opportunity.secondaryValue && `/${opportunity.secondaryValue}`}{' '}
                <Unit>{opportunity.secondaryUnit}</Unit>
              </Value>
            </Row>
            <Link to="/travel/savings-opportunities">
              <RightIcon className="fas fa-angle-right" />
            </Link>
          </RowContainer>
        ))
      }
    </GraphQL>
  </Container>
);

export default SavingsOpportunities;
