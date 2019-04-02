import React, { Component } from 'react';
import { withSort } from '../../../WithSort';

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

  componentWillMount() {
    const { divisionList } = this.props;
    this.setState({ divisionList });
  }

  sortTable(key) {
    const { divisionList } = this.state;
    const sorted = this.props.sort(divisionList, key);

    this.setState({
      divisionList: sorted,
    });
  }

  render() {
    const { showInactive } = this.props;
    const { divisionList } = this.state;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableHeader>GCN</CustomTableHeader>
            <CustomTableHeader align="left">
              Division Name{' '}
              <i
                className="fas fa-sort"
                style={{ cursor: 'pointer' }}
                onClick={() => this.sortTable('divisionName')}
              />
            </CustomTableHeader>
            <CustomTableHeader align="right">Edit</CustomTableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {divisionList.length > 0 ? (
            (showInactive ? divisionList : divisionList.filter(division => division.isActive)).map(
              (division, i) => (
                <TableRow key={'division' + i}>
                  <CustomTableCell component="th" scope="row">
                    {division.gcn}
                  </CustomTableCell>
                  <CustomTableCell align="left">{division.divisionName}</CustomTableCell>
                  <CustomTableCell align="right">
                    <EditDivision division={division} selectedClient={this.props.selectedClient} />
                  </CustomTableCell>
                </TableRow>
              )
            )
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

export default withSort(DivisionTable);
