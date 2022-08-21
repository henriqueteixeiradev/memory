---
title: Chakra UI no Next JS
description: Como instalar o Chakra UI e configurar no Next JS
date: 2022-03-04 08:33:40
thumbnail: https://res.cloudinary.com/practicaldev/image/fetch/s--0UnD_9S7--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n95iol17gaecwx2rwm2y.jpeg
category: NextJS
background: "#000000"
---
## Instalação

Primeiro Instalamos as dependências do chakra UI

```jsx
yarn add @chakra-ui/react @chakra-ui/core @emotion/react @emotion/styled framer-motion
```

Após instalado criamos uma pasta com 2 arquivos no `src`

Pasta => styles

Arquivos => `config.ts` e `theme.ts`

## Criando um Tema Padrão

No arquivo theme.ts efetuaremos a seguinte configuração.

```tsx
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
});

```

## Exportando Theme

No arquivo `_app.tsx`

```tsx
import { AppProps } from "next/app"; 
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}> //3
      <Component {...pageProps} />
    </ChakraProvider> //4
  );
}

export default MyApp;

//importação do Provider
import { ChakraProvider } from "@chakra-ui/react";

// Importação do tema criado
import { theme } from "../styles/theme";

// Envolvemos o privider em nossa aplicação
<ChakraProvider theme={theme}>
</ChakraProvider>

// Resetamos todo o padrão
// Obs: Por padrão o chakra já vem true
resetCSS={true}

//Setamos o tema importado
theme={theme}



```