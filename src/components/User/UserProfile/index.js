import React, { Component } from 'react'
import UserForm from './UserForm'
import { ApolloConsumer } from 'react-apollo'
import UserContext from 'components/context/UserContext'

class UserProfile extends Component {
  state = {}
  render() {
    return (
      <>
        <ApolloConsumer>
          {client => (
            <UserContext.Consumer>
              {({ user, removeUser, setUser }) => (
                <UserForm client={client} user={user} removeUser={removeUser} setUser={setUser} />
              )}
            </UserContext.Consumer>
          )}
        </ApolloConsumer>
      </>
    )
  }
}

export default UserProfile
