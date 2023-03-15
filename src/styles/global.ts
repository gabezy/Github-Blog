import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, textarea, button, input {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6
  }
  body {
    width:100%;
    background: ${({ theme }) => theme["base-background"]};

  }
  /* img {
    display: block;
    max-width: 100%;

  } */
  ul {
    list-style: none;
    padding: 0;
    margin:0
  }
  a {
    text-decoration: none;
    color: inherit
  }
  button {
    cursor: pointer;
  }
`;
