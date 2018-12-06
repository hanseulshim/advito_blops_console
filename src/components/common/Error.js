import React from 'react';
import styled from 'styled-components';

const ErrorStyled = styled.div`
  margin: 1em 0;
  padding: .5em;
  background: ${props => props.theme.tradewind}
  color: ${props => props.theme.alabaster};
`;

const Error = () => {
  return <ErrorStyled>Something went wrong. Please try reloading the page.</ErrorStyled>;
};

export default Error;
