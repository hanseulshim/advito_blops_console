import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';

const Container = styled.div`
  flex: 1.25;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grayNurse};
  padding: 0 2.5em;
  height: 100%;
  position: absolute;
  opacity: 0.95;
`;

const PersonIcon = styled(Icon)`
  position: absolute;
  font-size: 1.3em;
  padding: 0.5em;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grayNurse};
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  top: 2em;
  color: ${props => props.theme.treePoppy};
  cursor: pointer;
`;

const CloseIcon = styled(PersonIcon)`
  right: calc(-2em + 6px);
`;

class CollapseSidebar extends Component {
  state = { collapse: true };

  toggleSidebar = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    return this.state.collapse ? (
      <PersonIcon className="fas fa-user" onClick={this.toggleSidebar} />
    ) : (
      <Container>
        <CloseIcon className="fas fa-times" onClick={this.toggleSidebar} />
        {this.props.children}
      </Container>
    );
  }
}

export default CollapseSidebar;
