import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import UpcomingActions from 'components/Sidebar/UpcomingActions';
import ActiveAlerts from 'components/Sidebar/ActiveAlerts';
import { SectionTitle } from 'components/common/Typography';
import ProgramSelect from './ProgramSelect';
import BottomInfo from './BottomInfo';

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  position: relative;
  height: 100%;
`;

const MainContainer = styled.div`
  flex: 3;
  padding: 0em 4em;
`;

const PortalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.verticalSpace};
`;

const Portal = () => (
  <Container>
    <Sidebar bgColor={'white'}>
      <UpcomingActions />
      <ActiveAlerts />
    </Sidebar>
    <MainContainer>
      <Header />
      <PortalContainer>
        <SectionTitle>products</SectionTitle>
        <ProgramSelect />
        <BottomInfo />
      </PortalContainer>
    </MainContainer>
  </Container>
);

export default Portal;
