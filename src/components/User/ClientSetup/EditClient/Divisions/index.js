import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { GET_SELECTED_CLIENT } from 'graphql/queries';
import { GET_DIVISIONS } from 'components/graphql/query/division';
import { Query } from 'react-apollo';

//project imports

import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';
import Modal from 'components/common/Modal';
import DivisionTable from './DivisionTable';
import AddDivision from './AddDivision';

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
        {({ data }) => (
          <Query
            query={GET_DIVISIONS}
            name="getDivisions"
            variables={{ clientId: data.selectedClient.id }}
          >
            {({ data, fetchMore }) => (
              <>
                <ControlRow>
                  <Checkbox>Show Inactive</Checkbox>
                  <Button
                    text="+ New Division"
                    onClick={this.toggleForm}
                    style={{ whiteSpace: 'nowrap', width: '9em' }}
                  />
                </ControlRow>
                <DivisionTable divisions={data} />
                <Modal open={addDivision} handleClose={this.toggleForm} size="tall">
                  <AddDivision onClose={this.toggleForm} fetchMore={fetchMore} />
                </Modal>
              </>
            )}
          </Query>
        )}
      </Query>
    );
  }
}

export default Divisions;
