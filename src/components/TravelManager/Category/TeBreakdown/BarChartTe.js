import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display:flex;
  flex-direction:column;
`;

const Bar = ({ personas}) => {
//   const acceptWidth = { width: `${(accept / solicited) * 100}%` };
//   const negotatingWidth = { width: `${(negotiating / solicited) * 100}%` };
//   const rejectedWidth = { width: `${(rejected / solicited) * 100}%` };
//   const targetCalc = target / solicited >= 1 ? 113 : (target / solicited) * 100;
//   const targetWidth = { left: `${targetCalc}%` };

  return (
    <Container>
        {personas.map((persona,idx) => (
            
        ))}
      
    </Container>
  );
};

export default Bar;
