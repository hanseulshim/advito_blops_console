import React, { Component } from 'react';

import { withSort } from '../WithSort';

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

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    const { users } = this.props;
    this.setState({
      users
    })
  }

  sortTable(key) {
    const { users } = this.state;
    const sorted = this.props.sort(users, key);

    this.setState({
      users: sorted,
    });
  }

  render() {
    const { showInactive } = this.props;
    const { users } = this.state
    return (
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableHeader>UserName{' '} <i
              className="fas fa-sort"
              style={{ cursor: 'pointer' }}
              onClick={() => this.sortTable('nameLast')}
            /></CustomTableHeader>
            <CustomTableHeader>Email</CustomTableHeader>
            <CustomTableHeader>UserType {' '}<i
              className="fas fa-sort"
              style={{ cursor: 'pointer' }}
              onClick={() => this.sortTable('role')}
            /></CustomTableHeader>
            <CustomTableHeader>Edit</CustomTableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {(showInactive ? users : users.filter(user => user.isEnabled)).map(
            (user, i) => (
              <TableRow key={'user' + i}>
                <CustomTableCell component="th" scope="row">
                  {`${user.nameLast}, ${user.nameFirst}`}
                </CustomTableCell>
                <CustomTableCell align="left">{user.username}</CustomTableCell>
                <CustomTableCell align="left">
                  {user.role}
                </CustomTableCell>
                <CustomTableCell align="left">
                  <EditUser user={user} />
                </CustomTableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>

    );
  }
}

export default withSort(UserTable);


