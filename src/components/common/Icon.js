import React from 'react';
import styled from 'styled-components';

const Icon = styled.i``;

export default props => {
  const { className, ...style } = props;
  return <Icon className={className} {...style} />;
};
