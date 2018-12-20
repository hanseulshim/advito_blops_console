import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.7em;
  text-align: center;
  border: 1px solid ${props => props.theme.treePoppy};
  background: ${props => props.theme.white};
  color: ${props => props.theme.treePoppy};
  border-radius: 50px;
  padding: 0.5em 0.8em;
  width: 10em;
  cursor: pointer;
  margin-left: ${props => (props.spaceLeft ? '0.75em' : '')};
  margin-top: ${props => (props.spaceTop ? '1em' : '')};

  &:hover {
    background: ${props => props.theme.treePoppy};
    color: ${props => props.theme.white};
  }
`;

const Button = props => {
  const { text, ...style } = props;
  return <ButtonStyled {...style}>{text}</ButtonStyled>;
};

export default Button;
