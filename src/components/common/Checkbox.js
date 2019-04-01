import React from 'react';
import styled from 'styled-components';

const Container = styled.label`
  color: ${props => props.theme.black};
  font-size: 1rem;
  input {
    margin-right: 0.5em;
  }
`;

const Checkbox = props => {
  const { children, ...style } = props;
  return (
    <Container {...style}>
      <input type="checkbox" name={props.name} />
      {children}
    </Container>
  );
};

export default Checkbox;
