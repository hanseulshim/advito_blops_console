import React, { Component } from 'react';
import styled from 'styled-components';
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';
import UserTable from './UserTable';
import CreateUser from './CreateUser';
import Modal from 'components/common/Modal';

import { ApolloConsumer } from 'react-apollo';
import UserContext from 'components/context/UserContext';

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
    this.state = {
      modalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
    }));
  };
  render() {
    const { modalOpen } = this.state;
    return (
      <ApolloConsumer>
        {client => (
          <UserContext.Consumer>
            {({ user, removeUser }) => (
              <Container>
                <ControlRow>
                  <Checkbox>Show Inactive</Checkbox>
                  <Button text="+ New User" onClick={this.toggleModal} />
                </ControlRow>
                <UserTable users={data} />
                <Modal open={modalOpen} onClose={this.toggleModal} size="tall">
                  <CreateUser
                    open={modalOpen}
                    onClose={this.toggleModal}
                    client={client}
                    user={user}
                    removeUser={removeUser}
                  />
                </Modal>
              </Container>
            )}
          </UserContext.Consumer>
        )}
      </ApolloConsumer>
    );
  }
}

export default UserAccess;
