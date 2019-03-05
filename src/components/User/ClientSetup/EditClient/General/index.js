import React from 'react';
import GeneralForm from './GeneralForm';
import { Query } from 'react-apollo';
import { GET_SELECTED_CLIENT } from 'graphql/queries';

const General = () => {
  return (
    <Query query={GET_SELECTED_CLIENT}>
      {({ data: { selectedClient } }) => (
        <>
          <GeneralForm selectedClient={selectedClient} />
        </>
      )}
    </Query>
  );
};

export default General;
