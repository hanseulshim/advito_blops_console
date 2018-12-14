import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import GraphQL from 'components/graphql';

const Container = styled.div`
  flex: 1;
  padding-right: 1.5em;
`;

const TitleContainer = styled.div`
  margin: 1.5em 0;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  text-transform: uppercase;
`;

const Opportunity = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
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
  font-size: 1.2em;
  margin-bottom: 0.5em;
  height: 2em;
  display: flex;
  align-items: center;
`;

const RowValue = styled.div`
  font-size: 1.4em;
  font-weight: 700;
`;

const query = `
{
  opportunities {
  title
  value
  }
}
`;

const SavingsOpportunities = ({ changeView }) => (
  <Container>
    <TitleContainer>
      <Title>top 3 savings opportunities</Title>
      <Button spaceLeft text="view all" />
    </TitleContainer>
    <GraphQL query={query}>
      {data =>
        data.opportunities.map((opportunity, index) => (
          <Opportunity key={index} onClick={() => changeView('Savings Opportunities')}>
            <Number>{index + 1}</Number>
            <Row first={index === 0}>
              <RowTitle>{opportunity.title}</RowTitle>
              <RowValue>{opportunity.value}</RowValue>
            </Row>
          </Opportunity>
        ))
      }
    </GraphQL>
  </Container>
);

export default SavingsOpportunities;
