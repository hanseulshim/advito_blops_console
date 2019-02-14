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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
  justify-content: space-between;
`;

const ControlRow = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
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
                <UserTable client={client} user={user} removeUser={removeUser} />
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
