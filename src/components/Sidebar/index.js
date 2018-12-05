import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SidebarEvents from './SidebarEvents';
import SidebarUserInfo from './SidebarUserInfo';

const Container = styled.div`
  flex: 1;
  background: ${props => props.theme.alabaster};
  border: 1px solid ${props => props.theme.pumice};
  padding: 4em 2em;
`;

const Sidebar = () => (
  <Container>
    <SidebarUserInfo />
    <Query
      query={gql`
        {
          upcomingActions {
            header
            secondaryHeader
            icon
            alert
          }
          activeAlerts {
            header
            secondaryHeader
            icon
            alert
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return (
          <>
            <SidebarEvents title="upcoming actions" data={data.upcomingActions} />
            <SidebarEvents title="active alerts" data={data.activeAlerts} />
          </>
        );
      }}
    </Query>
  </Container>
);

export default Sidebar;
