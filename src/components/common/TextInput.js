import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Label = styled.label`
  color: ${props => props.theme.grayNurse};
`;

const Input = styled.input`
  font-size: 1em;
  padding: 0.6em 0.6em;
`;

const Error = styled.p`
  color: red;
`;

const TextInput = ({ type = 'text', ...props }) => {
  const { ...style } = props;
  return (
    <Wrapper>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input
        type={type}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        disabled={props.disabled}
        {...style}
      />
      {props.error && <Error>{props.error}</Error>}
    </Wrapper>
  );
};

export default TextInput;
