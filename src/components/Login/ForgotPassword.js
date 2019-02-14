import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/common/Typography';
import TextInput from 'components/common/TextInput';
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

const Save = styled(Button)`
  position: relative;
  left: 40%;
  margin-top: 5em;
`;

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }
  changeInput = (e, name) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { handleClose } = this.props;
    const { email } = this.state;
    return (
      <>
        <TitleRow>
          <SectionTitle>forgot password</SectionTitle>
          <Close className="fas fa-times" onClick={handleClose} />
        </TitleRow>
        <Form>
          <FormItem>
            <FormLabel>Enter your email address below to reset your password</FormLabel>
            <FormText type="email" value={email} name="email" onChange={this.changeInput} />
          </FormItem>
          <Save text="Save" onClick={handleClose} />
        </Form>
      </>
    );
  }
}

export default ForgotPassword;
