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

const IconColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 2;
`;

const Image = styled.img`
  width: 35px;
  margin-right: 0.25em;
`;

const Value = styled.span`
  font-size: 1.5em;
`;

const Delta = styled.div`
  align-self: center;
  font-size: 1.5em;
  padding: 0.75em;
  background-color: ${props =>
    props.spentTooMuch ? props.theme.deepBlush : props.theme.tradewind};
  border-radius: 0.5em;
  color: ${props => (props.spentTooMuch ? props.theme.black : props.theme.white)};
  display: flex;
  align-items: center;
`;

const HoverCard = ({ expense }) => {
  return (
    <RowContainer>
      <IconColumn>
        <span>{expense.name.toUpperCase()}</span>
        <Image src={require(`assets/story/${expense.icon}`)} />
      </IconColumn>
      <Column>
        <Value>$ {expense.value}</Value>
      </Column>
      <Column>
        <Delta spentTooMuch={expense.value > expense.benchmark}>
          ${Math.abs(expense.value - expense.benchmark)}
          <Icon
            className={expense.value > expense.benchmark ? 'fas fa-arrow-up' : 'fas fa-arrow-down'}
            style={{ fontSize: '.75em', marginLeft: '.25em' }}
          />
        </Delta>
      </Column>
    </RowContainer>
  );
};

export default HoverCard;
