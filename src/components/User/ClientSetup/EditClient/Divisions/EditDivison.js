import React from 'react';

//project imports
import Modal from 'components/common/Modal';
import Icon from 'components/common/Icon';
import EditDivisionForm from './EditDivisionForm';

class EditDivision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
    };
  }

  toggleForm = () => {
    this.setState({
      formOpen: !this.state.formOpen,
    });
  };
  render() {
    const { division, fetchMore, selectedClient } = this.props;
    const { formOpen } = this.state;
    return (
      <>
        <Icon
          className="fas fa-pencil-alt"
          style={{ fontSize: '1em', cursor: 'pointer' }}
          onClick={this.toggleForm}
        />
        <Modal open={formOpen} handleClose={this.toggleForm} size="tall">
          <EditDivisionForm
            division={division}
            onClose={this.toggleForm}
            fetchMore={fetchMore}
            handleClose={this.toggleForm}
            selectedClient={selectedClient}
          />
        </Modal>
      </>
    );
  }
}

export default EditDivision;
