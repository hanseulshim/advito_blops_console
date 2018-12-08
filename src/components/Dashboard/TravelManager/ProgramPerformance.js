import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import Icon from 'components/common/Icon';

const Container = styled.div`
  flex: 1;
  padding-right: 1.5em;
  border-right: 1px solid ${props => props.theme.pumice};
`;

const SectionTitle = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  font-size: 1.3em;
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

const Performance = styled.div`
  display: flex;
  padding: 0.75em 0;
`;

const Title = styled.div`
  flex: 1;
  font-size: 1.25em;
  margin-right: 1em;
`;

const Value = styled.div`
  flex: 2;
  font-size: 1.75em;
`;

const NoChangeSince = styled.div`
  display: flex;
  font-size: 1.2em;
  justify-content: center;
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
  }
  noChangeSince
}
`;

const ProgramPerformance = () => (
  <Container>
    <SectionTitle>
      <span>program performance</span>
      <Icon className="fas fa-info" info />
    </SectionTitle>
    <GraphQL query={query}>
      {data => (
        <>
          {data.performanceList.map(performance => (
            <Performance key={performance.title}>
              <Title>{performance.title}</Title>
              <Value>{performance.value}</Value>
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
