import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/common/Typography';
import TextInput from 'components/common/TextInput';
import Icon from 'components/common/Icon';
import Button from 'components/common/Button';
import Modal from 'components/common/Modal';

import { UPDATE_PASSWORD } from 'components/graphql/query/user';

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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: auto;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  margin-bottom: 2em;
`;

const FormLabel = styled.span`
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const FormText = styled(TextInput)`
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid #dedede;
`;

const Text = styled.div`
  white-space: pre-line;
  font-style: italic;
`;

const SubText = styled(Text)`
  margin-top: 1em;
  margin-left: 2em;
`;

const Save = styled(Button)`
  position: relative;
  left: 40%;
  margin-top: 5em;
`;

class UpdatePassword extends Component {
  constructor(props) {
    super(props);
    this.state = { pwd: '', confirmPwd: '', errorMessage: '', open: false };
    this.isCancelled = false;
  }
  changeInput = (e, name) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentWillUnmount() {
    this.isCancelled = true;
  }
  toggleModal = () => {
    if (this.state.open) this.setState({ errorMessage: '' });
    if (!this.state.errorMessage) this.props.handleClose();
    if (!this.isCancelled) this.setState({ open: !this.state.open });
  };
  updatePassword = async () => {
    if (this.state.pwd !== this.state.confirmPwd) {
      this.setState({ errorMessage: 'Passwords do not match' }, () => this.toggleModal());
    } else if (!this.state.pwd && !this.state.confirmPwd) {
      this.setState({ errorMessage: 'Password cannot be empty' }, () => this.toggleModal());
    } else {
      const payload = { ...this.state };
      const { client } = this.props;
      delete payload.open;
      delete payload.errorMessage;
      await client.mutate({
        mutation: UPDATE_PASSWORD,
        variables: { ...payload },
      });
      this.toggleModal();
    }
  };
  render() {
    const { handleClose } = this.props;
    const { pwd, confirmPwd, open, errorMessage } = this.state;
    return (
      <>
        <TitleRow>
          <SectionTitle>update password</SectionTitle>
          <Close className="fas fa-times" onClick={handleClose} />
        </TitleRow>
        <Form>
          <FormItem>
            <FormLabel>new password</FormLabel>
            <FormText type="password" value={pwd} name="pwd" onChange={this.changeInput} />
          </FormItem>
          <FormItem>
            <FormLabel>confirm password</FormLabel>
            <FormText
              type="password"
              value={confirmPwd}
              name="confirmPwd"
              onChange={this.changeInput}
            />
          </FormItem>
        </Form>
        <Text>
          {`Passwords must be a minimum of eight (8) characters
          and includes (3) of the following (4) criteria:
          `}
        </Text>
        <SubText>
          {`- Lowercase character
          - Upper case character
          - Number
          - Special characters (e.g.!, $, #, %)
          `}
        </SubText>
        <Save text="Save" onClick={this.updatePassword} />
        <Modal open={open} handleClose={this.toggleModal}>
          <div style={{ textAlign: 'center' }}>{`Error: ${errorMessage}`}</div>
          <Save text="Close" onClick={this.toggleModal} />
        </Modal>
      </>
    );
  }
}

export default UpdatePassword;
