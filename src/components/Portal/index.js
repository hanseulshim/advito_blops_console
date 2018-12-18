import React, { Component } from 'react';
import styled from 'styled-components';
import ViewContext from 'components/context/ViewContext';
import ProgramPerformance from './ProgramPerformance';
import ProgramSelect from './ProgramSelect';
import BottomInfo from './BottomInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4em;
`;

class PortalContext extends Component {
  componentDidMount() {
    this.props.changeView('dashboard');
  }
  render() {
    return null;
  }
}

const Portal = () => (
  <ViewContext.Consumer>
    {({ changeView }) => (
      <Container>
        <PortalContext changeView={changeView} />
        <ProgramPerformance />
        <ProgramSelect />
        <BottomInfo />
      </Container>
    )}
  </ViewContext.Consumer>
);

export default Portal;
