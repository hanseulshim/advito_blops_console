import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/common/Typography';
import Icon from 'components/common/Icon';
import Button from 'components/common/Button';

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2em;
`;

const Close = styled(Icon)`
  color: ${props => props.theme.treePoppy};
  border: 1px solid;
  border-radius: 100%;
  padding: 0.5em;
  width: 5px;
  height: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Exit = styled(Button)`
  position: relative;
  left: 40%;
  margin-top: 5em;
`;

class LoginFail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { handleClose, errorMessage } = this.props;
    return (
      <>
        <TitleRow>
          <SectionTitle>Login Failed.</SectionTitle>
          <Close className="fas fa-times" onClick={handleClose} />
        </TitleRow>
        <p>{errorMessage}</p>
        <Exit text="Close" onClick={handleClose} />
      </>
    );
  }
}

export default LoginFail;
