import React from 'react';
import Button from 'components/common/Button';
import GraphQL from 'components/graphql';
import { ACTIVE_ALERTS } from 'components/graphql/query';
import { SectionTitle } from 'components/common/Typography';
import {
  Container,
  TitleContainer,
  EventContainer,
  EventIcon,
  HeaderContainer,
} from './ActionAlertStyle';

const createIconRows = data =>
  data.map((action, index) => (
    <EventContainer key={index}>
      <EventIcon>
        <img src={require(`assets/sidebar/${action.icon}`)} alt="icon" />
      </EventIcon>
      <HeaderContainer>{action.secondaryHeader}</HeaderContainer>
    </EventContainer>
  ));

const ActiveAlerts = () => (
  <GraphQL query={ACTIVE_ALERTS} name="activeAlerts">
    {({ data }) => (
      <Container>
        <TitleContainer>
          <SectionTitle>Active Alerts</SectionTitle>
          <Button text="view all" />
        </TitleContainer>
        {createIconRows(data)}
      </Container>
    )}
  </GraphQL>
);

export default ActiveAlerts;
