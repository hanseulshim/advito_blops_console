import React from 'react'
import styled from 'styled-components'
import GraphQL from 'components/graphql'
import Map from './Map'
import { GET_RISK_AREA_DETAIL } from 'components/graphql/query'

const ChartContainerRow = styled.div`
  display: flex;
`

const CommentaryContainer = styled.div`
  margin-top: 2em;
`
const Commentary = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
`

const Detail = ({ id }) => {
  return (
    <GraphQL query={GET_RISK_AREA_DETAIL} variables={{ id }} name="riskAreaDetail">
      {({ data: { comments, locationList } }) => (
        <>
          <ChartContainerRow>
            <Map data={locationList} />
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
  )
}

export default Detail
