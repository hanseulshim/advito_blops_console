import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';

const Container = styled.div`
  flex: 1;
`;

const TitleContainer = styled.div`
  margin: 1.5em 0;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  text-transform: uppercase;
`;

const Opportunities = () => (
  <Container>
    <TitleContainer>
      <Title>top 3 savings opportunities</Title>
      <Button spaceLeft text="view all" />
    </TitleContainer>
  </Container>
);

export default Opportunities;
