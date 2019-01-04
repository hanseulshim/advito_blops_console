import React, { Component } from 'react';
import styled from 'styled-components';
import { Title } from 'components/common/Typography';
import Donut from './Donut';

const Container = styled.div`
  width: 100%;
  height: 900px;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TitleSpaced = styled(Title)`
  font-size: 1.1em;
  font-weight: 500;
  margin-bottom: 0.5em;
`;

class DonutContainer extends Component {
  state = {
    title: this.props.data.title,
    summary: this.props.data.summary,
  };
  updateInfo = (title, summary) => {
    this.setState({ title, summary });
  };
  render() {
    const { title, summary } = this.state;
    const { data, view } = this.props;
    return (
      <Container>
        <TitleSpaced>{title}</TitleSpaced>
        <div>{summary}</div>
        <Donut
          data={data.donutData}
          colors={data.colors}
          label={data.label}
          context={data.context}
          total={data.total}
          view={view}
          updateInfo={this.updateInfo}
        />
      </Container>
    );
  }
}

export default DonutContainer;
