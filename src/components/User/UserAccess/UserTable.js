import React from 'react';

import GraphQL from 'components/graphql';
import { GET_USERS } from 'components/graphql/query/user';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CustomTableHeader, CustomTableCell } from '../Styles/TableStyles';

//project imports
import EditUser from './EditUser';

const UserTable = props => {
  return (
    <GraphQL query={GET_USERS} name="getUsers">
      {({ data, fetchMore }) => (
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableHeader>UserName</CustomTableHeader>
              <CustomTableHeader>Email</CustomTableHeader>
              <CustomTableHeader>UserType</CustomTableHeader>
              <CustomTableHeader>Edit</CustomTableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user, i) => (
              <TableRow key={'user' + i}>
                <CustomTableCell component="th" scope="row">
                  {`${user.nameFirst} ${user.nameLast}`}
                </CustomTableCell>
                <CustomTableCell align="left">{user.username}</CustomTableCell>
                <CustomTableCell align="left">{user.role}</CustomTableCell>
                <CustomTableCell align="left">
                  <EditUser
                    client={props.client}
                    user={user}
                    loggedIn={props.user}
                    fetchMore={fetchMore}
                  />
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </GraphQL>
  );
};

export default UserTable;
