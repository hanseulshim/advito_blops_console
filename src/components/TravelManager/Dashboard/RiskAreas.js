import React from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';
import { SectionHeader, Value } from 'components/common/Typography';
import GraphQL from 'components/graphql';

const Container = styled.div`
  flex: 1;
  padding-left: 1.5em;
`;

const TitleContainer = styled.div`
  margin: 1.5em 0;
  display: flex;
  align-items: center;
`;

const RiskArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Number = styled.div`
  color: ${props => props.theme.tradewind};
  border: 1px solid ${props => props.theme.tradewind};
  border-radius: 100%;
  display: flex;
  align-items: center;
  padding: 0.5em 0.75em;
  margin-right: 0.5em;
  font-size: 1.2em;
`;

const Row = styled.div`
  border-top: ${props => !props.first && `1px solid ${props.theme.pumice}`};
  padding: 1em 0;
  flex: 1;
`;

const RowTitle = styled.div`
  margin-bottom: 0.5em;
  height: 2em;
  display: flex;
  align-items: center;
`;

const RightIcon = styled(Icon)`
  color: ${props => props.theme.westSide};
  font-size: 2em;
`;

const query = `
{
  riskAreas {
  title
  value
  }
}
`;

const RiskAreas = ({ changeView }) => (
  <Container>
    <TitleContainer>
      <SectionHeader>top 3 risk areas</SectionHeader>
    </TitleContainer>
    <GraphQL query={query}>
      {data =>
        data.riskAreas.map((riskArea, index) => (
          <RiskArea key={index} onClick={() => changeView('Risk Areas')}>
            <Number>{index + 1}</Number>
            <Row first={index === 0}>
              <RowTitle>{riskArea.title}</RowTitle>
              <Value>{riskArea.value}</Value>
            </Row>
            <RightIcon className="fas fa-angle-right" />
          </RiskArea>
        ))
      }
    </GraphQL>
  </Container>
);

export default RiskAreas;
