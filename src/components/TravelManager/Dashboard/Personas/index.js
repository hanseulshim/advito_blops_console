import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { SectionTitle, Title, Value } from 'components/common/Typography';
import CircleChart from './CircleChart';

const PersonaContainer = styled.div`
  display: flex;
  margin-top: 2em;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.concrete};
  border-radius: 0.8em;
  padding: 1em 2em;
  justify-content: space-between;
`;

const Description = styled.div`
  flex: 1;
`;

const Persona = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TitleTransform = styled(Title)`
  text-transform: uppercase;
`;

const ValueSized = styled(Value)`
  font-size: 1.7em;
`;

const TitleRow = styled.div`
  margin-bottom: 1em;
`;
const ValueRow = styled.div`
  line-height: 1.7em;
`;
const ChartRow = styled.div`
  line-height: 4em;
`;

const query = `
{
  personaList {
  title
  value
  programShare
  }
}
`;

const Personas = ({ changeView }) => (
  <GraphQL query={query}>
    {data => (
      <PersonaContainer onClick={() => changeView('Personas')}>
        <Description>
          <TitleRow>
            <SectionTitle>Personas</SectionTitle>
          </TitleRow>
          <ValueRow>
            <div>Average Total Trip Cost</div>
          </ValueRow>
          <ChartRow>
            <div>Program share</div>
          </ChartRow>
        </Description>
        {data.personaList.map((persona, index) => (
          <Persona key={index} first={index === 0} last={index === data.personaList.length - 1}>
            <TitleRow>
              <TitleTransform>{persona.title}</TitleTransform>
            </TitleRow>
            <ValueRow>
              <ValueSized>{persona.value}</ValueSized>
            </ValueRow>
            <ChartRow>
              <CircleChart percent={persona.programShare} />
            </ChartRow>
          </Persona>
        ))}
      </PersonaContainer>
    )}
  </GraphQL>
);

export default Personas;
