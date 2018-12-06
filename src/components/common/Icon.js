import React from 'react';
import styled from 'styled-components';

const IconStyled = styled.i``;

const Icon = props => {
  const { className, ...style } = props;
  return <IconStyled className={className} {...style} />;
};

export default Icon;
