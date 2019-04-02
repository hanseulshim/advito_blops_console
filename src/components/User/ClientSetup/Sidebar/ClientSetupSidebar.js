import React from 'react';

//project imports
import { SectionTitle } from 'components/common/Typography';
import SidebarForm from './SidebarForm';
import { Query } from 'react-apollo';
import { GET_SELECTED_CLIENT } from 'graphql/queries';
import { USER_LIST } from 'components/graphql/query';
import { withRouter } from 'react-router';
import Loader from 'components/common/Loader';

const ClientSetupSidebar = props => {
  return (
    <>
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
      {props.location.pathname === '/client-setup/users' ? (
        <Query query={USER_LIST}>
          {({ data: { userList }, loading }) =>
            loading ? (
              <Loader />
            ) : (
              <div style={{ paddingLeft: '1.5em', marginTop: '1.5em' }}>
                <SectionTitle>Users</SectionTitle>
                <p>{userList.length}</p>
                <SectionTitle>Members</SectionTitle>
                <p>{userList.length}</p>
              </div>
            )
          }
        </Query>
      ) : null}
    </>
  );
};

export default withRouter(ClientSetupSidebar);
