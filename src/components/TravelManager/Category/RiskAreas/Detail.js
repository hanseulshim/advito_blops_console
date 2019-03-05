import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import Map from './Map';
import { GET_RISK_AREA_DETAIL } from 'components/graphql/query/travelManager/riskArea';

const ChartContainerRow = styled.div`
  display: flex;
`;

const CommentaryContainer = styled.div`
  margin-top: 2em;
`;
const Commentary = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
`;

const Detail = ({ id }) => {
  return (
    <Query query={GET_RISK_AREA_DETAIL} variables={{ id }}>
      {({ data: { riskAreaDetail } }, loading) =>
        loading || !riskAreaDetail ? null : (
          <>
            <ChartContainerRow>
              <Map data={riskAreaDetail.locationList} />
            </ChartContainerRow>
            <CommentaryContainer>
              <Commentary>Commentary</Commentary>
              {riskAreaDetail.comments.map(comment => (
                <div key={comment}>• {comment}</div>
              ))}
            </CommentaryContainer>
          </>
        )
      }
    </Query>
  );
};

export default Detail;
