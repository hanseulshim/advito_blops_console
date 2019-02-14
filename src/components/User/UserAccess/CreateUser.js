import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Toggle from 'react-toggle';
import './toggle.css';
import Select from 'react-select';
import TextInput from 'components/common/TextInput';
import Icon from 'components/common/Icon';
import { SectionTitle } from 'components/common/Typography';
import Modal from 'components/common/Modal';

//Query
import { CREATE_USER } from 'components/graphql/query/user';

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2em;
`;

const Close = styled(Icon)`
  color: ${props => props.theme.treePoppy};
  border: 1px solid;
  border-radius: 100%;
  padding: 0.5em;
  width: 5px;
  height: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: auto;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  margin-bottom: 2em;
`;

const FormLabel = styled.span`
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const FormText = styled(TextInput)`
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid #dedede;
`;

const Text = styled.div`
  white-space: pre-line;
  font-style: italic;
`;

const SubText = styled(Text)`
  margin-top: 1em;
  margin-left: 2em;
`;

const Save = styled(Button)`
  position: relative;
  left: 40%;
  margin-top: 5em;
`;

const roles = [
  { label: 'Hotel System', value: 'HOTEL_SYSTEM' },
  { label: 'Air System', value: 'AIR_SYSTEM' },
  { label: 'I&A System', value: 'I_AND_A_SYSTEM' },
  { label: 'Administrator', value: 'ADMINISTRATOR' },
  { label: 'General', value: 'GENERAL' },
  { label: 'Reports', value: 'REPORTS' },
];

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      active: true,
      lastname: '',
      phone: '',
      address: '',
      role: '',
      password: '',
      confirm: '',
      errorMessage: '',
      notifyUser: false,
    };
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

  toggleNotification = () => {
    this.setState(prevState => ({
      notifyUser: !prevState.state.notifyUser,
    }));
  };

  handleToggle = () => {
    this.setState(prevState => ({
      active: !prevState.active,
    }));
  };

  handleSave = async () => {
    const payload = { ...this.state };
    delete payload.errorMessage;
    delete payload.notifyUser;
    const { client, user } = this.props;
    payload.sessionToken = user.sessionToken;
    payload.role = payload.role.value;
    const { data } = await client.mutate({
      mutation: CREATE_USER,
      variables: { ...payload },
    });

    if (data.createUser.statusCode !== 200) {
      this.setState({ errorMessage: data.createUser.body.apimessage });
    }
    this.toggleNotification();
  };

  render() {
    const {
      username,
      active,
      firstname,
      lastname,
      phone,
      address,
      role,
      password,
      confirm,
      errorMessage,
      notifyUser,
    } = this.state;
    const { onClose } = this.props;
    return (
      <>
        <TitleRow>
          <SectionTitle>Create User</SectionTitle>
          <Close className="fas fa-times" onClick={onClose} />
        </TitleRow>
        <Form>
          <FormItem>
            <FormLabel>User Name *</FormLabel>
            <FormText value={username} name="username" onChange={this.changeInput} />
          </FormItem>
          <FormItem>
            <FormLabel>Account Active</FormLabel>
            <FormLabel>
              <Toggle defaultChecked={active} icons={false} onChange={this.handleToggle} />
            </FormLabel>
          </FormItem>
          <FormItem>
            <FormLabel>First Name *</FormLabel>
            <FormText value={firstname} name="firstname" onChange={this.changeInput} />
          </FormItem>
          <FormItem>
            <FormLabel>Last Name *</FormLabel>
            <FormText value={lastname} name="lastname" onChange={this.changeInput} />
          </FormItem>
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormText value={phone} name="phone" onChange={this.changeInput} />
          </FormItem>
          <FormItem>
            <FormLabel>Address</FormLabel>
            <FormText value={address} name="address" onChange={this.changeInput} />
          </FormItem>
          <FormItem>
            <FormLabel>Role*</FormLabel>
            <Select options={roles} value={role} onChange={e => this.changeInput(e, 'role')} />
          </FormItem>
          <FormItem>
            <FormLabel>Password *</FormLabel>
            <FormText
              value={password}
              type="password"
              name="password"
              onChange={this.changeInput}
            />
          </FormItem>
          <FormItem>
            <FormLabel>Confirm Password *</FormLabel>
            <FormText value={confirm} name="confirm" onChange={this.changeInput} />
          </FormItem>
        </Form>
        <Text>
          {`Passwords must be a minimum of eight (8) characters
          and includes (3) of the following (4) criteria:
          `}
        </Text>
        <SubText>
          {`- Lowercase character
          - Upper case character
          - Number
          - Special characters (e.g.!, $, #, %)
          `}
        </SubText>
        <Save text="Save" onClick={this.handleSave} />
        <Modal open={notifyUser} handleClose={() => this.toggleNotification()}>
          <div style={{ textAlign: 'center' }}>
            {errorMessage ? `Error: ${errorMessage}` : 'User successfully updated'}
          </div>
          <Save text="Close" onClick={() => this.toggleNotification()} />
        </Modal>
      </>
    );
  }
}

export default CreateUser;
