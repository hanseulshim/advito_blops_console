import React, { Component } from 'react';
import styled from 'styled-components';
import ViewContext from 'components/context/ViewContext';
import { SectionTitle } from 'components/common/Typography';
import ProgramSelect from './ProgramSelect';
import BottomInfo from './BottomInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
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
        <SectionTitle>products</SectionTitle>
        <ProgramSelect />
        <BottomInfo />
      </Container>
    )}
  </ViewContext.Consumer>
);

export default Portal;
