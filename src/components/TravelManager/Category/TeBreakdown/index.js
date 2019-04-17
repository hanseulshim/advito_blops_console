import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_TE_BREAKDOWN_DETAIL } from 'components/graphql/query';
import { SectionTitle, Title } from 'components/common/Typography';
import Loader from 'components/common/Loader';
import CircleChartTe from './CircleChartTe';
import BarChartTe from './BarChartTe';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TitleButton = styled(Title)`
  display: inline;
  border-right: ${props => (props.first ? '2px solid #ededed' : '')};
  cursor: pointer;
  padding: ${props => (props.first ? '0em 1em 0em 0em' : '0em 1em')};
  font-weight: ${props => (props.selected ? 'bold' : '')};
`;

const RowContainer = styled.div`
  flex: 1;
  display: flex;
  margin-top: ${props => (props.first ? '5em' : '2em')};
  flex-grow: 0;
  align-items: flex-start;
`;

const Description = styled.div`
  flex: 1;
  margin-bottom: 1em;
`;

const ProgramShare = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BarChartContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  margin-right: 2em;
`;

class TeBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      hoverCard: null,
    };
  }

  componentWillMount() {
    const { pathname } = this.props.location;
    if (pathname.includes('travel')) {
      this.setState({
        view: 'personas',
      });
    } else {
      this.setState({
        view: 'divisions',
      });
    }
  }

  changeView(key) {
    this.setState({
      view: key,
    });
  }

  render() {
    const { view } = this.state;
    return (
      <Query query={GET_TE_BREAKDOWN_DETAIL} variables={{ view }}>
        {({ data: { teBreakdownDetail }, loading }) =>
          loading ? (
            <Loader />
          ) : (
            <Container>
              <div style={{ width: '25%' }}>
                <TitleButton
                  first
                  onClick={e => this.changeView('personas')}
                  selected={view === 'personas'}
                >
                  Personas
                </TitleButton>
                <TitleButton
                  onClick={e => this.changeView('divisions')}
                  selected={view === 'divisions'}
                >
                  Divisions
                </TitleButton>
              </div>
              {teBreakdownDetail.map((metric, idx) => (
                <RowContainer key={'metric' + idx} first={(idx = 1)}>
                  <Description>
                    <Title>{metric.title}</Title>
                    <p>{metric.description}</p>
                  </Description>
                  <ProgramShare>
                    <span style={{ alignSelf: 'center', marginBottom: '1em' }}>Program Share</span>
                    <CircleChartTe percent={metric.programShare * 100} />
                  </ProgramShare>
                  <BarChartContainer>
                    <BarChartTe
                      metricSpend={metric.data}
                      totalTripCost={metric.totalTripCost}
                      allMetrics={teBreakdownDetail}
                    />
                  </BarChartContainer>
                </RowContainer>
              ))}
            </Container>
          )
        }
      </Query>
    );
  }
}

export default withRouter(TeBreakdown);
