import React from 'react';
import { Query } from 'react-apollo';
import Loader from 'components/common/Loader';
import Error from 'components/common/Error';

const GraphQL = ({ query, variables, children }) => {
  return (
    <Query query={query} variables={variables}>
      {({ loading, error, data, fetchMore }) => {
        if (loading) return <Loader />;
        if (error) return <Error />;
        return children({ data, fetchMore });
      }}
    </Query>
  );
};

export default GraphQL;
