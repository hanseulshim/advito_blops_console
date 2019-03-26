import React, { Component } from 'react';

//project imports
import { CustomTableHeader, CustomTableCell, styles } from './ResponsiveTable';

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

  filterUsers = () => {
    const { search, showInactive, users } = this.props;

    let userCopy = [...users];
    userCopy = showInactive ? [...userCopy] : (userCopy = userCopy.filter(user => user.isEnabled));

    if (search) {
      const filtered = userCopy.filter(user => {
        let email = user.username.toLowerCase();
        let username = `${user.nameFirst.toLowerCase()} ${user.nameLast.toLowerCase()}`;
        return email.includes(search.toLowerCase()) || username.includes(search.toLowerCase());
      });
      userCopy = [...filtered];
    }

    return userCopy;
  };

  render() {
    const { users } = this.props;
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
                    {user.last} + {', '} + {user.first}
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

export default ClientUsers;
