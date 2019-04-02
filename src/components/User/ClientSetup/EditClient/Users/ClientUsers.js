import React, { Component } from 'react';

//project imports
import { CustomTableHeader, CustomTableCell, styles } from './ResponsiveTable';
import { withSort } from '../../../WithSort';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditClientUser from './EditUser';

class ClientUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  filterUsers = () => {
    const { search, showInactive } = this.props;
    const { users } = this.state;

    let userCopy = [...users];
    userCopy = showInactive ? [...userCopy] : (userCopy = userCopy.filter(user => user.isEnabled));

    if (search) {
      const filtered = userCopy.filter(user => {
        const email = user.username.toLowerCase();
        const username = `${user.nameFirst.toLowerCase()} ${user.nameLast.toLowerCase()}`;
        return email.includes(search.toLowerCase()) || username.includes(search.toLowerCase());
      });
      userCopy = [...filtered];
    }

    return userCopy;
  };

  render() {
    const { users } = this.state;
    return (
      <div style={{ maxHeight: '400px', overflow: 'auto' }}>
        <Table style={{ tableLayout: 'auto' }}>
          <TableHead>
            <TableRow>
              <CustomTableHeader>
                User Name{' '}
                <i
                  className="fas fa-sort"
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.sortTable('nameLast')}
                />
              </CustomTableHeader>
              <CustomTableHeader align="left">Email </CustomTableHeader>
              <CustomTableHeader align="left">
                Role{' '}
                <i
                  className="fas fa-sort"
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.sortTable('role')}
                />
              </CustomTableHeader>
              <CustomTableHeader align="left">Division</CustomTableHeader>
              <CustomTableHeader align="left">Persona</CustomTableHeader>
              <CustomTableHeader />
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 ? (
              this.filterUsers().map((user, i) => (
                <TableRow key={'user' + i} style={user.isEnabled ? null : styles.inactive}>
                  <CustomTableCell component="th" scope="row">
                    {user.nameLast}, {user.nameFirst}
                  </CustomTableCell>
                  <CustomTableCell component="th" scope="row">
                    {user.username}
                  </CustomTableCell>
                  <CustomTableCell component="th" scope="row">
                    {user.role}
                  </CustomTableCell>
                  <CustomTableCell component="th" scope="row">
                    {user.division || "undefined"}
                  </CustomTableCell>
                  <CustomTableCell component="th" scope="row">
                    {user.persona || "undefined"}
                  </CustomTableCell>
                  <CustomTableCell component="th" scope="row">
                    <EditClientUser user={user} />
                  </CustomTableCell>
                </TableRow>
              ))
            ) : (
                <p>No Client Users</p>
              )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withSort(ClientUsers);
