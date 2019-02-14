import React, { Component } from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { GET_USERS } from 'components/graphql/query/user';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditUser from './EditUser';

const CustomTableHead = styled(TableHead)`
  background-color: ${props => props.theme.grayNurse};
  color: ${props => props.theme.black};
  font-size: 2em;
`;

const UserTable = props => {
  return (
    <GraphQL query={GET_USERS} name="getUsers">
      {({ data, fetchMore }) => (
        <Table>
          <CustomTableHead>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>UserType</TableCell>
            <TableCell>Edit</TableCell>
          </CustomTableHead>
          <TableBody>
            {data.map((user, i) => (
              <TableRow key={'user' + i}>
                <TableCell component="th" scope="row">
                  {user.nameFirst + user.nameLast}
                </TableCell>
                <TableCell align="left">{user.username}</TableCell>
                <TableCell align="left">{user.role}</TableCell>
                <TableCell align="left">
                  <EditUser client={props.client} user={user} loggedIn={props.user} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </GraphQL>
  );
};

export default UserTable;
