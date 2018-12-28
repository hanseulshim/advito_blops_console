import React from 'react';
import Button from 'components/common/Button';
import GraphQL from 'components/graphql';
import { UPCOMING_ACTIONS } from 'components/graphql/query';
import { SectionTitle, Title } from 'components/common/Typography';
import {
  Container,
  TitleContainer,
  EventContainer,
  EventIcon,
  HeaderContainer,
  Header,
} from './ActionAlertStyle';

const createIconRows = data =>
  data.map((action, index) => (
    <EventContainer key={index}>
      <EventIcon>
        <img src={require(`assets/sidebar/${action.icon}`)} alt="icon" />
      </EventIcon>
      <HeaderContainer>
        <Title>{action.header}</Title>
        <Header secondary>{action.secondaryHeader}</Header>
      </HeaderContainer>
    </EventContainer>
  ));

const UpcomingActions = () => (
  <GraphQL query={UPCOMING_ACTIONS}>
    {({ data }) => (
      <Container>
        <TitleContainer>
          <SectionTitle>Upcoming Actions</SectionTitle>
          <Button text="view all" />
        </TitleContainer>
        {createIconRows(data.upcomingActions)}
      </Container>
    )}
  </GraphQL>
);

export default UpcomingActions;
