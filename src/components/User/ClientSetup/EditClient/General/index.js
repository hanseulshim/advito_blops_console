import React from 'react';
import GeneralForm from './GeneralForm';
import UserContext from 'components/context/UserContext';
import { Query } from 'react-apollo';
import { GET_SELECTED_CLIENT } from 'graphql/queries';

const General = ({ selectedClient }) => {
  return (
    <UserContext.Consumer>
      {({ user, removeUser }) => (
        <Query query={GET_SELECTED_CLIENT}>
          {({ data }) => (
            <>
              <GeneralForm user={user} selectedClient={data.selectedClient} />
            </>
          )}
        </Query>
      )}
    </UserContext.Consumer>
  );
};

export default General;
