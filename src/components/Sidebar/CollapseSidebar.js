import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';

const Container = styled.div`
  flex: 1;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.pumice};
  padding: 4em 2em;
  position: absolute;
  opacity: 0.95;
`;

const PersonIcon = styled(Icon)`
  position: absolute;
  font-size: 1.3em;
  padding: 0.5em;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.pumice};
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  top: 2em;
  color: ${props => props.theme.westSide};
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
