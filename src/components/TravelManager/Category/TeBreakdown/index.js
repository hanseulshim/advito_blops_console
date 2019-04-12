import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_TE_BREAKDOWN_DETAIL } from 'components/graphql/query';
import { SectionTitle, Title } from 'components/common/Typography';
import Loader from 'components/common/Loader';
import CircleChartTe from './CircleChartTe';
import BarChartTe from './BarChartTe';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const PersonaRowContainer = styled.div`
  flex: 1;
  display: flex;
  margin-top: ${props => (props.first ? '5em' : '2em')};
  flex-grow: 0;
`;

const PersonaDescription = styled.div`
  flex: 1;
  margin-bottom: 1em;
  margin-right: 1em;
`;

const ProgramShare = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 1em;
`;

const BarChartContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-right: 2em;
`;

const CardContainer = styled.div`
  flex: 2;
  background: ${props => props.theme.alabaster};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TeBreakdown = () => (
  <Query query={GET_TE_BREAKDOWN_DETAIL}>
    {({ data: { teBreakdownDetail }, loading }) =>
      loading ? (
        <Loader />
      ) : (
        <Container>
          <SectionTitle>Personas</SectionTitle>
          {console.log(teBreakdownDetail)}
          {teBreakdownDetail.personas.map((persona, idx) => (
            <PersonaRowContainer key={'persona' + idx} first={(idx = 1)}>
              <PersonaDescription>
                <Title>{persona.title}</Title>
                <p>{persona.description}</p>
              </PersonaDescription>
              <ProgramShare>
                <span style={{ alignSelf: 'center', marginBottom: '1em' }}>Program Share</span>
                <CircleChartTe percent={persona.programShare * 100} />
              </ProgramShare>
              <BarChartContainer>
                <Row>
                  <span>Average Total Trip Cost</span>
                  <span>{persona.totalTripCost}</span>
                </Row>
                <BarChartTe data={persona.data} totalTripCost={persona.totalTripCost} />
              </BarChartContainer>
              <CardContainer />
            </PersonaRowContainer>
          ))}
        </Container>
      )
    }
  </Query>
);

export default TeBreakdown;
