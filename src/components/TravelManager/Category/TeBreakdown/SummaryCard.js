import React from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';

const CardContainer = styled.div`
  flex: 2;
  background: ${props => props.theme.alabaster};
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
`;

const ExpenseContainer = styled.div``;

const Image = styled.img`
  width: 25px;
  margin-right: 0.25em;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Delta = styled.span`
  font-size: 1.25em;
  color: ${props => (props.spentTooMuch ? props.theme.deepBlush : props.theme.tradewind)};
`;

const ArrowIcon = styled(Icon)`
  color: ${({ spentTooMuch, theme }) => (spentTooMuch ? theme.deepBlush : theme.tradewind)};
  margin-left: 5px;
`;

const SummaryCard = ({ expenses }) => {
  return (
    <CardContainer>
      {expenses.map((expense, idx) => (
        <ExpenseContainer key={'card' + idx}>
          <span>{expense.name}</span>
          <Row>
            <Image src={require(`assets/story/${expense.icon}`)} />
            <Delta spentTooMuch={expense.value > expense.benchmark}>
              ${Math.abs(expense.value - expense.benchmark)}
              <ArrowIcon
                className={
                  expense.value > expense.benchmark ? 'fas fa-arrow-up' : 'fas fa-arrow-down'
                }
                spentTooMuch={expense.value > expense.benchmark}
              />
            </Delta>
          </Row>
        </ExpenseContainer>
      ))}
    </CardContainer>
  );
};

export default SummaryCard;
