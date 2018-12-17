import React from 'react';
import styled from 'styled-components';
import { SectionHeader, Title } from 'components/common/Typography';
import Button from 'components/common/Button';
import GraphQL from 'components/graphql';

import flag from 'assets/flag.png';
import contracts from 'assets/contracts.png';

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
  padding: 0.75em;
  border: 1px solid ${props => props.theme.tradewind};
  border-radius: 50%;
  margin: 0.75em 1em 0.75em 0;
  flex: 1;
  img {
    width: 100%;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
`;

const Header = styled.span`
  margin-top: 0.5em;
`;

const createIconRows = data =>
  data.map((action, index) => (
    <EventContainer key={index}>
      <EventIcon>
        <img src={action.icon === 'flag' ? flag : contracts} alt="icon" />
      </EventIcon>
      <HeaderContainer>
        <Title>{action.header}</Title>
        <Header secondary>{action.secondaryHeader}</Header>
      </HeaderContainer>
    </EventContainer>
  ));

const query = `
  {
    upcomingActions {
      header
      secondaryHeader
      icon
    }
  }
  `;

const UpcomingActions = () => (
  <GraphQL query={query}>
    {data => (
      <Container>
        <TitleContainer>
          <SectionHeader>Upcoming Actions</SectionHeader>
          <Button spaceLeft text="view all" />
        </TitleContainer>
        {createIconRows(data.upcomingActions)}
      </Container>
    )}
  </GraphQL>
);

export default UpcomingActions;
