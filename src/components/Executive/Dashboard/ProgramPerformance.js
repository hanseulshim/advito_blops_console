import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { PROGRAM_PERFORMANCE_LIST_TRAVEL } from 'components/graphql/query';
import Button from 'components/common/Button';
import { SectionTitle } from 'components/common/Typography';
import Loader from 'components/common/Loader';
import { withFilterContext } from 'components/context';

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

const ProgramPerformance = ({ context: { filterId } }) => (
  <Container>
    <SectionContainer>
      <SectionTitle>program performance</SectionTitle>
      <Link to="/executive/program-performance">
        <Button spaceLeft text="view more" />
      </Link>
    </SectionContainer>
    <Query query={PROGRAM_PERFORMANCE_LIST_TRAVEL} variables={{ filterId }}>
      {({ data: { programPerformanceListTravel }, loading }) => (
        <>
          {loading ? (
            <Loader />
          ) : (
            programPerformanceListTravel.map(performance => (
              <Performance key={performance.title}>
                <Title>{performance.title}</Title>
                <Value>
                  {performance.value} <Unit>{performance.unit}</Unit>
                </Value>
              </Performance>
            ))
          )}
        </>
      )}
    </Query>
  </Container>
);

export default withFilterContext(ProgramPerformance);
