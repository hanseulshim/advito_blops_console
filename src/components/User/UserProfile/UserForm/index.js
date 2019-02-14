import React, { Component } from 'react';
import styled from 'styled-components';
import Shayan from 'assets/shayan.jpeg';
import Button from 'components/common/Button';
import TextInput from 'components/common/TextInput';
import Select from 'react-select';
import Checkbox from 'components/common/Checkbox';
import Modal from 'components/common/Modal';
import Loader from 'components/common/Loader';
import UpdatePassword from './UpdatePassword';

import { USER_PROFILE, UPDATE_USER_PROFILE } from 'components/graphql/query/user';

const dateTimeOptions = [
  {
    label: 'European(01 JAN 2017)',
    value: 'european',
  },
  {
    label: 'Western(JAN 01 2017)',
    value: 'western',
  },
  {
    label: 'Sailor(%$&&^%$@!)',
    value: 'sailor',
  },
];

const timeZones = [
  {
    label: '(UTC-05:00) Eastern Time',
    value: 'EST',
  },
  {
    label: '(MTN-07:00) Mountain',
    value: 'MT',
  },
];

//Styled Components

const FormContainer = styled.div`
  display: flex;
  height: 40%;
  justify-content: space-around;
  justify-content: flex-start;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 2;
  position: relative;
  img {
    border-radius: 50%;
    width: 40%;
  }

  div {
    align-self: center;
    position: relative;
    top: 15%;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right: auto;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
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

const Dropdown = styled(Select)`
  width: 100%;
`;

const Password = styled(TextInput)`
  border: none;
  width: 50%;
  display: inline-block;
`;

const Save = styled(Button)`
  position: relative;
  left: 40%;
  margin-top: 5em;
`;

const Settings = styled(Button)`
  border: none;
`;

const ChangePassword = styled(Button)`
  display: inline-block;
  flex-grow: 0;
`;

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      nameFirst: '',
      nameLast: '',
      timezoneDefault: timeZones[0],
      dateFormatDefault: dateTimeOptions[0],
      emailNotifications: false,
      profilePicturePath: '',
      openSave: false,
      openPassword: false,
      errorMessage: '',
    };
    this.loading = true;
  }

  async componentDidMount() {
<<<<<<< HEAD
    const client = this.props.client;
    const response = await client.query({
=======
    const { client, removeUser } = this.props;

    const { data } = await client.query({
>>>>>>> master
      query: USER_PROFILE,
      variables: {
        clientId: this.props.user.clientId,
        sessionToken: this.props.user.sessionToken,
      },
    });
    if (data.userProfile.statusCode !== 200) {
      removeUser();
    } else {
      this.loading = false;
      const userData = data.userProfile.body.apidataset;
      const state = {};
      Object.keys(userData).forEach(key => {
        if (userData[key]) {
          if (key === 'timezoneDefault') {
            const value = timeZones.filter(v => v.value === userData[key])[0];
            state[key] = value;
          } else if (key === 'dateFormatDefault') {
            const value = dateTimeOptions.filter(v => v.value === userData[key])[0];
            state[key] = value;
          } else {
            state[key] = userData[key];
          }
        }
      });
      this.setState({
        ...state,
      });
    }
  }

<<<<<<< HEAD
    const data = response.data.userProfile.body.apidataset;
    this.setState({
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }
=======
  changeInput = (e, name) => {
    if (e.label) {
      this.setState({ [name]: e });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  toggleEmail = () => {
    this.setState({ emailNotifications: !this.state.emailNotifications });
  };

  toggleModal = key => {
    if (this.state.key) {
      this.setState({ errorMessage: '' });
    }
    this.setState({ [key]: !this.state[key] });
  };
>>>>>>> master

  saveUser = async () => {
    const payload = { ...this.state };
    delete payload.openSave;
    delete payload.openPassword;
    delete payload.errorMessage;
    const { client, user } = this.props;
    payload.sessionToken = user.sessionToken;
    payload.timezoneDefault = payload.timezoneDefault.value;
    payload.dateFormatDefault = payload.dateFormatDefault.value;
    const { data } = await client.mutate({
      mutation: UPDATE_USER_PROFILE,
      variables: { ...payload },
    });
    if (data.updateUserProfile.statusCode !== 200) {
      this.setState({ errorMessage: data.updateUserProfile.body.apimessage });
    }
    this.toggleModal('openSave');
  };

  render() {
    const {
      username,
      nameFirst,
      nameLast,
      timezoneDefault,
      dateFormatDefault,
      openSave,
      openPassword,
      errorMessage,
    } = this.state;
    const { user, client } = this.props;

    return this.loading ? (
      <Loader />
    ) : (
      <>
        <FormContainer>
          <Form>
            <Avatar>
              <img src={Shayan} alt="Avatar" />
              <div>
                <Button text="Change" />
              </div>
            </Avatar>
            <FormItem>
              <FormLabel>Username/Email</FormLabel>
              <FormText value={username} name="username" onChange={this.changeInput} />
            </FormItem>
            <FormItem>
              <FormLabel>Date/Time Format</FormLabel>
              <Dropdown
                options={dateTimeOptions}
                value={dateFormatDefault}
                onChange={e => this.changeInput(e, 'dateFormatDefault')}
              />
            </FormItem>
          </Form>
          <Form>
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormText value={nameFirst} name="nameFirst" onChange={this.changeInput} />
            </FormItem>
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormText value={nameLast} name="nameLast" onChange={this.changeInput} />
            </FormItem>
            <FormItem>
              <FormLabel>Password</FormLabel>
              <div style={{ width: '100%', display: 'flex', alignItems: 'flex-end' }}>
                <Password disabled type="password" value="**************" />
                <ChangePassword text="Change" onClick={() => this.toggleModal('openPassword')} />
              </div>
            </FormItem>
            <FormItem>
              <FormLabel>Time Zone</FormLabel>
              <Dropdown
                options={timeZones}
                value={timezoneDefault}
                onChange={e => this.changeInput(e, 'timezoneDefault')}
              />
            </FormItem>
          </Form>
        </FormContainer>
        <Checkbox style={{ display: 'block' }} onChange={this.toggleEmail}>
          Receive email notifications
          <Settings text="Settings" />
        </Checkbox>
        <Save text="Save" onClick={this.saveUser} />
        <Modal open={openSave} handleClose={() => this.toggleModal('openSave')}>
          <div style={{ textAlign: 'center' }}>
            {errorMessage ? `Error: ${errorMessage}` : 'User information successfully updated'}
          </div>
          <Save text="Close" onClick={() => this.toggleModal('openSave')} />
        </Modal>
        <Modal open={openPassword} handleClose={() => this.toggleModal('openPassword')}>
          <UpdatePassword
            user={user}
            client={client}
            handleClose={() => this.toggleModal('openPassword')}
          />
        </Modal>
      </>
    );
  }
}

export default UserForm;
