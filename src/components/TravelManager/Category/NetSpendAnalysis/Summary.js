import React, { Component } from 'react';
import styled from 'styled-components';
import { Title } from 'components/common/Typography';

const Container = styled.div`
  display: flex;
  flex:1;
  /* flex-direction: column;
  align-items: flex-start;
  margin-left:4em;
  margin-right:4em;
  background-color: ${props => props.theme.alabaster};
  padding:2em;
  border-radius:5px; */
`;

const Header = styled(Title)`
  font-size: 1.5em;
  color: ${props => props.theme.deepBlush};
`;

const Summary = ({ summary }) => {
  return <Container>{/* <Header>{summary.title}</Header>
      <p>{summary.info}</p> */}</Container>;
};

export default Summary;
