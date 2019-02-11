import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  color: ${props => props.theme.grayNurse};
`;

const Input = styled.input`
  font-size: 1em;
  border: 1px solid ${props => props.theme.grayNurse};
  padding: .6em .6em;
`;

const Error = styled.p`
  color: red;
`;

const TextInput = ({ name, label, onChange, placeholder, value, error, type = "text", enabled }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} enabled={enabled} />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default TextInput;
