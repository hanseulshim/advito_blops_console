import React, { Component } from 'react';
import Toggle from 'react-toggle';
import Select from 'react-select';
import { SectionTitle } from 'components/common/Typography';
import Modal from 'components/common/Modal';

//Query
import { USER_LIST } from 'components/graphql/query';
import { withUserContext } from 'components/context';
//Mutation
import { Mutation } from 'react-apollo';
import { CREATE_USER } from 'components/graphql/mutation';

import {
  TitleRow,
  Close,
  ModalForm,
  ModalFormItem,
  ModalFormLabel,
  ModalFormText,
  ModalText,
  ModalSubText,
  Save,
} from '../../../../Styles/ModalFormStyles';
import '../../../../Styles/toggle.css';

const roles = [
  { label: 'Hotel System', value: 1 },
  { label: 'Air System', value: 2 },
  { label: 'I&A System', value: 3 },
  { label: 'Administrator', value: 4 },
  { label: 'General', value: 5 },
  { label: 'Reports', value: 6 },
];

const personas = [
  { label: 'Persona 1', value: 1 },
  { label: 'Persona 2', value: 2 },
  { label: 'Persona 3', value: 3 },
  { label: 'Persona 4', value: 4 },
  { label: 'Persona 5', value: 5 },
  { label: 'Persona 6', value: 6 },
];

const divisions = [
  { label: 'Division 1', value: 1 },
  { label: 'Division 2', value: 2 },
  { label: 'Division 3', value: 3 },
  { label: 'Division 4', value: 4 },
  { label: 'Division 5', value: 5 },
  { label: 'Division 6', value: 6 },
];

class AddClientUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isEnabled: true,
      nameFirst: '',
      nameLast: '',
      phone: '',
      address: '',
      division: '',
      persona: '',
      role: '',
      pwd: '',
      confirmPwd: '',
      message: '',
      notifyUser: false,
    };
  }

  changeInput = (e, name) => {
    if (Array.isArray(e)) {
      console.log(e);
    } else if (e.label) {
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
    this.setState(prevState => ({
      isEnabled: !prevState.active,
    }));
  };

  render() {
    const {
      username,
      isEnabled,
      nameFirst,
      nameLast,
      phone,
      address,
      division,
      persona,
      role,
      pwd,
      confirmPwd,
      message,
      notifyUser,
    } = this.state;
    const {
      onClose,
      context: { user },
    } = this.props;
    return (
      <>
        <TitleRow>
          <SectionTitle>New Client User</SectionTitle>
          <Close className="fas fa-times" onClick={onClose} />
        </TitleRow>
        <ModalForm>
          <ModalFormItem>
            <ModalFormLabel>User Name *</ModalFormLabel>
            <ModalFormText value={username} name="username" onChange={this.changeInput} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Account Active</ModalFormLabel>
            <ModalFormLabel>
              <Toggle defaultChecked={isEnabled} icons={false} onChange={this.handleToggle} />
            </ModalFormLabel>
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
            <ModalFormLabel>Division *</ModalFormLabel>
            <Select
              options={divisions}
              value={division}
              onChange={e => this.changeInput(e, 'division')}
            />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Persona *</ModalFormLabel>
            <Select
              options={personas}
              value={persona}
              onChange={e => this.changeInput(e, 'persona')}
            />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Role *</ModalFormLabel>
            <Select
              options={roles}
              value={role}
              onChange={e => this.changeInput(e, 'role')}
              isMulti
            />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Password *</ModalFormLabel>
            <ModalFormText value={pwd} type="password" name="pwd" onChange={this.changeInput} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Confirm Password *</ModalFormLabel>
            <ModalFormText
              value={confirmPwd}
              type="password"
              name="confirmPwd"
              onChange={this.changeInput}
            />
          </ModalFormItem>
        </ModalForm>
        <ModalText>
          {`Passwords must be a minimum of eight (8) characters
          and includes (3) of the following (4) criteria:
          `}
        </ModalText>
        <ModalSubText>
          {`- Lowercase character
          - Upper case character
          - Number
          - Special characters (e.g.!, $, #, %)
          `}
        </ModalSubText>
        <Mutation
          mutation={CREATE_USER}
          update={(cache, { data: { createUser } }) => {
            const { userList } = cache.readQuery({ query: USER_LIST });
            const newUser = { ...this.state };
            delete newUser.message;
            delete newUser.notifyUser;
            newUser.role = newUser.role.value;
            userList.push(newUser);
            cache.writeQuery({
              query: USER_LIST,
              data: userList,
            });
          }}
          onCompleted={() => {
            this.toggleNotification('User successfully created');
          }}
          onError={() => {
            this.toggleNotification('Error creating User.');
          }}
        >
          {createUser => (
            <Save
              text="Save"
              onClick={e => {
                e.preventDefault();
                createUser({
                  variables: {
                    clientId: user.clientId,
                    username,
                    isEnabled,
                    nameFirst,
                    nameLast,
                    phone,
                    address,
                    roleId: role.value,
                    pwd,
                    confirmPwd,
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

export default withUserContext(AddClientUser);
