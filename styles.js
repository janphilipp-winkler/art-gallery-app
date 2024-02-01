import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --btn-background: rgba(244, 244, 244, 0.4);
  }

  body {
    margin: 0;
    font-family: system-ui;
    
  }
`;
