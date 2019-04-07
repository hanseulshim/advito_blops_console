import React, { Component } from 'react';
import styled from 'styled-components';
import { Title } from 'components/common/Typography';

const Container = styled.div`
  display: flex;

  align-items: center;
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4em;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  margin-right: 0.5em;
`;

const Value = styled.div`
  font-size: 2em;
  line-height: 1.25em;
`;

const Diff = styled.div`
  color: ${props => props.theme.tradewind};
`;

const TopRow = ({ spendCategories }) => {
  return (
    <Container>
      {spendCategories.map((item, idx) => (
        <CategoryContainer key={'item' + idx}>
          <Image src={require(`assets/story/${item.icon}`)} alt="product icon" />
          <Column>
            <Title>{item.title}</Title>
            <Value>{item.amount}</Value>
            <Diff>({item.diff}%)</Diff>
          </Column>
        </CategoryContainer>
      ))}
    </Container>
  );
};

export default TopRow;
