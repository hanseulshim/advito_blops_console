import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import styled from 'styled-components';
import Loader from 'components/common/Loader';
import { AIR_STORY_QUERIES } from 'components/graphql/query';
import ChartContainer from '../ChartContainer';

const Container = styled.div`
  position: relative;
`;

const ArrowButton = styled.i`
  color: ${props => props.theme.treePoppy};
  font-size: 2.5em;
  cursor: pointer;
  position: absolute;
  left: ${props => (props.previous ? 0 : null)};
  right: ${props => (props.next ? 0 : null)};
  top: 50%;
`;

//COMPONENT
class AirStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewIndex: 0,
      data: [],
    };
  }

  async componentDidMount() {
    const client = this.props.client;
    const dataArray = await Promise.all(
      AIR_STORY_QUERIES.map(async v => ({
        data: await client.query({ query: v.query, variables: v.variables }),
        returnVariable: v.returnVariable,
      }))
    );
    const data = dataArray.map(item => item.data.data[item.returnVariable]);
    this.setState({ data });
  }

  toggleNext = () => {
    if (this.state.viewIndex !== this.state.data.length - 1) {
      this.setState(prevState => ({
        viewIndex: prevState.viewIndex + 1,
      }));
    }
  };

  togglePrev = () => {
    if (this.state.viewIndex !== 0) {
      this.setState(prevState => ({
        viewIndex: prevState.viewIndex + -1,
      }));
    }
  };
  render() {
    const { data, viewIndex } = this.state;
    return (
      <Container>
        {data.length === 0 ? <Loader /> : <ChartContainer data={data[viewIndex]} />}
        {viewIndex !== 0 && (
          <ArrowButton onClick={this.togglePrev} previous className={'fas fa-chevron-left'} />
        )}
        {viewIndex !== data.length - 1 && (
          <ArrowButton onClick={this.toggleNext} next className={'fas fa-chevron-right'} />
        )}
      </Container>
    );
  }
}

const AirQueries = () => <ApolloConsumer>{client => <AirStory client={client} />}</ApolloConsumer>;

export default AirQueries;
