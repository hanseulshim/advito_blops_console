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
    top: '50%',
    left: '40%',
    borderRadius: '10px',
    maxHeight: '750px',
    overflow: 'scroll',
  },
  BackdropProps: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  tall: {
    top: '2.5%',
  },
  medium: {
    top: '15%',
  },
});

class ModalWrapper extends Component {
  render() {
    const { classes, handleClose, open, size } = this.props;
    const sizeClass = size ? classes[size] : '';
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
        <div className={`${classes.paper} ${sizeClass}`}>{this.props.children}</div>
      </Modal>
    );
  }
}

export default withStyles(styles)(ModalWrapper);
