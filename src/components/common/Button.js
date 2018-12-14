import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  border: 1px solid ${props => props.theme.westSide};
  background: ${props => props.theme.alabaster};
  color: ${props => props.theme.westSide};
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 50px;
  padding: 0.5em 2em;
  font-size: 75%;
  cursor: pointer;
  margin-left: ${props => (props.spaceLeft ? '0.5em' : '')};

  &:hover {
    background: ${props => props.theme.westSide};
    color: ${props => props.theme.alabaster};
  }
`;

const Button = props => {
  const { text, ...style } = props;
  return <ButtonStyled {...style}>{text}</ButtonStyled>;
};

export default Button;
