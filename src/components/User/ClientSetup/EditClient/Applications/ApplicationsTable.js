import React, { Component } from 'react';

//ReactTable imports...
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import EditDivision from './EditDivison';
import { CustomTableHeader, CustomTableCell } from '../../../Styles/TableStyles';

class ApplicationsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { applications } = this.props;
    this.setState({ applications });
  }

  render() {
    const { showInactive } = this.props;
    const { applications } = this.state;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableHeader>Application</CustomTableHeader>
            <CustomTableHeader align="left">Features Enabled</CustomTableHeader>
            <CustomTableHeader align="right">Edit</CustomTableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {applications.length > 0 ? (
            (showInactive
              ? applications
              : applications.filter(application => application.isActive)
            ).map((application, i) => (
              <TableRow key={'application' + i}>
                <CustomTableCell component="th" scope="row">
                  {application.applicationName}
                </CustomTableCell>
                <CustomTableCell align="left">
                  {application.features.map(feature => feature.featureName).join(', ')}
                </CustomTableCell>
                <CustomTableCell align="right">
                  {/* <EditDivision division={division} selectedClient={this.props.selectedClient} /> */}
                </CustomTableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <CustomTableCell>No Divisions yet!</CustomTableCell>
              <CustomTableCell />
              <CustomTableCell />
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

export default ApplicationsTable;
