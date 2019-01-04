import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import styled from 'styled-components';
import Loader from 'components/common/Loader';
import { AIR_STORY_QUERIES, HOTEL_STORY_QUERIES } from 'components/graphql/query';
import ChartContainer from './ChartContainer';
import Donut from './Donut';

const Container = styled.div`
  position: relative;
`;

const ArrowButton = styled.i`
  color: ${props => props.theme.treePoppy};
  font-size: 2.5em;
  cursor: pointer;
  position: absolute;
  left: ${props => (props.previous ? '-1em' : null)};
  right: ${props => (props.next ? '-1em' : null)};
  top: 50%;
`;

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewIndex: 0,
      data: [],
    };
  }

  async componentDidMount() {
    const client = this.props.client;
    const queryArray = this.props.view === 'air' ? AIR_STORY_QUERIES : HOTEL_STORY_QUERIES;
    const dataArray = await Promise.all(
      queryArray.map(async v => ({
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
    const { view } = this.props;

    return (
      <Container>
        {data.length === 0 ? (
          <Loader />
        ) : data[viewIndex].donutData ? (
          <Donut data={data[viewIndex]} view={view} />
        ) : (
          <ChartContainer data={data[viewIndex]} view={view} />
        )}
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

const StoryWrapper = ({ view }) => (
  <ApolloConsumer>{client => <Story client={client} view={view} />}</ApolloConsumer>
);

export default StoryWrapper;
