import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    background: ${props => props.theme.alabaster};
    color: ${props => props.theme.doveGray};
    font-weight: 300;
    font-size: 16px;
    line-height: 17px;
    @media (max-width : 1500px){
      font-size: 15px;
    }
    @media (max-width : 1400px){
      font-size: 14px;
    }
    @media (max-width : 1336px){
      font-size: 13px;
    }
  }
  a {
    text-decoration: none;
  }
`;
