import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --btn-background: rgba(128, 128, 128, 0.7);
  }

  body {
    margin: 0;
    font-family: system-ui;
    
  }
`;
