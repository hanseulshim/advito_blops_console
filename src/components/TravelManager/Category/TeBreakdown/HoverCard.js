import React from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';

const RowContainer = styled.div`
  flex: 2;
  background: ${props => props.theme.alabaster};
  padding: 1em;
  display: flex;
  align-items: center;
  opacity: 1;
  animation: fade 1s linear;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.img`
  width: 25px;
  margin-right: 0.25em;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

const Value = styled.span`
  font-size: 2em;
`;

const Delta = styled.div`
  align-self: center;
  padding: 1em 2em;
  background-color: ${props =>
    props.spentTooMuch ? props.theme.deepBlush : props.theme.tradewind};
  border-radius: 0.5em;
  color: ${props => (props.spentTooMuch ? props.theme.black : props.theme.white)};
`;

const HoverCard = ({ expense }) => {
  return (
    <RowContainer>
      <Column>
        <Row>
          <Image src={require(`assets/story/${expense.icon}`)} />
          <span>{expense.name.toUpperCase()}</span>
        </Row>
        <Value>$ {expense.value}</Value>
      </Column>
      <Delta spentTooMuch={expense.value > expense.benchmark}>
        ${Math.abs(expense.value - expense.benchmark)}
        <Icon
          className={expense.value > expense.benchmark ? 'fas fa-arrow-up' : 'fas fa-arrow-down'}
        />
      </Delta>
    </RowContainer>
  );
};

export default HoverCard;
