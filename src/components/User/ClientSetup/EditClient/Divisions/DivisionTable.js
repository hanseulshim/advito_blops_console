import React, { Component } from 'react';

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
    const { divisionList } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableHeader>GCN</CustomTableHeader>
            <CustomTableHeader align="left">Division Name</CustomTableHeader>
            <CustomTableHeader align="right">Edit</CustomTableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {divisionList.length > 0 ? (
            divisionList.map((division, i) => (
              <TableRow key={'division' + i}>
                <CustomTableCell component="th" scope="row">
                  {division.gcn}
                </CustomTableCell>
                <CustomTableCell align="left">{division.divisionName}</CustomTableCell>
                <CustomTableCell align="right">
                  <EditDivision
                    division={division}
                    fetchMore={this.props.fetchMore}
                    selectedClient={this.props.selectedClient}
                  />
                </CustomTableCell>
              </TableRow>
            ))
          ) : (
            <p>No divisions yet!</p>
          )}
        </TableBody>
      </Table>
    );
  }
}

export default DivisionTable;
