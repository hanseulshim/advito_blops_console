import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GraphQL from 'components/graphql';
import { PERSONAS } from 'components/graphql/query';
import { SectionTitle, Title } from 'components/common/Typography';
import CircleChart from './CircleChart';
import Select from '../../../common/Select';

const PersonaContainer = styled.div`
  display: flex;
  margin-top: ${props => props.theme.verticalSpace};
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.concrete};
  border-radius: 0.8em;
  padding: 2em;
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
  border-left: ${props => !props.first && `1px solid ${props.theme.silver}`};
`;

const TitleTransform = styled(Title)`
  text-transform: uppercase;
`;

const ValueSized = styled.div`
  font-size: 1.7em;
  color: #000;
`;

const TitleRow = styled.div`
  margin-bottom: 1em;
`;
const ValueRow = styled.div`
  line-height: 1.7em;
  margin-bottom: 1em;
  margin-top:1em;
`;
const ChartRow = styled.div`
  line-height: 6em;
`;

let options = [
  {
    id: 0,
    title: 'Sort By Program Performance ',
  },
  {
    id: 1,
    title: 'Sort By Program Share',
  },
];

class Markets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "Sort by Program Share"
    }
  }

  onSelect = (selected) => {
    this.setState({
      sort: selected.title
    })
  }

  render() {
    return (
      <GraphQL query={PERSONAS} name="personaList">
        {({ data }) => (
          <PersonaContainer>
            <Description>
              <TitleRow>
                <Link to="/executive/personas"><SectionTitle>Markets</SectionTitle></Link>
              </TitleRow>
              <Select list={options} onSelect={this.onSelect} value={this.state.sort} />
              <ValueRow>
                <div>Side by side comparison of business areas providing an overview of their Total Program Performance and their Program Share based on volume.</div>
              </ValueRow>
            </Description>
            {data.map((persona, index) => (
              <Persona key={index} first={index === 0}>
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
  }
}

export default Markets;
