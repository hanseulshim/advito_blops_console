import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import Button from 'components/common/Button';
import { SectionTitle } from 'components/common/Typography';

const Container = styled.div`
  flex: 1;
  padding: 2em;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.concrete};
  border-radius: 0.8em;
`;

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const Performance = styled.div`
  display: flex;
  padding: 0.75em 0;
  margin-top: 0.5em;
`;

const Title = styled.div`
  flex: 1 1 12%;
  margin-right: 1em;
`;

const Value = styled.div`
  flex: 2;
  color: ${props => props.theme.black};
  font-size: 1.7em;
`;

const Unit = styled.span`
  font-size: 1rem;
`;

const query = `
{
  performanceList {
    title
    value
    unit
  }
}
`;

const ProgramPerformance = ({ changeView }) => (
  <Container>
    <SectionContainer>
      <SectionTitle>program performance</SectionTitle>
      <Button spaceLeft text="view more" onClick={() => changeView('Program Performance')} />
    </SectionContainer>
    <GraphQL query={query}>
      {({ data }) => (
        <>
          {data.performanceList.map(performance => (
            <Performance key={performance.title}>
              <Title>{performance.title}</Title>
              <Value>
                {performance.value} <Unit>{performance.unit}</Unit>
              </Value>
            </Performance>
          ))}
        </>
      )}
    </GraphQL>
  </Container>
);

export default ProgramPerformance;
