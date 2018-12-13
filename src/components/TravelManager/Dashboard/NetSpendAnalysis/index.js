import React from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';
import LineChart from './LineChart';

const Container = styled.div`
  flex: 1;
  padding-left: 2em;
`;

const SectionTitle = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  font-size: 1.3em;
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

const Title = styled.div`
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
    <SectionTitle>
      <Title onClick={() => changeView('Net Spend Analysis')}>
        <span>Net Spend Analysis</span>
        <Icon className="fas fa-info" info />
      </Title>
      <YearToDate>
        <input type="checkbox" />
        Year to date
      </YearToDate>
    </SectionTitle>
    <LineChart />
  </Container>
);

export default NetSpendAnalysis;
