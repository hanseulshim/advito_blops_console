import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value } from 'components/common/Typography';
import GraphQL from 'components/graphql';
import { SAVINGS_OPPORTUNITIES_EXECUTIVE } from 'components/graphql/query';
import {
  Container,
  TitleContainer,
  RowContainer,
  Rank,
  Row,
  RowTitle,
  RightIcon,
  Metric,
  Unit,
  Title,
} from './SavingsRiskStyle';

const SavingsOpportunities = () => (
  <Container>
    <TitleContainer>
      <SectionTitle>top 3 savings opportunities</SectionTitle>
    </TitleContainer>
    <GraphQL
      query={SAVINGS_OPPORTUNITIES_EXECUTIVE}
      variables={{ limit: 3 }}
      name="opportunitiesExecutive"
    >
      {({ data }) =>
        data.opportunities.map((opportunity, index) => (
          <Link to="/executive/savings-opportunities" key={index}>
            <RowContainer>
              <Rank>{index + 1}</Rank>
              <Row first={index === 0}>
                <RowTitle>{opportunity.title}</RowTitle>
                <Value>
                  {opportunity.value} <Unit>{opportunity.unit}</Unit>
                  {opportunity.secondaryValue && ` / ${opportunity.secondaryValue}`}{' '}
                  <Unit>{opportunity.secondaryUnit}</Unit>
                </Value>
              </Row>
              <RightIcon className="fas fa-angle-right" />
              {opportunity.divisions.map((division, index) => (
                <Metric key={index}>
                  <Value>
                    {division.value} <Unit>{division.unit}</Unit>
                    {division.secondaryValue && ` / ${division.secondaryValue}`}{' '}
                    <Unit>{division.secondaryUnit}</Unit>
                  </Value>
                  <Title>{division.title}</Title>
                </Metric>
              ))}
            </RowContainer>
          </Link>
        ))
      }
    </GraphQL>
  </Container>
);

export default SavingsOpportunities;
