import React from 'react';
import Button from 'components/common/Button';
import Loader from 'components/common/Loader';
import { Query } from 'react-apollo';
import { ACTIVE_ALERT_LIST } from 'components/graphql/query';
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
  <Query query={ACTIVE_ALERT_LIST}>
    {({ data: { activeAlertList }, loading }) =>
      loading ? (
        <Loader />
      ) : (
        <Container>
          <TitleContainer>
            <SectionTitle>Active Alerts</SectionTitle>
            <Button text="view all" />
          </TitleContainer>
          {loading ? null : createIconRows(activeAlertList)}
        </Container>
      )
    }
  </Query>
);

export default ActiveAlerts;
