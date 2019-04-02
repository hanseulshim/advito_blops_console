import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.8em;
  text-align: center;
  border: 1px solid ${props => props.theme.treePoppy};
  background: none;
  color: ${props => props.theme.treePoppy};
  border-radius: 10px;
  padding: 0.5em 0.8em;
  min-width: 8em;
  cursor: pointer;
  margin-left: ${props => (props.spaceLeft ? '0.5em' : '')};
  margin-top: ${props => (props.spaceTop ? '0.5em' : '')};

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
