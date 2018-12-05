import React from 'react';
import styled from 'styled-components';
import chart from 'assets/chart.png';

const Container = styled.div`
  flex: 1;

  img {
    width: 100%;
  }
`;

const Dashboard = () => (
  <Container>
    <div>program performance</div>
    <img src={chart} alt="chart" />
    <div>opportunities</div>
  </Container>
);

export default Dashboard;
