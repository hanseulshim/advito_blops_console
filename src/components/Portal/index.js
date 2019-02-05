import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/common/Typography';
import ProgramSelect from './ProgramSelect';
import BottomInfo from './BottomInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.verticalSpace};
`;

const Portal = () => (
  <Container>
    <SectionTitle>products</SectionTitle>
    <ProgramSelect />
    <BottomInfo />
  </Container>
);

export default Portal;
