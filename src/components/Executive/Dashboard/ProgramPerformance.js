import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { PROGRAM_PERFORMANCE_EXECUTIVE } from 'components/graphql/query';
import Button from 'components/common/Button';
import { SectionTitle } from 'components/common/Typography';
import Icon from 'components/common/Icon';
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 0.75em 0;
  margin-top: 0.75em;
`;

const Row = styled.div``;

const Score = styled.span`
  font-size: 7em;
  color: ${props => props.theme.easternWind};
`;

const OutOf = styled.span`
  font-size: 4em;
  color: ${props => props.theme.grayNurse};
`;

const Changes = styled.p`
  margin-top: 2em;
`;

const ProgramPerformance = ({ context: { filterId } }) => (
  <Container>
    <SectionContainer>
      <SectionTitle>program performance</SectionTitle>
      <Link to="/executive/program-performance">
        <Button spaceLeft text="view more" />
      </Link>
    </SectionContainer>
    <Query query={PROGRAM_PERFORMANCE_EXECUTIVE} variables={{ filterId }}>
      {({ data: { programPerformanceExecutive }, loading }) =>
        loading ? (
          <Loader />
        ) : (
          <>
            <Performance>
              <Row>
                <Score>{programPerformanceExecutive.value}</Score>
                <OutOf>/8.7</OutOf>
              </Row>
              <Changes>
                <Icon className="fas fa-leaf" style={{ marginRight: '5px' }} />
                <span>No changes since July 30</span>
              </Changes>
            </Performance>
          </>
        )
      }
    </Query>
  </Container>
);

export default withFilterContext(ProgramPerformance);
