import React, { Component } from 'react';
import styled from 'styled-components';
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';
// import UserTable from './UserTable';
// import CreateUser from './CreateUser';
// import Modal from 'components/common/Modal';

import { Query } from 'react-apollo';
import { GET_SELECTED_CLIENT } from 'graphql/queries';
import { GET_CLIENT_APPLICATIONS } from 'components/graphql/query';
import Loader from 'components/common/Loader';
import ApplicationsTable from './ApplicationsTable';

//mock data for table

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      showInactive: false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
    }));
  };

  toggleInactiveUsers = () => {
    this.setState({
      showInactive: !this.state.showInactive,
    });
  };
  render() {
    const { modalOpen, showInactive } = this.state;
    return (
      <Query query={GET_SELECTED_CLIENT}>
        {({ data: { selectedClient } }) =>
          !selectedClient.id ? null : (
            <Query query={GET_CLIENT_APPLICATIONS} variables={{ clientId: selectedClient.id }}>
              {({ data: { client }, loading }) =>
                loading ? (
                  <Loader />
                ) : (
                  <Container>
                    <ControlRow>
                      <Checkbox checked={showInactive} onChange={this.toggleInactiveUsers}>
                        Show Inactive
                      </Checkbox>
                      <Button text="+ New Application" onClick={this.toggleModal} />
                    </ControlRow>
                    {console.log(client)}
                    <ApplicationsTable showInactive={showInactive} applications={client} />
                    {/* <Modal open={modalOpen} onClose={this.toggleModal} size="tall">
                      <CreateUser open={modalOpen} onClose={this.toggleModal} />
                    </Modal> */}
                  </Container>
                )
              }
            </Query>
          )
        }
      </Query>
    );
  }
}

export default Applications;
