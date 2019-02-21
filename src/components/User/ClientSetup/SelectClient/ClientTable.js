import React, { Component } from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { GET_CLIENTS } from 'components/graphql/query/client';
import Icon from 'components/common/Icon';
import { Link } from 'react-router-dom';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CustomTableHead = styled(TableHead)`
  background-color: ${props => props.theme.grayNurse};
  color: ${props => props.theme.black};
  font-size: 2em;
`;

class ClientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <GraphQL query={GET_CLIENTS} name="getClients">
        {({ data, fetchMore }) => (
          <Table>
            <CustomTableHead>
              <TableCell>GCN</TableCell>
              <TableCell>Client Name</TableCell>
              <TableCell>Industry</TableCell>
              <TableCell>Edit</TableCell>
            </CustomTableHead>
            <TableBody>
              {data.map((client, i) => (
                <TableRow key={'client' + i}>
                  <TableCell component="th" scope="row">
                    {client.gcn}
                  </TableCell>
                  <TableCell align="left">{client.clientName}</TableCell>
                  <TableCell align="left">{client.industry}</TableCell>
                  <TableCell align="left">
                    <Link to={`/client-setup/${client.clientName}`}>
                      <Icon
                        className="fas fa-pencil-alt"
                        style={{ fontSize: '1em', cursor: 'pointer' }}
                      />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </GraphQL>
    )
  }
}

export default ClientTable;
