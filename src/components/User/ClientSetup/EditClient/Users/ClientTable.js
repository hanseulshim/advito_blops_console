import React, { Component } from 'react';

//project imports
import { CustomTableHeader, CustomTableCell, styles } from './ResponsiveTable';
import { USER_LIST } from 'components/graphql/query';
import { Query } from 'react-apollo';
import Loader from 'components/common/Loader';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditClientUser from './EditUser';

class ClientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createUserList = userList => {
    const { search, showInactive } = this.props;
    let users = [...userList];
    users = showInactive ? [...userList] : (users = users.filter(user => user.isEnabled));

    if (search) {
      const filtered = userList.filter(user => {
        let email = user.username.toLowerCase();
        let username = `${user.nameFirst.toLowerCase()} ${user.nameLast.toLowerCase()}`;
        return email.includes(search.toLowerCase()) || username.includes(search.toLowerCase());
      });

      users = [...filtered];
    }

    return users;
  };

  render() {
    const { rows } = this.props;
    return (
      <Query query={USER_LIST}>
        {({ data: { userList }, loading }) =>
          loading ? (
            <Loader />
          ) : (
            <div style={{ maxHeight: '400px', overflow: 'auto' }}>
              <Table style={{ tableLayout: 'auto' }}>
                <TableHead>
                  <TableRow>
                    {rows.map((row, i) => (
                      <CustomTableHeader key={'header' + i}>{row.title}</CustomTableHeader>
                    ))}
                    <CustomTableHeader />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.createUserList(userList).map((user, i) => (
                    <TableRow key={'user' + i} style={user.isEnabled ? null : styles.inactive}>
                      {rows.map((row, i) => (
                        <CustomTableCell component="th" scope="row">
                          {row.title.includes('Name')
                            ? `${user[row.data[0]]} , ${user[row.data[1]]}`
                            : `${user[row.data]}`}
                        </CustomTableCell>
                      ))}
                      <CustomTableCell component="th" scope="row">
                        <EditClientUser user={user} />
                      </CustomTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )
        }
      </Query>
    );
  }
}

export default ClientTable;
