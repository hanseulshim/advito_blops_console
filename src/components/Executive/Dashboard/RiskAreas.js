import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value } from 'components/common/Typography';
import GraphQL from 'components/graphql';
import { RISK_AREAS_EXECUTIVE } from 'components/graphql/query';
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

const RiskAreas = () => (
  <Container>
    <TitleContainer>
      <SectionTitle>top 3 risk areas</SectionTitle>
    </TitleContainer>
    <GraphQL query={RISK_AREAS_EXECUTIVE} name="riskAreasExecutive">
      {({ data }) =>
        data.riskAreas.map((riskArea, index) => (
          <Link to="/executive/risk-areas" key={index}>
            <RowContainer>
              <Rank>{index + 1}</Rank>
              <Row first={index === 0}>
                <RowTitle>{riskArea.title}</RowTitle>
                <Value>
                  {riskArea.value} <Unit>{riskArea.unit}</Unit>
                  {riskArea.secondaryValue && ` / ${riskArea.secondaryValue}`}{' '}
                  <Unit>{riskArea.secondaryUnit}</Unit>
                </Value>
              </Row>
              <RightIcon className="fas fa-angle-right" />
              {riskArea.divisions.map((division, index) => (
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

export default RiskAreas;
