import React, { Component } from 'react';
import styled from 'styled-components';
import Shayan from 'assets/shayan.jpeg';
import Button from 'components/common/Button';
import TextInput from 'components/common/TextInput';
import Select from 'react-select';
import Checkbox from 'components/common/Checkbox';
import Loader from 'components/common/Loader';

import { USER_PROFILE, UPDATE_USER_PROFILE } from 'components/graphql/query/user';

const dateTimeOptions = [
  {
    label: 'European(01 JAN 2017)',
    value: 'European',
  },
  {
    label: 'Western(JAN 01 2017)',
    value: 'Western',
  },
  {
    label: 'Sailor(%$&&^%$@!)',
    value: 'Sailor',
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

const Form = styled.form`
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
    };
    this.loading = true;
  }

  async componentDidMount() {
    const { client, removeUser } = this.props;

    const { data } = await client.query({
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

  saveUser = async () => {
    const payload = { ...this.state };
    const { client, user } = this.props;
    payload.clientId = user.clientId;
    payload.sessionToken = user.sessionToken;
    payload.timezoneDefault = payload.timezoneDefault.value;
    payload.dateFormatDefault = payload.dateFormatDefault.value;
    const { data } = await client.mutate({
      mutation: UPDATE_USER_PROFILE,
      variables: { ...payload },
    });
  };

  render() {
    const { username, nameFirst, nameLast, timezoneDefault, dateFormatDefault } = this.state;
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
                <ChangePassword text="Change" />
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
      </>
    );
  }
}

export default UserForm;
