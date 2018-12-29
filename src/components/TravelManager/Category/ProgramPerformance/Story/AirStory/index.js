import React, { Component } from 'react';
import ChartContainer from '../ChartContainer';
import styled from 'styled-components';

//DUMMY DATA
import { airSummary } from 'data/airData/airSummary';
import { cabinUse } from 'data/airData/cabinUse';
import { routeTypes } from 'data/airData/routeTypes';
import { topAirlines } from 'data/airData/topAirlines';
import { trafficLaneOverview } from 'data/airData/trafficLaneOverview';

//STYLED LAYOUTS

const Container = styled.div`
  position: relative;
`;

const ArrowButton = styled.i`
  color: ${props => props.theme.treePoppy};
  font-size: 44px;
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
      dataFormat: 'integer',
      viewIndex: 0,
      data: [airSummary, trafficLaneOverview, topAirlines, cabinUse, routeTypes],
    };
  }

  toggleNext = () => {
    if (this.state.viewIndex === this.state.data.length - 1) {
      return;
    }
    this.setState(prevState => ({
      viewIndex: prevState.viewIndex + 1,
    }));
  };

  togglePrev = () => {
    if (this.state.viewIndex === 0) {
      return;
    }
    this.setState(prevState => ({
      viewIndex: prevState.viewIndex + -1,
    }));
  };
  render() {
    const { data, viewIndex } = this.state;
    return (
      <Container>
        <ChartContainer className="fullview" data={data[viewIndex]} />
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

export default AirStory;
