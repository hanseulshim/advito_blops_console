import React, { Component } from 'react';
import styled from 'styled-components';
import ClientTable from './ClientTable';

import { Query } from 'react-apollo';

//project imports
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';
import Modal from 'components/common/Modal';
import AddClient from './AddClient/AddClient';
import Loader from 'components/common/Loader';

//graphql Query
import { GET_CLIENTS } from 'components/graphql/query/client';

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
      addClientOpen: false,
    };
  }

  toggleForm = () => {
    this.setState({
      addClientOpen: !this.state.addClientOpen,
    });
  };

  render() {
    const { addClientOpen } = this.state;
    return (
      <Query query={GET_CLIENTS}>
        {({ data: { clientList }, loading }) =>
          loading ? (
            <Loader />
          ) : (
            <>
              <ControlRow>
                <Checkbox>Show Inactive</Checkbox>
                <Button
                  text="+ New Client"
                  onClick={this.toggleForm}
                  style={{ whiteSpace: 'nowrap', width: '9em' }}
                />
              </ControlRow>
              <ClientTable clients={clientList} />
              <Modal open={addClientOpen} handleClose={this.toggleForm} size="tall">
                <AddClient onClose={this.toggleForm} />
              </Modal>
            </>
          )
        }
      </Query>
    );
  }
}

export default SelectClient;
