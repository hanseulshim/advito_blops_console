import React, { Component } from 'react';
import styled from 'styled-components';
import UserForm from './UserForm';
import UserPreferences from './UserPref';

class UserProfile extends Component {
  state = {};
  render() {
    return (
      <>
        <UserForm />
        <UserPreferences />
      </>
    );
  }
}

export default UserProfile;
