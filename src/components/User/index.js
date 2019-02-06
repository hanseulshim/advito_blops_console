import React, { Component } from 'react';
import styled from 'styled-components';
import UserProfile from './UserProfile';

const Container = styled.div`
  padding: 4em 0em;
`;

class UserView extends Component {
  state = {};
  render() {
    return (
      <Container>
        <UserProfile />
      </Container>
    );
  }
}

export default UserView;
