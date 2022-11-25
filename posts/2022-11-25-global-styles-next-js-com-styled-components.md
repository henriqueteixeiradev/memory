---
title: Global Styles Next JS com Styled-Components
description: Configurações iniciais globais.
date: 2022-11-25 11:48:10
thumbnail: https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png
category: NextJS
background: "#000000"
---
```tsx
import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth !important;
    font-family: 'Montserrat', sans-serif;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    li {
      list-style: none;
    }

    button {
      cursor: pointer;
    }

    body {
      background-color: ${theme.colors.dark_blue_100};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.text_base};
      width: 100%;
      min-height: 100vh;
    }

    ::-webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      overflow-y: auto;
    }

    ::-webkit-scrollbar-track {
      background: #333;
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.yellow};
      border-radius: 10px;
    }
  `}
`;

export default GlobalStyle;

```