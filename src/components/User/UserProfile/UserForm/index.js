import React, { Component } from 'react';
import styled from 'styled-components';
import Shayan from 'assets/shayan.jpeg';
import Button from 'components/common/Button';
import TextInput from 'components/common/TextInput';
import Select from 'react-select';

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
  justify-content:space-between;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex:2;
  position:relative;
  img {
    border-radius: 50%;
    width: 10em;
  }

  div{
    position:absolute;
    right:10%;
    bottom:10%;

    Button{
      background-color:${props => props.theme.white};
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  width: 45%;
  justify-content: space-between;

`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex:1;
`;

const FormLabel = styled.span`
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const FormText = styled(TextInput)`
  padding: 1em;
  border: 1px solid #666;
  width: 100%;
  background: transparent;
  border: 1px solid #dedede;
`;

const Dropdown = styled(Select)`
`

const Password = styled(TextInput)`
border:none !important;`

const Save = styled(Button)`
position:relative;
left:45%;
margin-top:5em;`

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
              <TextInput />
            </FormItem>
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <TextInput />
            </FormItem>
            <FormItem>
              <FormLabel>Password</FormLabel>
              <Password disabled type="password" />
            </FormItem>
            <FormItem>
              <FormLabel>Time Zone</FormLabel>
              <Dropdown options={timeZones} />
            </FormItem>
          </Form>
        </FormContainer>
        <Save text="Save" />
      </>
    );
  }
}

export default UserForm;
