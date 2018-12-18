import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Item = styled.div`
  width: 25%;
`;

const data = [
  {
    title: 'Expenses approved above rate caps / per diems',
    value: '27% / $375K impact',
  },
  { title: 'ABR higher than ANR', value: '30% / $500K impact' },
  { title: 'NRT Utilization/Loss', value: '83% / $23K expired' },
  { title: 'ANR higher than ABR', value: '25% / $100K expired' },
  { title: 'New item', value: 'XX% / $XX expired' },
];

const SavingsOpportunities = () => {
  return (
    <Container>
      {data.map(item => (
        <Item>item</Item>
      ))}
    </Container>
  );
};

export default SavingsOpportunities;
