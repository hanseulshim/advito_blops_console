import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  text-align: left;
  z-index: 5;
`;

const MetricRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2%;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.25em;
  align-items: center;
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75em;
  align-items: flex-start;
  justify-content: center;
`;

const Delta = styled.p`
  color: ${props => props.theme.tradewind};
  font-size: 1.25em;
  margin: 0;
`;

const Value = styled.p`
  font-size: 2em;
  margin: 0;
`;

const Icon = styled.div`
  margin-right: 10px;
  color: ${props => props.theme.tradewind};
`;

const createMetric = data =>
  data.map((obj, index) => (
    <Metric key={index}>
      <Icon>
        <img src={require(`assets/story/${obj.icon}.png`)} alt="icon" />
      </Icon>
      <Label>
        <span>{obj.title}</span>
        <Value>
          <b>{obj.value}</b>
        </Value>
        <Delta>{obj.delta}</Delta>
      </Label>
    </Metric>
  ));

const SummaryMetric = props => {
  return (
    <Container>
      <MetricRow>{createMetric(props.data.kpis)}</MetricRow>
    </Container>
  );
};

export default SummaryMetric;
