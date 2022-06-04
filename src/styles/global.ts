import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    margin: 0;
    box-sizing: border-box;
    color: #333333;
  }

  html, body, #root {
    height: 100%;
  }
`;
