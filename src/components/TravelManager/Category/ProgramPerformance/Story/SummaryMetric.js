import React from 'react';
import styled from 'styled-components';
import { Title, Value } from 'components/common/Typography';
import { metricFormat } from 'components/common/helper';

const MetricRow = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
`;

const Metric = styled.div`
  display: flex;
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Delta = styled.div`
  color: ${props => props.theme.tradewind};
`;

const Unit = styled.span`
  font-size: 0.7em;
  line-height: 0.7em;
`;

const Icon = styled.div`
  margin-top: 1em;
  margin-right: 0.5em;
  display: flex;
`;

const createMetric = (metric, index) => (
  <Metric key={index}>
    <Icon>
      <img src={require(`assets/story/${metric.icon}`)} alt="icon" />
    </Icon>
    <Label>
      <Title>{metric.title}</Title>
      <Value>
        {metricFormat(metric.value, metric.type)}
        {metric.type === 'emissions' && (
          <Unit>
            g/km C0<sub>2</sub>
          </Unit>
        )}
      </Value>
      <Delta>{`(${metric.change}${metricFormat(metric.delta, metric.type)})`}</Delta>
    </Label>
  </Metric>
);

const SummaryMetric = ({ data }) => <MetricRow>{data.map(createMetric)}</MetricRow>;

export default SummaryMetric;
