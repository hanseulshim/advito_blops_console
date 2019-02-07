import React, { Component } from 'react';
import styled from 'styled-components';
import Shayan from 'assets/shayan.jpeg';
import Button from 'components/common/Button';

const Container = styled.div`
  display: flex;
  height: 25em;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* width: 50%; */
  img {
    border-radius: 50%;
    width: 10em;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  width: 50%;
  justify-content: space-around;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 1em;
`;

const FormLabel = styled.span`
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const FormText = styled.input`
  padding: 1em;
  border: 1px solid #666;
  width: 100%;
  background: transparent;
  border: 1px solid #dedede;
`;

const FormHint = styled.p`
  font-style: italic;
`;

class UserForm extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Form>
          <Avatar>
            <img src={Shayan} alt="Avatar" />
            <div>
              <Button text="Change" />
            </div>
          </Avatar>
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormText />
          </FormItem>
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormText />
          </FormItem>
        </Form>
        <Form>
          <FormItem>
            <FormLabel>User Name / Email</FormLabel>
            <FormText />
          </FormItem>
          <FormItem>
            <FormLabel>New Password</FormLabel>
            <FormText />
          </FormItem>
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormText />
            <FormHint>
              Passwords must be a minimum eight(8) characters and include (3) of the following (4)
              criteria:
              <br />
              - Lowercase character <br />
              - Upper case character <br />
              - Number <br />
              - Special characters (e.g. !, $, #, 5 ) <br />
            </FormHint>
          </FormItem>
        </Form>
      </Container>
    );
  }
}

export default UserForm;
