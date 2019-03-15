import React from 'react';
import Modal from 'components/common/Modal';
import Icon from 'components/common/Icon';
import EditClientUserForm from './EditClientUserForm';
import EditClientMemberForm from './EditClientMemberForm';

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
    const { user, type } = this.props;
    const { formOpen } = this.state;
    return (
      <>
        <Icon
          className="fas fa-pencil-alt"
          style={{ fontSize: '1em', cursor: 'pointer', marginLeft: '1em' }}
          onClick={this.toggleForm}
        />
        <Modal open={formOpen} handleClose={this.toggleForm} size="tall">
          {type === 'User' ? (
            <EditClientUserForm user={user} onClose={this.toggleForm} />
          ) : (
            <EditClientMemberForm user={user} onClose={this.toggleForm} />
          )}
        </Modal>
      </>
    );
  }
}

export default EditUser;
