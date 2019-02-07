import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import UserProfile from './UserProfile';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  position: relative;
  height: 100%;
  background-color: ${props => props.theme.white};
`;

const MainContainer = styled.div`
  flex: 3;
  padding: 0em 4em;
`;

class UserView extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Sidebar />
        <MainContainer>
          <Header />
          <Switch>
            <Route path={`/user/userProfile`} exact component={UserProfile} />
            <Route path={`/user/clientSetup`} component={UserProfile} />
          </Switch>
        </MainContainer>
      </Container>
    );
  }
}

export default UserView;
