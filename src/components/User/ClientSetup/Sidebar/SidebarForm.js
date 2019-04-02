import React, { Component } from 'react';
import styled from 'styled-components';

//project imports
import { FormItem, FormText } from '../../Styles/FormStyles';
import Button from 'components/common/Button';
import { SectionTitle } from 'components/common/Typography';

const FormContainer = styled.form`
  margin-top: 10%;
  border: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 20em;
  padding: 1.5em;
  align-items: center;
  position: relative;
`;

const Lock = styled.i`
  position: absolute;
  top: -10px;
  right: -5px;
  cursor: pointer;
`;

class SidebarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gcn: '',
      lanyonCode: '',
      id: '',
      locked: true,
    };
  }

  componentDidMount() {
    const { selectedClient } = this.props;
    const state = {};
    Object.keys(selectedClient).forEach(key => {
      if (selectedClient[key]) {
        state[key] = selectedClient[key];
      }
    });
    this.setState({
      ...state,
    });
  }

  onFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleLock = () => {
    this.setState({
      locked: !this.state.locked,
    });
  };

  render() {
    const { gcn, lanyonCode, id, locked } = this.state;
    return (
      <FormContainer>
        <Lock className={locked ? 'fas fa-lock' : 'fas fa-unlock'} onClick={this.toggleLock} />
        <FormItem>
          <SectionTitle>GCN</SectionTitle>
          <FormText
            value={gcn}
            onChange={this.onFormChange}
            name="gcn"
            disabled={this.state.locked}
          />
        </FormItem>
        <FormItem>
          <SectionTitle>Lanyon Code</SectionTitle>
          <FormText
            value={lanyonCode}
            onChange={this.onFormChange}
            name="lanyonCode"
            disabled={this.state.locked}
          />
        </FormItem>
        <FormItem>
          <SectionTitle>Client ID</SectionTitle>
          <FormText
            value={id}
            onChange={this.onFormChange}
            name="id"
            disabled={this.state.locked}
          />
        </FormItem>
        <Button text="Save" style={{ visibility: !this.state.locked ? '' : 'hidden' }} />
      </FormContainer>
    );
  }
}

export default SidebarForm;
