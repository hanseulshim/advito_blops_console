import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GraphQL from 'components/graphql';
import { PROGRAM_PERFORMANCE } from 'components/graphql/query';
import Button from 'components/common/Button';
import { SectionTitle } from 'components/common/Typography';
import Icon from 'components/common/Icon';

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
  align-items:center;
  justify-content:center;
  flex-direction:column;
  height:100%;
  padding: 0.75em 0;
  margin-top: 0.75em;
`;

const Row = styled.div`
`

const Score = styled.span`
font-size:7em;
color: ${props => props.theme.jungleMist};`

const OutOf = styled.span`
font-size:4em;
color:${props => props.theme.grayNurse};`

const Changes = styled.p`
margin-top:2em;
`





const ProgramPerformance = () => (
  <Container>
    <SectionContainer>
      <SectionTitle>program performance</SectionTitle>
      <Link to="/executive/program-performance">
        <Button spaceLeft text="view more" />
      </Link>
    </SectionContainer>
    <GraphQL query={PROGRAM_PERFORMANCE} name="programPerformance">
      {({ data }) => (
        <>
          <Performance>
            <Row>
              <Score>7.1</Score><OutOf>/8.7</OutOf>
            </Row>
            <Changes>
              <Icon className="fas fa-leaf" style={{ marginRight: '5px' }} />
              <span>No changes since July 30</span>
            </Changes>
          </Performance>
        </>
      )}
    </GraphQL>
  </Container>
);

export default ProgramPerformance;
