---
title: Separando Array por Chave (categoria, nome, valor e etc...)
description: Método usando for javascript
date: 2022-02-16 11:56:45
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png
category: Javascript
background: "#FEC748"
---
Array

```jsx
const produtos = [
  {
    id: 'ckzdvc6zs1ns50b243drb61ik',
    imagem01: { url: 'https://media.graphcms.com/2VLP0RJ8Sqi8c0sBtt3g' },
    imagem02: { url: 'https://media.graphcms.com/S2C6tQuTdiEjS0RIj0al' },
    imagem03: null,
    imagem04: null,
    nome: 'Funko Pop Harry Potter',
    descricao: 'Colorado, Padrão, 9.5cm',
    preco: 52.8,
    codigo: '26',
    categoria: 'Funko',
    informacoes: {
      html: '<h2>Informações</h2><p></p><table><tbody><tr><th><p>Idioma:</p></th><td><p>‎Inglês</p></td></tr><tr><th><p>Número do modelo</p></th><td
><p>‎10865</p></td></tr><tr><th><p>Número de peças</p></th><td><p>‎1</p></td></tr><tr><th><p>Montagem necessária</p></th><td><p>‎Não</p></td></tr><t
r><th><p>Funciona a bateria ou pilha?</p></th><td><p>‎Não</p></td></tr><tr><th><p>Baterias inclusas?</p></th><td><p>‎Não</p></td></tr><tr><th><p>Con
trole remoto incluso?</p></th><td><p>‎Não</p></td></tr><tr><th><p>Fabricante</p></th><td><p>‎Funko</p></td></tr><tr><th><p>Número do modelo</p></th>
<td><p>‎10865</p></td></tr><tr><th><p>Dimensões do produto</p></th><td><p>‎4 x 4 x 10 cm; 4.54 g</p></td></tr><tr><th><p>ASIN</p></th><td><p>‎B01LWW
FXSE</p></td></tr><tr><th><p>Idade recomendada</p></th><td><p>‎10 - 10 anos</p></td></tr><tr><th><p>Número de unidades</p></th><td><p>‎1</p></td></t
r><tr><th><p>EAN</p></th><td><p>‎0889698108652</p></td></tr><tr><th><p>Marca</p></th><td><p>‎Funko</p></td></tr></tbody></table><p></p>'
    },
    slug: 'funko-pop-harry-potter'
  },
  {
    id: 'ckzdve24g1ntj0b24blz5nxkv',
    imagem01: { url: 'https://media.graphcms.com/xXqcm3eNTFmISEaVTFyo' },
    imagem02: { url: 'https://media.graphcms.com/WR7RIcr6Q1isqoOe3bh6' },
    imagem03: { url: 'https://media.graphcms.com/MIPdnctWSHaZZlAeo5e8' },
    imagem04: null,
    nome: 'Funko Pop Tv El Chavo Nc Games Padrão',
    descricao: 'Nc Games Padrão',
    preco: 31.59,
    codigo: '27',
    categoria: 'Funko',
    informacoes: {
      html: '<h2>Informações</h2><p></p><table><tbody><tr><th><p>Idioma:</p></th><td><p>‎Inglês</p></td></tr><tr><th><p>Número do modelo</p></th><td
><p>‎10865</p></td></tr><tr><th><p>Número de peças</p></th><td><p>‎1</p></td></tr><tr><th><p>Montagem necessária</p></th><td><p>‎Não</p></td></tr><t
r><th><p>Funciona a bateria ou pilha?</p></th><td><p>‎Não</p></td></tr><tr><th><p>Baterias inclusas?</p></th><td><p>‎Não</p></td></tr><tr><th><p>Con
trole remoto incluso?</p></th><td><p>‎Não</p></td></tr><tr><th><p>Fabricante</p></th><td><p>‎Funko</p></td></tr><tr><th><p>Número do modelo</p></th>
<td><p>‎10865</p></td></tr><tr><th><p>Dimensões do produto</p></th><td><p>‎4 x 4 x 10 cm; 4.54 g</p></td></tr><tr><th><p>ASIN</p></th><td><p>‎B01LWW
FXSE</p></td></tr><tr><th><p>Idade recomendada</p></th><td><p>‎10 - 10 anos</p></td></tr><tr><th><p>Número de unidades</p></th><td><p>‎1</p></td></t
r><tr><th><p>EAN</p></th><td><p>‎0889698108652</p></td></tr><tr><th><p>Marca</p></th><td><p>‎Funko</p></td></tr></tbody></table><p></p>'
    },
    slug: 'funko-pop-tv-el-chavo-nc-games-padrao'
  },
  {
    id: 'ckzdvfy0w5b160c76bgee6vhu',
    imagem01: { url: 'https://media.graphcms.com/Xn23J6YlRouoZN2vMSAd' },
    imagem02: { url: 'https://media.graphcms.com/ZfLYj5Y3T8W9vhGYUSo3' },
    imagem03: { url: 'https://media.graphcms.com/AXsWPObrRXeGmYOZGJUg' },
    imagem04: null,
    nome: 'Funko Pop TV El Chapulin',
    descricao: 'Colorado, Padrão, 9.5cm',
    preco: 56.6,
    codigo: '‎10865',
    categoria: 'Funko',
    informacoes: {
      html: '<h2>Informações</h2><p></p><table><tbody><tr><th><p>Idioma:</p></th><td><p>‎Inglês</p></td></tr><tr><th><p>Número do modelo</p></th><td
><p>‎10865</p></td></tr><tr><th><p>Número de peças</p></th><td><p>‎1</p></td></tr><tr><th><p>Montagem necessária</p></th><td><p>‎Não</p></td></tr><t
r><th><p>Funciona a bateria ou pilha?</p></th><td><p>‎Não</p></td></tr><tr><th><p>Baterias inclusas?</p></th><td><p>‎Não</p></td></tr><tr><th><p>Con
trole remoto incluso?</p></th><td><p>‎Não</p></td></tr><tr><th><p>Fabricante</p></th><td><p>‎Funko</p></td></tr><tr><th><p>Número do modelo</p></th>
<td><p>‎10865</p></td></tr><tr><th><p>Dimensões do produto</p></th><td><p>‎4 x 4 x 10 cm; 4.54 g</p></td></tr><tr><th><p>ASIN</p></th><td><p>‎B01LWW
FXSE</p></td></tr><tr><th><p>Idade recomendada</p></th><td><p>‎10 - 10 anos</p></td></tr><tr><th><p>Número de unidades</p></th><td><p>‎1</p></td></t
r><tr><th><p>EAN</p></th><td><p>‎0889698108652</p></td></tr><tr><th><p>Marca</p></th><td><p>‎Funko</p></td></tr></tbody></table><p></p>'
    },
    slug: 'funko-pop-tv-el-chapulin'
  },
  {
    id: 'ckzdxcn0o5cg40c767k1jc19o',
    imagem01: { url: 'https://media.graphcms.com/2VLP0RJ8Sqi8c0sBtt3g' },
    imagem02: { url: 'https://media.graphcms.com/S2C6tQuTdiEjS0RIj0al' },
    imagem03: null,
    imagem04: null,
    nome: 'Boneco Funko Pop Harry Potter',
    descricao: 'Colorado, Padrão, 9.5cm',
    preco: 52.8,
    codigo: '26',
    categoria: 'Bonecos',
    informacoes: {
      html: '<h2>Informações</h2><p></p><table><tbody><tr><th><p>Idioma:</p></th><td><p>‎Inglês</p></td></tr><tr><th><p>Número do modelo</p></th><td
><p>‎10865</p></td></tr><tr><th><p>Número de peças</p></th><td><p>‎1</p></td></tr><tr><th><p>Montagem necessária</p></th><td><p>‎Não</p></td></tr><t
r><th><p>Funciona a bateria ou pilha?</p></th><td><p>‎Não</p></td></tr><tr><th><p>Baterias inclusas?</p></th><td><p>‎Não</p></td></tr><tr><th><p>Con
trole remoto incluso?</p></th><td><p>‎Não</p></td></tr><tr><th><p>Fabricante</p></th><td><p>‎Funko</p></td></tr><tr><th><p>Número do modelo</p></th>
<td><p>‎10865</p></td></tr><tr><th><p>Dimensões do produto</p></th><td><p>‎4 x 4 x 10 cm; 4.54 g</p></td></tr><tr><th><p>ASIN</p></th><td><p>‎B01LWW
FXSE</p></td></tr><tr><th><p>Idade recomendada</p></th><td><p>‎10 - 10 anos</p></td></tr><tr><th><p>Número de unidades</p></th><td><p>‎1</p></td></t
r><tr><th><p>EAN</p></th><td><p>‎0889698108652</p></td></tr><tr><th><p>Marca</p></th><td><p>‎Funko</p></td></tr></tbody></table><p></p>'
    },
    slug: 'boneco-funko-pop-harry-potter'
  },
  {
    id: 'ckze81fn45nkj0c76w2vqmle2',
    imagem01: { url: 'https://media.graphcms.com/ZfLYj5Y3T8W9vhGYUSo3' },
    imagem02: null,
    imagem03: null,
    imagem04: null,
    nome: 'Boneco novo',
    descricao: 'esse vai ser um bonedo novo',
    preco: 48.4,
    codigo: '2445',
    categoria: 'Boneco de Pelúcio',
    informacoes: { html: '<p>asdasdasd</p>' },
    slug: 'boneco-novo'
  },
  {
    id: 'ckzeymzv4308o0b24u0owzh2p',
    imagem01: { url: 'https://media.graphcms.com/xXqcm3eNTFmISEaVTFyo' },
    imagem02: null,
    imagem03: null,
    imagem04: null,
    nome: 'Chaves doidão',
    descricao: 'esse é o chaves',
    preco: 80,
    codigo: '8555',
    categoria: 'Produto para sua alegria',
    informacoes: { html: '<p>asdasdasdasd</p>' },
    slug: 'chaves-doidao'
  }
]
```

Filtro

```jsx
  const NewProducts = {}

  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].categoria) {
      if (!NewProducts[produtos[i].categoria]) {
        NewProducts[produtos[i].categoria] = []
      }
      NewProducts[produtos[i].categoria].push(produtos[i])
    }
  }

  console.log(NewProducts)
```



Retorno

```json
{
  Funko: [
    {
      id: 'ckzdvc6zs1ns50b243drb61ik',
      imagem01: [Object],
      imagem02: [Object],
      imagem03: null,
      imagem04: null,
      nome: 'Funko Pop Harry Potter',
      descricao: 'Colorado, Padrão, 9.5cm',
      preco: 52.8,
      codigo: '26',
      categoria: 'Funko',
      informacoes: [Object],
      slug: 'funko-pop-harry-potter'
    },
    {
      id: 'ckzdve24g1ntj0b24blz5nxkv',
      imagem01: [Object],
      imagem02: [Object],
      imagem03: [Object],
      imagem04: null,
      nome: 'Funko Pop Tv El Chavo Nc Games Padrão',
      descricao: 'Nc Games Padrão',
      preco: 31.59,
      codigo: '27',
      categoria: 'Funko',
      informacoes: [Object],
      slug: 'funko-pop-tv-el-chavo-nc-games-padrao'
    },
    {
      id: 'ckzdvfy0w5b160c76bgee6vhu',
      imagem01: [Object],
      imagem02: [Object],
      imagem03: [Object],
      imagem04: null,
      nome: 'Funko Pop TV El Chapulin',
      descricao: 'Colorado, Padrão, 9.5cm',
      preco: 56.6,
      codigo: '‎10865',
      categoria: 'Funko',
      informacoes: [Object],
      slug: 'funko-pop-tv-el-chapulin'
    }
  ],
  Bonecos: [
    {
      id: 'ckzdxcn0o5cg40c767k1jc19o',
      imagem01: [Object],
      imagem02: [Object],
      imagem03: null,
      imagem04: null,
      nome: 'Boneco Funko Pop Harry Potter',
      descricao: 'Colorado, Padrão, 9.5cm',
      preco: 52.8,
      codigo: '26',
      categoria: 'Bonecos',
      informacoes: [Object],
      slug: 'boneco-funko-pop-harry-potter'
    }
  ],
  'Boneco de Pelúcio': [
    {
      id: 'ckze81fn45nkj0c76w2vqmle2',
      imagem01: [Object],
      imagem02: null,
      imagem03: null,
      imagem04: null,
      nome: 'Boneco novo',
      descricao: 'esse vai ser um bonedo novo',
      preco: 48.4,
      codigo: '2445',
      categoria: 'Boneco de Pelúcio',
      informacoes: [Object],
      slug: 'boneco-novo'
    }
  ],
  'Produto para sua alegria': [
    {
      id: 'ckzeymzv4308o0b24u0owzh2p',
      imagem01: [Object],
      imagem02: null,
      imagem03: null,
      imagem04: null,
      nome: 'Chaves doidão',
      descricao: 'esse é o chaves',
      preco: 80,
      codigo: '8555',
      categoria: 'Produto para sua alegria',
      informacoes: [Object],
      slug: 'chaves-doidao'
    }
  ]
}
```