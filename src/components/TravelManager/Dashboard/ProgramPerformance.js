import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import Icon from 'components/common/Icon';
import Button from 'components/common/Button';
import { SectionTitle } from 'components/common/Typography';

const Container = styled.div`
  flex: 1;
  padding-right: 1.5em;
  border-right: 1px solid ${props => props.theme.pumice};
`;

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Performance = styled.div`
  display: flex;
  padding: 0.75em 0;
  margin-top: 0.5em;
`;

const Title = styled.div`
  flex: 1;
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

const NoChangeSince = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const LeafIcon = styled(Icon)`
  color: ${props => props.theme.tradewind};
  margin-right: 1em;
`;

const query = `
{
  performanceList {
    title
    value
    unit
  }
  noChangeSince
}
`;

const ProgramPerformance = ({ changeView }) => (
  <Container>
    <SectionContainer>
      <SectionTitle>program performance</SectionTitle>
      <Button spaceLeft text="view more" onClick={() => changeView('Program Performance')} />
    </SectionContainer>
    <GraphQL query={query}>
      {data => (
        <>
          {data.performanceList.map(performance => (
            <Performance key={performance.title}>
              <Title>{performance.title}</Title>
              <Value>
                {performance.value} <Unit>{performance.unit}</Unit>
              </Value>
            </Performance>
          ))}
          <NoChangeSince>
            <LeafIcon className="fas fa-leaf" />
            <span>No change since {data.noChangeSince}</span>
          </NoChangeSince>
        </>
      )}
    </GraphQL>
  </Container>
);

export default ProgramPerformance;
