import React from 'react';
import styled from 'styled-components';

import { GET_SELECTED_CLIENT } from 'graphql/queries';
import { GET_DIVISIONS } from 'components/graphql/query/division';
import { Query } from 'react-apollo';

//project imports

import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';
import Modal from 'components/common/Modal';
import DivisionTable from './DivisionTable';
import AddDivision from './AddDivision';
import Loader from 'components/common/Loader';

const ControlRow = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2%;
`;

class Divisions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addDivision: false,
    };
  }

  toggleForm = () => this.setState({ addDivision: !this.state.addDivision });

  render() {
    const { addDivision } = this.state;

    return (
      <Query query={GET_SELECTED_CLIENT}>
        {({ data: { selectedClient } }) =>
          !selectedClient.id ? null : (
            <Query query={GET_DIVISIONS} variables={{ clientId: selectedClient.id }}>
              {({ loading, error, data: { divisionList }, fetchMore }) => {
                if (loading) return <Loader />;
                if (error) return `Error!`;
                return (
                  divisionList.length && (
                    <>
                      <ControlRow>
                        <Checkbox>Show Inactive</Checkbox>
                        <Button
                          text="+ New Division"
                          onClick={this.toggleForm}
                          style={{ whiteSpace: 'nowrap', width: '9em' }}
                        />
                      </ControlRow>
                      <DivisionTable
                        divisionList={divisionList}
                        fetchMore={fetchMore}
                        selectedClient={selectedClient}
                      />
                      <Modal open={addDivision} handleClose={this.toggleForm} size="tall">
                        <AddDivision
                          onClose={this.toggleForm}
                          fetchMore={fetchMore}
                          selectedClient={selectedClient}
                        />
                      </Modal>
                    </>
                  )
                );
              }}
            </Query>
          )
        }
      </Query>
    );
  }
}

export default Divisions;
