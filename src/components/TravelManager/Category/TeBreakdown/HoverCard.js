import React from 'react';
import styled from 'styled-components';

const RowContainer = styled.div`
  display: flex;
  flex: 1;
  background: ${props => props.theme.alabaster};
  padding: 2em;
`;

const Image = styled.img`
  width: 25px;
  margin-right: 0.25em;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const HoverCard = ({ expense }) => {
  return (
    <RowContainer>
      <Row>
        <Image src={require(`assets/story/${expense.icon}`)} />
        <span>{expense.name}</span>
      </Row>
    </RowContainer>
  );
};

export default HoverCard;
