import React from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';
import { SectionHeader } from 'components/common/Typography';
import LineChart from './LineChart';

const Container = styled.div`
  flex: 1;
  padding-left: 2em;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
`;

const SectionHeaderPointer = styled(SectionHeader)`
  cursor: pointer;
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
      <SectionHeaderPointer onClick={() => changeView('Net Spend Analysis')}>
        <span>Net Spend Analysis</span>
        <Icon className="fas fa-info" info />
      </SectionHeaderPointer>
      <YearToDate>
        <input type="checkbox" />
        Year to date
      </YearToDate>
    </TitleContainer>
    <LineChart />
  </Container>
);

export default NetSpendAnalysis;
