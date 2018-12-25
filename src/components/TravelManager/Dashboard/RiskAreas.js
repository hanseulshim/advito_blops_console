import React from 'react';
import { SectionTitle, Value } from 'components/common/Typography';
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
  riskAreas(limit: 3) {
    riskAreas{
      title
      value
    }
  }
}
`;

const RiskAreas = ({ changeView }) => (
  <Container left>
    <TitleContainer>
      <SectionTitle>top 3 risk areas</SectionTitle>
    </TitleContainer>
    <GraphQL query={query}>
      {data =>
        data.riskAreas.riskAreas.map((riskArea, index) => (
          <RowContainer key={index} onClick={() => changeView('Risk Areas')}>
            <Rank>{index + 1}</Rank>
            <Row first={index === 0}>
              <RowTitle>{riskArea.title}</RowTitle>
              <Value>{riskArea.value}</Value>
            </Row>
            <RightIcon className="fas fa-angle-right" />
          </RowContainer>
        ))
      }
    </GraphQL>
  </Container>
);

export default RiskAreas;
