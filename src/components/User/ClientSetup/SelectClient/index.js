import React, { Component } from 'react';
import styled from 'styled-components';
import ClientTable from './ClientTable';
import { ApolloConsumer } from 'react-apollo'
import UserContext from 'components/context/UserContext'

//project imports
import Checkbox from 'components/common/Checkbox'
import Button from 'components/common/Button'
import Modal from 'components/common/Modal'
import AddClient from './AddClient/AddClient';

const ControlRow = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
`;

class SelectClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addClientOpen: false
        };
    }

    toggleForm = () => {
        this.setState({
            addClientOpen: !this.state.addClientOpen
        })
    }

    render() {
        const { addClientOpen } = this.state;
        return (
            <ApolloConsumer>
                {client => (
                    <UserContext.Consumer>
                        {({ user, removeUser, }) => (
                            <>
                                <ControlRow>
                                    <Checkbox>Show Inactive</Checkbox>
                                    <Button text="+ New Client" onClick={this.toggleForm} style={{ whiteSpace: 'nowrap', width: '9em' }} />
                                </ControlRow>
                                <ClientTable />
                                <Modal open={addClientOpen} handleClose={this.toggleForm} size="tall">
                                    <AddClient onClose={this.toggleForm} />
                                </Modal>
                            </>
                        )}
                    </UserContext.Consumer>
                )}
            </ApolloConsumer>

        )
    }
}

export default SelectClient;