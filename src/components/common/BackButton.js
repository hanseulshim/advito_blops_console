import React from 'react';
import styled from 'styled-components';

const BackButton = styled.i`
  border: 2px solid ${props => props.theme.tradewind};
  border-radius: 50%;
  padding: 0.5em;
  color: ${props => props.theme.tradewind};
  display: flex;
  justify-content: center;
  width: 1em;
  height: 1em;
  cursor: pointer;
`;

export default () => <BackButton className="fas fa-chevron-left" />;
