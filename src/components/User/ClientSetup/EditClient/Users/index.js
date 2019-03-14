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
      <ClientList rows={clientUserRows} type="User" title="Client Users" />
      <ClientList rows={clientMemberRows} type="Member" title="Client Members" />
    </UserContainer>
  );
};

export default Users;

const clientUserRows = [
  {
    title: 'User Name',
    data: ['nameLast', 'nameFirst'],
  },
  {
    title: 'Email',
    data: 'username',
  },
  {
    title: 'Role',
    data: 'role',
  },
  {
    title: 'Division',
    data: 'division',
  },
  {
    title: 'Persona',
    data: 'persona',
  },
];

const clientMemberRows = [
  {
    title: 'Member Name',
    data: ['nameLast', 'nameFirst'],
  },
  {
    title: 'Division',
    data: 'division',
  },
  {
    title: 'Persona',
    data: 'persona',
  },
  {
    title: 'Location',
    data: 'location',
  },
];
