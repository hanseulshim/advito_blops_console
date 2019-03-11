import React from 'react';
import ClientUsers from './ClientUsers';
import ClientMembers from './ClientMembers';

import styled from 'styled-components';

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Users = () => {
  return (
    <UserContainer>
      <ClientUsers />
      <ClientMembers />
    </UserContainer>
  );
};

export default Users;
