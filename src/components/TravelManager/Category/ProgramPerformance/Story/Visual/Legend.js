import React from 'react';
import styled from 'styled-components';
import { Value } from 'components/common/Typography';
import { metricFormat } from 'components/common/helper';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5em;
`;

const Title = styled.span`
  color: #000;
  font-weight: 400;
  margin-left: 0.5em;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display: flex;
  flex: ${props => (props.hotel ? '0 33%' : '0 50%')};
  margin-bottom: 0.5em;
`;

const ColorBadge = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 3px;
  background-color: ${props => props.fill};
  margin-right: 0.25em;
`;

const Key = styled.div`
  display: flex;
  flex-direction: column;
`;

const Delta = styled.span`
  margin-left: 5px;
`;

const Legend = ({ subCategories, icon, title, type, hotel, dataView }) => {
  return (
    <Container>
      <Icon>
        <img src={require(`assets/story/${icon}`)} alt="icon" />
        <Title>{title}</Title>
      </Icon>
      <TagContainer>
        {subCategories.map((subCategory, index) => (
          <Tag hotel={hotel} key={index}>
            <ColorBadge fill={subCategory.color} />
            <Key>
              <div>{subCategory.name}</div>
              <Value>
                {metricFormat(subCategory.value, type)}
                {subCategory.delta && (
                  <Delta>
                    (
                    {dataView === 'value'
                      ? metricFormat(subCategory.delta, type)
                      : metricFormat(subCategory.percent, 'percent')}
                    )
                  </Delta>
                )}
              </Value>
            </Key>
          </Tag>
        ))}
      </TagContainer>
    </Container>
  );
};

export default Legend;
