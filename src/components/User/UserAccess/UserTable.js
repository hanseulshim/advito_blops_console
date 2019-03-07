import React from 'react';

import { Query } from 'react-apollo';
import { USER_LIST } from 'components/graphql/query/user';
import Loader from 'components/common/Loader';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CustomTableHeader, CustomTableCell } from '../Styles/TableStyles';

//project imports
import EditUser from './EditUser';

const roles = [
  { label: 'Hotel System', value: 1 },
  { label: 'Air System', value: 2 },
  { label: 'I&A System', value: 3 },
  { label: 'Administrator', value: 4 },
  { label: 'General', value: 5 },
  { label: 'Reports', value: 6 },
];

const UserTable = ({ showInactive }) => {
  return (
    <Query query={USER_LIST}>
      {({ data: { userList }, loading }) =>
        loading ? (
          <Loader />
        ) : (
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
              {(showInactive ? userList : userList.filter(user => user.isEnabled)).map(
                (user, i) => (
                  <TableRow key={'user' + i}>
                    <CustomTableCell component="th" scope="row">
                      {`${user.nameFirst} ${user.nameLast}`}
                    </CustomTableCell>
                    <CustomTableCell align="left">{user.username}</CustomTableCell>
                    <CustomTableCell align="left">
                      {roles.filter(v => v.value === user.roleId)[0].label}
                    </CustomTableCell>
                    <CustomTableCell align="left">
                      <EditUser user={user} />
                    </CustomTableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        )
      }
    </Query>
  );
};

export default UserTable;
