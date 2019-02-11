import React, { Component } from 'react';
import styled from 'styled-components';
import Shayan from 'assets/shayan.jpeg';
import Button from 'components/common/Button';
import TextInput from 'components/common/TextInput';
import Select from 'react-select';
import Checkbox from 'components/common/Checkbox';

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
  height: 50%;
  justify-content:space-around;
  justify-content:flex-start;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex:2;
  position:relative;
  img {
    border-radius: 50%;
    width: 10em;
  }

  div{
    position:absolute;
    right:5%;
    bottom:30%;

    Button{
      background-color:${props => props.theme.white};
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right:auto;
  /* justify-content: space-around; */

`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex:1;
  position: ${props => props.Password && 'relative'};
`;

const FormLabel = styled.span`
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const FormText = styled(TextInput)`
  padding: .5em;
  width: 100%;
  box-sizing:border-box;
  background: transparent;
  border: 1px solid #dedede;
`;

const Dropdown = styled(Select)`
width:100%;`

const Password = styled(TextInput)`
border:none;
width:50%;`


const Save = styled(Button)`
position:relative;
left:40%;
margin-top:5em;`

const Settings = styled(Button)`
border:none;`

const ChangePassword = styled(Button)`
position:absolute;
bottom:50%;
right:30%;
`

class UserForm extends Component {
  state = {};
  render() {
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
              <FormText />
            </FormItem>
            <FormItem>
              <FormLabel>Date/Time Format</FormLabel>
              <Dropdown options={dateTimeOptions} />
            </FormItem>
          </Form>
          <Form>
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormText />
            </FormItem>
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormText />
            </FormItem>
            <FormItem Password>
              <FormLabel>Password</FormLabel>
              <Password disabled type="password" value="************" />
              <ChangePassword text="Change" />
            </FormItem>
            <FormItem>
              <FormLabel>Time Zone</FormLabel>
              <Dropdown options={timeZones} />
            </FormItem>
          </Form>
        </FormContainer>
        <Checkbox style={{ display: 'block' }}>Receive email notifications<Settings text="Settings" /></Checkbox>
        <Save type="submit" text="Save" />
      </>
    );
  }
}

export default UserForm;
