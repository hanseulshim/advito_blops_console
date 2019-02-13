import React, { Component } from 'react';
import styled from 'styled-components';
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';
import UserTable from './UserTable';

//mock data for table

const data = [
  {
    name: 'Paiman Allage',
    email: 'pallage@boostlabs.com',
    type: 'Data Entry',
    icon: 'fas fa-pencil',
  },
  {
    name: 'Hanseul Shim',
    email: 'hshim@boostlabs.com',
    type: 'Dev Squad',
    icon: 'fas fa-pencil',
  },
  {
    name: "John O'Neil",
    email: 'joneil@boostlabs.com',
    type: 'Data Entry',
    icon: 'fas fa-pencil',
  },
  {
    name: 'Shayan Kheradmand',
    email: 'skheradmand@boostlabs.com',
    type: 'Nerd',
    icon: 'fas fa-pencil',
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ControlRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
`;

class UserAccess extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <ControlRow>
          <Checkbox>Show Inactive</Checkbox>
          <Button text="+ New User" />
        </ControlRow>
        <UserTable />
      </Container>
    );
  }
}

export default UserAccess;
