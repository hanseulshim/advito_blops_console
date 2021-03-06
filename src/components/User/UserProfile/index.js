import React, { Component } from 'react';
import styled from 'styled-components';
import Shayan from 'assets/shayan.jpeg';
import Button from 'components/common/Button';
import { withApollo, compose } from 'react-apollo';
import { withUserContext } from 'components/context';
import Checkbox from 'components/common/Checkbox';
import Modal from 'components/common/Modal';
import Loader from 'components/common/Loader';
import UpdatePassword from './UpdatePassword';

import { USER_PROFILE } from 'components/graphql/query';
import { UPDATE_USER_PROFILE } from 'components/graphql/mutation';
import {
  FormContainer,
  Form,
  FormItem,
  FormLabel,
  FormText,
  Dropdown,
  Password,
  Save,
  Settings,
  ChangePassword,
} from '../Styles/FormStyles';

const dateTimeOptions = [
  {
    label: 'European(01 JAN 2017)',
    value: 'european',
  },
  {
    label: 'Western(JAN 01 2017)',
    value: 'western',
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

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 2;
  position: relative;
  img {
    border-radius: 50%;
    width: 40%;
    max-width: 200px;
  }

  div {
    align-self: center;
    position: relative;
    top: 5%;
  }
`;

class UserProfile extends Component {
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
    const { client } = this.props;
    const {
      data: { userProfile },
    } = await client.query({
      query: USER_PROFILE,
    });
    this.loading = false;
    const state = {};
    Object.keys(userProfile).forEach(key => {
      if (userProfile[key]) {
        if (key === 'timezoneDefault') {
          const value = timeZones.filter(v => v.value === userProfile[key])[0];
          state[key] = value;
        } else if (key === 'dateFormatDefault') {
          const value = dateTimeOptions.filter(
            v => v.value === userProfile[key],
          )[0];
          state[key] = value;
        } else {
          state[key] = userProfile[key];
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

  toggleEmail = () => {
    this.setState({ emailNotifications: !this.state.emailNotifications });
  };

  toggleModal = key => {
    if (this.state.key) {
      this.setState({ errorMessage: '' });
    }
    this.setState({ [key]: !this.state[key] });
  };

  saveUser = async (setUser, user) => {
    const payload = { ...this.state };

    delete payload.openSave;
    delete payload.openPassword;
    delete payload.errorMessage;

    const { client } = this.props;
    payload.timezoneDefault = payload.timezoneDefault.value;
    payload.dateFormatDefault = payload.dateFormatDefault.value;
    await client.mutate({
      mutation: UPDATE_USER_PROFILE,
      variables: { ...payload },
    });
    const userCopy = { ...user };
    userCopy.displayName = `${this.state.nameFirst} ${this.state.nameLast}`;
    setUser(userCopy);
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
    const {
      client,
      context: { user, setUser },
    } = this.props;

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
              <FormText
                value={username}
                name="username"
                onChange={this.changeInput}
              />
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
              <FormText
                value={nameFirst}
                name="nameFirst"
                onChange={this.changeInput}
              />
            </FormItem>
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormText
                value={nameLast}
                name="nameLast"
                onChange={this.changeInput}
              />
            </FormItem>
            <FormItem>
              <FormLabel>Password</FormLabel>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <Password disabled type="password" value="**************" />
                <ChangePassword
                  text="Change"
                  onClick={() => this.toggleModal('openPassword')}
                />
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
        <Save text="Save" onClick={() => this.saveUser(setUser, user)} />
        <Modal open={openSave} handleClose={() => this.toggleModal('openSave')}>
          <div style={{ textAlign: 'center' }}>
            {errorMessage
              ? `Error: ${errorMessage}`
              : 'User information successfully updated'}
          </div>
          <Save text="Close" onClick={() => this.toggleModal('openSave')} />
        </Modal>
        <Modal
          open={openPassword}
          handleClose={() => this.toggleModal('openPassword')}
          size="medium"
        >
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

export default compose(
  withApollo,
  withUserContext,
)(UserProfile);
