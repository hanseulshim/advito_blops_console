import React from 'react';
import { SectionTitle, Value, Unit } from 'components/common/Typography';
import GraphQL from 'components/graphql';
import {
  Container,
  TitleContainer,
  RowContainer,
  Rank,
  Row,
  RowTitle,
  RightIcon,
} from './SavingsRiskStyle';

const query = `
{
  opportunities(limit: 3) {
    opportunities {
      title
      value
      unit
    }
  }
}
`;

const SavingsOpportunities = ({ changeView }) => (
  <Container>
    <TitleContainer>
      <SectionTitle>top 3 savings opportunities</SectionTitle>
    </TitleContainer>
    <GraphQL query={query}>
      {({ data }) =>
        data.opportunities.opportunities.map((opportunity, index) => (
          <RowContainer key={index} onClick={() => changeView('Savings Opportunities')}>
            <Rank>{index + 1}</Rank>
            <Row first={index === 0}>
              <RowTitle>{opportunity.title}</RowTitle>
              <Value>
                {opportunity.value} <Unit>{opportunity.unit}</Unit>
              </Value>
            </Row>
            <RightIcon className="fas fa-angle-right" />
          </RowContainer>
        ))
      }
    </GraphQL>
  </Container>
);

export default SavingsOpportunities;
