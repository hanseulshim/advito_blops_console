import numeral from 'numeral';

export const metricFormat = (value, type) => {
  if (type === 'money') {
    value = numeral(value).format('$0.[00]a');
  } else if (value > 10000) {
    value = numeral(value).format('0.[00]a');
  } else {
    value = numeral(value).format('0,0.[00]');
  }
  return value;
};
