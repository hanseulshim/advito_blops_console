import React, { Component } from 'react'
import { Query } from 'react-apollo'
import Loader from 'components/common/Loader'
import Error from 'components/common/Error'
import UserContext from 'components/context/UserContext'

class RemoveUser extends Component {
  componentDidMount() {
    this.props.removeUser()
  }
  render() {
    return null
  }
}

const GraphQL = ({ query, variables, name, children }) => {
  return (
    <UserContext.Consumer>
      {({ user, removeUser }) => (
        <Query
          query={query}
          variables={{ clientId: user.clientId, sessionToken: user.sessionToken, ...variables }}
        >
          {({ loading, error, data, fetchMore }) => {
            if (loading) return <Loader />
            if (error) return <Error />
            const response = data[name]
            if (response.statusCode !== 200) {
              return <RemoveUser removeUser={removeUser} />
            } else {
              return children({ data: response.body.apidataset, fetchMore })
            }
          }}
        </Query>
      )}
    </UserContext.Consumer>
  )
}

export default GraphQL
