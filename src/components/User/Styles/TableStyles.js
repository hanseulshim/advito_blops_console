import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'

export const CustomTableHeader = withStyles(() => ({
  head: {
    backgroundColor: '#dee1df',
    color: '#000000',
    fontSize: '1em',
  },
}))(TableCell)

export const CustomTableCell = withStyles(() => ({
  body: {
    color: '#666666',
    fontFamily: 'Rubik ,sans-serif',
    fontWeight: 300,
    fontSize: '1em',
    lineHeight: '20px',
  },
}))(TableCell)
