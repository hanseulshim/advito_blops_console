import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import Icon from 'components/common/Icon'
import { withRouter } from 'react-router-dom'
import { compose } from 'react-apollo'

//ReactTable imports...
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { CustomTableHeader, CustomTableCell } from '../../Styles/TableStyles'
import { UPDATE_SELECTED_CLIENT } from 'graphql/mutations'

class ClientTable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  updateSelectedClient = async client => {
    await this.props.client.mutate({
      mutation: UPDATE_SELECTED_CLIENT,
      variables: {
        selectedClient: client,
      },
    })
    this.props.history.push('/client-setup/general')
  }

  render() {
    const { clients } = this.props
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
    )
  }
}

export default compose(
  withRouter,
  withApollo
)(ClientTable)
