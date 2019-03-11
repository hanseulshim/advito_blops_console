import React, { Component } from 'react';

//project imports
import { CustomTableHeader, CustomTableCell } from '../../../../Styles/TableStyles';
import { USER_LIST } from 'components/graphql/query';
import { Query } from 'react-apollo';
import Loader from 'components/common/Loader';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditClientUser from './EditClientUser';

const roles = [
  { label: 'Hotel System', value: 1 },
  { label: 'Air System', value: 2 },
  { label: 'I&A System', value: 3 },
  { label: 'Administrator', value: 4 },
  { label: 'General', value: 5 },
  { label: 'Reports', value: 6 },
];

class ClientUserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createUserList = userList => {
    const { search } = this.props;
    let filteredList = [...userList];

    if (search) {
      const filtered = userList.filter(user => {
        let email = user.username.toLowerCase();
        let username = user.nameFirst.toLowerCase() + user.nameLast.toLowerCase();
        return email.includes(search) || username.includes(search);
      });

      filteredList = [...filtered];
    }

    return filteredList;
  };

  render() {
    const { showInactive } = this.props;
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
                  <CustomTableHeader>Role</CustomTableHeader>
                  <CustomTableHeader>Division</CustomTableHeader>
                  <CustomTableHeader>Persona</CustomTableHeader>
                  <CustomTableHeader>Edit</CustomTableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {(showInactive
                  ? this.createUserList(userList)
                  : this.createUserList(userList).filter(user => user.isEnabled)
                ).map((user, i) => (
                  <TableRow key={'user' + i}>
                    <CustomTableCell component="th" scope="row">
                      {`${user.nameFirst} ${user.nameLast}`}
                    </CustomTableCell>
                    <CustomTableCell align="left">{user.username}</CustomTableCell>
                    <CustomTableCell align="left">
                      {roles.filter(v => v.value === user.roleId)[0].label}
                    </CustomTableCell>
                    <CustomTableCell align="left">Air Admin</CustomTableCell>
                    <CustomTableCell align="left">Dev-Ops</CustomTableCell>
                    <CustomTableCell align="left">
                      <EditClientUser user={user} />
                    </CustomTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )
        }
      </Query>
    );
  }
}

export default ClientUserTable;
