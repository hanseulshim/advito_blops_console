import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid ${props => props.theme.rajah};
  background: ${props => props.theme.alabaster};
  color: ${props => props.theme.rajah};
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 50px;
  padding: 0.5em 2em;
  font-size: 75%;
  cursor: pointer;
  margin-left: ${props => (props.spaceLeft ? '0.5em' : '')};

  &:hover {
    background: ${props => props.theme.rajah};
    color: ${props => props.theme.alabaster};
  }
`;

export default props => {
  const { text, ...style } = props;
  return <Button {...style}>{text}</Button>;
};
