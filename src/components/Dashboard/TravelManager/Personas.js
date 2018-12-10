import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import CircleChart from './CircleChart';

const PersonaContainer = styled.div`
  display: flex;
`;
const Persona = styled.div`
  background: ${props => props.color};
  padding: 1em 2em;
  color: ${props => props.theme.alabaster};
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-top-left-radius: ${props => props.first && '15px'};
  border-bottom-left-radius: ${props => props.first && '15px'};
  border-top-right-radius: ${props => props.last && '15px'};
  border-bottom-right-radius: ${props => props.last && '15px'};
`;

const Title = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8em;
`;

const Value = styled.div`
  font-size: 2.5em;
  font-weight: lighter;
  margin: 0.25em 0;
`;

const ProgramShare = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 0.9em;
  }
`;

const query = `
{
  personaList {
  title
  value
  programShare
  color
  }
}
`;

const Personas = () => (
  <GraphQL query={query}>
    {data => (
      <PersonaContainer>
        {data.personaList.map((persona, index) => (
          <Persona
            color={persona.color}
            key={index}
            first={index === 0}
            last={index === data.personaList.length - 1}
          >
            <Title>{persona.title}</Title>
            <Value>{persona.value}</Value>
            <span>Average Total Trip Cost</span>
            <ProgramShare>
              <CircleChart percent={persona.programShare} />
              <span>Program Share</span>
            </ProgramShare>
          </Persona>
        ))}
      </PersonaContainer>
    )}
  </GraphQL>
);

export default Personas;
