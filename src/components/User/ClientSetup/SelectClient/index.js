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
      showInactive: false,
    };
  }

  toggleForm = () => {
    this.setState({
      addClientOpen: !this.state.addClientOpen,
    });
  };

  toggleInactiveClients = () => {
    this.setState({
      showInactive: !this.state.showInactive,
    });
  };

  render() {
    const { addClientOpen, showInactive } = this.state;
    return (
      <Query query={GET_CLIENTS}>
        {({ data: { clientList }, fetchMore, loading }) =>
          loading ? (
            <Loader />
          ) : (
            <>
              <ControlRow>
                <Checkbox checked={showInactive} onChange={this.toggleInactiveClients}>
                  Show Inactive
                </Checkbox>
                <Button
                  text="+ New Client"
                  onClick={this.toggleForm}
                  style={{ whiteSpace: 'nowrap', width: '9em' }}
                />
              </ControlRow>
              <ClientTable clients={clientList} showInactive={showInactive} />
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
