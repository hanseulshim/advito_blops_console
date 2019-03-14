import React, { Component } from 'react';
import Toggle from 'react-toggle';
import Select from 'react-select';
import { SectionTitle } from 'components/common/Typography';
import Modal from 'components/common/Modal';
import { Mutation } from 'react-apollo';

//Form Styles
import {
  TitleRow,
  Close,
  ModalForm,
  ModalFormItem,
  ModalFormLabel,
  ModalFormText,
  Save,
} from '../../../Styles/ModalFormStyles';
import '../../../Styles/toggle.css';

import { EDIT_USER } from 'components/graphql/mutation';

const roles = [
  { label: 'Hotel System', value: 1 },
  { label: 'Air System', value: 2 },
  { label: 'I&A System', value: 3 },
  { label: 'Administrator', value: 4 },
  { label: 'General', value: 5 },
  { label: 'Reports', value: 6 },
];

class EditClientUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isEnabled: false,
      nameFirst: '',
      nameLast: '',
      phone: '',
      address: '',
      role: '',
      notifyUser: false,
      message: '',
    };
  }

  componentDidMount() {
    const { user } = this.props;
    const state = {};
    Object.keys(user).forEach(key => {
      if (user[key]) {
        if (key === 'roleId') {
          const value = roles.filter(v => v.value === user[key])[0];
          state['role'] = value;
        } else {
          state[key] = user[key];
        }
      }
    });
    this.setState({
      ...state,
    });
  }

  changeInput = (e, name) => {
    if (e.label) {
      this.setState({ [name]: e });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  toggleNotification = message => {
    this.setState({
      notifyUser: !this.state.notifyUser,
      message,
    });
  };

  handleToggle = () => {
    this.setState({
      isEnabled: !this.state.isEnabled,
    });
  };

  render() {
    const {
      username,
      isEnabled,
      nameFirst,
      nameLast,
      phone,
      address,
      role,
      id,
      message,
      notifyUser,
    } = this.state;
    const { onClose } = this.props;

    return (
      <>
        <TitleRow>
          <SectionTitle>Edit User</SectionTitle>
          <Close className="fas fa-times" onClick={onClose} />
        </TitleRow>
        <ModalForm>
          <ModalFormItem>
            <ModalFormLabel>User Name *</ModalFormLabel>
            <ModalFormText value={username} name="username" onChange={this.changeInput} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Account Active</ModalFormLabel>
            <Toggle checked={isEnabled} icons={false} onChange={this.handleToggle} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>First Name *</ModalFormLabel>
            <ModalFormText value={nameFirst} name="nameFirst" onChange={this.changeInput} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Last Name *</ModalFormLabel>
            <ModalFormText value={nameLast} name="nameLast" onChange={this.changeInput} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Phone</ModalFormLabel>
            <ModalFormText value={phone} name="phone" onChange={this.changeInput} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Address</ModalFormLabel>
            <ModalFormText value={address} name="address" onChange={this.changeInput} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Role*</ModalFormLabel>
            <Select options={roles} value={role} onChange={e => this.changeInput(e, 'role')} />
          </ModalFormItem>
        </ModalForm>
        <Mutation
          mutation={EDIT_USER}
          key={id}
          onCompleted={() => {
            this.toggleNotification('User successfully modified');
          }}
          onError={() => {
            this.toggleNotification('Error modifiying User.');
          }}
        >
          {editUser => (
            <Save
              text="Save"
              onClick={e => {
                e.preventDefault();
                editUser({
                  variables: {
                    id,
                    username,
                    isEnabled,
                    nameFirst,
                    nameLast,
                    phone,
                    address,
                    roleId: role.value,
                  },
                });
              }}
            />
          )}
        </Mutation>
        <Modal open={notifyUser} handleClose={() => this.toggleNotification()}>
          <div style={{ textAlign: 'center' }}>{message}</div>
          <Save text="Close" onClick={() => onClose()} />
        </Modal>
      </>
    );
  }
}

export default EditClientUserForm;
