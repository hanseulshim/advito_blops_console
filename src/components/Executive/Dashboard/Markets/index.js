import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { MARKET_LIST } from 'components/graphql/query';
import { SectionTitle, Title } from 'components/common/Typography';
import CircleChart from './CircleChart';
import Select from 'react-select';
import Loader from 'components/common/Loader';
import { withFilterContext } from 'components/context';

const MarketContainer = styled.div`
  display: flex;
  margin-top: ${props => props.theme.verticalSpace};
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.concrete};
  border-radius: 0.8em;
  padding: 2em;
  justify-content: space-between;
`;

const Description = styled.div`
  flex: 1;
`;

const Market = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-left: ${props => !props.first && `1px solid ${props.theme.silver}`};
`;

const TitleTransform = styled(Title)`
  text-transform: uppercase;
`;

const ValueSized = styled.div`
  font-size: 1.7em;
  color: #000;
`;

const TitleRow = styled.div`
  margin-bottom: 1em;
`;
const ValueRow = styled.div`
  line-height: 1.7em;
  margin-bottom: 1em;
  margin-top: 1em;
`;
const ChartRow = styled.div`
  line-height: 6em;
`;
const ChartLabel = styled.span`
  position: relative;
  bottom: 25px;
  color: ${props => props.theme.steelBlue};
`;

let options = [
  {
    value: 'Performance',
    label: 'Sort By Program Performance ',
  },
  {
    value: 'Share',
    label: 'Sort By Program Share',
  },
];

class Markets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: options[0],
    };
  }

  onSelect = selected => {
    this.setState({
      sort: selected,
    });
  };

  render() {
    const { sort } = this.state;
    const {
      context: { filterId },
    } = this.props;
    const sortVar = sort.value === 'Performance' ? 'value' : 'programShare';
    return (
      <Query query={MARKET_LIST} variables={{ filterId }}>
        {({ data: { marketList }, loading }) =>
          loading ? (
            <Loader />
          ) : (
            <MarketContainer>
              <Description>
                <TitleRow>
                  <Link to="/executive/markets">
                    <SectionTitle>Markets</SectionTitle>
                  </Link>
                </TitleRow>
                <Select value={sort} onChange={this.onSelect} options={options} />
                <ValueRow>
                  <div>
                    Side by side comparison of business areas providing an overview of their Total
                    Program Performance and their Program Share based on volume.
                  </div>
                </ValueRow>
              </Description>
              {marketList
                .sort((a, b) => {
                  return b[sortVar] - a[sortVar];
                })
                .map((market, index) => (
                  <Market key={index} first={index === 0}>
                    <TitleRow>
                      <TitleTransform>{market.title}</TitleTransform>
                    </TitleRow>
                    <ValueRow>
                      <ValueSized>{market.value}</ValueSized>
                    </ValueRow>
                    <ChartRow>
                      <CircleChart percent={market.programShare} />
                      <ChartLabel>Program Share</ChartLabel>
                    </ChartRow>
                  </Market>
                ))}
            </MarketContainer>
          )
        }
      </Query>
    );
  }
}

export default withFilterContext(Markets);
