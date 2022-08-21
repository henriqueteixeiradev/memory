---
title: Utilizando Svg no React Native
description: Utilizando svg no react native com react-native-svg e
  react-native-svg-transformer
date: 2022-06-07 10:58:51
thumbnail: https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png
category: ReactJS
background: "#50bbd7"
---
Para fazer uso de SVG em React Native você precisará de uma biblioteca que te ajude com isso.

Como está usando Expo, dê uma olhada [nessa documentação](https://docs.expo.io/versions/latest/sdk/svg/) do [`react-native-svg`](https://github.com/react-native-svg/react-native-svg) e também na biblioteca [`react-native-svg-transformer`](https://github.com/kristerkari/react-native-svg-transformer) que permitirá a importação de SVGs.

Leia as documentações citadas para ver as orientações de instalação em versões mais antigas do React Native e do Expo, além de como configurar para utilização no Jest.

# Instalação

Instale as duas bibliotecas, sendo a `react-native-svg-transformer` como dependência de desenvolvimento:

## Expo

```javascript
expo install react-native-svg
yarn add -D react-native-svg-transformer // ou npm install -D react-native-svg-transformer
```

## React Native CLI

```javascript
yarn add react-native-svg // ou npm install react-native-svg
yarn add -D react-native-svg-transformer // ou npm install -D react-native-svg-transformer
```

# Configuração

Para configurar o `react-native-svg-transformer`, unifique seu `metro.config.js` existente com o abaixo. Caso não possua um arquivo `metro.config.js`, crie-o.

```javascript
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
```

## Expo

Para quem usa Expo, além do passo anterior, é preciso adicionar o seguinte no `app.json`:

```javascript
{
  "expo": {
    "packagerOpts": {
      "config": "metro.config.js",
      "sourceExts": [
        "expo.ts",
        "expo.tsx",
        "expo.js",
        "expo.jsx",
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "wasm",
        "svg"
      ]
    }
  }
}
```

Caso esteja a utilizar TypeScript, adicione a seguinte tipagem no arquivo `declarations.d.ts`:

```javascript
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

# Utilização

Agora é possível utilizar um SVG como sendo um componente React:

```javascript
import MySvg from './my.svg';

export const Screen = () => {
  return <MySvg width="100" height="100" />
}
```

## Usando com o Jest

Ao testar um componente que renderiza um SVG, será necessário [configurar um mock para o Jest](https://github.com/kristerkari/react-native-svg-transformer#usage-with-jest). *Não tenho certeza se este passo também é necessário caso esteja usando o Expo.*

1. Crie um arquivo `__mocks__/svgMock.js`:

```javascript
module.exports = "SvgMock";
module.exports.ReactComponent = "SvgMock";
```

2. Mapeie-o nas suas configurações do Jest (`package.json` ou `jest.config.js`):

```javascript
moduleNameMapper: {
  "\\.svg": "<rootDir>/__mocks__/svgMock.js"
}
```