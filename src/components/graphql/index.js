import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loader from 'components/common/Loader';
import Error from 'components/common/Error';

const GraphQL = ({ query, children }) => {
  return (
    <Query
      query={gql`
        ${query}
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <Loader />;
        if (error) return <Error />;
        return children(data);
      }}
    </Query>
  );
};

export default GraphQL;
