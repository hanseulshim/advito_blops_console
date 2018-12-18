import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { SectionTitle } from 'components/common/Typography';
import LineChart from './LineChart';

const Container = styled.div`
  flex: 1;
  padding-left: 2em;
`;

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
`;

const YearToDate = styled.label`
  font-size: 0.75em;
  text-transform: initial;
  font-weight: normal;
  margin-left: 1em;
  input {
    margin-right: 0.5em;
  }
`;

const NetSpendAnalysis = ({ changeView }) => (
  <Container>
    <TitleContainer>
      <SectionContainer>
        <SectionTitle>Net Spend Analysis</SectionTitle>
        <Button spaceLeft text="view more" onClick={() => changeView('Net Spend Analysis')} />
      </SectionContainer>
      <YearToDate>
        <input type="checkbox" />
        Year to date
      </YearToDate>
    </TitleContainer>
    <LineChart />
  </Container>
);

export default NetSpendAnalysis;
