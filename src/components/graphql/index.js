import React from 'react';
import { Query } from 'react-apollo';
import Loader from 'components/common/Loader';
import Error from 'components/common/Error';
import UserContext from 'components/context/UserContext';
import { removeUser } from 'components/graphql/helper';

const GraphQL = ({ query, variables, name, children }) => {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <Query
          query={query}
          variables={{ clientId: user.clientId, sessionToken: user.sessionToken, ...variables }}
        >
          {({ loading, error, data, fetchMore }) => {
            if (loading) return <Loader />;
            if (error) return <Error />;
            const response = data[name];
            if (response.statusCode !== 200) {
              removeUser();
              return null;
            } else {
              return children({ data: response.body.apidataset, fetchMore });
            }
          }}
        </Query>
      )}
    </UserContext.Consumer>
  );
};

export default GraphQL;
