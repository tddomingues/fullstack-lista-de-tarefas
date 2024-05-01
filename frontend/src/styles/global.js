import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.neutral100};
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.neutral950};
    font-family:  ${({ theme }) => theme.fontFamily.sans};

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }

  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem 'Roboto', Helvetica, Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  ul,
  li {
    list-style: none;
  }
`;
