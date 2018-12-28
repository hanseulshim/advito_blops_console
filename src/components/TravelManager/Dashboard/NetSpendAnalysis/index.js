import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Checkbox from 'components/common/Checkbox';
import { SectionTitle } from 'components/common/Typography';
import LineChart from './LineChart';

const Container = styled.div`
  flex: 1;
  padding: 2em 0 2em 2em;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5em;
`;

const NetSpendAnalysis = ({ changeView }) => (
  <Container>
    <TitleContainer>
      <SectionTitle>Net Spend Analysis</SectionTitle>
      <Button spaceLeft text="view more" onClick={() => changeView('Net Spend Analysis')} />
    </TitleContainer>
    <Checkbox>Year to date</Checkbox>
    <LineChart />
  </Container>
);

export default NetSpendAnalysis;
