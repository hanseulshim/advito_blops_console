import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value, Unit } from 'components/common/Typography';
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
  Metric,
} from './SavingsRiskStyle';

const RiskAreas = () => (
  <Container>
    <TitleContainer>
      <SectionTitle>top 3 risk areas</SectionTitle>
    </TitleContainer>
    <GraphQL query={RISK_AREAS} name="riskAreas">
      {({ data }) =>
        data.riskAreas.map((riskArea, index) => (
          <Link to="/executive/risk-areas" key={index}>
            <RowContainer>
              <Rank>{index + 1}</Rank>
              <Row first={index === 0}>
                <RowTitle>{riskArea.title}</RowTitle>
                <Value>
                  {riskArea.value}
                </Value>
              </Row>
              <RightIcon className="fas fa-angle-right" />
              <Metric>
                <Value>$394k/280k</Value>
                <Unit>Regulatory</Unit>
              </Metric>
              <Metric>
                <Value>32/$24k</Value>
                <Unit>Retail Sales</Unit>
              </Metric>
              <Metric>
                <Value>26%/$15k</Value>
                <Unit>IT</Unit>
              </Metric>
            </RowContainer>
          </Link>
        ))
      }
    </GraphQL>
  </Container>
);

export default RiskAreas;
