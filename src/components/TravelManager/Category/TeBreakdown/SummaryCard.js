import React from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';

const CardContainer = styled.div`
  flex: 2;
  background: ${props => props.theme.alabaster};
  display: flex;
  padding: 2em;
`;

const ExpenseContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 25px;
`;

const Row = styled.div`
  display: flex;
`;

const Delta = styled.span`
  font-size: 2em;
  color: ${props => (props.spentTooMuch ? props.theme.deepBlush : props.theme.tradeWind)};
`;

const ArrowIcon = styled(Icon)`
  color: ${({ spentTooMuch, theme }) => (spentTooMuch ? theme.deepBlush : theme.tradeWind)};
`;

const SummaryCard = ({ expenses }) => {
  return (
    <CardContainer>
      {expenses.map((expense, idx) => (
        <ExpenseContainer key={'card' + idx}>
          <p>{expense.name}</p>
          <Row>
            <Image src={require(`assets/story/${expense.icon}`)} />
            <Delta spentTooMuch={expense.value > expense.benchmark}>
              {Math.abs(expense.value - expense.benchmark)}
              <ArrowIcon
                className={expense.value > expense.benchmark ? 'fas-arrow-up' : 'fas-arrow-down'}
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
