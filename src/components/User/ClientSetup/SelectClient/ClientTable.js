import React, { Component } from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { GET_CLIENTS } from 'components/graphql/query/client';
import Icon from 'components/common/Icon';
import { Link } from 'react-router-dom';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CustomTableHeader, CustomTableCell } from '../../Styles/TableStyles';

class ClientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { clients } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableHeader>GCN</CustomTableHeader>
            <CustomTableHeader>Client Name</CustomTableHeader>
            <CustomTableHeader>Industry</CustomTableHeader>
            <CustomTableHeader>Edit</CustomTableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, i) => (
            <TableRow key={'client' + i}>
              <CustomTableCell component="th" scope="row">
                {client.gcn}
              </CustomTableCell>
              <CustomTableCell align="left">{client.clientName}</CustomTableCell>
              <CustomTableCell align="left">{client.industry}</CustomTableCell>
              <CustomTableCell align="left">
                <Link
                  to={{
                    pathname: `/client-setup/${client.clientName}/general`,
                    state: {
                      client,
                    },
                  }}
                >
                  <Icon
                    className="fas fa-pencil-alt"
                    style={{ fontSize: '1em', cursor: 'pointer' }}
                  />
                </Link>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default ClientTable;
