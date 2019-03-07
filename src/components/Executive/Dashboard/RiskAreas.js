import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value } from 'components/common/Typography';
import { Query } from 'react-apollo';
import Button from 'components/common/Button';
import { RISK_AREA_FEED_EXECUTIVE } from 'components/graphql/query/executive/dashboard';
import Loader from 'components/common/Loader';
import {
  Container,
  TitleContainer,
  RowContainer,
  Rank,
  Row,
  RowTitle,
  RightIcon,
  Metric,
  Unit,
  Title,
} from './SavingsRiskStyle';

class RiskAreas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 3,
    };
  }

  setLimit = lim => {
    this.setState({
      limit: lim,
    });
  };
  render() {
    const { limit } = this.state;

    return (
      <Container>
        <TitleContainer>
          <SectionTitle>top {limit} risk areas</SectionTitle>
          {limit === 3 ? (
            <Button text="View More" style={{ marginLeft: '5%' }} onClick={e => this.setLimit(5)} />
          ) : (
            <Button text="View Less" style={{ marginLeft: '5%' }} onClick={e => this.setLimit(3)} />
          )}
        </TitleContainer>
        <Query query={RISK_AREA_FEED_EXECUTIVE} variables={{ limit }}>
          {({ data: { riskAreaFeedExecutive }, loading }) =>
            loading ? (
              <Loader />
            ) : (
              riskAreaFeedExecutive.riskAreaList.map((riskArea, index) => (
                <Link to="/executive/risk-areas" key={index}>
                  <RowContainer>
                    <Rank>{index + 1}</Rank>
                    <Row first={index === 0}>
                      <RowTitle>{riskArea.title}</RowTitle>
                      <Value>
                        {riskArea.value} <Unit>{riskArea.unit}</Unit>
                        {riskArea.secondaryValue && ` / ${riskArea.secondaryValue}`}{' '}
                        <Unit>{riskArea.secondaryUnit}</Unit>
                      </Value>
                    </Row>
                    <RightIcon className="fas fa-angle-right" />
                    {riskArea.divisionList.map((division, index) => (
                      <Metric key={index}>
                        <Value>
                          {division.value} <Unit>{division.unit}</Unit>
                          {division.secondaryValue && ` / ${division.secondaryValue}`}{' '}
                          <Unit>{division.secondaryUnit}</Unit>
                        </Value>
                        <Title>{division.title}</Title>
                      </Metric>
                    ))}
                  </RowContainer>
                </Link>
              ))
            )
          }
        </Query>
      </Container>
    );
  }
}

export default RiskAreas;
