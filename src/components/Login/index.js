import React from 'react';
import styled from 'styled-components';
import advito_logo from 'assets/advito_logo.png';
import LoginForm from './LoginForm';
import Footer from './Footer';

const Container = styled.div`
  background: ${props => props.theme.jungleMist};
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  margin: 2em 0 0 3em;
  width: 15%;
  align-self: flex-start;
`;

const Title = styled.div`
  font-size: 3em;
  width: 50%;
  text-align: center;
  margin-top: 2.5em;
  color: ${props => props.theme.alabaster};
  font-weight: 100;
`;

const Login = () => (
  <Container>
    <Logo src={advito_logo} alt="advito logo" />
    <Title>Welcome to the Advito Console</Title>
    <LoginForm />
    <Footer />
  </Container>
);

export default Login;
