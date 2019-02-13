import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 70,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 4,
    boxShadow: theme.shadows[1],
    outline: 'none',
    top: '25%',
    left: '25%',
    borderRadius: '10px',
  },
  BackdropProps: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});

class ModalWrapper extends Component {
  render() {
    const { classes, handleClose, open } = this.props;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        BackdropProps={{
          classes: {
            root: classes.BackdropProps,
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>{this.props.children}</div>
      </Modal>
    );
  }
}

export default withStyles(styles)(ModalWrapper);
