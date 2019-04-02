import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import Icon from 'components/common/Icon';
import { withRouter } from 'react-router-dom';
import { compose } from 'react-apollo';
import { withSort } from '../../WithSort';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CustomTableHeader, CustomTableCell } from '../../Styles/TableStyles';
import { UPDATE_SELECTED_CLIENT } from 'graphql/mutations';

class ClientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { clients } = this.props;
    this.setState({ clients });
  }

  updateSelectedClient = async client => {
    await this.props.client.mutate({
      mutation: UPDATE_SELECTED_CLIENT,
      variables: {
        selectedClient: client,
      },
    });
    this.props.history.push('/client-setup/general');
  };

  sortTable(key) {
    const { clients } = this.state;
    const sorted = this.props.sort(clients, key);

    this.setState({
      clients: sorted,
    });
  }

  render() {
    const { showInactive } = this.props;
    const { clients } = this.state;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableHeader>GCN</CustomTableHeader>
            <CustomTableHeader>
              Client Name{' '}
              <i
                className="fas fa-sort"
                style={{ cursor: 'pointer' }}
                onClick={() => this.sortTable('clientName')}
              />
            </CustomTableHeader>
            <CustomTableHeader>
              Industry{' '}
              <i
                className="fas fa-sort"
                style={{ cursor: 'pointer' }}
                onClick={() => this.sortTable('industry')}
              />
            </CustomTableHeader>
            <CustomTableHeader align="center">Edit</CustomTableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {(showInactive ? clients : clients.filter(client => client.isActive)).map((client, i) => (
            <TableRow key={'client' + i}>
              <CustomTableCell component="th" scope="row">
                {client.gcn}
              </CustomTableCell>
              <CustomTableCell align="left">{client.clientName}</CustomTableCell>
              <CustomTableCell align="left">{client.industry}</CustomTableCell>
              <CustomTableCell align="center">
                <Icon
                  className="fas fa-pencil-alt"
                  style={{ fontSize: '1em', cursor: 'pointer' }}
                  onClick={e => this.updateSelectedClient(client)}
                />
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default compose(
  withRouter,
  withApollo,
  withSort
)(ClientTable);
