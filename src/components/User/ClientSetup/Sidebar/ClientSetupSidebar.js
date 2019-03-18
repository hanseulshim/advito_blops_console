import React from 'react';

//project imports
import { SectionTitle } from 'components/common/Typography';
import SidebarForm from './SidebarForm';
import { Query } from 'react-apollo';
import { GET_SELECTED_CLIENT } from 'graphql/queries';

const ClientSetupSidebar = () => {
  return (
    <Query query={GET_SELECTED_CLIENT}>
      {({ data: { selectedClient } }) => (
        <>
          <div style={{ paddingLeft: '1.5em' }}>
            <SectionTitle>Client Name</SectionTitle>
            <p>{selectedClient.clientNameFull}</p>
          </div>
          <SidebarForm selectedClient={selectedClient} />
        </>
      )}
    </Query>
  );
};

export default ClientSetupSidebar;
