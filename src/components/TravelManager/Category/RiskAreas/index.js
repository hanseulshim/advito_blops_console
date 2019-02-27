import React, { Component } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { GET_RISK_AREA } from 'graphql/queries'
import TopRow from './TopRow'
import Detail from './Detail'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

class RiskAreas extends Component {
  state = {}
  render() {
    return (
      <Query query={GET_RISK_AREA}>
        {({ data: { riskArea } }) => (
          <Container>
            <TopRow id={riskArea.id} />
            <Detail id={riskArea.id} />
          </Container>
        )}
      </Query>
    )
  }
}

export default RiskAreas
