import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import Icon from 'components/common/Icon';
import { SectionHeader, Value } from 'components/common/Typography';

const Container = styled.div`
  flex: 1;
  padding-right: 1.5em;
  border-right: 1px solid ${props => props.theme.pumice};
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

const ValueFlex = styled(Value)`
  flex: 2;
`;

const NoChangeSince = styled.div`
  display: flex;
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

const ProgramPerformance = ({ changeView }) => (
  <Container>
    <SectionHeader onClick={() => changeView('Program Performance')}>
      program performance
      <Icon className="fas fa-info" info />
    </SectionHeader>
    <GraphQL query={query}>
      {data => (
        <>
          {data.performanceList.map(performance => (
            <Performance key={performance.title}>
              <Title>{performance.title}</Title>
              <ValueFlex>{performance.value}</ValueFlex>
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
