import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value } from 'components/common/Typography';
import GraphQL from 'components/graphql';
import { RISK_AREAS } from 'components/graphql/query';
import {
  Container,
  TitleContainer,
  RowContainer,
  Rank,
  Row,
  RowTitle,
  RightIcon,
} from './SavingsRiskStyle';

const RiskAreas = () => (
  <Container>
    <TitleContainer>
      <SectionTitle>top 3 risk areas</SectionTitle>
    </TitleContainer>
    <GraphQL query={RISK_AREAS} name="riskAreas">
      {({ data }) =>
        data.riskAreas.map((riskArea, index) => (
          <RowContainer key={index}>
            <Rank>{index + 1}</Rank>
            <Row first={index === 0}>
              <RowTitle>{riskArea.title}</RowTitle>
              <Value>{riskArea.value}</Value>
            </Row>
            <Link to="/travel/risk-areas">
              <RightIcon className="fas fa-angle-right" />
            </Link>
          </RowContainer>
        ))
      }
    </GraphQL>
  </Container>
);

export default RiskAreas;
