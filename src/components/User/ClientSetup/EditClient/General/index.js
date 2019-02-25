import React from 'react';
import GeneralForm from './GeneralForm';
import UserContext from 'components/context/UserContext';

const General = ({ location }) => {
  return (
    <UserContext.Consumer>
      {({ user }) => <GeneralForm selectedClient={location.state.client} user={user} />}
    </UserContext.Consumer>
  );
};

export default General;
