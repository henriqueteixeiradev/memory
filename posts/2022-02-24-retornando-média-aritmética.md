---
title: Retornando Média Aritmética
description: Escrevendo uma função que recebe um número qualquer de números
  inteiros como argumento e retorna a média aritmética entre eles
date: 2022-02-24 04:31:42
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png
category: Javascript
background: "#FEC748"
---
## Método com forEach

```javascript
//Função recebe como parâmetro um array
function PrimeiroMetodo(arrayDeNumeros) {
  //Início da soma
  let soma = 0;

  //forEach percorre por cada ítem do array
  arrayDeNumeros.forEach((numero) => {
    // soma (que é 0) = soma (ele mesmo 0) + numero (que é o valor de cada item do array)
    soma += numero;
  });

  // soma (que agora é o valor total) / arrayDeNumeros.length
  // que é a quantidade de ítens dentro do array
  const media = soma / arrayDeNumeros.length;

  // Retona a media pra a função
  return media;
}


// Retorno
6.875
2.6
9.8
50
//

```

## Método com reduce  desestruturação

```javascript
//Função recebe como parâmetro já desestruturando uma lista de números
function segundoMetodo(...numeros) {
  // reduce vai somar e ir acumulando todos os numeros até chegar no final da quandtidade de números recebido
  const soma = numeros.reduce((accum, num) => accum + num, 0);

  // soma (que agora é o valor total) / numeros.length
  // que é a quantidade de números recebido
  return soma / numeros.length;
}

console.log(segundoMetodo(10, 9, 6, 8, 9, 1, 5, 7));
console.log(segundoMetodo(2, 5, 7, 1, -2));
console.log(segundoMetodo(10, 10, 10, 10, 9));
console.log(segundoMetodo(25, 75));


// Retorno
6.875
2.6
9.8
50
//
```