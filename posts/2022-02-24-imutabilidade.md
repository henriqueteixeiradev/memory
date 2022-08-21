---
title: Imutabilidade
description: Retornando array invertido sem modificar o original
date: 2022-02-24 11:45:08
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png
category: Javascript
background: "#FEC748"
---
## Exemplo utilizando forEach

```javascript
function reverse1(...arrayDeItens) {
  let array = [];

  arrayDeItens.forEach((rever) => {
    array = rever.reverse();
  });

  return array;
}

console.log(reverse1([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(reverse1(["Oh", "Hi", "Mark"]));
console.log(reverse1([false, true, true, true]));
console.log(reverse1(["It's", "not", true, 0]));

//Retorna
[
  7, 5, 1, 9,
  8, 6, 9, 0
]
[ 'Mark', 'Hi', 'Oh' ]
[ true, true, true, false ]
[ 0, true, 'not', "It's" ]
```

## Exemplo utilizando for

```javascript
function reverse2(arr) {
  let array = [];

  for (let i = 0; i < arr.length; i++) [(array[i] = arr[arr.length - 1 - i])];

  return array;
}


console.log(reverse2([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(reverse2(["Oh", "Hi", "Mark"]));
console.log(reverse2([false, true, true, true]));
console.log(reverse2(["It's", "not", true, 0]));

//Retorna
[
  7, 5, 1, 9,
  8, 6, 9, 0
]
[ 'Mark', 'Hi', 'Oh' ]
[ true, true, true, false ]
[ 0, true, 'not', "It's" ]


```