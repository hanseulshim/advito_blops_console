import React from 'react';
import Modal from 'components/common/Modal';
import Icon from 'components/common/Icon';
import EditUserForm from './EditUserForm';

class EditUser extends React.Component {
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
    const { user } = this.props;
    const { formOpen } = this.state;
    return (
      <>
        <Icon
          className="fas fa-pencil-alt"
          style={{ fontSize: '1em', cursor: 'pointer' }}
          onClick={this.toggleForm}
        />
        <Modal open={formOpen} handleClose={this.toggleForm} size="tall">
          <EditUserForm user={user} onClose={this.toggleForm} />
        </Modal>
      </>
    );
  }
}

export default EditUser;
