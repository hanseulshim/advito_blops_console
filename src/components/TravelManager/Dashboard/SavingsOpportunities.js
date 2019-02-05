import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value, Unit } from 'components/common/Typography';
import GraphQL from 'components/graphql';
import { SAVINGS_OPPORTUNITIES_DASHBOARD } from 'components/graphql/query';
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
    <GraphQL query={SAVINGS_OPPORTUNITIES_DASHBOARD} name="opportunities">
      {({ data }) =>
        data.opportunities.map((opportunity, index) => (
          <Link to="/travel/savings-opportunities" key={index}>
            <RowContainer>
              <Rank>{index + 1}</Rank>
              <Row first={index === 0}>
                <RowTitle>{opportunity.title}</RowTitle>
                <Value>
                  {opportunity.value} <Unit>{opportunity.unit}</Unit>
                </Value>
              </Row>
              <RightIcon className="fas fa-angle-right" />
            </RowContainer>
          </Link>
        ))
      }
    </GraphQL>
  </Container>
);

export default SavingsOpportunities;
