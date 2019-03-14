import React, { Component } from 'react';
import styled from 'styled-components';
import ClientTable from './ClientTable';

//project imports
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';
import Modal from 'components/common/Modal';
import AddClientUser from './AddUser';
import { SectionTitle } from 'components/common/Typography';

const ControlRow = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5%;
  margin-top: 2.5%;
`;

const SearchUsers = styled.input`
  padding: 0.5em;
  width: 20em;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid #dedede;
  font-size: 1em;
  margin-left: auto;
  margin-right: 1em;
  background-image: url('src/assets/icons/podcast_active.png');
  background-repeat: no-repeat;
  background-position: 2px 3px;
`;

class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClientUserOpen: false,
      showInactive: false,
      search: '',
    };
  }

  toggleForm = () => {
    this.setState({
      addClientUserOpen: !this.state.addClientUserOpen,
    });
  };

  toggleInactiveClientUsers = () => {
    this.setState({
      showInactive: !this.state.showInactive,
    });
  };

  render() {
    const { addClientUserOpen, showInactive, search } = this.state;
    const { rows, title, type } = this.props;
    return (
      <div style={{ flex: 1, marginBottom: '2em' }}>
        <SectionTitle>{title}</SectionTitle>
        <ControlRow>
          <Checkbox checked={showInactive} onChange={this.toggleInactiveClientUsers}>
            Show Inactive
          </Checkbox>
          <SearchUsers
            placeholder="Search Users"
            onChange={e => this.setState({ search: e.target.value })}
            value={search}
          />
          <Button
            text={`New ${type}`}
            onClick={this.toggleForm}
            style={{ whiteSpace: 'nowrap', width: '9em' }}
          />
        </ControlRow>
        <ClientTable showInactive={showInactive} search={search} rows={rows} />
        <Modal open={addClientUserOpen} handleClose={this.toggleForm} size="tall">
          <AddClientUser onClose={this.toggleForm} />
        </Modal>
      </div>
    );
  }
}

export default ClientList;
