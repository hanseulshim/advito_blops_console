import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
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
const Title = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  text-transform: uppercase;
`;

const EventConainer = styled.div`
  display: flex;
  align-items: center;
`;

const EventIcon = styled.img`
  margin: 0.75em 1em 0.75em 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.span`
  margin-bottom: ${props => !props.secondary && '0.5em'};
  font-size: ${props => !props.secondary && '1.2em'};
  color: ${props => props.secondary && props.theme.boulder};
`;

const createIconRows = data =>
  data.map((action, index) => (
    <EventConainer key={index}>
      <EventIcon src={action.icon === 'air' ? airAlert : hotelAlert} alt="icon" />
      <HeaderContainer>
        {action.header && <Header>{action.header}</Header>}
        {action.secondaryHeader && <Header secondary>{action.secondaryHeader}</Header>}
      </HeaderContainer>
    </EventConainer>
  ));

const query = `
  {
    activeAlerts {
      header
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
          <Title>Active Alerts</Title>
          <Button spaceLeft text="view all" />
        </TitleContainer>
        {createIconRows(data.activeAlerts)}
      </Container>
    )}
  </GraphQL>
);

export default ActiveAlerts;
