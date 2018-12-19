import React from 'react';
import Button from 'components/common/Button';
import GraphQL from 'components/graphql';
import { SectionTitle } from 'components/common/Typography';
import {
  Container,
  TitleContainer,
  EventContainer,
  EventIcon,
  HeaderContainer,
} from './ActionAlertStyle';

import airAlert from 'assets/airAlert.png';
import hotelAlert from 'assets/hotelAlert.png';

const query = `
  {
    activeAlerts {
      secondaryHeader
      icon
      alert
    }
  }
  `;

const createIconRows = data =>
  data.map((action, index) => (
    <EventContainer key={index}>
      <EventIcon>
        <img src={action.icon === 'air' ? airAlert : hotelAlert} alt="icon" />
      </EventIcon>
      <HeaderContainer>{action.secondaryHeader}</HeaderContainer>
    </EventContainer>
  ));

const ActiveAlerts = () => (
  <GraphQL query={query}>
    {data => (
      <Container>
        <TitleContainer>
          <SectionTitle>Active Alerts</SectionTitle>
          <Button spaceLeft text="view all" />
        </TitleContainer>
        {createIconRows(data.activeAlerts)}
      </Container>
    )}
  </GraphQL>
);

export default ActiveAlerts;
