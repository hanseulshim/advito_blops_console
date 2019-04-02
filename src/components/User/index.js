import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import UserProfile from './UserProfile';
import ProfileSidebar from './UserProfile/ProfileSidebar';

import ClientSetup from './ClientSetup';
import ClientSetupSidebar from './ClientSetup/Sidebar/ClientSetupSidebar';

import UserAcess from './UserAccess';
import UserAccessSidebar from './UserAccess/UserAccessSidebar';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  position: relative;
  min-height: 100%;
  background-color: ${props => props.theme.white};
`;

const MainContainer = styled.div`
  flex: 3;
  padding: 0em 3em;
  padding-bottom: 3em;
`;

const SidebarDyanmic = styled.div`
  margin-top: 15%;
`;

class User extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Sidebar>
          <Switch>
            <SidebarDyanmic>
              <Route path={'/user-profile'} component={ProfileSidebar} />
              <Route path={'/client-setup/:tab'} component={ClientSetupSidebar} />
              <Route path={`/user-access`} component={UserAccessSidebar} />
            </SidebarDyanmic>
          </Switch>
        </Sidebar>
        <MainContainer>
          <Header />
          <Switch>
            <Route path={`/user-profile`} exact component={UserProfile} />
            <Route path={`/client-setup`} component={ClientSetup} />
            <Route path={`/user-access`} component={UserAcess} />
          </Switch>
        </MainContainer>
      </Container>
    );
  }
}

export default User;
