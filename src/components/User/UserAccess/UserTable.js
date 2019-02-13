import React, { Component } from 'react';
import styled from 'styled-components';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Icon } from '@material-ui/core';

const CustomTableHead = styled(TableHead)`
  background-color: ${props => props.theme.grayNurse};
  color: ${props => props.theme.black};
  font-size: 2em;
`;

const UserTable = ({ users }) => {
  return (
    <Table>
      <CustomTableHead>
        <TableCell>UserName</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>UserType</TableCell>
        <TableCell>Edit</TableCell>
      </CustomTableHead>
      <TableBody>
        {users.map((user, i) => (
          <TableRow key={'user' + i}>
            <TableCell component="th" scope="row">
              {user.name}
            </TableCell>
            <TableCell align="left">{user.email}</TableCell>
            <TableCell align="left">{user.type}</TableCell>
            <TableCell align="left">
              <Icon className="fas fa-pencil-alt" style={{ fontSize: '1em' }} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
