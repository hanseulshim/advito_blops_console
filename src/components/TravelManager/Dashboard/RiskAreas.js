import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value, Unit } from 'components/common/Typography';
import { Query, withApollo, compose } from 'react-apollo';
import { RISK_AREA_FEED_TRAVEL } from 'components/graphql/query';
import { UPDATE_RISK_AREA } from 'graphql/mutations';
import Loader from 'components/common/Loader';
import { withFilterContext } from 'components/context';
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
    const {
      context: { filterId },
    } = this.props;
    return (
      <Container>
        <TitleContainer>
          <SectionTitle>top 3 risk areas</SectionTitle>
        </TitleContainer>
        <Query
          query={RISK_AREA_FEED_TRAVEL}
          variables={{ limit: 3, filterId }}
          fetchPolicy="cache-and-network"
        >
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

export default compose(
  withApollo,
  withFilterContext
)(RiskAreas);
