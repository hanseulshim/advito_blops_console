import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    background: ${props => props.theme.alabaster};
    color: ${props => props.theme.silver};
    font-weight: 300;
    font-size: 16px;
    line-height: 1em;
    @media (max-width : 1500px){
      font-size: 15px;
    }
    @media (max-width : 1400px){
      font-size: 14px;
    }
    @media (max-width : 1336px){
      font-size: 13px;
    }
    @media (max-width : 1200px){
      font-size: 12px;
    }
    @media (max-width : 1024px){
      font-size: 11px;
    }
  }
  a {
    text-decoration: none;
  }
`;
