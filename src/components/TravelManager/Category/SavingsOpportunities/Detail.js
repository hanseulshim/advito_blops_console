import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import PieChart from './PieChart';
import { GET_SAVINGS_OPPORTUNITY_DETAIL } from 'components/graphql/query';

const ChartContainerRow = styled.div`
  display: flex;
`;
const ChartContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  margin-top: 2.5em;
`;

const CommentaryContainer = styled.div`
  margin-top: 2.5em;
`;
const Commentary = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
`;

const Detail = ({ id }) => {
  return (
    <GraphQL
      query={GET_SAVINGS_OPPORTUNITY_DETAIL}
      variables={{ id }}
      name="savingsOpportunityDetail"
    >
      {({ data: { comments, metricList } }) => (
        <>
          <ChartContainerRow>
            {metricList.map((metric, i) => (
              <ChartContainer key={i}>
                <PieChart id={i} title={metric.title} data={metric.personaList} />
              </ChartContainer>
            ))}
          </ChartContainerRow>
          <CommentaryContainer>
            <Commentary>Commentary</Commentary>
            {comments.map(comment => (
              <div key={comment}>• {comment}</div>
            ))}
          </CommentaryContainer>
        </>
      )}
    </GraphQL>
  );
};

export default Detail;
