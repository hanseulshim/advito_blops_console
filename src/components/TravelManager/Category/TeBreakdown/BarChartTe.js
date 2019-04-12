import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
`;

const Bar = ({ accept, negotiating, rejected, target, solicited }) => {
  const acceptWidth = { width: `${(accept / solicited) * 100}%` };
  const negotatingWidth = { width: `${(negotiating / solicited) * 100}%` };
  const rejectedWidth = { width: `${(rejected / solicited) * 100}%` };
  const targetCalc = target / solicited >= 1 ? 113 : (target / solicited) * 100;
  const targetWidth = { left: `${targetCalc}%` };

  return (
    <Container>
      {accept ? (
        <div style={{ ...styles.bar, ...styles.green, ...acceptWidth }}>
          <span style={styles.label}>{accept}</span>
        </div>
      ) : null}
      {negotiating ? (
        <div style={{ ...styles.bar, ...styles.orange, ...negotatingWidth }}>
          <span
            style={
              accept < 25 ? styles.topLabel : negotiating > target ? styles.label : styles.label
            }
          >
            {negotiating}
          </span>
        </div>
      ) : null}
      {rejected ? (
        <div style={{ ...styles.bar, ...styles.red, ...rejectedWidth }}>
          <span style={styles.label}>{rejected}</span>
        </div>
      ) : null}
      {target ? <span style={{ ...styles.target, ...targetWidth }}>{target} Targeted</span> : null}
    </Container>
  );
};

export default Bar;
