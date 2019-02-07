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
  padding: 1em 1em;
`;

const Error = styled.p`
  color: red;
`;

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input type="text" name={name} placeholder={placeholder} onChange={onChange} value={value} />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default TextInput;
