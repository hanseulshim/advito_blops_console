import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value, Unit } from 'components/common/Typography';
import { Query } from 'react-apollo';
import { withApollo } from 'react-apollo';
import { RISK_AREA_FEED_TRAVEL } from 'components/graphql/query/travelManager/dashboard';
import { UPDATE_RISK_AREA } from 'graphql/mutations';
import Loader from 'components/common/Loader';
import {
  Container,
  TitleContainer,
  RowContainer,
  Rank,
  Row,
  RowTitle,
  RightIcon,
} from './SavingsRiskStyle';

class RiskAreas extends Component {
  state = {};
  updateRiskArea = riskArea => {
    this.props.client.mutate({
      mutation: UPDATE_RISK_AREA,
      variables: {
        riskArea,
      },
    });
  };
  render() {
    return (
      <Container>
        <TitleContainer>
          <SectionTitle>top 3 risk areas</SectionTitle>
        </TitleContainer>
        <Query query={RISK_AREA_FEED_TRAVEL} variables={{ limit: 3 }}>
          {({ data: { riskAreaFeedTravel }, loading }) =>
            loading ? (
              <Loader />
            ) : (
              riskAreaFeedTravel.riskAreaList.map((riskArea, index) => (
                <RowContainer key={index}>
                  <Rank>{riskArea.id}</Rank>
                  <Row first={riskArea.id === 1}>
                    <RowTitle>{riskArea.title}</RowTitle>
                    <Value>
                      {riskArea.value} {riskArea.secondaryValue && `/${riskArea.secondaryValue}`}{' '}
                      <Unit>{riskArea.secondaryUnit}</Unit>
                    </Value>
                  </Row>
                  <Link to="/travel/risk-areas" onClick={() => this.updateRiskArea(riskArea)}>
                    <RightIcon className="fas fa-angle-right" />
                  </Link>
                </RowContainer>
              ))
            )
          }
        </Query>
      </Container>
    );
  }
}

export default withApollo(RiskAreas);
