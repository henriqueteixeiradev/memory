---
title: Função de Recursão
description: Recursão é quando uma função chama ela mesma até chegar em um caso
  base simples que desencadeia a resolução do problema.
date: 2022-02-24 11:06:48
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png
category: Javascript
background: "#FEC748"
---
## Resolução

```javascript
function chunk(num) {
  //Caso o num for 0 retorna o nome nenhum nenhum chunk
  if (num === 0) {
    return "nenhum chunk";

    //Caso num seja 1 retorna 1 chunk
  } else if (num === 1) {
    return "chunk";

    //Caso num seja maior que 1 retorna a quantidade chamando a função
    //novamente e colocando cada chuck um ao lado do outro
  } else {
    return "chunk-" + chunk(num - 1);
  }
}

console.log(chunk(4));
console.log(chunk(1));
console.log(chunk(8));
console.log(chunk(2));
console.log(chunk(0));


// Retirno
//chunk-chunk-chunk-chunk
//chunk
//chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk
//chunk-chunk
//nenhum chunk
```



## Versão Reduzida

```javascript
function chunk(num) {
  if (num === 0) return ""
  return num === 1 ? "chunk" : "chunk-" + chunk(num - 1) 
}
```