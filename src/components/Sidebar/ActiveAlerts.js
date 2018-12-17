import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { SectionHeader } from 'components/common/Typography';
import GraphQL from 'components/graphql';

import airAlert from 'assets/airAlert.png';
import hotelAlert from 'assets/hotelAlert.png';

const Container = styled.div`
  margin: 5em 0;
`;

const TitleContainer = styled.div`
  margin: 1.5em 0;
  display: flex;
  align-items: center;
`;

const EventContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EventIcon = styled.div`
  margin: 0.75em 1em 0.75em 0;
  flex: 1;
  img {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
`;

const createIconRows = data =>
  data.map((action, index) => (
    <EventContainer key={index}>
      <EventIcon>
        <img src={action.icon === 'air' ? airAlert : hotelAlert} alt="icon" />
      </EventIcon>
      <Header>{action.secondaryHeader}</Header>
    </EventContainer>
  ));

const query = `
  {
    activeAlerts {
      secondaryHeader
      icon
      alert
    }
  }
  `;

const ActiveAlerts = () => (
  <GraphQL query={query}>
    {data => (
      <Container>
        <TitleContainer>
          <SectionHeader>Active Alerts</SectionHeader>
          <Button spaceLeft text="view all" />
        </TitleContainer>
        {createIconRows(data.activeAlerts)}
      </Container>
    )}
  </GraphQL>
);

export default ActiveAlerts;
