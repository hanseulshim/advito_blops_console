import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Icon = styled.div`
  color: ${props => props.theme.tradewind};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Tag = styled.div`
  display: flex;
  height: 50px;
  width: 175px;
  margin-bottom: 5px;
`;

const ColorBadge = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 3px;
  background-color: ${props => props.fill};
  margin-right: 5px;
  position: relative;
  top: 5px;
`;

const Key = styled.div`
  text-align: left;
  vertical-align: top;
`;

const Id = styled.span`
  color: #666666;
  font-size: 1em;
  line-height: 17px;
  font-weight: ${props => (props.bold ? 'bold' : 'lighter')};
  margin-bottom: 5px;
`;

const Value = styled.span`
  color: #000000;
  font-size: 13px;
  line-height: 17px;
  font-weight: lighter;
`;

const Legend = props => {
  const { categories, icon, title } = props.data;
  return (
    <Container>
      <Icon>
        <img src={require(`assets/story/${icon}.png`)} alt="icon" />
        <Id bold>{title}</Id>
      </Icon>
      <TagContainer>
        {categories.map((airline, index) => (
          <Tag key={index}>
            <ColorBadge fill={airline.color} />
            <Key>
              <Id>{airline.name}</Id>
              <br />
              <Value>{airline.currency ? airline.currency : airline.value}</Value>
            </Key>
          </Tag>
        ))}
      </TagContainer>
    </Container>
  );
};

export default Legend;
