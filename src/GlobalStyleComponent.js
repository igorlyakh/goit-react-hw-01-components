import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
