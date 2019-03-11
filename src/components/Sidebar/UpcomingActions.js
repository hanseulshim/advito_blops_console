import React from 'react';
import Button from 'components/common/Button';
import Loader from 'components/common/Loader';
import { Query } from 'react-apollo';
import { UPCOMING_ACTION_LIST } from 'components/graphql/query';
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
  <Query query={UPCOMING_ACTION_LIST}>
    {({ data: { upcomingActionList }, loading }) =>
      loading ? (
        <Loader />
      ) : (
        <Container>
          <TitleContainer>
            <SectionTitle>Upcoming Actions</SectionTitle>
            <Button text="view all" />
          </TitleContainer>
          {loading ? null : createIconRows(upcomingActionList)}
        </Container>
      )
    }
  </Query>
);

export default UpcomingActions;
