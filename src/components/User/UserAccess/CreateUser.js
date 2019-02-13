import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Toggle from 'components/common/Toggle';

//modal imports
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5%;
  width: 100%;
`;

const Label = styled.p``;

const FormText = styled.input`
  width: 60%;
  padding: 0.75em;
`;

const Hint = styled.div`
  width: 60%;
  margin-left: auto;
  margin-top: 2.5%;
  font-size: 0.75em;
  font-style: italic;
`;

const CloseButton = styled(Button)`
  font-size: 0.5em;
  position: absolute;
  right: 5%;
  width: auto;
`;

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      active: true,
      lastname: '',
      phone: '',
      address: '',
      role: '',
      password: '',
      confirm: '',
    };
  }

  changeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  changeTogle;

  handleSave;

  render() {
    const {
      username,
      active,
      firstname,
      lastname,
      phone,
      address,
      role,
      password,
      confirm,
    } = this.state;
    const { open, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">
          New User
          <CloseButton text="X" onClick={onClose} />
        </DialogTitle>
        <DialogContent>
          <FormItem>
            <Label>User Name *</Label>
            <FormText value={username} name="username" onChange={this.changeInput} />
          </FormItem>
          <FormItem>
            <Label>Account Active</Label>
            <Toggle value={active} onChange={this.changeToggle} />
          </FormItem>
          <FormItem>
            <Label>First Name *</Label>
            <FormText value={firstname} name="firstname" onChange={this.changeInput} />
          </FormItem>
          <FormItem>
            <Label>Last Name *</Label>
            <FormText value={lastname} name="lastname" onChange={this.changeInput} />
          </FormItem>
          <FormItem>
            <Label>Phone</Label>
            <FormText value={phone} name="phone" onChange={this.changeInput} />
          </FormItem>
          <FormItem>
            <Label>Address</Label>
            <FormText value={address} name="address" onChange={this.changeInput} />
          </FormItem>
          <FormItem>
            <Label>Role*</Label>
            <FormText value={role} name="role" onChange={this.changeInput} />
          </FormItem>
          <FormItem>
            <Label>Password *</Label>
            <FormText
              value={password}
              type="password"
              name="password"
              onChange={this.changeInput}
            />
          </FormItem>
          <FormItem>
            <Label>Confirm Password *</Label>
            <FormText value={confirm} name="confirm" onChange={this.changeInput} />
          </FormItem>
          <Hint>
            Passwords must be a minimum eight (8) characters and include (3) of the following (4)
            criteria: <br />
            - Lowercase characters
            <br />
            - Uppercase characters
            <br />
            - Number
            <br />
            -Special characters ( e.g. !, $, #, %)
          </Hint>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" text="Save" />
        </DialogActions>
      </Dialog>
    );
  }
}

export default CreateUser;
