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

const UserTable = ({ showInactive }) => {
  return (
    <Query query={USER_LIST}>
      {({ data: { userList }, fetchMore, loading }) =>
        loading ? <Loader /> :
          (
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
                {!showInactive ? userList.filter(user => user.isEnabled).map((user, i) => (
                  <TableRow key={'user' + i}>
                    <CustomTableCell component="th" scope="row">
                      {`${user.nameFirst} ${user.nameLast}`}
                    </CustomTableCell>
                    <CustomTableCell align="left">{user.username}</CustomTableCell>
                    <CustomTableCell align="left">{user.role}</CustomTableCell>
                    <CustomTableCell align="left">
                      <EditUser user={user} fetchMore={fetchMore} />
                    </CustomTableCell>
                  </TableRow>
                )) :
                  userList.map((user, i) => (
                    <TableRow key={'user' + i}>
                      <CustomTableCell component="th" scope="row">
                        {`${user.nameFirst} ${user.nameLast}`}
                      </CustomTableCell>
                      <CustomTableCell align="left">{user.username}</CustomTableCell>
                      <CustomTableCell align="left">{user.role}</CustomTableCell>
                      <CustomTableCell align="left">
                        <EditUser user={user} fetchMore={fetchMore} />
                      </CustomTableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          )
      }
    </Query>
  );
};

export default UserTable;
