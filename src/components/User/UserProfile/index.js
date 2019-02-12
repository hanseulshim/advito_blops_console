import React, { Component } from 'react';
import styled from 'styled-components';
import UserForm from './UserForm';
import { ApolloConsumer } from 'react-apollo';
import UserContext from 'components/context/UserContext';

class UserProfile extends Component {
  state = {};
  render() {
    return (
      <>
        <ApolloConsumer>
          {client => (
            <UserContext.Consumer>
              {({ user }) => (
                <UserForm client={client} user={user} />
              )}
            </UserContext.Consumer>
          )}
        </ApolloConsumer>
      </>
    );
  }
}

export default UserProfile;
