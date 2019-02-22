import React, { Component } from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { GET_CLIENTS } from 'components/graphql/query/client';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditDivision from './EditDivison';
import { CustomTableHeader, CustomTableCell } from '../../../Styles/TableStyles';

class DivisionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <GraphQL query={GET_CLIENTS} name="getClients">
        {({ data, fetchMore }) => (
          <Table>
            <TableHead>
              <TableRow>
                <CustomTableHeader>GCN</CustomTableHeader>
                <CustomTableHeader align="left">Division Name</CustomTableHeader>
                <CustomTableHeader align="right">Edit</CustomTableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((client, i) => (
                <TableRow key={'client' + i}>
                  <CustomTableCell component="th" scope="row">
                    {client.gcn}
                  </CustomTableCell>
                  <CustomTableCell align="left">{client.clientName}</CustomTableCell>
                  <CustomTableCell align="right">
                    <EditDivision />
                  </CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </GraphQL>
    );
  }
}

export default DivisionTable;
