import React, { Component } from 'react';
import styled from 'styled-components';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const UserTable = ({ users }) => {
  return (
    <Table>
      <TableHead>
        <TableCell>UserName</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>UserType</TableCell>
        <TableCell>Edit</TableCell>
      </TableHead>
      <TableBody>
        {users.map((user, i) => (
          <TableRow key={'user' + i}>
            <TableCell component="th" scope="row">
              {user.name}
            </TableCell>
            <TableCell align="right">{user.email}</TableCell>
            <TableCell align="right">{user.type}</TableCell>
            <TableCell align="right">
              <i className="fas fa-pencil" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
