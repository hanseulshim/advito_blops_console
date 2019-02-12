import React, { Component } from 'react';
import styled from 'styled-components';
import Shayan from 'assets/shayan.jpeg';
import Button from 'components/common/Button';
import TextInput from 'components/common/TextInput';
import Select from 'react-select';
import Checkbox from 'components/common/Checkbox';

import { USER_PROFILE } from 'components/graphql/query/user';

//Mock Data before API
let dateTimeOptions = [
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

let timeZones = [
  {
    label: '(UTC-05:00) Eastern Time',
    value: 'Eastern',
  },
  {
    label: '(MTN-07:00) Mountain',
    value: 'Mountain',
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
      firstName: '',
      lastName: '',
      timeZone: {},
      dateTime: {},
      password: '',
    };
  }

  async componentDidMount() {
    const client = this.props.client;

    const response = await client.query({
      query: USER_PROFILE,
      variables: {
        clientId: this.props.user.clientId,
        sessionToken: this.props.user.sessionToken,
      },
    });

    const data = response.data.userProfile.body.apidataset;

    this.setState({
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }

  changeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, firstName, lastName, timeZone, dateTime } = this.state;
    return (
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
              <Dropdown options={dateTimeOptions} />
            </FormItem>
          </Form>
          <Form>
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormText value={firstName} name="firstName" onChange={this.changeInput} />
            </FormItem>
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormText value={lastName} name="lastName" onChange={this.changeInput} />
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
              <Dropdown options={timeZones} />
            </FormItem>
          </Form>
        </FormContainer>
        <Checkbox style={{ display: 'block' }}>
          Receive email notifications
          <Settings text="Settings" />
        </Checkbox>
        <Save type="submit" text="Save" />
      </>
    );
  }
}

export default UserForm;
