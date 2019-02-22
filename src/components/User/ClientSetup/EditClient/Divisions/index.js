import React from 'react';
import styled from 'styled-components';

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
      <>
        <ControlRow>
          <Checkbox>Show Inactive</Checkbox>
          <Button
            text="+ New Division"
            onClick={this.toggleForm}
            style={{ whiteSpace: 'nowrap', width: '9em' }}
          />
        </ControlRow>
        <DivisionTable />
        <Modal open={addDivision} handleClose={this.toggleForm} size="tall">
          <AddDivision onClose={this.toggleForm} />
        </Modal>
      </>
    );
  }
}

export default Divisions;
