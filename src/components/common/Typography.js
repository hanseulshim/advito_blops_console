import React from 'react';
import styled from 'styled-components';

const SectionHeaderStyled = styled.div`
  font-size: 1.3em;
  font-weight: 500;
  text-transform: uppercase;
`;

const TitleStyled = styled.div`
  font-size: 1.2em;
  font-weight: 500;
`;

export const SectionHeader = ({ children }) => (
  <SectionHeaderStyled>{children}</SectionHeaderStyled>
);
export const Title = ({ children }) => <TitleStyled>{children}</TitleStyled>;
