import React from 'react';

import styled from 'styled-components';
import ClientList from './ClientList';

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Users = () => {
  return (
    <UserContainer>
      <ClientList type="user" title="Client Users" />
      <ClientList type="member" title="Client Members" />
    </UserContainer>
  );
};

export default Users;
